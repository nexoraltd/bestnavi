import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // WordPress旧URLから /post/[slug] への301リダイレクト
  async redirects() {
    return [
      {
        source: "/category/:slug",
        destination: "/ranking/:slug",
        permanent: true,
      },
      {
        source: "/article/:slug",
        destination: "/post/:slug",
        permanent: true,
      },
      {
        source: "/article/:slug/",
        destination: "/post/:slug",
        permanent: true,
      },
      // RSS フィード
      { source: "/feed", destination: "/feed.xml", permanent: true },
      { source: "/feed/", destination: "/feed.xml", permanent: true },
      // WordPress ページネーション → トップへ
      { source: "/page/:num", destination: "/", permanent: true },
      { source: "/page/:num/", destination: "/", permanent: true },
      // WordPress タグ・著者アーカイブ → トップへ
      { source: "/tag/:slug", destination: "/", permanent: true },
      { source: "/tag/:slug/", destination: "/", permanent: true },
      { source: "/author/:slug", destination: "/", permanent: true },
      { source: "/author/:slug/", destination: "/", permanent: true },
      { source: "/author/:slug/page/:num", destination: "/", permanent: true },
      { source: "/author/:slug/page/:num/", destination: "/", permanent: true },
      // GSCで404になっているURL → 最近似ページへ301リダイレクト
      {
        source: "/expressvpn-review-2026-2",
        destination: "/post/expressvpn-review-2026",
        permanent: true,
      },
      {
        source: "/expressvpn-review-2026-2/",
        destination: "/post/expressvpn-review-2026",
        permanent: true,
      },
      {
        source: "/ai-image-generator",
        destination: "/post/server-hosting-ranking-2026",
        permanent: true,
      },
      {
        source: "/ai-image-generator/",
        destination: "/post/server-hosting-ranking-2026",
        permanent: true,
      },
      {
        source: "/nordvpn2026",
        destination: "/post/nordvpn-review-2026",
        permanent: true,
      },
      {
        source: "/nordvpn2026/",
        destination: "/post/nordvpn-review-2026",
        permanent: true,
      },
    ];
  },

  // セキュリティ + キャッシュヘッダー
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        // 静的アセット（画像・フォント）は1年キャッシュ
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // ページHTMLは1時間キャッシュ（force-dynamicページには影響なし）
        source: "/ranking/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400" },
        ],
      },
    ];
  },

  // WordPress画像をプロキシ
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "navi.next-aura.com",
        pathname: "/wp-content/**",
      },
      { protocol: "https", hostname: "img.tcs-asp.net" },
      { protocol: "https", hostname: "image.a8.net" },
      { protocol: "https", hostname: "pub.a8.net" },
      { protocol: "https", hostname: "**.a8.net" },
      { protocol: "https", hostname: "images.moshimo.com" },
      { protocol: "https", hostname: "images.valuecommerce.com" },
      { protocol: "https", hostname: "media.go2app.org" },
    ],
    formats: ["image/avif", "image/webp"],
  },

  // パッケージ最適化（バンドルサイズ削減）
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
