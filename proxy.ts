import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// WordPress の旧URLパターンを /post/[slug] にリダイレクト
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 既存のNext.jsルートはスキップ
  if (
    pathname.startsWith("/post/") ||
    pathname.startsWith("/ranking/") ||
    pathname.startsWith("/article/") ||
    pathname.startsWith("/api/") ||
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/lp/") ||
    pathname === "/" ||
    pathname === "/about" ||
    pathname === "/privacy" ||
    pathname === "/terms" ||
    pathname === "/contact" ||
    pathname === "/search"
  ) {
    return NextResponse.next();
  }

  // /?p=123 形式のWordPress URLを処理
  const pParam = request.nextUrl.searchParams.get("p");
  if (pParam) {
    return NextResponse.next();
  }

  // /%postname%/ 形式のURLを /post/%postname% にリダイレクト
  const slug = pathname.replace(/^\//, "").replace(/\/$/, "");

  if (
    slug.includes(".") ||
    slug.includes("wp-") ||
    slug === "sitemap.xml" ||
    slug === "robots.txt" ||
    slug === "feed" ||
    slug.startsWith("page/")
  ) {
    return NextResponse.next();
  }

  if (slug && !slug.includes("/")) {
    const url = request.nextUrl.clone();
    url.pathname = `/post/${slug}`;
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
