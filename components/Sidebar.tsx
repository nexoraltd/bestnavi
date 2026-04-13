"use client";

import Link from "next/link";
import {
  Shield, Server, Globe, GraduationCap, Briefcase, TrendingUp,
  ChevronRight, Flame, FolderOpen,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const categories: { name: string; icon: LucideIcon; href: string }[] = [
  { name: "VPN",           icon: Shield,          href: "/ranking/vpn" },
  { name: "レンタルサーバー", icon: Server,        href: "/ranking/server" },
  { name: "英会話",        icon: Globe,            href: "/ranking/english" },
  { name: "スクール",      icon: GraduationCap,    href: "/ranking/school" },
  { name: "キャリア",      icon: Briefcase,        href: "/ranking/career" },
  { name: "副業",          icon: TrendingUp,       href: "/ranking/fukugyo" },
];

const popularRankings = [
  { title: "VPNおすすめランキング",          href: "/ranking/vpn" },
  { title: "レンタルサーバー比較",           href: "/ranking/server" },
  { title: "オンライン英会話比較",           href: "/ranking/english" },
  { title: "プログラミングスクール比較",     href: "/ranking/school" },
  { title: "IT転職・キャリアサービス比較",   href: "/ranking/career" },
];

export function Sidebar() {
  return (
    <aside style={{ display: "flex", flexDirection: "column", gap: 20 }}>

      {/* Popular rankings */}
      <div style={{
        background: "#fff",
        borderRadius: 12,
        border: "1px solid var(--border)",
        overflow: "hidden",
      }}>
        <div style={{
          padding: "12px 16px",
          borderBottom: "1px solid var(--border)",
          display: "flex", alignItems: "center", gap: 6,
          fontWeight: 700, fontSize: 13, color: "var(--text-primary)",
        }}>
          <Flame size={15} strokeWidth={2} style={{ color: "#f59e0b" }} />
          人気ランキング
        </div>
        {popularRankings.map((item, i) => (
          <Link
            key={item.title}
            href={item.href}
            style={{
              display: "flex", alignItems: "center", gap: 10,
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
            <span style={{
              width: 22, height: 22,
              borderRadius: 4,
              background: i === 0 ? "var(--gold)" : i === 1 ? "var(--silver)" : i === 2 ? "var(--bronze)" : "var(--bg-section)",
              color: i < 3 ? "#fff" : "var(--text-muted)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 11, fontWeight: 700, flexShrink: 0,
            }}>
              {i + 1}
            </span>
            <span style={{ fontWeight: 600, lineHeight: 1.4, fontSize: 13, flex: 1 }}>{item.title}</span>
            <ChevronRight size={13} style={{ color: "var(--text-muted)", flexShrink: 0 }} />
          </Link>
        ))}
      </div>

      {/* Category list */}
      <div style={{
        background: "#fff",
        borderRadius: 12,
        border: "1px solid var(--border)",
        overflow: "hidden",
      }}>
        <div style={{
          padding: "12px 16px",
          borderBottom: "1px solid var(--border)",
          display: "flex", alignItems: "center", gap: 6,
          fontWeight: 700, fontSize: 13, color: "var(--text-primary)",
        }}>
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
                display: "flex", alignItems: "center", gap: 8,
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
              <Icon size={14} strokeWidth={2} style={{ color: "var(--accent)", flexShrink: 0 }} />
              <span style={{ flex: 1 }}>{cat.name}</span>
              <ChevronRight size={13} style={{ color: "var(--text-muted)" }} />
            </Link>
          );
        })}
      </div>

    </aside>
  );
}
