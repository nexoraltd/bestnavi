import { Header } from "@/components/Header";
import { HeroBanner } from "@/components/HeroBanner";
import { FAQ } from "@/components/FAQ";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { getPostsByCategory, CATEGORY_MAP, isHighCvr } from "@/lib/wordpress";
import { getCategoryIcon } from "@/lib/category-icons";
import Link from "next/link";
import { ChevronRight, ArrowRight, Clock, ShieldCheck, Tag, Award } from "lucide-react";

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/&[^;]+;/g, " ").trim();
}

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

const CATEGORY_ORDER = ["vpn", "server", "english", "school", "career", "fukugyo"];

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
            {/* Category Sections with alternating backgrounds */}
            {categoryGroups.map((group, groupIdx) => {
              const Icon = getCategoryIcon(group.iconKey);
              const [firstPost, ...restPosts] = group.posts;
              const firstTitle = firstPost ? stripHtml(firstPost.title.rendered) : "";
              const firstExcerpt = firstPost ? stripHtml(firstPost.excerpt.rendered).slice(0, 120) : "";
              const isAlt = groupIdx % 2 === 1;

              return (
                <section
                  key={group.key}
                  style={{
                    margin: "0 -16px",
                    padding: "28px 16px",
                    background: isAlt ? "var(--bg-section)" : "transparent",
                    borderTop: groupIdx === 0 ? "none" : "1px solid var(--border)",
                  }}
                >
                  {/* Section Header with trust badge */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div
                        style={{
                          width: 30,
                          height: 30,
                          borderRadius: 6,
                          background: "var(--accent)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Icon size={16} strokeWidth={2} style={{ color: "#fff" }} />
                      </div>
                      <h2 style={{ fontSize: 18, fontWeight: 800 }}>{group.title}</h2>
                    </div>
                    <Link
                      href={`/ranking/${group.key}`}
                      style={{
                        fontSize: 13,
                        color: "var(--accent)",
                        textDecoration: "none",
                        fontWeight: 600,
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      すべて見る
                      <ChevronRight size={14} />
                    </Link>
                  </div>

                  {/* Trust badge + tags row */}
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4,
                        fontSize: 11,
                        fontWeight: 600,
                        color: "var(--green)",
                        background: "var(--green-light)",
                        padding: "3px 8px",
                        borderRadius: 4,
                      }}
                    >
                      <ShieldCheck size={12} />
                      {group.trustBadge}
                    </span>
                    {group.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 3,
                          fontSize: 11,
                          color: "var(--text-secondary)",
                          background: isAlt ? "#fff" : "var(--bg-section)",
                          padding: "3px 8px",
                          borderRadius: 4,
                        }}
                      >
                        <Tag size={10} />
                        {tag}
                      </span>
                    ))}
                    <span style={{ fontSize: 11, color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 3 }}>
                      <Clock size={10} />
                      2026年4月更新
                    </span>
                  </div>

                  {/* 1位カード — 大型表示 */}
                  {firstPost && (
                    <Link
                      href={`/post/${firstPost.slug}`}
                      style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: 10 }}
                    >
                      <div
                        className="rank-card top-pick-card"
                        style={{
                          borderRadius: "var(--radius-lg)",
                          border: "2px solid var(--gold-border)",
                          padding: "20px",
                          position: "relative",
                        }}
                      >
                        {/* Gold banner */}
                        <div
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 20,
                            background: "linear-gradient(135deg, #f59e0b, #d97706)",
                            color: "#fff",
                            fontSize: 11,
                            fontWeight: 700,
                            padding: "3px 12px",
                            borderRadius: "0 0 6px 6px",
                            display: "flex",
                            alignItems: "center",
                            gap: 4,
                          }}
                        >
                          <Award size={12} />
                          おすすめ1位
                        </div>

                        <div style={{ marginTop: 12 }}>
                          <div style={{ fontSize: 17, fontWeight: 800, color: "var(--text-primary)", lineHeight: 1.5, marginBottom: 8 }}>
                            {firstTitle}
                          </div>

                          {firstExcerpt && (
                            <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.7, margin: "0 0 12px" }}>
                              {firstExcerpt}...
                            </p>
                          )}

                          {/* 選ばれた理由 */}
                          <div
                            style={{
                              background: "var(--gold-bg)",
                              borderRadius: 6,
                              padding: "10px 14px",
                              marginBottom: 12,
                            }}
                          >
                            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--gold)", marginBottom: 4 }}>
                              おすすめポイント
                            </div>
                            <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5 }}>
                              {group.topPickReason}
                            </div>
                          </div>

                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <span
                              style={{
                                fontSize: 12,
                                fontWeight: 600,
                                color: "var(--accent)",
                                display: "flex",
                                alignItems: "center",
                                gap: 3,
                              }}
                            >
                              記事を読む
                              <ArrowRight size={12} />
                            </span>
                            <span className="cta-primary" style={{ padding: "8px 20px", fontSize: 13 }}>
                              記事を読む
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )}

                  {/* 2位以降 — コンパクトリスト */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    {restPosts.slice(0, 4).map((post, i) => (
                      <Link
                        key={post.id}
                        href={`/post/${post.slug}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <div
                          className="article-row"
                          style={{
                            background: isAlt ? "#fff" : "var(--bg-section)",
                            borderRadius: "var(--radius-md)",
                            padding: "10px 14px",
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            transition: "box-shadow 0.15s",
                          }}
                        >
                          <span
                            style={{
                              fontSize: 12,
                              fontWeight: 700,
                              color: i < 2 ? "var(--text-primary)" : "var(--text-muted)",
                              background: i === 0 ? "var(--silver-bg)" : i === 1 ? "var(--bronze-bg)" : "transparent",
                              width: 22,
                              height: 22,
                              borderRadius: 4,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                            }}
                          >
                            {i + 2}
                          </span>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div
                              style={{
                                fontSize: 13,
                                fontWeight: 600,
                                color: "var(--text-primary)",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                              }}
                            >
                              {stripHtml(post.title.rendered)}
                            </div>
                          </div>
                          <ChevronRight size={14} style={{ color: "var(--text-muted)", flexShrink: 0 }} />
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}

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
