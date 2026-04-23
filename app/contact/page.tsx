import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import ContactForm from "./ContactForm";

export const metadata = { title: "お問い合わせ | ベストナビ" };

export default function ContactPage() {
  return (
    <div style={{ background: "var(--bg-warm)", minHeight: "100vh" }}>
      <Header />
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "32px 16px" }}>
        <article style={{ background: "#fff", borderRadius: 12, border: "1px solid var(--border)", padding: 32 }}>
          <h1 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8, paddingBottom: 12, borderBottom: "2px solid var(--border)" }}>お問い合わせ</h1>
          <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 24 }}>
            記事内容に関するご質問、広告掲載のご相談、その他ご要望がございましたらフォームよりご連絡ください。
          </p>
          <ContactForm />
        </article>
      </div>
      <Footer />
    </div>
  );
}
