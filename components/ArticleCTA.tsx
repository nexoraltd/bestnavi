"use client";

import { useEffect, useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";

const CATEGORY_CTA_MAP: Record<number, { serviceName: string; description: string; url: string; badge: string }> = {
  48: { serviceName: "VPNおすすめランキング", description: "人気VPNを料金・速度・セキュリティで徹底比較。あなたに合った1本が見つかります。", url: "/ranking/vpn", badge: "VPN比較" },
  51: { serviceName: "レンタルサーバー比較", description: "国内主要サーバーを速度・価格・サポートで比較。初心者にも安心の選び方ガイド。", url: "/ranking/server", badge: "サーバー比較" },
  52: { serviceName: "AIツール比較ランキング", description: "ChatGPT・Gemini・Claude等を機能・料金で比較。目的別おすすめを紹介。", url: "/ranking/ai", badge: "AI比較" },
  59: { serviceName: "FX口座おすすめランキング", description: "スプレッド・手数料・使いやすさで人気FX口座を比較。口座開設キャンペーン情報も。", url: "/ranking/fx", badge: "FX比較" },
  53: { serviceName: "仮想通貨取引所比較", description: "手数料・取扱通貨・セキュリティで国内主要取引所を徹底比較。", url: "/ranking/crypto", badge: "仮想通貨比較" },
  50: { serviceName: "eSIMおすすめランキング", description: "海外旅行・国内利用のeSIMを料金・対応エリアで比較。", url: "/ranking/esim", badge: "eSIM比較" },
  56: { serviceName: "転職サービス比較", description: "転職エージェント・サイトを求人数・サポート質で比較。あなたに合ったサービスへ。", url: "/ranking/career", badge: "転職比較" },
  55: { serviceName: "プログラミングスクール比較", description: "未経験からエンジニアへ。受講費・カリキュラム・就職率で主要スクールを比較。", url: "/ranking/school", badge: "スクール比較" },
  54: { serviceName: "オンライン英会話比較", description: "料金・講師の質・システムで主要英会話サービスを比較。無料体験情報も。", url: "/ranking/english", badge: "英会話比較" },
  44: { serviceName: "セキュリティソフト比較", description: "ウイルス対策・個人情報保護の定番ソフトを機能・価格で比較。", url: "/ranking/security", badge: "セキュリティ比較" },
};

const DEFAULT_CTA = {
  serviceName: "ベストナビおすすめ",
  description: "カテゴリ別のおすすめランキングをチェック",
  url: "/",
  badge: "おすすめ",
};

interface ArticleCTAProps {
  categoryIds: number[];
  position: "top" | "middle" | "bottom";
}

export function ArticleCTA({ categoryIds, position }: ArticleCTAProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const cta = categoryIds.map((id) => CATEGORY_CTA_MAP[id]).find(Boolean) || DEFAULT_CTA;
  const isExternal = cta.url.startsWith("http");

  const handleClick = () => {
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag("event", "article_cta_click", {
        event_category: "cta",
        event_label: cta.serviceName,
        position,
        page_path: window.location.pathname,
      });
    }
  };

  if (!visible) return null;

  // 全ポジション共通: カード全体をリンクにする
  if (position === "top") {
    return (
      <a
        href={cta.url}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        onClick={handleClick}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          flexWrap: "wrap",
          margin: "20px 0",
          padding: "14px 18px",
          background: "var(--cta-light)",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--cta)",
          textDecoration: "none",
          color: "inherit",
          transition: "box-shadow 0.15s",
        }}
      >
        <span style={{ background: "var(--cta)", color: "#fff", fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 4, whiteSpace: "nowrap" }}>
          {cta.badge}
        </span>
        <div style={{ flex: 1, minWidth: 180 }}>
          <span style={{ fontWeight: 700, fontSize: 14, color: "var(--text-primary)" }}>{cta.serviceName}</span>
          <span style={{ fontSize: 13, color: "var(--text-secondary)", marginLeft: 8 }}>{cta.description}</span>
        </div>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "var(--cta)", color: "#fff", padding: "8px 20px", borderRadius: 6, fontSize: 13, fontWeight: 700, whiteSpace: "nowrap" }}>
          詳しく見る
          <ArrowRight size={14} />
        </span>
      </a>
    );
  }

  if (position === "middle") {
    return (
      <a
        href={cta.url}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        onClick={handleClick}
        style={{
          display: "block",
          margin: "28px 0",
          padding: "22px",
          background: "var(--cta-light)",
          borderRadius: "var(--radius-lg)",
          border: "1px solid var(--cta)",
          textAlign: "center",
          textDecoration: "none",
          color: "inherit",
          transition: "box-shadow 0.15s",
        }}
      >
        <span style={{ display: "inline-block", background: "var(--cta)", color: "#fff", fontSize: 11, fontWeight: 700, padding: "2px 10px", borderRadius: 4, marginBottom: 10 }}>
          {cta.badge}
        </span>
        <p style={{ fontWeight: 700, fontSize: 17, color: "var(--text-primary)", marginBottom: 4 }}>
          {cta.serviceName}をチェック
        </p>
        <p style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 16 }}>
          {cta.description}
        </p>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "var(--cta)", color: "#fff", padding: "12px 36px", borderRadius: 8, fontSize: 15, fontWeight: 700 }}>
          無料で始める
          <ExternalLink size={14} />
        </span>
      </a>
    );
  }

  // bottom
  return (
    <a
      href={cta.url}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      onClick={handleClick}
      style={{
        display: "block",
        margin: "36px 0 16px",
        padding: "24px",
        background: "var(--cta-light)",
        borderRadius: "var(--radius-lg)",
        border: "1px solid var(--cta)",
        textAlign: "center",
        textDecoration: "none",
        color: "inherit",
        transition: "box-shadow 0.15s",
      }}
    >
      <p style={{ color: "var(--text-muted)", fontSize: 12, fontWeight: 600, marginBottom: 6 }}>
        関連ランキング
      </p>
      <p style={{ color: "var(--text-primary)", fontSize: 18, fontWeight: 700, marginBottom: 6 }}>
        {cta.serviceName}
      </p>
      <p style={{ color: "var(--text-secondary)", fontSize: 13, marginBottom: 18 }}>
        {cta.description}
      </p>
      <span style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "var(--cta)", color: "#fff", padding: "14px 40px", borderRadius: 8, fontSize: 15, fontWeight: 700 }}>
        ランキングを見る
        <ArrowRight size={14} />
      </span>
      <p style={{ color: "var(--text-muted)", fontSize: 10, marginTop: 12 }}>
        ※当サイトはアフィリエイトプログラムを利用しています
      </p>
    </a>
  );
}
