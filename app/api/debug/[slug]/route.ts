import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  return Response.json({
    receivedSlug: slug,
    decoded: decodeURIComponent(slug),
    url: request.url,
  });
}
