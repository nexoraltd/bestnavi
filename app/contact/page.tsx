import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mail } from "lucide-react";

export const metadata = { title: "お問い合わせ | ベストナビ" };

export default function ContactPage() {
  return (
    <div style={{ background: "var(--bg-warm)", minHeight: "100vh" }}>
      <Header />
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "32px 16px" }}>
        <article style={{ background: "#fff", borderRadius: 12, border: "1px solid var(--border)", padding: 32, textAlign: "center" }}>
          <h1 style={{ fontSize: 22, fontWeight: 800, marginBottom: 24, paddingBottom: 12, borderBottom: "2px solid var(--border)" }}>お問い合わせ</h1>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 16 }}>
            <Mail size={20} style={{ color: "var(--accent)" }} />
            <span style={{ fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }}>ishida@next-aura.com</span>
          </div>
          <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.8 }}>記事内容に関するお問い合わせ、広告掲載のご相談、その他ご質問がございましたら上記メールアドレスまでご連絡ください。通常2営業日以内にご返信いたします。</p>
        </article>
      </div>
      <Footer />
    </div>
  );
}
