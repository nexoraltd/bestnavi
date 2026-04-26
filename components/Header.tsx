"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { Shield, Server, Globe, GraduationCap, Briefcase, TrendingUp, Search, Menu, X, CreditCard, Users, UserCheck, BookOpen, Car, Building2, Calculator, Wifi, Gift, ChevronDown } from "lucide-react";

const navGroups = [
  {
    label: "金融",
    icon: CreditCard,
    items: [
      { name: "クレジットカード", href: "/ranking/credit-card", icon: CreditCard },
      { name: "法人カード",       href: "/ranking/houjin-card", icon: Building2 },
      { name: "FX",               href: "/ranking/fx",          icon: TrendingUp },
      { name: "会計ソフト",       href: "/ranking/kaikei",      icon: Calculator },
    ],
  },
  {
    label: "IT・通信",
    icon: Shield,
    items: [
      { name: "VPN",        href: "/ranking/vpn",      icon: Shield },
      { name: "サーバー",   href: "/ranking/server",   icon: Server },
      { name: "WiFi・SIM",  href: "/ranking/wifi-sim", icon: Wifi },
    ],
  },
  {
    label: "キャリア",
    icon: Users,
    items: [
      { name: "転職エージェント", href: "/ranking/tenshoku", icon: Users },
      { name: "派遣会社",         href: "/ranking/haken",    icon: UserCheck },
      { name: "就活サービス",     href: "/ranking/shukatsu", icon: BookOpen },
      { name: "副業・フリーランス", href: "/ranking/fukugyo", icon: TrendingUp },
      { name: "キャリアスクール", href: "/ranking/career",   icon: Briefcase },
    ],
  },
  {
    label: "暮らし",
    icon: Globe,
    items: [
      { name: "英会話",   href: "/ranking/english",   icon: Globe },
      { name: "スクール", href: "/ranking/school",    icon: GraduationCap },
      { name: "車買取",   href: "/ranking/kuruma",    icon: Car },
      { name: "ギフトカード", href: "/ranking/gift-card", icon: Gift },
    ],
  },
];

function DropdownGroup({ group }: { group: typeof navGroups[0] }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const Icon = group.icon;

  const show = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };
  const hide = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div style={{ position: "relative" }} onMouseEnter={show} onMouseLeave={hide}>
      <button
        style={{
          display: "flex", alignItems: "center", gap: 4,
          padding: "6px 14px",
          fontSize: 13, fontWeight: 600,
          color: open ? "var(--accent)" : "var(--text-secondary)",
          background: open ? "var(--accent-light)" : "transparent",
          border: "none", borderRadius: 6, cursor: "pointer",
          transition: "color 0.15s, background 0.15s",
          whiteSpace: "nowrap",
        }}
      >
        <Icon size={14} />
        {group.label}
        <ChevronDown size={12} style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 0.15s" }} />
      </button>

      {open && (
        <div style={{
          position: "absolute", top: "100%", left: 0,
          background: "#fff",
          border: "1px solid var(--border)",
          borderRadius: 10,
          boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
          minWidth: 180, padding: "6px 0",
          zIndex: 100,
        }}>
          {group.items.map((item) => {
            const ItemIcon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "9px 16px",
                  fontSize: 13, fontWeight: 600,
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  transition: "background 0.12s, color 0.12s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--accent-light)";
                  e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "var(--text-secondary)";
                }}
              >
                <ItemIcon size={14} strokeWidth={2} style={{ color: "var(--accent)", flexShrink: 0 }} />
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

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

          {/* Desktop Nav — 4グループのドロップダウン */}
          <nav className="hidden md:flex" style={{ alignItems: "center", gap: 0 }}>
            {navGroups.map((group) => (
              <DropdownGroup key={group.label} group={group} />
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

      {/* Mobile Menu — グループ別アコーディオン */}
      {mobileOpen && (
        <div className="md:hidden" style={{ background: "#fff", borderTop: "1px solid var(--border)", paddingBottom: 12 }}>
          {navGroups.map((group) => {
            const GroupIcon = group.icon;
            const isExpanded = mobileExpanded === group.label;
            return (
              <div key={group.label}>
                <button
                  onClick={() => setMobileExpanded(isExpanded ? null : group.label)}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    width: "100%", padding: "12px 24px",
                    fontSize: 14, fontWeight: 700,
                    color: isExpanded ? "var(--accent)" : "var(--text-primary)",
                    background: isExpanded ? "var(--accent-light)" : "transparent",
                    border: "none", borderBottom: "1px solid var(--bg-section)",
                    cursor: "pointer", textAlign: "left",
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <GroupIcon size={16} strokeWidth={2} style={{ color: "var(--accent)" }} />
                    {group.label}
                  </span>
                  <ChevronDown size={14} style={{ transform: isExpanded ? "rotate(180deg)" : "none", transition: "transform 0.15s", color: "var(--text-muted)" }} />
                </button>
                {isExpanded && group.items.map((item) => {
                  const ItemIcon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        display: "flex", alignItems: "center", gap: 10,
                        padding: "10px 24px 10px 48px",
                        fontSize: 13, fontWeight: 600,
                        color: "var(--text-secondary)",
                        textDecoration: "none",
                        borderBottom: "1px solid var(--bg-section)",
                        transition: "background 0.12s",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = "var(--accent-light)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                    >
                      <ItemIcon size={14} strokeWidth={2} style={{ color: "var(--accent)" }} />
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}
    </header>
  );
}
