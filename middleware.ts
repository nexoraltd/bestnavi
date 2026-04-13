import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// WordPress の旧URLパターンを /post/[slug] にリダイレクト
// Cocoonのデフォルトパーマリンク: /%postname%/
export function middleware(request: NextRequest) {
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
    // WP REST APIでslugを取得する代わりに、/post/ にリダイレクト
    // 実際にはWordPressが /?p=123 を /%postname%/ にリダイレクトしているので
    // このケースは稀
    return NextResponse.next();
  }

  // /%postname%/ 形式のURLを /post/%postname% にリダイレクト
  // 例: /nordvpn-review/ → /post/nordvpn-review
  const slug = pathname.replace(/^\//, "").replace(/\/$/, "");

  // 静的ファイルやNext.js内部パスはスキップ
  if (
    slug.includes(".") || // ファイル拡張子あり
    slug.includes("wp-") || // WordPress管理パス
    slug === "sitemap.xml" ||
    slug === "robots.txt" ||
    slug === "feed" ||
    slug.startsWith("page/")
  ) {
    return NextResponse.next();
  }

  // slugがあればリダイレクト
  if (slug && !slug.includes("/")) {
    const url = request.nextUrl.clone();
    url.pathname = `/post/${slug}`;
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // _next/static, _next/image, favicon.ico を除外
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
