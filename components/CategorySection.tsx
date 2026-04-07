"use client";

import Link from "next/link";

const categories = [
  { id: "vpn", name: "VPN", icon: "🔒", count: 12 },
  { id: "server", name: "レンタルサーバー", icon: "🖥️", count: 15 },
  { id: "ai", name: "AIツール", icon: "🤖", count: 20 },
  { id: "fx", name: "FX口座", icon: "📈", count: 8 },
  { id: "crypto", name: "仮想通貨取引所", icon: "₿", count: 10 },
];

export function CategorySection() {
  return (
    <section style={{ padding: "40px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px" }}>
        <div className="section-header">
          <span style={{ fontSize: 24 }}>📂</span>
          <h2>カテゴリから探す</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
          {categories.map((cat) => (
            <Link key={cat.id} href={`/ranking/${cat.id}`} style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
              padding: "24px 16px", background: "#fff",
              border: "1px solid var(--border)", borderRadius: 12,
              textDecoration: "none", color: "#333",
              boxShadow: "var(--shadow-sm)", transition: "all 0.2s",
            }}>
              <span style={{ fontSize: 36 }}>{cat.icon}</span>
              <span style={{ fontWeight: 900, fontSize: 15 }}>{cat.name}</span>
              <span style={{ fontSize: 12, color: "#888" }}>{cat.count}件</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
