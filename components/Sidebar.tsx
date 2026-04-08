"use client";

import Link from "next/link";
import {
  Shield,
  Server,
  Bot,
  TrendingUp,
  Bitcoin,
  Smartphone,
  ShieldCheck,
  ChevronRight,
  BarChart3,
  FolderOpen,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const categories: { name: string; icon: LucideIcon; href: string }[] = [
  { name: "VPN", icon: Shield, href: "/ranking/vpn" },
  { name: "レンタルサーバー", icon: Server, href: "/ranking/server" },
  { name: "AIツール", icon: Bot, href: "/ranking/ai" },
  { name: "FX口座", icon: TrendingUp, href: "/ranking/fx" },
  { name: "仮想通貨取引所", icon: Bitcoin, href: "/ranking/crypto" },
  { name: "eSIM", icon: Smartphone, href: "/ranking/esim" },
  { name: "セキュリティソフト", icon: ShieldCheck, href: "/ranking/security" },
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
    <aside style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Category List */}
      <div
        style={{
          background: "#fff",
          borderRadius: "var(--radius-lg)",
          border: "1px solid var(--border)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "12px 16px",
            borderBottom: "1px solid var(--border)",
            fontWeight: 700,
            fontSize: 13,
            display: "flex",
            alignItems: "center",
            gap: 6,
            color: "var(--text-primary)",
          }}
        >
          <FolderOpen size={15} strokeWidth={2} style={{ color: "var(--accent)" }} />
          カテゴリ一覧
        </div>
        {categories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <Link
              key={cat.name}
              href={cat.href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 16px",
                borderBottom: i < categories.length - 1 ? "1px solid var(--bg-section)" : "none",
                textDecoration: "none",
                color: "var(--text-secondary)",
                fontSize: 13,
                fontWeight: 500,
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--bg-section)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
            >
              <Icon size={14} strokeWidth={2} />
              <span style={{ flex: 1 }}>{cat.name}</span>
              <ChevronRight size={13} style={{ color: "var(--text-muted)" }} />
            </Link>
          );
        })}
      </div>

      {/* Popular Rankings */}
      <div
        style={{
          background: "#fff",
          borderRadius: "var(--radius-lg)",
          border: "1px solid var(--border)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "12px 16px",
            borderBottom: "1px solid var(--border)",
            fontWeight: 700,
            fontSize: 13,
            display: "flex",
            alignItems: "center",
            gap: 6,
            color: "var(--text-primary)",
          }}
        >
          <BarChart3 size={15} strokeWidth={2} style={{ color: "var(--cta)" }} />
          人気ランキング
        </div>
        {popularRankings.map((article, i) => (
          <Link
            key={article.title}
            href={article.href}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 16px",
              borderBottom: i < popularRankings.length - 1 ? "1px solid var(--bg-section)" : "none",
              textDecoration: "none",
              color: "var(--text-secondary)",
              fontSize: 13,
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--bg-section)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
          >
            <span
              style={{
                width: 22,
                height: 22,
                borderRadius: 4,
                background: i < 3 ? "var(--accent)" : "var(--bg-section)",
                color: i < 3 ? "#fff" : "var(--text-muted)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
                fontWeight: 700,
                flexShrink: 0,
              }}
            >
              {i + 1}
            </span>
            <span style={{ fontWeight: 600, lineHeight: 1.4, fontSize: 13 }}>{article.title}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
}
