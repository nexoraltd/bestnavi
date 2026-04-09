import { NextRequest } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  // Read posts.json directly on server to see what slugs exist
  const jsonPath = path.join(process.cwd(), "data", "posts.json");
  const posts = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
  const post523 = posts.find((p: { id: number }) => p.id === 523);
  const found = posts.find(
    (p: { slug: string }) => p.slug === slug || decodeURIComponent(p.slug) === slug
  );

  return Response.json({
    receivedSlug: slug,
    post523Slug: post523?.slug,
    match: found ? { id: found.id, slug: found.slug } : null,
    exactMatch: posts.some((p: { slug: string }) => p.slug === slug),
    decodedMatch: posts.some((p: { slug: string }) => decodeURIComponent(p.slug) === slug),
  });
}
