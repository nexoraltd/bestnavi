"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export function MobileFixedCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag("event", "mobile_cta_click", {
        event_category: "cta",
        event_label: "mobile_fixed_bar",
        page_path: window.location.pathname,
      });
    }
  };

  return (
    <>
      <div
        className="mobile-fixed-cta"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          background: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(8px)",
          padding: "10px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          transform: visible ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.3s ease",
          borderTop: "1px solid var(--border)",
          boxShadow: "0 -2px 10px rgba(0,0,0,0.06)",
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ color: "var(--text-primary)", fontWeight: 700, fontSize: 13, margin: 0, lineHeight: 1.3 }}>
            おすすめランキング
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: 11, margin: 0 }}>
            カテゴリ別に比較
          </p>
        </div>
        <a
          href="/"
          onClick={handleClick}
          className="cta-primary"
          style={{ padding: "9px 18px", fontSize: 13, gap: 4 }}
        >
          見る
          <ArrowRight size={14} />
        </a>
      </div>
      <style>{`
        @media (min-width: 769px) {
          .mobile-fixed-cta { display: none !important; }
        }
      `}</style>
    </>
  );
}
