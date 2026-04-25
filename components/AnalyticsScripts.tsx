"use client";

import Script from "next/script";

export default function AnalyticsScripts() {
  return (
    <>
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
      <Script id="ms-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window,document,"clarity","script","w7z622ubxw");
        `}
      </Script>
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
    </>
  );
}
