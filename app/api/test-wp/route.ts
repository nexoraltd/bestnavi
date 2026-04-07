import { NextResponse } from "next/server";

export async function GET() {
  const slug = "himawari-click365-review-2026-2";
  const url = `https://navi.next-aura.com/wp-json/wp/v2/posts?slug=${slug}&_fields=id,slug,title`;

  try {
    const res = await fetch(url, { cache: "no-store" });
    const status = res.status;
    const text = await res.text();

    return NextResponse.json({
      wp_api_url: url,
      status,
      body_length: text.length,
      body_preview: text.slice(0, 500),
      ok: res.ok,
    });
  } catch (error: unknown) {
    return NextResponse.json({
      error: String(error),
      wp_api_url: url,
    });
  }
}
