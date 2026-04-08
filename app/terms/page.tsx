import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = { title: "利用規約 | ベストナビ" };

export default function TermsPage() {
  return (
    <div style={{ background: "var(--bg-warm)", minHeight: "100vh" }}>
      <Header />
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "32px 16px" }}>
        <article style={{ background: "#fff", borderRadius: 12, border: "1px solid var(--border)", padding: 32, fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.8 }}>
          <h1 style={{ fontSize: 22, fontWeight: 800, marginBottom: 24, paddingBottom: 12, borderBottom: "2px solid var(--border)", color: "var(--text-primary)" }}>利用規約</h1>
          <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, color: "var(--text-primary)" }}>掲載情報について</h2>
          <p style={{ marginBottom: 16 }}>当サイトに掲載されている情報は、可能な限り正確な情報を提供するよう努めていますが、正確性や完全性を保証するものではありません。サービスの料金・機能・キャンペーン内容は各公式サイトでご確認ください。</p>
          <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, color: "var(--text-primary)" }}>アフィリエイトリンク</h2>
          <p style={{ marginBottom: 16 }}>当サイトにはアフィリエイトリンクが含まれています。リンク経由でサービスに申し込まれた場合、当サイトに報酬が発生することがあります。これによりユーザーに追加費用が発生することはありません。</p>
          <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, color: "var(--text-primary)" }}>免責事項</h2>
          <p style={{ marginBottom: 16 }}>当サイトの情報を利用して生じた損害について、当サイト運営者は一切の責任を負いません。投資・金融商品に関する情報は、投資判断の参考としてのみご利用ください。</p>
          <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, color: "var(--text-primary)" }}>著作権</h2>
          <p>当サイトに掲載されている記事・画像・デザインの著作権は当サイト運営者に帰属します。無断転載・複製を禁じます。</p>
          <p style={{ marginTop: 24, fontSize: 12, color: "var(--text-muted)" }}>制定日: 2026年4月</p>
        </article>
      </div>
      <Footer />
    </div>
  );
}
