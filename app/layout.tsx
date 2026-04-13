import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "ベストナビ｜VPN・レンタルサーバー・英会話・プログラミングスクール比較ランキング【2026年最新】",
  description: "VPN・レンタルサーバー・オンライン英会話・プログラミングスクール・ITキャリア・副業サービスを徹底比較。提携済みサービスのみを掲載した信頼性の高い比較サイトです。",
  metadataBase: new URL("https://navi.next-aura.com"),
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
    url: "https://navi.next-aura.com",
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
  },
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
        {/* Microsoft Clarity - Free Heatmap & Session Recording */}
        <Script id="ms-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window,document,"clarity","script","w7z622ubxw");
          `}
        </Script>
        {/* Affiliate Click Tracking */}
        <Script id="aff-click-track" strategy="afterInteractive">
          {`
            document.addEventListener('click', function(e) {
              var link = e.target.closest('a[href*="tcs-asp.net"], a[href*="a8.net"], a[href*="moshimo.com"], a[href*="nordvpn"], a[href*="surfshark"], a[href*="kinsta"]');
              if (link) {
                gtag('event', 'affiliate_click', {
                  event_category: 'affiliate',
                  event_label: link.href,
                  link_url: link.href,
                  link_text: link.textContent.trim().substring(0, 50),
                  page_path: window.location.pathname
                });
              }
            });
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
