import { Header } from "@/components/Header";
import { HeroBanner } from "@/components/HeroBanner";
import { FAQ } from "@/components/FAQ";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { CategorySections } from "@/components/CategorySections";
import { getPostsByCategory, CATEGORY_MAP } from "@/lib/wordpress";

const faqItems = [
  {
    question: "ベストナビとはどんなサイトですか？",
    answer:
      "VPN・レンタルサーバー・オンライン英会話・プログラミングスクール・キャリアサービス・副業支援など、各種サービスを実際に比較し、カテゴリ別のランキングと詳細レビューを提供しています。",
  },
  {
    question: "ランキングの基準は何ですか？",
    answer:
      "各サービスの公式情報・料金・機能・ユーザー評判をもとに総合的に評価しています。実際に提携・利用しているサービスのみを掲載しています。",
  },
  {
    question: "アフィリエイトリンクが含まれていますか？",
    answer:
      "はい。当サイトはアフィリエイトプログラムを利用しており、リンク経由でサービスに申し込むと当サイトに報酬が発生する場合があります。ランキング順位への影響はありません。",
  },
];

const CATEGORY_ORDER = ["vpn", "fx", "server", "english", "school", "career", "fukugyo"];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqItems.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": { "@type": "Answer", "text": item.answer }
  }))
};

export default async function Home() {
  const categoryGroups = (await Promise.all(
    CATEGORY_ORDER
      .filter((key) => CATEGORY_MAP[key])
      .map(async (key) => {
        const meta = CATEGORY_MAP[key];
        const posts = (await getPostsByCategory(meta.wpId)).slice(0, 6);
        return { key, ...meta, posts };
      })
  )).filter((g) => g.posts.length > 0);

  return (
    <div style={{ background: "var(--bg-warm)", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Header />
      <HeroBanner />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 300px",
            gap: 32,
            alignItems: "start",
          }}
          className="main-grid"
        >
          <main>
            <CategorySections groups={categoryGroups} />

            {/* FAQ */}
            <div style={{ padding: "28px 0" }}>
              <FAQ items={faqItems} />
            </div>
          </main>

          <div className="sidebar-area" style={{ paddingTop: 24 }}>
            <Sidebar />
          </div>
        </div>
      </div>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .main-grid { grid-template-columns: 1fr !important; }
          .sidebar-area { order: 2; }
        }
        .article-row:hover { box-shadow: var(--shadow-md); }
      `}</style>
    </div>
  );
}
