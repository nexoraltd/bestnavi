import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import { ArticleCTA } from "@/components/ArticleCTA";
import { ArticleContent } from "@/components/ArticleContent";
import { BannerSection } from "@/components/BannerSection";
import { MobileFixedCTA } from "@/components/MobileFixedCTA";
import { getPostBySlug, isHighCvr, CATEGORY_MAP } from "@/lib/wordpress";
import { getBannersForArticle } from "@/lib/banners";
import { getCategoryIcon } from "@/lib/category-icons";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ShieldCheck, UserCircle, Calendar } from "lucide-react";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "記事が見つかりません" };

  const title = post.title.rendered.replace(/&amp;/g, "&").replace(/&#8211;/g, "\u2013").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
  const excerpt = post.excerpt.rendered.replace(/<[^>]+>/g, "").trim().slice(0, 160);

  return {
    title: `${title} | ベストナビ`,
    description: excerpt,
    openGraph: {
      title: `${title} | ベストナビ`,
      description: excerpt,
      url: `https://navi.next-aura.com/post/${slug}`,
      siteName: "ベストナビ",
      type: "article",
      locale: "ja_JP",
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ベストナビ`,
      description: excerpt,
      images: ["/og-image.png"],
    },
    alternates: {
      canonical: `https://navi.next-aura.com/post/${slug}`,
    },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const title = post.title.rendered.replace(/<[^>]+>/g, "");
  const date = new Date(post.date).toLocaleDateString("ja-JP");
  const modified = new Date(post.modified).toLocaleDateString("ja-JP");
  const categoryIds = post.categories || [];
  const postIsHighCvr = isHighCvr(post.id);

  const relatedCategory = !postIsHighCvr
    ? Object.entries(CATEGORY_MAP).find(([, meta]) =>
        categoryIds.includes(meta.wpId)
      )
    : null;

  const content = post.content.rendered;
  const banners = getBannersForArticle(post.id, categoryIds);
  const excerpt = post.excerpt.rendered.replace(/<[^>]+>/g, "").trim().slice(0, 160);

  // JSON-LD 構造化データ
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": excerpt,
    "url": `https://navi.next-aura.com/post/${slug}`,
    "datePublished": post.date,
    "dateModified": post.modified,
    "publisher": {
      "@type": "Organization",
      "name": "ベストナビ",
      "url": "https://navi.next-aura.com",
      "logo": { "@type": "ImageObject", "url": "https://navi.next-aura.com/favicon-32.png" }
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": `https://navi.next-aura.com/post/${slug}` },
    "image": { "@type": "ImageObject", "url": "https://navi.next-aura.com/og-image.png", "width": 1200, "height": 630 }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://navi.next-aura.com" },
      { "@type": "ListItem", "position": 2, "name": title, "item": `https://navi.next-aura.com/post/${slug}` }
    ]
  };

  return (
    <div style={{ background: "var(--bg-warm)", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Header />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 16px" }}>
        <nav style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 16 }}>
          <a href="/" style={{ color: "var(--accent)", textDecoration: "none" }}>ホーム</a>
          <span style={{ margin: "0 8px" }}>&rsaquo;</span>
          <span dangerouslySetInnerHTML={{ __html: title }} />
        </nav>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 32, alignItems: "start" }} className="main-grid">
          <main>
            {/* LOW CVR記事にランキング導線バナー */}
            {relatedCategory && (() => {
              const [catKey, catMeta] = relatedCategory;
              const Icon = getCategoryIcon(catMeta.iconKey);
              return (
                <Link
                  href={`/ranking/${catKey}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "12px 16px",
                    background: "var(--accent-light)",
                    border: "1px solid var(--accent)",
                    borderRadius: "var(--radius-md)",
                    marginBottom: 16,
                    textDecoration: "none",
                    color: "var(--accent)",
                    fontSize: 13,
                    fontWeight: 600,
                  }}
                >
                  <Icon size={16} strokeWidth={2} />
                  <span style={{ flex: 1 }}>{catMeta.title}はこちら</span>
                  <ArrowRight size={14} />
                </Link>
              );
            })()}

            <article style={{ background: "#fff", borderRadius: 12, border: "1px solid var(--border)", boxShadow: "var(--shadow-card)", padding: 32 }}>
              {/* 日付 */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, flexWrap: "wrap" }}>
                <span style={{ fontSize: 12, color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 4 }}>
                  <Calendar size={11} />
                  {modified !== date ? `更新: ${modified}` : `公開: ${date}`}
                </span>
              </div>

              <h1 style={{ fontSize: 26, fontWeight: 800, lineHeight: 1.5, color: "var(--text-primary)", borderBottom: "2px solid var(--border)", paddingBottom: 12, marginBottom: 24 }} dangerouslySetInnerHTML={{ __html: title }} />

              {/* 記事本文 */}
              <ArticleContent html={content} banners={banners} />

              {/* Banner section */}
              <BannerSection postId={post.id} categoryIds={categoryIds} position="middle" />

              {/* CTA: bottom position */}
              <ArticleCTA categoryIds={categoryIds} position="bottom" />

              {/* 著者プロフィール */}
              <div style={{ marginTop: 32, padding: "20px", background: "var(--bg-section)", borderRadius: "var(--radius-md)" }}>
                <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--accent-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <UserCircle size={28} strokeWidth={1.5} style={{ color: "var(--accent)" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 2 }}>この記事について</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>ベストナビ</div>
                    <p style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                      各サービスの公式情報・料金・機能をもとに比較・まとめた情報サイトです。掲載サービスはすべて提携済みのものに限定しています。
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </main>

          <div className="sidebar-area"><Sidebar /></div>
        </div>
      </div>

      <MobileFixedCTA />
      <Footer />

      <style>{`
        @media (max-width: 768px) { .main-grid { grid-template-columns: 1fr !important; } }
        .wp-content h2 { font-weight: 800; font-size: 20px; border-left: 3px solid var(--accent); padding: 6px 14px; margin: 36px 0 18px; }
        .wp-content h3 { font-weight: 700; font-size: 17px; border-bottom: 1px solid var(--border); padding-bottom: 8px; margin: 28px 0 14px; }
        .wp-content p { line-height: 1.9; margin-bottom: 18px; }
        .wp-content ul, .wp-content ol { margin: 14px 0; padding-left: 24px; }
        .wp-content li { margin-bottom: 6px; line-height: 1.7; }
        .wp-content table { width: 100%; border-collapse: collapse; margin: 18px 0; }
        .wp-content table th { background: var(--bg-section) !important; color: var(--text-primary) !important; font-weight: 600; padding: 9px 14px; border: 1px solid var(--border); }
        .wp-content table td { padding: 9px 14px; border: 1px solid var(--border); color: var(--text-primary) !important; }
        .wp-content table th[style], .wp-content table td[style] { color: var(--text-primary) !important; background-color: var(--bg-section) !important; }
        .wp-content table tr th, .wp-content table tr td { color: var(--text-primary) !important; }
        .wp-content img { max-width: 100%; height: auto; border-radius: 6px; }
        .wp-content a { color: var(--accent); }
        .wp-content a:has(> img) { display: block; }
        .wp-content blockquote { border-left: 3px solid var(--accent); padding: 14px 18px; margin: 18px 0; background: var(--accent-light); border-radius: 0 6px 6px 0; }
        /* WordPress ボタンブロック修正 — 青い空白ボックスを防止 */
        .wp-content .wp-block-button__link,
        .wp-content .wp-block-button a {
          display: inline-block !important;
          background: var(--cta) !important;
          color: #fff !important;
          padding: 12px 28px !important;
          border-radius: 6px !important;
          font-weight: 700 !important;
          text-decoration: none !important;
        }
        .wp-content .wp-block-buttons,
        .wp-content .wp-block-button {
          margin: 16px 0;
        }
        /* 空のdiv/pを非表示 */
        .wp-content div:empty,
        .wp-content p:empty { display: none; }
        /* WP columns/group の背景色リセット */
        .wp-content .wp-block-group,
        .wp-content .wp-block-columns {
          background: transparent !important;
          border: none !important;
          padding: 0 !important;
        }
        /* WP本文内のインラインCTAボタン（旧オレンジ）を緑に統一 */
        .wp-content a[style*="background:#ff6b35"],
        .wp-content a[style*="background: #ff6b35"],
        .wp-content a[style*="background-color:#ff6b35"],
        .wp-content a[style*="background-color: #ff6b35"] {
          background: var(--cta) !important;
          border-radius: 8px !important;
          box-shadow: 0 2px 8px rgba(22,163,74,0.3) !important;
        }
        .wp-content a[style*="background:#ff6b35"]:hover,
        .wp-content a[style*="background: #ff6b35"]:hover {
          background: var(--cta-hover) !important;
        }
        /* 空のdivで背景色がついたものをリセット */
        .wp-content div[style*="background-color"]:empty,
        .wp-content p[style*="background-color"]:empty {
          display: none !important;
        }
      `}</style>
    </div>
  );
}
