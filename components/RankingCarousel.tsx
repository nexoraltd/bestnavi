"use client";

import Link from "next/link";
import { FileText } from "lucide-react";

const articles = [
  { id: "1", title: "VPN選びの完全ガイド", date: "2026-04-05", category: "VPN" },
  { id: "2", title: "2026年最新AIツール比較", date: "2026-04-04", category: "AI" },
  { id: "3", title: "初心者向けFX口座選び", date: "2026-04-03", category: "FX" },
  { id: "4", title: "レンタルサーバー比較", date: "2026-04-02", category: "サーバー" },
];

export function RankingCarousel() {
  return (
    <section style={{ padding: "36px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px" }}>
        <div className="section-header">
          <h2>最新記事</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
          {articles.map((a) => (
            <Link
              key={a.id}
              href="#"
              style={{
                display: "block",
                background: "#fff",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                textDecoration: "none",
                color: "var(--text-primary)",
                transition: "box-shadow 0.15s",
              }}
            >
              <div
                style={{
                  height: 100,
                  background: "var(--bg-section)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FileText size={28} strokeWidth={1.5} style={{ color: "var(--text-muted)" }} />
              </div>
              <div style={{ padding: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      color: "var(--accent)",
                      background: "var(--accent-light)",
                      padding: "1px 6px",
                      borderRadius: 3,
                    }}
                  >
                    {a.category}
                  </span>
                  <span style={{ fontSize: 11, color: "var(--text-muted)" }}>{a.date}</span>
                </div>
                <div style={{ fontWeight: 700, fontSize: 14, lineHeight: 1.5 }}>{a.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
