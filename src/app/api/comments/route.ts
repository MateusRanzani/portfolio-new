import { connectDB } from "@/lib/mongoose";
import { Comments } from "@/models/Comments";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function GET() {
  await connectDB();

  const comments = await Comments.find({ approved: true });
  return Response.json({ success: true, data: comments });
}

export async function POST(req: Request) {
  try {
    await connectDB();

    const body: unknown = await req.json();

    if (
      typeof body !== "object" ||
      body === null ||
      Array.isArray(body)
    ) {
      return Response.json(
        { success: false, message: "Invalid request body." },
        { status: 400 }
      );
    }

    const { name, email, message } = body as Record<string, unknown>;

    if (!name || typeof name !== "string" || name.trim() === "") {
      return Response.json(
        { success: false, message: "Field 'name' is required and must be a non-empty string." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
      return Response.json(
        { success: false, message: "Field 'email' is required and must be a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim() === "") {
      return Response.json(
        { success: false, message: "Field 'message' is required and must be a non-empty string." },
        { status: 400 }
      );
    }

    const comment = await Comments.create({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });

    return Response.json({ success: true, data: comment }, { status: 201 });
  } catch (error) {
    console.error("[POST /api/comments]", error);
    return Response.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request) {
  await connectDB();

  const { adminKey, id, approved } = await req.json();

  if (adminKey !== process.env.ADMIN_KEY) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const updated = await Comments.findByIdAndUpdate(
    id,
    { approved },
    { new: true }
  );

  return Response.json(updated);
}
