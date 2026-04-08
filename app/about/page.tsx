import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = { title: "運営者情報 | ベストナビ" };

export default function AboutPage() {
  return (
    <div style={{ background: "var(--bg-warm)", minHeight: "100vh" }}>
      <Header />
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "32px 16px" }}>
        <article style={{ background: "#fff", borderRadius: 12, border: "1px solid var(--border)", padding: 32 }}>
          <h1 style={{ fontSize: 22, fontWeight: 800, marginBottom: 24, paddingBottom: 12, borderBottom: "2px solid var(--border)" }}>運営者情報</h1>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, marginBottom: 24 }}>
            <tbody>
              {[
                ["サイト名", "ベストナビ"],
                ["URL", "https://navi.next-aura.com"],
                ["運営者", "MI STUDIO（個人事業）"],
                ["お問い合わせ", "ishida@next-aura.com"],
              ].map(([label, value]) => (
                <tr key={label} style={{ borderBottom: "1px solid var(--border)" }}>
                  <td style={{ padding: "10px 14px", fontWeight: 600, background: "var(--bg-section)", width: "30%" }}>{label}</td>
                  <td style={{ padding: "10px 14px" }}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2 style={{ fontSize: 17, fontWeight: 700, marginBottom: 12 }}>サイトについて</h2>
          <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 16 }}>ベストナビは、VPN・レンタルサーバー・AIツール・FX口座・仮想通貨取引所などのサービスを実際に利用して比較し、カテゴリ別のランキングとレビューを提供する情報サイトです。</p>
          <h2 style={{ fontSize: 17, fontWeight: 700, marginBottom: 12 }}>アフィリエイト広告について</h2>
          <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.8 }}>当サイトはアフィリエイトプログラムを利用しており、掲載リンク経由でサービスに申し込まれた場合、当サイトに報酬が発生することがあります。ランキングの順位や評価は広告主からの影響を受けず、編集部独自の基準で作成しています。</p>
        </article>
      </div>
      <Footer />
    </div>
  );
}
