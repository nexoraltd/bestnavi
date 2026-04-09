import { NextRequest } from "next/server";
import { getPostBySlug, isHighCvr, CATEGORY_MAP } from "@/lib/wordpress";
import { getBannersForArticle } from "@/lib/banners";

export const dynamic = "force-dynamic";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  try {
    const post = await getPostBySlug(slug);
    if (!post) {
      return Response.json({ error: "post not found", slug });
    }

    const categoryIds = post.categories || [];
    const postIsHighCvr = isHighCvr(post.id);
    const relatedCategory = !postIsHighCvr
      ? Object.entries(CATEGORY_MAP).find(([, meta]) =>
          categoryIds.includes(meta.wpId)
        )
      : null;

    let bannersError: string | null = null;
    let bannersCount = 0;
    try {
      const banners = getBannersForArticle(post.id, categoryIds);
      bannersCount = banners.length;
    } catch (e) {
      bannersError = String(e);
    }

    return Response.json({
      slug,
      postId: post.id,
      postSlug: post.slug,
      categoryIds,
      postIsHighCvr,
      relatedCategory: relatedCategory ? relatedCategory[0] : null,
      bannersCount,
      bannersError,
    });
  } catch (e) {
    return Response.json({ error: String(e), slug }, { status: 500 });
  }
}
