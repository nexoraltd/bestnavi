import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = { title: "プライバシーポリシー | ベストナビ" };

export default function PrivacyPage() {
  return (
    <div style={{ background: "var(--bg-warm)", minHeight: "100vh" }}>
      <Header />
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "32px 16px" }}>
        <article style={{ background: "#fff", borderRadius: 12, border: "1px solid var(--border)", padding: 32, fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.8 }}>
          <h1 style={{ fontSize: 22, fontWeight: 800, marginBottom: 24, paddingBottom: 12, borderBottom: "2px solid var(--border)", color: "var(--text-primary)" }}>プライバシーポリシー</h1>

          <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, color: "var(--text-primary)" }}>アクセス解析について</h2>
          <p style={{ marginBottom: 20 }}>当サイトでは、アクセス状況を把握するためにGoogle Analyticsを利用しています。このツールはCookieを使用してデータを収集しますが、個人を特定する情報は含まれません。Cookieはブラウザの設定から無効にすることができます。</p>

          <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, color: "var(--text-primary)" }}>広告・アフィリエイトについて</h2>
          <p style={{ marginBottom: 20 }}>当サイトはアフィリエイトプログラムを利用しており、紹介リンク経由でサービスに申し込まれた場合、当サイトに報酬が発生することがあります。掲載するランキングや評価はこれにより影響を受けません。</p>

          <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, color: "var(--text-primary)" }}>免責事項</h2>
          <p style={{ marginBottom: 20 }}>当サイトの情報は正確性を期していますが、内容の完全性・最新性を保証するものではありません。掲載情報をご利用の際は、必ず各サービスの公式サイトにてご確認ください。</p>

          <p style={{ marginTop: 24, fontSize: 12, color: "var(--text-muted)" }}>制定日: 2026年4月</p>
        </article>
      </div>
      <Footer />
    </div>
  );
}
