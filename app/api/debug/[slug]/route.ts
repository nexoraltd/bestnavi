import { NextRequest } from "next/server";
import { getPostBySlug } from "@/lib/wordpress";

export const dynamic = "force-dynamic";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  // Use the exact same function as the page
  const post = await getPostBySlug(slug);

  return Response.json({
    receivedSlug: slug,
    postFound: post !== null,
    postId: post?.id ?? null,
    postSlug: post?.slug ?? null,
    postTitle: post?.title?.rendered ?? null,
  });
}
