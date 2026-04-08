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
          <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, color: "var(--text-primary)" }}>アクセス解析ツール</h2>
          <p style={{ marginBottom: 16 }}>当サイトでは、Google Analytics（Google Tag Manager: GT-MJKTVK4Z）およびMicrosoft Clarityを利用しています。これらのツールはCookieを使用してトラフィックデータを収集しますが、個人を特定する情報は含まれません。</p>
          <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, color: "var(--text-primary)" }}>アフィリエイトプログラム</h2>
          <p style={{ marginBottom: 16 }}>当サイトは以下のアフィリエイトプログラムに参加しています: A8.net、AccessTrade、もしもアフィリエイト、NordVPN、Surfshark。リンク経由でサービスに申し込まれた場合、当サイトに報酬が発生します。</p>
          <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, color: "var(--text-primary)" }}>Cookieについて</h2>
          <p style={{ marginBottom: 16 }}>当サイトではアクセス解析およびアフィリエイトプログラムの計測のためにCookieを使用しています。ブラウザの設定でCookieを無効にすることも可能ですが、一部機能が制限される場合があります。</p>
          <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, color: "var(--text-primary)" }}>個人情報の取り扱い</h2>
          <p>当サイトでは、お問い合わせいただいた際のメールアドレス以外の個人情報を収集していません。収集した情報はお問い合わせへの対応のみに使用し、第三者に提供することはありません。</p>
          <p style={{ marginTop: 24, fontSize: 12, color: "var(--text-muted)" }}>制定日: 2026年4月</p>
        </article>
      </div>
      <Footer />
    </div>
  );
}
