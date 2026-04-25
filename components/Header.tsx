"use client";

import Link from "next/link";
import { useState } from "react";
import { Shield, Server, Globe, GraduationCap, Briefcase, TrendingUp, Search, Menu, X, CreditCard, Users, UserCheck, BookOpen, Car } from "lucide-react";

const categories = [
  { name: "クレカ",   href: "/ranking/credit-card", icon: CreditCard },
  { name: "VPN",      href: "/ranking/vpn",     icon: Shield },
  { name: "FX",       href: "/ranking/fx",       icon: TrendingUp },
  { name: "サーバー", href: "/ranking/server",   icon: Server },
  { name: "英会話",   href: "/ranking/english",  icon: Globe },
  { name: "スクール", href: "/ranking/school",   icon: GraduationCap },
  { name: "キャリア", href: "/ranking/career",   icon: Briefcase },
  { name: "副業",     href: "/ranking/fukugyo",  icon: TrendingUp },
  { name: "転職",     href: "/ranking/tenshoku", icon: Users },
  { name: "派遣",     href: "/ranking/haken",    icon: UserCheck },
  { name: "就活",     href: "/ranking/shukatsu", icon: BookOpen },
  { name: "車買取",   href: "/ranking/kuruma",   icon: Car },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>

          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }}>
            <div style={{
              width: 36, height: 36,
              background: "var(--accent)",
              borderRadius: 8,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontWeight: 800, fontSize: 18,
              boxShadow: "0 2px 8px rgba(37,99,235,0.3)",
            }}>B</div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 800, color: "var(--text-primary)", lineHeight: 1.1 }}>ベストナビ</div>
              <div style={{ fontSize: 9, color: "var(--text-muted)", letterSpacing: 0.5, fontWeight: 500 }}>比較・ランキング情報</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex" style={{ alignItems: "center", gap: 0 }}>
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                style={{
                  padding: "6px 14px",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  borderRadius: 6,
                  transition: "color 0.15s, background 0.15s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--accent)";
                  e.currentTarget.style.background = "var(--accent-light)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-secondary)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {cat.name}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button
              className="hidden md:flex"
              style={{
                alignItems: "center",
                gap: 6,
                padding: "7px 14px",
                fontSize: 13,
                fontWeight: 600,
                color: "var(--text-secondary)",
                background: "var(--bg-section)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                cursor: "pointer",
                transition: "all 0.15s",
              }}
              onMouseEnter={(e) => {
                const btn = e.currentTarget as HTMLButtonElement;
                btn.style.borderColor = "var(--accent)";
                btn.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                const btn = e.currentTarget as HTMLButtonElement;
                btn.style.borderColor = "var(--border)";
                btn.style.color = "var(--text-secondary)";
              }}
            >
              <Search size={14} />
              検索
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                color: "var(--text-primary)", padding: 6,
                display: "flex", alignItems: "center",
              }}
              aria-label="メニュー"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{ background: "#fff", borderTop: "1px solid var(--border)", padding: "8px 0 12px" }}
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.name}
                href={cat.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "11px 24px",
                  fontSize: 14, fontWeight: 600,
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--bg-section)",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "var(--accent-light)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
              >
                <Icon size={16} strokeWidth={2} style={{ color: "var(--accent)" }} />
                {cat.name}ランキング
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
