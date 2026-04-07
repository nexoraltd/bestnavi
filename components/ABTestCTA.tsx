"use client";

import { useEffect, useState } from "react";

interface ABTestCTAProps {
  affiliateUrl: string;
  serviceName: string;
  /** Optional: override variant (for testing) */
  forceVariant?: "A" | "B";
}

/**
 * ABテスト対応CTAボタン
 * 50/50でバリアントA/Bを表示し、GA4にイベント送信
 */
export function ABTestCTA({ affiliateUrl, serviceName, forceVariant }: ABTestCTAProps) {
  const [variant, setVariant] = useState<"A" | "B">("A");

  useEffect(() => {
    if (forceVariant) {
      setVariant(forceVariant);
      return;
    }
    // Persistent variant per user (localStorage)
    const stored = localStorage.getItem(`ab_cta_${serviceName}`);
    if (stored === "A" || stored === "B") {
      setVariant(stored);
    } else {
      const v = Math.random() < 0.5 ? "A" : "B";
      localStorage.setItem(`ab_cta_${serviceName}`, v);
      setVariant(v);
    }
  }, [serviceName, forceVariant]);

  const handleClick = () => {
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag("event", "cta_click", {
        event_category: "ab_test",
        event_label: `${serviceName}_variant_${variant}`,
        variant,
        service: serviceName,
        page_path: window.location.pathname,
      });
    }
  };

  if (variant === "A") {
    return (
      <div style={{
        margin: "32px 0",
        padding: "28px 24px",
        background: "linear-gradient(135deg, #ff6b35, #ff8f42)",
        borderRadius: 16,
        textAlign: "center",
        boxShadow: "0 8px 30px rgba(255,107,53,0.25)",
      }}>
        <p style={{ color: "#fff", fontSize: 18, fontWeight: 900, marginBottom: 8 }}>
          {serviceName}で口座開設する
        </p>
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 13, marginBottom: 16 }}>
          最短5分で申込完了。取引手数料0円。
        </p>
        <a
          href={affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          style={{
            display: "inline-block",
            background: "#fff",
            color: "#ff6b35",
            padding: "16px 48px",
            borderRadius: 50,
            fontWeight: 900,
            fontSize: 16,
            textDecoration: "none",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            transition: "transform 0.2s",
          }}
        >
          無料で口座開設 →
        </a>
      </div>
    );
  }

  // Variant B: More trust-focused, darker design
  return (
    <div style={{
      margin: "32px 0",
      padding: "28px 24px",
      background: "#1a1a2e",
      borderRadius: 16,
      textAlign: "center",
      border: "2px solid #ff6b35",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 12 }}>
        <span style={{ fontSize: 24 }}>🏆</span>
        <p style={{ color: "#ffd700", fontSize: 16, fontWeight: 900, margin: 0 }}>
          人気No.1
        </p>
      </div>
      <p style={{ color: "#fff", fontSize: 20, fontWeight: 900, marginBottom: 6 }}>
        {serviceName}
      </p>
      <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, marginBottom: 20 }}>
        口座開設数No.1 | 取引手数料0円 | 最短即日取引
      </p>
      <a
        href={affiliateUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        style={{
          display: "inline-block",
          background: "linear-gradient(135deg, #ff6b35, #ff4500)",
          color: "#fff",
          padding: "16px 48px",
          borderRadius: 50,
          fontWeight: 900,
          fontSize: 16,
          textDecoration: "none",
          boxShadow: "0 4px 20px rgba(255,107,53,0.4)",
          transition: "transform 0.2s",
        }}
      >
        今すぐ無料で始める →
      </a>
      <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, marginTop: 12 }}>
        ※当サイトはアフィリエイトプログラムを利用しています
      </p>
    </div>
  );
}
