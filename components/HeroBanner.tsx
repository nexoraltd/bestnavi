"use client";

import Link from "next/link";
import { CheckCircle2, CalendarDays, BookOpen, ArrowRight, Shield, TrendingUp, Server, Bot, Bitcoin, Smartphone, GraduationCap, Globe } from "lucide-react";

const trustBadges = [
  { icon: CheckCircle2, color: "#16a34a", bg: "#f0fdf4", text: "専門家によるレビュー済み" },
  { icon: CalendarDays, color: "#2563eb", bg: "#eff6ff", text: "毎月更新" },
  { icon: BookOpen, color: "#d97706", bg: "#fffbeb", text: "500+ 記事掲載" },
];

const categories = [
  { name: "VPN", icon: Shield, href: "/ranking/vpn" },
  { name: "FX口座", icon: TrendingUp, href: "/ranking/fx" },
  { name: "サーバー", icon: Server, href: "/ranking/server" },
  { name: "AIツール", icon: Bot, href: "/ranking/ai" },
  { name: "仮想通貨", icon: Bitcoin, href: "/ranking/crypto" },
  { name: "eSIM", icon: Smartphone, href: "/ranking/esim" },
  { name: "スクール", icon: GraduationCap, href: "/ranking/school" },
  { name: "英会話", icon: Globe, href: "/ranking/english" },
];

export function HeroBanner() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "#fff", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "52px 24px 44px" }}>
          <div className="animate-fadeInUp" style={{ maxWidth: 720 }}>
            <h1 style={{
              fontSize: "clamp(28px, 4vw, 46px)",
              fontWeight: 800,
              color: "var(--text-primary)",
              lineHeight: 1.25,
              marginBottom: 16,
            }}>
              最高の製品を<br />
              <span style={{ color: "var(--accent)" }}>ランキング比較</span>
            </h1>
            <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 28, maxWidth: 560 }}>
              VPN・FX・ホスティング・AIツール・仮想通貨など。専門家による厳選レビューで、あなたに最適な製品が見つかります。
            </p>

            {/* Trust badges — horizontal row */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 32 }}>
              {trustBadges.map(({ icon: Icon, color, bg, text }) => (
                <div key={text} style={{
                  display: "inline-flex", alignItems: "center", gap: 7,
                  padding: "8px 14px",
                  background: bg,
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                }}>
                  <Icon size={14} strokeWidth={2} style={{ color }} />
                  {text}
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/ranking/vpn" className="cta-primary" style={{ padding: "11px 28px", fontSize: 14 }}>
                ランキングを見る
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category filter */}
      <section style={{ background: "#fff", borderBottom: "1px solid var(--border)", padding: "16px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
            <span style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 600, marginRight: 4 }}>カテゴリ:</span>
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.name}
                  href={cat.href}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 5,
                    padding: "5px 12px",
                    fontSize: 12, fontWeight: 600,
                    color: "var(--text-secondary)",
                    background: "var(--bg-section)",
                    border: "1px solid var(--border)",
                    borderRadius: 20,
                    textDecoration: "none",
                    transition: "all 0.15s",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.color = "var(--accent)";
                    e.currentTarget.style.background = "var(--accent-light)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--text-secondary)";
                    e.currentTarget.style.background = "var(--bg-section)";
                  }}
                >
                  <Icon size={12} strokeWidth={2} />
                  {cat.name}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

    </>
  );
}
