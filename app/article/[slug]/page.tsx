"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";

export default function ArticlePage({ params }: { params: { slug: string } }) {
  return (
    <div style={{ background: "var(--bg-warm)", minHeight: "100vh" }}>
      <Header />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 16px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 32, alignItems: "start" }} className="main-grid">
          <main>
            <article style={{ background: "#fff", borderRadius: 12, border: "1px solid var(--border)", padding: 32, boxShadow: "var(--shadow-card)" }}>
              <div style={{ fontSize: 12, color: "#888", marginBottom: 8 }}>2026年4月7日</div>
              <h1 style={{ fontSize: 28, fontWeight: 900, marginBottom: 16, lineHeight: 1.4 }}>
                記事タイトル: {params.slug}
              </h1>
              <p style={{ color: "#555", lineHeight: 1.8, marginBottom: 24 }}>
                記事コンテンツがここに表示されます。Contentful CMS 統合後に動的コンテンツに差し替えます。
              </p>
              <a href="#" className="cta-primary">公式サイトへ →</a>
            </article>
          </main>
          <div className="sidebar-area"><Sidebar /></div>
        </div>
      </div>
      <Footer />
      <style>{`@media(max-width:768px){.main-grid{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}
