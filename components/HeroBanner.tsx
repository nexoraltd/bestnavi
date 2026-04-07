"use client";

import { useEffect, useState } from "react";

function CountdownTimer() {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calcRemaining = () => {
      const now = new Date();
      const end = new Date(now);
      end.setHours(23, 59, 59, 999);
      const diff = end.getTime() - now.getTime();
      return {
        hours: Math.floor(diff / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      };
    };
    setTime(calcRemaining());
    const interval = setInterval(() => setTime(calcRemaining()), 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="countdown">
      <span style={{ fontSize: 12, marginRight: 8 }}>⏰ 本日中のお申込みなら</span>
      <span className="countdown-digit">{pad(time.hours)}</span>
      <span className="countdown-label">時間</span>
      <span className="countdown-digit">{pad(time.minutes)}</span>
      <span className="countdown-label">分</span>
      <span className="countdown-digit">{pad(time.seconds)}</span>
      <span className="countdown-label">秒</span>
    </div>
  );
}

const logos = [
  { name: "NordVPN", color: "#4687ff" },
  { name: "ExpressVPN", color: "#da3940" },
  { name: "Xserver", color: "#e94e1b" },
  { name: "Coincheck", color: "#1d8348" },
  { name: "bitFlyer", color: "#2196f3" },
];

export function HeroBanner() {
  return (
    <section style={{
      background: "linear-gradient(180deg, #fff 0%, #fef8f4 100%)",
      borderBottom: "1px solid #eee",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Background decorative circles */}
      <div style={{
        position: "absolute", top: -60, right: -60,
        width: 200, height: 200, borderRadius: "50%",
        background: "rgba(255,107,53,0.05)"
      }} />
      <div style={{
        position: "absolute", bottom: -40, left: -40,
        width: 160, height: 160, borderRadius: "50%",
        background: "rgba(255,107,53,0.03)"
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 16px 32px" }}>
        {/* 2026 Badge */}
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "#ff6b35", color: "#fff",
            padding: "6px 20px", borderRadius: 50,
            fontSize: 13, fontWeight: 700,
            boxShadow: "0 2px 8px rgba(255,107,53,0.3)"
          }}>
            ✨ 2026年 最新版
          </span>
        </div>

        {/* Main Heading */}
        <h1 style={{
          textAlign: "center",
          fontSize: "clamp(24px, 5vw, 38px)",
          fontWeight: 900,
          color: "#1a1a1a",
          lineHeight: 1.4,
          marginBottom: 8
        }}>
          本当に<span style={{ color: "#ff6b35", position: "relative" }}>
            おすすめ
            <span style={{
              position: "absolute", bottom: -2, left: 0, right: 0,
              height: 3, background: "#ff6b35", borderRadius: 2
            }} />
          </span>の<br />
          厳選ランキング<span style={{ fontSize: "0.7em", color: "#888" }}>5選！</span>
        </h1>

        <p style={{ textAlign: "center", color: "#666", fontSize: 14, marginBottom: 24, maxWidth: 500, margin: "0 auto 24px" }}>
          プロの編集チームが<strong>実際に使って検証</strong>。忖度なしのガチランキング。
        </p>

        {/* Trust Badges Row */}
        <div style={{
          display: "flex", justifyContent: "center", gap: 16,
          marginBottom: 28, flexWrap: "wrap"
        }}>
          {[
            { icon: "🏅", text: "最短即日", sub: "対応" },
            { icon: "🔒", text: "安心安全", sub: "徹底検証" },
            { icon: "💰", text: "初心者でも", sub: "簡単申込" },
          ].map((badge) => (
            <div key={badge.text} style={{
              display: "flex", flexDirection: "column", alignItems: "center",
              background: "#fff", border: "2px solid #f5d060",
              borderRadius: 12, padding: "12px 20px",
              minWidth: 110,
              boxShadow: "0 2px 8px rgba(218,165,32,0.15)"
            }}>
              <span style={{ fontSize: 28 }}>{badge.icon}</span>
              <span style={{ fontSize: 14, fontWeight: 900, color: "#1a1a1a" }}>{badge.text}</span>
              <span style={{ fontSize: 10, color: "#888" }}>{badge.sub}</span>
            </div>
          ))}
        </div>

        {/* Countdown */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
          <CountdownTimer />
        </div>

        {/* Company Logos */}
        <div style={{
          display: "flex", justifyContent: "center", gap: 12,
          flexWrap: "wrap", marginBottom: 8
        }}>
          {logos.map((logo) => (
            <div key={logo.name} style={{
              background: "#fff",
              border: "1px solid #e8e5e0",
              borderRadius: 8,
              padding: "10px 20px",
              fontSize: 14,
              fontWeight: 700,
              color: logo.color,
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              cursor: "pointer",
              transition: "all 0.15s",
            }}>
              {logo.name}
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", fontSize: 10, color: "#aaa" }}>
          ※当サイトではアフィリエイトプログラムを利用し、提携企業から報酬を受けて運営しております
        </p>
      </div>
    </section>
  );
}
