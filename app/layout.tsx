import type { Metadata } from "next";
import AnalyticsScripts from "@/components/AnalyticsScripts";
import "./globals.css";

const SITE_URL = "https://navi.next-aura.com";

export const metadata: Metadata = {
  title: "ベストナビ｜VPN・レンタルサーバー・英会話・プログラミングスクール比較ランキング【2026年最新】",
  description: "VPN・レンタルサーバー・オンライン英会話・プログラミングスクール・ITキャリア・副業サービスを徹底比較。提携済みサービスのみを掲載した信頼性の高い比較サイトです。",
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "ベストナビ｜VPN・サーバー・英会話・スクール 比較ランキング【2026年最新】",
    description: "VPN・レンタルサーバー・オンライン英会話・プログラミングスクール・ITキャリア・副業サービスを比較。提携済みサービスのみ掲載。",
    url: SITE_URL,
    siteName: "ベストナビ",
    type: "website",
    locale: "ja_JP",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ベストナビ おすすめ比較ランキング" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ベストナビ｜VPN・サーバー・英会話・スクール比較ランキング",
    description: "VPN・レンタルサーバー・英会話・スクール・キャリア・副業を徹底比較",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// サイト全体のOrganization + WebSite構造化データ
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ベストナビ",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/favicon-32.png`,
    width: 32,
    height: 32,
  },
  description: "VPN・レンタルサーバー・オンライン英会話・プログラミングスクール・ITキャリア・副業サービスを徹底比較する情報サイト。",
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@next-aura.com",
    contactType: "customer service",
    availableLanguage: "Japanese",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ベストナビ",
  url: SITE_URL,
  description: "VPN・レンタルサーバー・英会話・プログラミングスクール比較ランキング",
  inLanguage: "ja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
        <link rel="alternate" type="application/rss+xml" title="ベストナビ RSS" href="/feed.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        {children}
        <AnalyticsScripts />
      </body>
    </html>
  );
}
