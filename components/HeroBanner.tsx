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
      <section style={{ background: "#fff", borderBottom: "1px solid var(--border)", overflow: "hidden" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 24px 40px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "center",
          }} className="hero-grid">

            {/* Left: headline + trust + CTA */}
            <div className="animate-fadeInUp">
              <h1 style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 800,
                color: "var(--text-primary)",
                lineHeight: 1.25,
                marginBottom: 16,
              }}>
                最高の製品を<br />
                <span style={{ color: "var(--accent)" }}>ランキング比較</span>
              </h1>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 24, maxWidth: 420 }}>
                VPN・FX・ホスティング・AIツール・仮想通貨など。専門家による厳選レビューで、あなたに最適な製品が見つかります。
              </p>

              {/* Trust badges */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                {trustBadges.map(({ icon: Icon, color, bg, text }) => (
                  <div key={text} className="trust-badge-row" style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "8px 14px",
                    background: bg,
                    borderRadius: 8,
                    fontSize: 13,
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                    width: "fit-content",
                  }}>
                    <Icon size={15} strokeWidth={2} style={{ color }} />
                    {text}
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/ranking/vpn" className="cta-primary" style={{ padding: "11px 24px", fontSize: 14 }}>
                  ランキングを見る
                  <ArrowRight size={15} />
                </Link>
                <Link href="/about" className="cta-secondary" style={{ padding: "11px 22px", fontSize: 14 }}>
                  サイトについて
                </Link>
              </div>
            </div>

            {/* Right: stats card */}
            <div className="hero-right hidden lg:block">
              <div style={{
                background: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
                borderRadius: 20,
                padding: 32,
                border: "1px solid #bfdbfe",
                position: "relative",
              }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  {[
                    { label: "掲載記事数", value: "500+", color: "#2563eb" },
                    { label: "月間読者数", value: "10,000+", color: "#16a34a" },
                    { label: "比較カテゴリ", value: "8+", color: "#d97706" },
                    { label: "毎月更新", value: "全記事", color: "#7c3aed" },
                  ].map(({ label, value, color }) => (
                    <div key={label} style={{
                      background: "#fff",
                      borderRadius: 12,
                      padding: "16px 18px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                    }}>
                      <div style={{ fontSize: 22, fontWeight: 800, color }}>{value}</div>
                      <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>{label}</div>
                    </div>
                  ))}
                </div>
                <div style={{
                  marginTop: 16,
                  background: "#fff",
                  borderRadius: 12,
                  padding: "14px 16px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 8,
                    background: "var(--accent)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#fff", flexShrink: 0,
                  }}>✓</div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text-primary)" }}>信頼の比較情報</div>
                    <div style={{ fontSize: 11, color: "var(--text-muted)" }}>広告主に左右されない独自基準</div>
                  </div>
                </div>
              </div>
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

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-right { display: none !important; }
        }
      `}</style>
    </>
  );
}
