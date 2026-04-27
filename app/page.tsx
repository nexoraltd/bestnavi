import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { CATEGORY_MAP } from "@/lib/wordpress";
import { getCategoryIcon } from "@/lib/category-icons";
import Link from "next/link";

const PORTAL_CATEGORIES = ["vpn", "server", "english", "school", "esim", "career", "fukugyo", "fx"];

const faqItems = [
  {
    question: "ベストナビとはどんなサイトですか？",
    answer: "VPN・レンタルサーバー・オンライン英会話・プログラミングスクール・キャリアサービス・副業支援など、各カテゴリのランキングと詳細レビューを提供しています。",
  },
  {
    question: "ランキングの基準は何ですか？",
    answer: "各サービスの公式情報・料金・機能・ユーザー評判をもとに総合的に評価しています。実際に提携・利用しているサービスのみを掲載しています。",
  },
  {
    question: "アフィリエイトリンクが含まれていますか？",
    answer: "はい。当サイトはアフィリエイトプログラムを利用しており、リンク経由でサービスに申し込むと当サイトに報酬が発生する場合があります。ランキング順位への影響はありません。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function Home() {
  return (
    <div style={{ background: "var(--bg-warm)", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />

      {/* Compact hero */}
      <div style={{ background: "#fff", borderBottom: "1px solid var(--border)", padding: "18px 16px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h1 style={{ fontSize: 20, fontWeight: 800, marginBottom: 5, color: "var(--text-primary)" }}>
            デジタルサービスの比較ランキング
          </h1>
          <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
            VPN・レンタルサーバー・英会話・プログラミングスクール・eSIM・副業など、各カテゴリのおすすめサービスを比較ランキングで紹介しています。
          </p>
        </div>
      </div>

      {/* Category tab bar */}
      <div style={{ background: "#fff", borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", overflowX: "auto" }}>
          <div style={{ display: "flex", minWidth: "max-content" }}>
            {PORTAL_CATEGORIES.map((key) => {
              const meta = CATEGORY_MAP[key];
              if (!meta) return null;
              const Icon = getCategoryIcon(meta.iconKey);
              const shortTitle = meta.title
                .replace("比較ランキング", "")
                .replace("比較", "")
                .replace("ランキング", "")
                .trim();
              return (
                <Link
                  key={key}
                  href={`/ranking/${key}`}
                  className="tab-link"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    padding: "11px 14px",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    borderBottom: "2px solid transparent",
                  }}
                >
                  <Icon size={13} strokeWidth={2} />
                  {shortTitle}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Portal grid */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 16px" }}>
        <h2 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12, color: "var(--text-primary)" }}>
          カテゴリから探す
        </h2>
        <div
          className="portal-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}
        >
          {PORTAL_CATEGORIES.map((key) => {
            const meta = CATEGORY_MAP[key];
            if (!meta) return null;
            const Icon = getCategoryIcon(meta.iconKey);
            return (
              <Link key={key} href={`/ranking/${key}`} style={{ textDecoration: "none" }}>
                <div
                  className="portal-card"
                  style={{
                    background: "#fff",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-md)",
                    padding: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: "var(--bg-section)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={19} strokeWidth={2} style={{ color: "var(--accent)" }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text-primary)", marginBottom: 2 }}>
                      {meta.title}
                    </div>
                    <div style={{ fontSize: 12, color: "var(--text-muted)" }}>
                      {meta.productCount}サービス比較
                    </div>
                  </div>
                  <div style={{ fontSize: 12, color: "var(--accent)", fontWeight: 600, whiteSpace: "nowrap" }}>
                    見る →
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div style={{ marginTop: 32 }}>
          <FAQ items={faqItems} />
        </div>
      </div>

      <Footer />

      <style>{`
        @media (max-width: 600px) { .portal-grid { grid-template-columns: 1fr !important; } }
        .portal-card { transition: box-shadow 0.15s, border-color 0.15s; }
        .portal-card:hover { box-shadow: var(--shadow-md); border-color: var(--accent) !important; }
        .tab-link:hover { color: var(--accent) !important; border-bottom-color: var(--accent) !important; }
      `}</style>
    </div>
  );
}
