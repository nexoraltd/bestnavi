import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "ベストナビ｜VPN・サーバー・AI・FX・仮想通貨 おすすめ比較ランキング【2026年最新】",
  description: "VPN、レンタルサーバー、AIツール、FX口座、仮想通貨取引所を徹底比較。おすすめランキングを毎月更新。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap" rel="stylesheet" />
        {/* Google Tag (GT-MJKTVK4Z) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GT-MJKTVK4Z"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GT-MJKTVK4Z');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
