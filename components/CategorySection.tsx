"use client";

import Link from "next/link";
import {
  Shield,
  Server,
  Bot,
  TrendingUp,
  Bitcoin,
  ChevronRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const categories: { id: string; name: string; icon: LucideIcon; count: number }[] = [
  { id: "vpn", name: "VPN", icon: Shield, count: 12 },
  { id: "server", name: "レンタルサーバー", icon: Server, count: 15 },
  { id: "ai", name: "AIツール", icon: Bot, count: 20 },
  { id: "fx", name: "FX口座", icon: TrendingUp, count: 8 },
  { id: "crypto", name: "仮想通貨取引所", icon: Bitcoin, count: 10 },
];

export function CategorySection() {
  return (
    <section style={{ padding: "36px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px" }}>
        <div className="section-header">
          <h2>カテゴリから探す</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.id}
                href={`/ranking/${cat.id}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "14px 16px",
                  background: "#fff",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-md)",
                  textDecoration: "none",
                  color: "var(--text-primary)",
                  transition: "all 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.boxShadow = "var(--shadow-md)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: "var(--accent-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} strokeWidth={2} style={{ color: "var(--accent)" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{cat.name}</div>
                  <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{cat.count}件</div>
                </div>
                <ChevronRight size={16} style={{ color: "var(--text-muted)" }} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
