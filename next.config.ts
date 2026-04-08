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
    ];
  },

  // WordPress画像（記事内のimg src）をプロキシ
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "navi.next-aura.com",
        pathname: "/wp-content/**",
      },
      {
        protocol: "https",
        hostname: "img.tcs-asp.net",
      },
      {
        protocol: "https",
        hostname: "image.a8.net",
      },
      {
        protocol: "https",
        hostname: "pub.a8.net",
      },
      {
        protocol: "https",
        hostname: "**.a8.net",
      },
      {
        protocol: "https",
        hostname: "images.moshimo.com",
      },
      {
        protocol: "https",
        hostname: "images.valuecommerce.com",
      },
    ],
  },
};

export default nextConfig;
