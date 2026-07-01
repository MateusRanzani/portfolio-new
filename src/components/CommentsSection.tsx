import { prisma } from "@/lib/prisma";
import { CommentsCarousel } from "./CommentsCarousel";

export async function CommentsSection() {
  const comments = await prisma.comment.findMany({
    where: { approved: true },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      name: true,
      message: true,
      createdAt: true,
    },
  });

  if (comments.length === 0) return null;

  return <CommentsCarousel comments={comments} />;
}
