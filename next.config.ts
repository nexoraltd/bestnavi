import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // WordPress旧URLから /post/[slug] への301リダイレクト
  async redirects() {
    return [
      // WordPress default permalink: /?p=123 → /post/[slug]
      // これはmiddlewareで処理（下記参照）

      // WordPress category pages
      {
        source: "/category/:slug",
        destination: "/ranking/:slug",
        permanent: true,
      },
    ];
  },

  // WordPress画像をプロキシ
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_WP_HOST || "navi.next-aura.com",
        pathname: "/wp-content/**",
      },
    ],
  },
};

export default nextConfig;
