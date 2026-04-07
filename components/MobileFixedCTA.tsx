"use client";

import { useEffect, useState } from "react";

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
          background: "rgba(26,26,46,0.97)",
          backdropFilter: "blur(8px)",
          padding: "10px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          transform: visible ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.3s ease",
          boxShadow: "0 -4px 20px rgba(0,0,0,0.15)",
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ color: "#fff", fontWeight: 900, fontSize: 13, margin: 0, lineHeight: 1.3 }}>
            おすすめランキング
          </p>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 11, margin: 0 }}>
            カテゴリ別に徹底比較
          </p>
        </div>
        <a
          href="/"
          onClick={handleClick}
          style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #ff6b35, #ff4500)",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: 50,
            fontWeight: 900,
            fontSize: 13,
            textDecoration: "none",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          ランキングを見る
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
