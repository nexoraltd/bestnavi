"use client";

import Link from "next/link";
import {
  Shield,
  Server,
  Bot,
  TrendingUp,
  Bitcoin,
  Smartphone,
  GraduationCap,
  Globe,
  ChevronRight,
} from "lucide-react";

const categories = [
  { name: "VPN", icon: Shield, href: "/ranking/vpn" },
  { name: "サーバー", icon: Server, href: "/ranking/server" },
  { name: "AIツール", icon: Bot, href: "/ranking/ai" },
  { name: "FX口座", icon: TrendingUp, href: "/ranking/fx" },
  { name: "仮想通貨", icon: Bitcoin, href: "/ranking/crypto" },
  { name: "eSIM", icon: Smartphone, href: "/ranking/esim" },
  { name: "スクール", icon: GraduationCap, href: "/ranking/school" },
  { name: "英会話", icon: Globe, href: "/ranking/english" },
];

export function HeroBanner() {
  return (
    <section
      style={{
        background: "#fff",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 16px 24px" }}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "clamp(20px, 4vw, 26px)",
            fontWeight: 800,
            color: "var(--text-primary)",
            lineHeight: 1.4,
            marginBottom: 20,
          }}
        >
          おすすめ比較ランキング
        </h1>

        {/* Category chips */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            flexWrap: "wrap",
            marginBottom: 16,
          }}
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.name}
                href={cat.href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: "#fff",
                  border: "1px solid var(--border)",
                  borderRadius: 6,
                  padding: "8px 14px",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  transition: "all 0.15s",
                }}
              >
                <Icon size={15} strokeWidth={2} />
                {cat.name}
                <ChevronRight size={13} style={{ color: "var(--text-muted)" }} />
              </Link>
            );
          })}
        </div>

        <p style={{ textAlign: "center", fontSize: 10, color: "var(--text-muted)" }}>
          ※当サイトではアフィリエイトプログラムを利用し、提携企業から報酬を受けて運営しております
        </p>
      </div>
    </section>
  );
}
