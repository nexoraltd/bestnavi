import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import { CATEGORY_MAP, getPostsByCategory } from "@/lib/wordpress";
import { getCategoryIcon } from "@/lib/category-icons";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Calendar, ShieldCheck, Tag, Award, ArrowRight, ExternalLink } from "lucide-react";

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
    openGraph: { title, description, url: `${SITE_URL}/ranking/${category}`, siteName: "ベストナビ", type: "website", locale: "ja_JP" },
    twitter: { card: "summary_large_image", title, description },
    alternates: { canonical: `${SITE_URL}/ranking/${category}` },
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
    wpId: 0, title: "ランキング", iconKey: "award", description: "",
    productCount: 0, tags: [], trustBadge: "", topPickReason: "",
  };

  const Icon = getCategoryIcon(meta.iconKey);
  const posts = meta.wpId ? await getPostsByCategory(meta.wpId) : [];
  const [firstPost, ...restPosts] = posts;

  return (
    <div style={{ background: "var(--bg-warm)", minHeight: "100vh" }}>
      <Header />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 16px" }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 28, alignItems: "start" }}
          className="main-grid"
        >
          <main>
            {/* Header */}
            <div style={{ marginBottom: 6 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <div style={{ width: 34, height: 34, borderRadius: 8, background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={18} strokeWidth={2} style={{ color: "#fff" }} />
                </div>
                <h1 style={{ fontSize: 22, fontWeight: 800 }}>{meta.title}</h1>
              </div>

              {/* Trust + Tags */}
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
                {meta.trustBadge && (
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 12, fontWeight: 600, color: "var(--green)", background: "var(--green-light)", padding: "3px 10px", borderRadius: 4 }}>
                    <ShieldCheck size={13} />
                    {meta.trustBadge}
                  </span>
                )}
                {meta.tags.map((tag) => (
                  <span key={tag} style={{ display: "inline-flex", alignItems: "center", gap: 3, fontSize: 12, color: "var(--text-secondary)", background: "var(--bg-section)", padding: "3px 10px", borderRadius: 4 }}>
                    <Tag size={11} />
                    {tag}
                  </span>
                ))}
              </div>

              {meta.description && (
                <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>
                  {meta.description}
                </p>
              )}
            </div>

            {posts.length === 0 ? (
              <div style={{ background: "#fff", borderRadius: "var(--radius-lg)", padding: "36px 24px", textAlign: "center", color: "var(--text-muted)", border: "1px solid var(--border)" }}>
                <p>このカテゴリの記事は準備中です。</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {/* 1位カード - 大型 */}
                {firstPost && (
                  <Link href={`/post/${firstPost.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                    <article
                      className="top-pick-card"
                      style={{
                        background: "#fff",
                        borderRadius: "var(--radius-lg)",
                        border: "2px solid var(--gold-border)",
                        padding: "22px",
                        transition: "box-shadow 0.15s, transform 0.15s",
                        position: "relative",
                      }}
                    >
                      <div style={{ position: "absolute", top: 0, left: 20, background: "linear-gradient(135deg, #f59e0b, #d97706)", color: "#fff", fontSize: 11, fontWeight: 700, padding: "3px 12px", borderRadius: "0 0 6px 6px", display: "flex", alignItems: "center", gap: 4 }}>
                        <Award size={12} />
                        おすすめ1位
                      </div>

                      <div style={{ marginTop: 10 }}>
                        <h2 style={{ fontSize: 18, fontWeight: 800, lineHeight: 1.5, marginBottom: 8, color: "var(--text-primary)" }}>
                          {stripHtml(firstPost.title.rendered)}
                        </h2>
                        <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7, margin: "0 0 12px" }}>
                          {stripHtml(firstPost.excerpt.rendered).slice(0, 150)}...
                        </p>

                        <div style={{ background: "var(--gold-bg)", borderRadius: 6, padding: "10px 14px", marginBottom: 14 }}>
                          <div style={{ fontSize: 11, fontWeight: 700, color: "var(--gold)", marginBottom: 3 }}>1位に選ばれた理由</div>
                          <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5 }}>{meta.topPickReason}</div>
                        </div>

                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
                          <div style={{ fontSize: 12, color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 4 }}>
                            <Calendar size={12} />
                            更新: {new Date(firstPost.modified).toLocaleDateString("ja-JP")}
                          </div>
                          <span className="cta-primary" style={{ padding: "10px 24px", fontSize: 14, gap: 5 }}>
                            記事を読む
                            <ArrowRight size={13} />
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                )}

                {/* 2位以降 */}
                {restPosts.map((post, i) => {
                  const excerpt = stripHtml(post.excerpt.rendered).slice(0, 100);
                  const isTop3 = i < 2;
                  return (
                    <Link key={post.id} href={`/post/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                      <article
                        className="article-card"
                        style={{
                          background: i % 2 === 0 ? "#fff" : "var(--bg-section)",
                          borderRadius: "var(--radius-md)",
                          padding: "16px 18px",
                          border: isTop3 ? `1px solid ${i === 0 ? "var(--silver-border)" : "var(--bronze-border)"}` : "1px solid var(--border)",
                          display: "flex",
                          gap: 14,
                          alignItems: "flex-start",
                          transition: "box-shadow 0.15s, transform 0.15s",
                        }}
                      >
                        <div
                          style={{
                            background: i === 0 ? "linear-gradient(135deg, #d1d5db, #9ca3af)" : i === 1 ? "linear-gradient(135deg, #fcd34d, #d97706)" : "var(--bg-section)",
                            color: isTop3 ? "#fff" : "var(--text-muted)",
                            width: 32, height: 32, borderRadius: 6,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontWeight: 800, fontSize: 13, flexShrink: 0,
                          }}
                        >
                          {i + 2}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <h3 style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.5, marginBottom: 4, color: "var(--text-primary)" }}>
                            {stripHtml(post.title.rendered)}
                          </h3>
                          {excerpt && <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>{excerpt}...</p>}
                          <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 6, display: "flex", alignItems: "center", gap: 4 }}>
                            <Calendar size={11} />
                            更新: {new Date(post.modified).toLocaleDateString("ja-JP")}
                          </div>
                        </div>
                        <ChevronRight size={18} style={{ color: "var(--text-muted)", flexShrink: 0, alignSelf: "center" }} />
                      </article>
                    </Link>
                  );
                })}
              </div>
            )}

            {/* Other categories */}
            <div style={{ marginTop: 32, background: "var(--bg-section)", borderRadius: "var(--radius-lg)", padding: "20px" }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 14 }}>他のカテゴリ</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {Object.entries(CATEGORY_MAP)
                  .filter(([key]) => key !== category)
                  .map(([key, val]) => {
                    const CatIcon = getCategoryIcon(val.iconKey);
                    return (
                      <Link key={key} href={`/ranking/${key}`} style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "#fff", border: "1px solid var(--border)", borderRadius: 6, padding: "6px 12px", fontSize: 13, color: "var(--text-secondary)", textDecoration: "none", fontWeight: 500 }}>
                        <CatIcon size={13} strokeWidth={2} />
                        {val.title}
                      </Link>
                    );
                  })}
              </div>
            </div>
          </main>
          <div className="sidebar-area"><Sidebar /></div>
        </div>
      </div>
      <Footer />
      <style>{`
        @media(max-width:768px){.main-grid{grid-template-columns:1fr!important}}
        .article-card:hover{box-shadow:var(--shadow-md);transform:translateY(-1px)}
        .top-pick-card:hover{box-shadow:var(--shadow-lg);transform:translateY(-2px)}
      `}</style>
    </div>
  );
}
