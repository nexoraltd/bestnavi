"use client";

import { useEffect, useState } from "react";
import { Award, ExternalLink } from "lucide-react";

interface ABTestCTAProps {
  affiliateUrl: string;
  serviceName: string;
  forceVariant?: "A" | "B";
}

export function ABTestCTA({ affiliateUrl, serviceName, forceVariant }: ABTestCTAProps) {
  const [variant, setVariant] = useState<"A" | "B">("A");

  useEffect(() => {
    if (forceVariant) {
      setVariant(forceVariant);
      return;
    }
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
      <div
        style={{
          margin: "28px 0",
          padding: "24px",
          background: "var(--cta-gradient)",
          borderRadius: "var(--radius-lg)",
          textAlign: "center",
        }}
      >
        <p style={{ color: "#fff", fontSize: 17, fontWeight: 700, marginBottom: 6 }}>
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
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: "#fff",
            color: "var(--cta)",
            padding: "14px 40px",
            borderRadius: 8,
            fontWeight: 700,
            fontSize: 15,
            textDecoration: "none",
            transition: "transform 0.15s",
          }}
        >
          無料で口座開設
          <ExternalLink size={14} />
        </a>
      </div>
    );
  }

  // Variant B: Trust-focused
  return (
    <div
      style={{
        margin: "28px 0",
        padding: "24px",
        background: "#fff",
        borderRadius: "var(--radius-lg)",
        textAlign: "center",
        border: "2px solid var(--cta)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginBottom: 10 }}>
        <Award size={20} strokeWidth={2} style={{ color: "var(--gold)" }} />
        <p style={{ color: "var(--gold)", fontSize: 14, fontWeight: 700, margin: 0 }}>
          人気No.1
        </p>
      </div>
      <p style={{ color: "var(--text-primary)", fontSize: 18, fontWeight: 700, marginBottom: 4 }}>
        {serviceName}
      </p>
      <p style={{ color: "var(--text-secondary)", fontSize: 13, marginBottom: 18 }}>
        口座開設数No.1 | 取引手数料0円 | 最短即日取引
      </p>
      <a
        href={affiliateUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="cta-primary"
        style={{ padding: "14px 40px", gap: 6 }}
      >
        今すぐ無料で始める
        <ExternalLink size={14} />
      </a>
      <p style={{ color: "var(--text-muted)", fontSize: 10, marginTop: 12 }}>
        ※当サイトはアフィリエイトプログラムを利用しています
      </p>
    </div>
  );
}
