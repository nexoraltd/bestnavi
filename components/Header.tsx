"use client";

import Link from "next/link";
import { useState } from "react";

const categories = [
  { name: "VPN", href: "/ranking/vpn", icon: "🔒" },
  { name: "サーバー", href: "/ranking/server", icon: "🖥️" },
  { name: "AIツール", href: "/ranking/ai", icon: "🤖" },
  { name: "FX口座", href: "/ranking/fx", icon: "📈" },
  { name: "仮想通貨", href: "/ranking/crypto", icon: "₿" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div style={{ background: "#333", color: "#ccc", fontSize: 12, padding: "6px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px", display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
          <span>🕐 最終更新: {new Date().toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric" })}</span>
        </div>
      </div>

      {/* Main header */}
      <header style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "#fff",
        borderBottom: "3px solid #ff6b35",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{
              width: 40, height: 40,
              background: "linear-gradient(135deg, #ff6b35, #ff8f42)",
              borderRadius: 10,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontWeight: 900, fontSize: 20,
              boxShadow: "0 2px 8px rgba(255,107,53,0.3)"
            }}>B</div>
            <div>
              <div style={{ fontSize: 20, fontWeight: 900, color: "#1a1a1a", lineHeight: 1.1 }}>ベストナビ</div>
              <div style={{ fontSize: 9, color: "#888", letterSpacing: 1 }}>VPN・サーバー・FX・仮想通貨 おすすめ比較</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 0 }} className="hidden md:flex">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                style={{
                  display: "flex", alignItems: "center", gap: 4,
                  padding: "8px 14px",
                  fontSize: 14, fontWeight: 700,
                  color: "#333",
                  textDecoration: "none",
                  borderRadius: 6,
                  transition: "all 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#fff4ef";
                  e.currentTarget.style.color = "#ff6b35";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#333";
                }}
              >
                <span style={{ fontSize: 16 }}>{cat.icon}</span>
                {cat.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              fontSize: 24, color: "#333", padding: 8
            }}
            aria-label="メニュー"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden" style={{
            background: "#fff",
            borderTop: "1px solid #eee",
            padding: "8px 16px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
          }}>
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "flex", alignItems: "center", gap: 8,
                  padding: "12px 8px",
                  fontSize: 15, fontWeight: 700,
                  color: "#333",
                  textDecoration: "none",
                  borderBottom: "1px solid #f0f0f0",
                }}
              >
                <span style={{ fontSize: 18 }}>{cat.icon}</span>
                {cat.name}
              </Link>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
