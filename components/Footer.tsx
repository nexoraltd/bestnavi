import Link from "next/link";

export function Footer() {
  return (
    <footer style={{ background: "#f9fafb", borderTop: "1px solid var(--border)", marginTop: 48 }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 24px 0" }}>

        {/* 4-column grid */}
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 40 }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{
                width: 32, height: 32,
                background: "var(--accent)",
                borderRadius: 8,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#fff", fontWeight: 800, fontSize: 16,
              }}>B</div>
              <span style={{ fontWeight: 800, fontSize: 15, color: "var(--text-primary)" }}>ベストナビ</span>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.8, color: "var(--text-secondary)", maxWidth: 240 }}>
              信頼できるランキング・比較サイト。各サービスの料金・機能・評判を比較し、あなたにぴったりの製品が見つかります。
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 style={{ color: "var(--text-primary)", fontWeight: 700, fontSize: 13, marginBottom: 14 }}>カテゴリ</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { name: "VPN", slug: "vpn" },
                { name: "レンタルサーバー", slug: "server" },
                { name: "AIツール", slug: "ai" },
                { name: "FX口座", slug: "fx" },
                { name: "仮想通貨取引所", slug: "crypto" },
                { name: "eSIM", slug: "esim" },
              ].map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/ranking/${cat.slug}`} className="footer-link">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 style={{ color: "var(--text-primary)", fontWeight: 700, fontSize: 13, marginBottom: 14 }}>リソース</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { name: "FAQ", href: "/faq" },
                { name: "お問い合わせ", href: "/contact" },
                { name: "運営者情報", href: "/about" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="footer-link">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ color: "var(--text-primary)", fontWeight: 700, fontSize: 13, marginBottom: 14 }}>法務</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { name: "プライバシーポリシー", href: "/privacy" },
                { name: "利用規約", href: "/terms" },
                { name: "広告掲載について", href: "/disclosure" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="footer-link">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div style={{
          borderTop: "1px solid var(--border)",
          padding: "20px 0",
          fontSize: 11,
          color: "var(--text-muted)",
          lineHeight: 1.8,
        }}>
          <p>※ 当サイトはアフィリエイトプログラムを利用し、提携企業から報酬を受けて運営しております。ランキングは編集部独自の基準により作成しており、広告主からの影響を受けておりません。</p>
          <p>※ 掲載情報は2026年4月時点のものです。最新情報は各公式サイトでご確認ください。</p>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid var(--border)",
          padding: "16px 0 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 8,
        }}>
          <p style={{ fontSize: 12, color: "var(--text-muted)" }}>
            &copy; 2026 ベストナビ All Rights Reserved.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            <Link href="/privacy" className="footer-link-sm">プライバシー</Link>
            <Link href="/terms" className="footer-link-sm">利用規約</Link>
            <Link href="/contact" className="footer-link-sm">お問い合わせ</Link>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link {
          font-size: 13px;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.15s;
        }
        .footer-link:hover { color: var(--accent); }
        .footer-link-sm {
          font-size: 12px;
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.15s;
        }
        .footer-link-sm:hover { color: var(--accent); }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
