"use client";

import Link from "next/link";

const articles = [
  { id: "1", title: "VPN選びの完全ガイド", date: "2026-04-05", icon: "📝" },
  { id: "2", title: "2026年最新AIツール比較", date: "2026-04-04", icon: "🤖" },
  { id: "3", title: "初心者向けFX口座選び", date: "2026-04-03", icon: "📈" },
  { id: "4", title: "レンタルサーバー比較", date: "2026-04-02", icon: "⚙️" },
];

export function RankingCarousel() {
  return (
    <section style={{ padding: "40px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px" }}>
        <div className="section-header">
          <span style={{ fontSize: 24 }}>📰</span>
          <h2>最新記事</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 16 }}>
          {articles.map((a) => (
            <Link key={a.id} href="#" style={{
              display: "block", background: "#fff",
              border: "1px solid var(--border)", borderRadius: 12,
              overflow: "hidden", textDecoration: "none", color: "#333",
              boxShadow: "var(--shadow-sm)", transition: "all 0.2s",
            }}>
              <div style={{ height: 120, background: "#fff4ef", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48 }}>
                {a.icon}
              </div>
              <div style={{ padding: 16 }}>
                <div style={{ fontSize: 11, color: "#888", marginBottom: 6 }}>{a.date}</div>
                <div style={{ fontWeight: 700, fontSize: 15, lineHeight: 1.5 }}>{a.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
