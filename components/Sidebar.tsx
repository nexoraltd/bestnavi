"use client";

import Link from "next/link";
import {
  Shield, Server, Bot, TrendingUp, Bitcoin, Smartphone,
  ShieldCheck, ChevronRight, Flame, FolderOpen, CheckCircle2,
  CalendarCheck, Users, Mail,
} from "lucide-react";
import { useState } from "react";
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

const trustItems = [
  { icon: CheckCircle2, color: "#2563eb", bg: "#dbeafe", title: "専門家によるレビュー", desc: "業界経験10年以上のライター陣が厳選" },
  { icon: CalendarCheck, color: "#16a34a", bg: "#bbf7d0", title: "毎月更新", desc: "最新情報を常にチェック" },
  { icon: Users, color: "#d97706", bg: "#fde68a", title: "10,000+ ユーザーが信頼", desc: "毎月の訪問者数" },
];

export function Sidebar() {
  const [email, setEmail] = useState("");

  return (
    <aside style={{ display: "flex", flexDirection: "column", gap: 20 }}>

      {/* Newsletter signup */}
      <div style={{
        background: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
        borderRadius: 16,
        padding: 20,
        border: "1px solid #bfdbfe",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <Mail size={20} strokeWidth={2} style={{ color: "var(--accent)" }} />
          <h3 style={{ fontWeight: 700, fontSize: 14, color: "var(--text-primary)" }}>最新ランキング通知</h3>
        </div>
        <p style={{ fontSize: 12, color: "var(--text-secondary)", marginBottom: 12, lineHeight: 1.6 }}>
          毎月の更新情報をメールでお届けします。
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <input
            type="email"
            placeholder="メールアドレス"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "8px 12px",
              fontSize: 13,
              borderRadius: 8,
              border: "1px solid #bfdbfe",
              background: "#fff",
              color: "var(--text-primary)",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
          <button
            style={{
              width: "100%",
              padding: "9px 0",
              fontSize: 13,
              fontWeight: 700,
              background: "var(--accent)",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "var(--accent-hover)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "var(--accent)"; }}
          >
            登録する
          </button>
        </div>
        <p style={{ fontSize: 11, color: "#6b7280", marginTop: 10 }}>
          スパムメールは送信しません。
          <Link href="/privacy" style={{ color: "var(--accent)", textDecoration: "none" }}> プライバシーポリシー</Link>
        </p>
      </div>

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

      {/* Trust section */}
      <div style={{
        background: "var(--bg-section)",
        borderRadius: 12,
        padding: 16,
        border: "1px solid var(--border)",
      }}>
        <h4 style={{ fontWeight: 700, fontSize: 12, color: "var(--text-primary)", marginBottom: 14, textTransform: "uppercase", letterSpacing: 0.5 }}>
          信頼の証
        </h4>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {trustItems.map(({ icon: Icon, color, bg, title, desc }, i) => (
            <div
              key={title}
              style={{
                display: "flex", alignItems: "flex-start", gap: 10,
                paddingBottom: i < trustItems.length - 1 ? 12 : 0,
                borderBottom: i < trustItems.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              <div style={{
                width: 30, height: 30,
                background: bg,
                borderRadius: 8,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <Icon size={14} strokeWidth={2} style={{ color }} />
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text-primary)" }}>{title}</div>
                <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2, lineHeight: 1.5 }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </aside>
  );
}
