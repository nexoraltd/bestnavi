import { Header } from "@/components/Header";
import { HeroBanner } from "@/components/HeroBanner";
import { FAQ } from "@/components/FAQ";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { getAllPosts, CATEGORY_MAP } from "@/lib/wordpress";
import Link from "next/link";

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/&[^;]+;/g, " ").trim();
}

const faqItems = [
  {
    question: "ベストナビとはどんなサイトですか？",
    answer:
      "VPN、レンタルサーバー、AIツール、FX口座、仮想通貨取引所などのサービスを実際に比較し、カテゴリ別のランキングと詳細レビューを提供しています。",
  },
  {
    question: "ランキングの基準は何ですか？",
    answer:
      "各サービスの公式情報・料金・機能・ユーザー評判をもとに総合的に評価しています。ランキングは毎月更新しています。",
  },
  {
    question: "アフィリエイトリンクが含まれていますか？",
    answer:
      "はい。当サイトはアフィリエイトプログラムを利用しており、リンク経由でサービスに申し込むと当サイトに報酬が発生する場合があります。ランキング順位には影響しません。",
  },
];

export default async function Home() {
  const allPosts = await getAllPosts();

  // Group posts by category
  const categoryGroups = Object.entries(CATEGORY_MAP)
    .map(([key, meta]) => {
      const posts = allPosts
        .filter((p) => p.categories.includes(meta.wpId))
        .slice(0, 5);
      return { key, ...meta, posts };
    })
    .filter((g) => g.posts.length > 0);

  return (
    <div style={{ background: "var(--bg-warm)", minHeight: "100vh" }}>
      <Header />
      <HeroBanner />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 16px" }}>
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
            {/* Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 12,
                marginBottom: 32,
              }}
              className="stats-grid"
            >
              <div
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  padding: "20px 16px",
                  textAlign: "center",
                  border: "1px solid #eee",
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 900,
                    color: "#ff6b35",
                  }}
                >
                  {allPosts.length}
                </div>
                <div style={{ fontSize: 12, color: "#888", marginTop: 4 }}>
                  レビュー記事
                </div>
              </div>
              <div
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  padding: "20px 16px",
                  textAlign: "center",
                  border: "1px solid #eee",
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 900,
                    color: "#ff6b35",
                  }}
                >
                  {categoryGroups.length}
                </div>
                <div style={{ fontSize: 12, color: "#888", marginTop: 4 }}>
                  カテゴリ
                </div>
              </div>
              <div
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  padding: "20px 16px",
                  textAlign: "center",
                  border: "1px solid #eee",
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 900,
                    color: "#ff6b35",
                  }}
                >
                  毎月
                </div>
                <div style={{ fontSize: 12, color: "#888", marginTop: 4 }}>
                  更新頻度
                </div>
              </div>
            </div>

            {/* Category Sections */}
            {categoryGroups.map((group) => (
              <section key={group.key} style={{ marginBottom: 40 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 16,
                  }}
                >
                  <div className="section-header" style={{ marginBottom: 0 }}>
                    <span style={{ fontSize: 22 }}>{group.icon}</span>
                    <h2 style={{ fontSize: 18 }}>{group.title}</h2>
                  </div>
                  <Link
                    href={`/ranking/${group.key}`}
                    style={{
                      fontSize: 13,
                      color: "#ff6b35",
                      textDecoration: "none",
                      fontWeight: 700,
                      whiteSpace: "nowrap",
                    }}
                  >
                    すべて見る →
                  </Link>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  {group.posts.map((post) => {
                    const excerpt = stripHtml(post.excerpt.rendered).slice(
                      0,
                      80
                    );
                    return (
                      <Link
                        key={post.id}
                        href={`/post/${post.slug}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <div
                          style={{
                            background: "#fff",
                            borderRadius: 10,
                            padding: "14px 18px",
                            border: "1px solid #f0f0f0",
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                            transition: "box-shadow 0.2s",
                          }}
                          className="article-row"
                        >
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div
                              style={{
                                fontSize: 14,
                                fontWeight: 700,
                                color: "#1a1a1a",
                                lineHeight: 1.5,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                              }}
                            >
                              {stripHtml(post.title.rendered)}
                            </div>
                            {excerpt && (
                              <div
                                style={{
                                  fontSize: 12,
                                  color: "#999",
                                  marginTop: 2,
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {excerpt}
                              </div>
                            )}
                          </div>
                          <span style={{ color: "#ccc", fontSize: 16 }}>
                            →
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </section>
            ))}

            {/* FAQ */}
            <div style={{ marginBottom: 40 }}>
              <FAQ items={faqItems} />
            </div>
          </main>

          <div className="sidebar-area">
            <Sidebar />
          </div>
        </div>
      </div>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .main-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .sidebar-area { order: 2; }
        }
        .article-row:hover { box-shadow: 0 2px 12px rgba(0,0,0,0.06); }
      `}</style>
    </div>
  );
}
