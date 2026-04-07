"use client";

import Link from "next/link";

const categories = [
  { name: "VPN", icon: "🔒", href: "/ranking/vpn" },
  { name: "レンタルサーバー", icon: "🖥️", href: "/ranking/server" },
  { name: "AIツール", icon: "🤖", href: "/ranking/ai" },
  { name: "FX口座", icon: "📈", href: "/ranking/fx" },
  { name: "仮想通貨取引所", icon: "₿", href: "/ranking/crypto" },
  { name: "eSIM", icon: "📱", href: "/ranking/esim" },
  { name: "セキュリティソフト", icon: "🛡️", href: "/ranking/security" },
];

const popularRankings = [
  { title: "VPNおすすめランキング", href: "/ranking/vpn" },
  { title: "仮想通貨取引所比較", href: "/ranking/crypto" },
  { title: "FX口座おすすめランキング", href: "/ranking/fx" },
  { title: "AIツール比較ガイド", href: "/ranking/ai" },
  { title: "レンタルサーバー比較", href: "/ranking/server" },
];

export function Sidebar() {
  return (
    <aside style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {/* Category List */}
      <div style={{
        background: "#fff", borderRadius: 12,
        border: "1px solid var(--border)",
        overflow: "hidden",
        boxShadow: "var(--shadow-sm)"
      }}>
        <div style={{
          background: "#ff6b35", color: "#fff",
          padding: "12px 16px",
          fontWeight: 900, fontSize: 15,
          display: "flex", alignItems: "center", gap: 8
        }}>
          📂 カテゴリ一覧
        </div>
        {categories.map((cat, i) => (
          <Link
            key={cat.name}
            href={cat.href}
            style={{
              display: "flex", alignItems: "center", gap: 10,
              padding: "12px 16px",
              borderBottom: i < categories.length - 1 ? "1px solid #f0f0f0" : "none",
              textDecoration: "none", color: "#333",
              fontSize: 14, fontWeight: 500,
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#fff4ef"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
          >
            <span style={{ fontSize: 18 }}>{cat.icon}</span>
            <span style={{ flex: 1 }}>{cat.name}</span>
          </Link>
        ))}
      </div>

      {/* Popular Rankings */}
      <div style={{
        background: "#fff", borderRadius: 12,
        border: "1px solid var(--border)",
        overflow: "hidden",
        boxShadow: "var(--shadow-sm)"
      }}>
        <div style={{
          background: "#333", color: "#fff",
          padding: "12px 16px",
          fontWeight: 900, fontSize: 15,
          display: "flex", alignItems: "center", gap: 8
        }}>
          🔥 人気ランキング
        </div>
        {popularRankings.map((article, i) => (
          <Link
            key={article.title}
            href={article.href}
            style={{
              display: "flex", alignItems: "center", gap: 12,
              padding: "12px 16px",
              borderBottom: i < popularRankings.length - 1 ? "1px solid #f0f0f0" : "none",
              textDecoration: "none", color: "#333",
              fontSize: 13, transition: "background 0.15s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#fafafa"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
          >
            <span style={{
              width: 28, height: 28,
              borderRadius: "50%",
              background: i < 3 ? "#ff6b35" : "#ddd",
              color: i < 3 ? "#fff" : "#888",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 13, fontWeight: 900, flexShrink: 0
            }}>
              {i + 1}
            </span>
            <div style={{ fontWeight: 700, lineHeight: 1.4 }}>{article.title}</div>
          </Link>
        ))}
      </div>
    </aside>
  );
}
