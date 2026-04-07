"use client";

import { useEffect, useState } from "react";

// カテゴリ別おすすめ案件マッピング
const CATEGORY_CTA_MAP: Record<number, { serviceName: string; description: string; url: string; badge: string }> = {
  48: { serviceName: "NordVPN", description: "世界60カ国以上のサーバー。軍事レベルの暗号化で安心。30日間返金保証付き。", url: "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=142267&url_id=902", badge: "VPN人気No.1" },
  51: { serviceName: "Xserver", description: "国内シェアNo.1のレンタルサーバー。高速・安定・サポート充実。", url: "https://px.a8.net/svt/ejp?a8mat=3Z3DWH+EXAMPLE+CO4+EXAMPLE", badge: "国内シェアNo.1" },
  52: { serviceName: "ChatGPT Plus", description: "最新のGPT-4oモデルが使い放題。画像生成・分析・プログラミングまで対応。", url: "/ranking/ai", badge: "AI定番" },
  59: { serviceName: "DMM FX", description: "スプレッド業界最狭水準。取引手数料0円。最短30分で取引開始。", url: "https://h.accesstrade.net/sp/cc?rk=0100pnot00nczs", badge: "FX口座人気No.1" },
  53: { serviceName: "Coincheck", description: "取扱通貨数国内最多級。500円からビットコインが買える。アプリDL数No.1。", url: "/ranking/crypto", badge: "仮想通貨No.1" },
  50: { serviceName: "Airalo", description: "200以上の国と地域で使えるeSIM。アプリで簡単購入・即利用開始。", url: "/ranking/esim", badge: "eSIM人気" },
  56: { serviceName: "転職サービス", description: "あなたに合った転職サービスを比較して見つけよう。", url: "/ranking/career", badge: "転職" },
  55: { serviceName: "プログラミングスクール", description: "未経験からエンジニアへ。スクールを比較して最適な学習環境を。", url: "/ranking/school", badge: "スクール" },
  54: { serviceName: "オンライン英会話", description: "自宅から気軽にレッスン。料金・講師の質で比較。", url: "/ranking/english", badge: "英会話" },
  44: { serviceName: "NordVPN", description: "世界60カ国以上のサーバー。軍事レベルの暗号化でセキュリティも万全。", url: "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=142267&url_id=902", badge: "セキュリティ" },
};

// デフォルト（カテゴリ不明の場合）
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

  if (position === "top") {
    return (
      <div style={{
        margin: "24px 0",
        padding: "20px",
        background: "linear-gradient(135deg, #fff8f5 0%, #fff 100%)",
        borderRadius: 12,
        border: "1px solid #ffe0d0",
        display: "flex",
        alignItems: "center",
        gap: 16,
        flexWrap: "wrap",
      }}>
        <div style={{
          background: "#ff6b35",
          color: "#fff",
          fontSize: 11,
          fontWeight: 900,
          padding: "4px 10px",
          borderRadius: 20,
          whiteSpace: "nowrap",
        }}>{cta.badge}</div>
        <div style={{ flex: 1, minWidth: 200 }}>
          <span style={{ fontWeight: 900, fontSize: 15, color: "#1a1a1a" }}>{cta.serviceName}</span>
          <span style={{ fontSize: 13, color: "#666", marginLeft: 8 }}>{cta.description}</span>
        </div>
        <a
          href={cta.url}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          onClick={handleClick}
          style={{
            display: "inline-block",
            background: "#ff6b35",
            color: "#fff",
            padding: "10px 24px",
            borderRadius: 50,
            fontWeight: 900,
            fontSize: 13,
            textDecoration: "none",
            whiteSpace: "nowrap",
            transition: "opacity 0.2s",
          }}
        >
          詳しく見る →
        </a>
      </div>
    );
  }

  if (position === "middle") {
    return (
      <div style={{
        margin: "32px 0",
        padding: "24px",
        background: "#fff",
        borderRadius: 12,
        border: "2px solid #ff6b35",
        textAlign: "center",
      }}>
        <div style={{
          display: "inline-block",
          background: "#ff6b35",
          color: "#fff",
          fontSize: 11,
          fontWeight: 900,
          padding: "3px 12px",
          borderRadius: 20,
          marginBottom: 10,
        }}>{cta.badge}</div>
        <p style={{ fontWeight: 900, fontSize: 18, color: "#1a1a1a", marginBottom: 6 }}>
          {cta.serviceName}をチェック
        </p>
        <p style={{ fontSize: 13, color: "#666", marginBottom: 16 }}>
          {cta.description}
        </p>
        <a
          href={cta.url}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          onClick={handleClick}
          style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #ff6b35, #ff8f42)",
            color: "#fff",
            padding: "14px 40px",
            borderRadius: 50,
            fontWeight: 900,
            fontSize: 15,
            textDecoration: "none",
            boxShadow: "0 4px 15px rgba(255,107,53,0.3)",
            transition: "transform 0.2s",
          }}
        >
          無料で始める →
        </a>
      </div>
    );
  }

  // bottom
  return (
    <div style={{
      margin: "40px 0 20px",
      padding: "28px 24px",
      background: "linear-gradient(135deg, #1a1a2e, #16213e)",
      borderRadius: 16,
      textAlign: "center",
    }}>
      <p style={{ color: "#ffd700", fontSize: 13, fontWeight: 900, marginBottom: 6 }}>
        ✨ この記事を読んだ方におすすめ
      </p>
      <p style={{ color: "#fff", fontSize: 20, fontWeight: 900, marginBottom: 8 }}>
        {cta.serviceName}
      </p>
      <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, marginBottom: 20 }}>
        {cta.description}
      </p>
      <a
        href={cta.url}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
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
        }}
      >
        今すぐチェック →
      </a>
      <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, marginTop: 12 }}>
        ※当サイトはアフィリエイトプログラムを利用しています
      </p>
    </div>
  );
}
