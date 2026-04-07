import Link from "next/link";

export function Footer() {
  return (
    <footer style={{
      background: "#2a2a2a",
      color: "#ccc",
      padding: "40px 0 24px",
      marginTop: 48,
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 32,
          marginBottom: 32,
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <div style={{
                width: 32, height: 32,
                background: "#ff6b35", borderRadius: 8,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#fff", fontWeight: 900, fontSize: 16
              }}>B</div>
              <span style={{ fontWeight: 900, fontSize: 16, color: "#fff" }}>ベストナビ</span>
            </div>
            <p style={{ fontSize: 12, lineHeight: 1.8, color: "#999" }}>
              信頼できる比較ランキングサイト。プロの編集チームが実際に使って検証した忖度なしの情報をお届けします。
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 900, fontSize: 14, marginBottom: 12 }}>カテゴリ</h4>
            {[
              { name: "VPN", slug: "vpn" },
              { name: "レンタルサーバー", slug: "server" },
              { name: "AIツール", slug: "ai" },
              { name: "FX口座", slug: "fx" },
              { name: "仮想通貨取引所", slug: "crypto" },
              { name: "eSIM", slug: "esim" },
              { name: "セキュリティソフト", slug: "security" },
            ].map((cat) => (
              <Link key={cat.slug} href={`/ranking/${cat.slug}`} style={{ display: "block", color: "#999", fontSize: 13, marginBottom: 8, textDecoration: "none" }}>
                › {cat.name}ランキング
              </Link>
            ))}
          </div>

          {/* Info */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 900, fontSize: 14, marginBottom: 12 }}>サイト情報</h4>
            <Link href="/about" style={{ display: "block", color: "#999", fontSize: 13, marginBottom: 8, textDecoration: "none" }}>› 運営者情報</Link>
            <Link href="/privacy" style={{ display: "block", color: "#999", fontSize: 13, marginBottom: 8, textDecoration: "none" }}>› プライバシーポリシー</Link>
            <Link href="/terms" style={{ display: "block", color: "#999", fontSize: 13, marginBottom: 8, textDecoration: "none" }}>› 利用規約</Link>
            <Link href="/contact" style={{ display: "block", color: "#999", fontSize: 13, marginBottom: 8, textDecoration: "none" }}>› お問い合わせ</Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div style={{
          borderTop: "1px solid #444",
          paddingTop: 20,
          fontSize: 11, color: "#777", lineHeight: 1.8,
          marginBottom: 16,
        }}>
          <p>※ 当サイトはアフィリエイトプログラムを利用し、提携企業から報酬を受けて運営しております。ランキングは編集部独自の基準により作成しており、広告主からの影響を受けておりません。</p>
          <p>※ 掲載情報は2026年4月時点のものです。最新情報は各公式サイトでご確認ください。</p>
        </div>

        <div style={{
          textAlign: "center", fontSize: 12, color: "#666",
          borderTop: "1px solid #444", paddingTop: 16,
        }}>
          © 2026 ベストナビ All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
