"use client";

import { useEffect } from "react";

export default function AnalyticsScripts() {
  useEffect(() => {
    // GTM
    const gtmScript = document.createElement("script");
    gtmScript.async = true;
    gtmScript.src = "https://www.googletagmanager.com/gtag/js?id=GT-MJKTVK4Z";
    document.head.appendChild(gtmScript);

    const gtmInit = document.createElement("script");
    gtmInit.innerHTML = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'GT-MJKTVK4Z');
`;
    document.head.appendChild(gtmInit);

    // Clarity
    const clarityScript = document.createElement("script");
    clarityScript.innerHTML = `
(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window,document,"clarity","script","w7z622ubxw");
`;
    document.head.appendChild(clarityScript);

    // Affiliate click tracking
    const trackClick = (e: MouseEvent) => {
      const link = (e.target as Element).closest(
        'a[href*="tcs-asp.net"], a[href*="a8.net"], a[href*="moshimo.com"], a[href*="nordvpn"], a[href*="surfshark"], a[href*="kinsta"]'
      ) as HTMLAnchorElement | null;
      if (link && typeof (window as Window & { gtag?: Function }).gtag !== "undefined") {
        (window as Window & { gtag?: Function }).gtag!("event", "affiliate_click", {
          event_category: "affiliate",
          event_label: link.href,
          link_url: link.href,
          link_text: link.textContent?.trim().substring(0, 50),
          page_path: window.location.pathname,
        });
      }
    };
    document.addEventListener("click", trackClick);
    return () => document.removeEventListener("click", trackClick);
  }, []);

  return null;
}
