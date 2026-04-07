"use client";

const categories = [
  { name: "VPN", icon: "🔒", href: "/ranking/vpn" },
  { name: "サーバー", icon: "🖥️", href: "/ranking/server" },
  { name: "AIツール", icon: "🤖", href: "/ranking/ai" },
  { name: "FX口座", icon: "📈", href: "/ranking/fx" },
  { name: "仮想通貨", icon: "₿", href: "/ranking/crypto" },
  { name: "eSIM", icon: "📱", href: "/ranking/esim" },
  { name: "スクール", icon: "🎓", href: "/ranking/school" },
  { name: "英会話", icon: "🌍", href: "/ranking/english" },
];

export function HeroBanner() {
  return (
    <section style={{
      background: "linear-gradient(180deg, #fff 0%, #fef8f4 100%)",
      borderBottom: "1px solid #eee",
      position: "relative",
      overflow: "hidden"
    }}>
      <div style={{
        position: "absolute", top: -60, right: -60,
        width: 200, height: 200, borderRadius: "50%",
        background: "rgba(255,107,53,0.05)"
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
            2026年4月 更新
          </span>
        </div>

        {/* Main Heading */}
        <h1 style={{
          textAlign: "center",
          fontSize: "clamp(24px, 5vw, 38px)",
          fontWeight: 900,
          color: "#1a1a1a",
          lineHeight: 1.4,
          marginBottom: 12
        }}>
          VPN・サーバー・FX・仮想通貨<br />
          <span style={{ color: "#ff6b35" }}>比較ランキング</span>
        </h1>

        <p style={{ textAlign: "center", color: "#666", fontSize: 14, marginBottom: 28, maxWidth: 520, margin: "0 auto 28px" }}>
          各サービスの料金・機能・評判を比較し、カテゴリ別にランキング形式でまとめています。
        </p>

        {/* Category Quick Links */}
        <div style={{
          display: "flex", justifyContent: "center", gap: 12,
          flexWrap: "wrap", marginBottom: 12
        }}>
          {categories.map((cat) => (
            <a key={cat.name} href={cat.href} style={{
              display: "flex", alignItems: "center", gap: 6,
              background: "#fff",
              border: "1px solid #e8e5e0",
              borderRadius: 8,
              padding: "10px 20px",
              fontSize: 14,
              fontWeight: 700,
              color: "#333",
              textDecoration: "none",
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              transition: "all 0.15s",
            }}>
              <span>{cat.icon}</span>
              {cat.name}
            </a>
          ))}
        </div>

        <p style={{ textAlign: "center", fontSize: 10, color: "#aaa" }}>
          ※当サイトではアフィリエイトプログラムを利用し、提携企業から報酬を受けて運営しております
        </p>
      </div>
    </section>
  );
}
