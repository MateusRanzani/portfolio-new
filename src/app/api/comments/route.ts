import { prisma } from "@/lib/prisma";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function GET() {
  const comments = await prisma.comment.findMany({
    where: { approved: true },
    orderBy: { createdAt: "desc" },
  });
  return Response.json({ success: true, data: comments });
}

export async function POST(req: Request) {
  try {
    const body: unknown = await req.json();

    if (typeof body !== "object" || body === null || Array.isArray(body)) {
      return Response.json(
        { success: false, message: "Invalid request body." },
        { status: 400 }
      );
    }

    const { name, email, message } = body as Record<string, unknown>;

    if (!name || typeof name !== "string" || name.trim() === "") {
      return Response.json(
        { success: false, message: "Field 'name' is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
      return Response.json(
        { success: false, message: "Field 'email' must be a valid email." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim() === "") {
      return Response.json(
        { success: false, message: "Field 'message' is required." },
        { status: 400 }
      );
    }

    const comment = await prisma.comment.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        message: message.trim(),
      },
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
  try {
    const { adminKey, id, approved } = await req.json();

    if (adminKey !== process.env.ADMIN_KEY) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const updated = await prisma.comment.update({
      where: { id },
      data: { approved },
    });

    return Response.json(updated);
  } catch (error) {
    console.error("[PATCH /api/comments]", error);
    return Response.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}
