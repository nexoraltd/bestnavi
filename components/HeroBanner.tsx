"use client";

import Link from "next/link";
import { Shield, Server, Globe, GraduationCap, Briefcase, TrendingUp } from "lucide-react";


const categories = [
  { name: "VPN",      icon: Shield,         href: "/ranking/vpn" },
  { name: "サーバー", icon: Server,         href: "/ranking/server" },
  { name: "英会話",   icon: Globe,          href: "/ranking/english" },
  { name: "スクール", icon: GraduationCap,  href: "/ranking/school" },
  { name: "キャリア", icon: Briefcase,      href: "/ranking/career" },
  { name: "副業",     icon: TrendingUp,     href: "/ranking/fukugyo" },
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
              VPN・レンタルサーバー・オンライン英会話・プログラミングスクール・ITキャリア・副業など、各サービスを比較してあなたに合った製品が見つかります。
            </p>

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
