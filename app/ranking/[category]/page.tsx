import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import { CATEGORY_MAP, getPostsByCategory } from "@/lib/wordpress";
import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://bestnavi.vercel.app";

export async function generateStaticParams() {
  return Object.keys(CATEGORY_MAP).map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const meta = CATEGORY_MAP[category];
  if (!meta) return { title: "ランキング | ベストナビ" };

  const title = `${meta.title}【2026年最新】| ベストナビ`;
  const description = meta.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/ranking/${category}`,
      siteName: "ベストナビ",
      type: "website",
      locale: "ja_JP",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `${SITE_URL}/ranking/${category}`,
    },
  };
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/&[^;]+;/g, " ").trim();
}

export default async function RankingPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const meta = CATEGORY_MAP[category] || {
    wpId: 0,
    title: "ランキング",
    icon: "🏆",
    description: "",
  };

  const posts = meta.wpId ? await getPostsByCategory(meta.wpId) : [];

  return (
    <div style={{ background: "var(--bg-warm)", minHeight: "100vh" }}>
      <Header />
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
            <div className="section-header">
              <span style={{ fontSize: 24 }}>{meta.icon}</span>
              <h2>{meta.title}【2026年4月最新】</h2>
            </div>

            {meta.description && (
              <p
                style={{
                  color: "#666",
                  fontSize: 14,
                  lineHeight: 1.8,
                  marginBottom: 24,
                }}
              >
                {meta.description}
              </p>
            )}

            {posts.length === 0 ? (
              <div
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  padding: "40px 24px",
                  textAlign: "center",
                  color: "#888",
                }}
              >
                <p>このカテゴリの記事は準備中です。</p>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                {posts.map((post, i) => {
                  const excerpt = stripHtml(post.excerpt.rendered).slice(
                    0,
                    120
                  );
                  return (
                    <Link
                      key={post.id}
                      href={`/post/${post.slug}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <article
                        style={{
                          background: "#fff",
                          borderRadius: 12,
                          padding: "20px 24px",
                          border: "1px solid #eee",
                          display: "flex",
                          gap: 16,
                          alignItems: "flex-start",
                          transition: "box-shadow 0.2s, transform 0.2s",
                          cursor: "pointer",
                        }}
                        className="article-card"
                      >
                        <div
                          style={{
                            background:
                              i === 0
                                ? "linear-gradient(135deg, #ff6b35, #ff8f42)"
                                : i === 1
                                  ? "linear-gradient(135deg, #6c757d, #adb5bd)"
                                  : i === 2
                                    ? "linear-gradient(135deg, #cd7f32, #daa520)"
                                    : "#f0f0f0",
                            color: i < 3 ? "#fff" : "#666",
                            width: 36,
                            height: 36,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: 900,
                            fontSize: 14,
                            flexShrink: 0,
                          }}
                        >
                          {i + 1}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <h3
                            style={{
                              fontSize: 16,
                              fontWeight: 700,
                              lineHeight: 1.5,
                              marginBottom: 6,
                              color: "#1a1a1a",
                            }}
                          >
                            {stripHtml(post.title.rendered)}
                          </h3>
                          {excerpt && (
                            <p
                              style={{
                                fontSize: 13,
                                color: "#777",
                                lineHeight: 1.6,
                                margin: 0,
                              }}
                            >
                              {excerpt}...
                            </p>
                          )}
                          <div
                            style={{
                              fontSize: 12,
                              color: "#aaa",
                              marginTop: 8,
                            }}
                          >
                            更新日:{" "}
                            {new Date(post.modified).toLocaleDateString(
                              "ja-JP"
                            )}
                          </div>
                        </div>
                        <span
                          style={{
                            color: "#ff6b35",
                            fontSize: 20,
                            flexShrink: 0,
                            alignSelf: "center",
                          }}
                        >
                          →
                        </span>
                      </article>
                    </Link>
                  );
                })}
              </div>
            )}

            {/* Other categories CTA */}
            <div
              style={{
                marginTop: 40,
                background: "#f8f9fa",
                borderRadius: 12,
                padding: "24px",
              }}
            >
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  marginBottom: 16,
                }}
              >
                他のカテゴリ
              </h3>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                }}
              >
                {Object.entries(CATEGORY_MAP)
                  .filter(([key]) => key !== category)
                  .map(([key, val]) => (
                    <Link
                      key={key}
                      href={`/ranking/${key}`}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        background: "#fff",
                        border: "1px solid #e0e0e0",
                        borderRadius: 20,
                        padding: "8px 16px",
                        fontSize: 13,
                        color: "#333",
                        textDecoration: "none",
                        transition: "background 0.2s",
                      }}
                    >
                      <span>{val.icon}</span>
                      {val.title}
                    </Link>
                  ))}
              </div>
            </div>
          </main>
          <div className="sidebar-area">
            <Sidebar />
          </div>
        </div>
      </div>
      <Footer />
      <style>{`
        @media(max-width:768px){.main-grid{grid-template-columns:1fr!important}}
        .article-card:hover{box-shadow:0 4px 20px rgba(0,0,0,0.08);transform:translateY(-2px)}
      `}</style>
    </div>
  );
}
