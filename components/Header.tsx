"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Shield,
  Server,
  Bot,
  TrendingUp,
  Bitcoin,
  Menu,
  X,
} from "lucide-react";

const categories = [
  { name: "VPN", href: "/ranking/vpn", icon: Shield },
  { name: "サーバー", href: "/ranking/server", icon: Server },
  { name: "AIツール", href: "/ranking/ai", icon: Bot },
  { name: "FX口座", href: "/ranking/fx", icon: TrendingUp },
  { name: "仮想通貨", href: "/ranking/crypto", icon: Bitcoin },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "#fff",
        borderBottom: "1px solid var(--border)",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 56,
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              background: "var(--accent)",
              borderRadius: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: 800,
              fontSize: 16,
            }}
          >
            B
          </div>
          <div>
            <div
              style={{
                fontSize: 17,
                fontWeight: 800,
                color: "var(--text-primary)",
                lineHeight: 1.1,
              }}
            >
              ベストナビ
            </div>
            <div style={{ fontSize: 9, color: "var(--text-muted)", letterSpacing: 0.5 }}>
              比較・ランキング情報サイト
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex" style={{ alignItems: "center", gap: 2 }}>
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.name}
                href={cat.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  padding: "6px 12px",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  borderRadius: 6,
                  transition: "all 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--bg-section)";
                  e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "var(--text-secondary)";
                }}
              >
                <Icon size={15} strokeWidth={2} />
                {cat.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--text-primary)",
            padding: 6,
            display: "flex",
            alignItems: "center",
          }}
          aria-label="メニュー"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            background: "#fff",
            borderTop: "1px solid var(--border)",
            padding: "4px 0",
          }}
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.name}
                href={cat.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "12px 20px",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--bg-section)",
                }}
              >
                <Icon size={17} strokeWidth={2} />
                {cat.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
