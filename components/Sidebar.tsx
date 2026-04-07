"use client";

import Link from "next/link";

const popularArticles = [
  { title: "VPNおすすめランキング2026", href: "/ranking/vpn", views: "12,340" },
  { title: "仮想通貨取引所比較", href: "/ranking/crypto", views: "9,870" },
  { title: "FX口座おすすめランキング", href: "/ranking/fx", views: "8,450" },
  { title: "AIツール比較ガイド", href: "/ranking/ai", views: "7,230" },
  { title: "レンタルサーバー比較", href: "/ranking/server", views: "5,120" },
];

const categories = [
  { name: "VPN", count: 12, icon: "🔒", href: "/ranking/vpn" },
  { name: "レンタルサーバー", count: 15, icon: "🖥️", href: "/ranking/server" },
  { name: "AIツール", count: 20, icon: "🤖", href: "/ranking/ai" },
  { name: "FX口座", count: 8, icon: "📈", href: "/ranking/fx" },
  { name: "仮想通貨取引所", count: 10, icon: "₿", href: "/ranking/crypto" },
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
            <span style={{
              background: "#f0f0f0", color: "#888",
              padding: "2px 8px", borderRadius: 20,
              fontSize: 11, fontWeight: 700
            }}>
              {cat.count}件
            </span>
          </Link>
        ))}
      </div>

      {/* Popular Articles */}
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
        {popularArticles.map((article, i) => (
          <Link
            key={article.title}
            href={article.href}
            style={{
              display: "flex", alignItems: "center", gap: 12,
              padding: "12px 16px",
              borderBottom: i < popularArticles.length - 1 ? "1px solid #f0f0f0" : "none",
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
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, lineHeight: 1.4 }}>{article.title}</div>
              <div style={{ fontSize: 11, color: "#aaa" }}>👁 {article.views} views</div>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA Box */}
      <div style={{
        background: "linear-gradient(135deg, #fff4ef, #fff)",
        borderRadius: 12,
        border: "2px solid #ff6b35",
        padding: 20,
        textAlign: "center",
        boxShadow: "var(--shadow-sm)"
      }}>
        <div style={{ fontSize: 24, marginBottom: 8 }}>📧</div>
        <div style={{ fontWeight: 900, fontSize: 15, marginBottom: 4, color: "#1a1a1a" }}>
          無料メルマガ登録
        </div>
        <p style={{ fontSize: 12, color: "#666", marginBottom: 12, lineHeight: 1.6 }}>
          最新のお得情報・キャンペーン情報をお届け
        </p>
        <input
          type="email"
          placeholder="メールアドレス"
          style={{
            width: "100%", padding: "10px 12px",
            borderRadius: 8, border: "1px solid #ddd",
            fontSize: 13, marginBottom: 8,
            outline: "none",
          }}
        />
        <button className="cta-primary" style={{ width: "100%", padding: "10px 0", fontSize: 14 }}>
          無料で登録する
        </button>
      </div>
    </aside>
  );
}
