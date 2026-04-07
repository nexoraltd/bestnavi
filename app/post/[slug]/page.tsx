import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import { getPostBySlug, getAllSlugs } from "@/lib/wordpress";
import { notFound } from "next/navigation";

// Fully dynamic - fetch from WP API on every request
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: "記事が見つかりません" };

  const title = post.title.rendered.replace(/&amp;/g, "&").replace(/&#8211;/g, "–").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
  const excerpt = post.excerpt.rendered.replace(/<[^>]+>/g, "").trim().slice(0, 160);

  return {
    title: `${title} | ベストナビ`,
    description: excerpt,
  };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const title = post.title.rendered;
  const date = new Date(post.date).toLocaleDateString("ja-JP");
  const modified = new Date(post.modified).toLocaleDateString("ja-JP");

  return (
    <div style={{ background: "var(--bg-warm)", minHeight: "100vh" }}>
      <Header />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 16px" }}>
        {/* Breadcrumb */}
        <nav style={{ fontSize: 12, color: "#888", marginBottom: 16 }}>
          <a href="/" style={{ color: "#ff6b35", textDecoration: "none" }}>ホーム</a>
          <span style={{ margin: "0 8px" }}>›</span>
          <span dangerouslySetInnerHTML={{ __html: title }} />
        </nav>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 300px",
            gap: 32,
            alignItems: "start",
          }}
          className="main-grid"
        >
          {/* Main */}
          <main>
            <article
              style={{
                background: "#fff",
                borderRadius: 12,
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-card)",
                padding: 32,
              }}
            >
              {/* Date */}
              <div style={{ fontSize: 12, color: "#888", marginBottom: 12 }}>
                📅 公開: {date}
                {modified !== date && <span> | 更新: {modified}</span>}
              </div>

              {/* Title */}
              <h1
                style={{
                  fontSize: 26,
                  fontWeight: 900,
                  lineHeight: 1.5,
                  color: "#1a1a1a",
                  borderBottom: "3px solid #ff6b35",
                  paddingBottom: 12,
                  marginBottom: 24,
                }}
                dangerouslySetInnerHTML={{ __html: title }}
              />

              {/* Content */}
              <div
                className="wp-content"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />
            </article>
          </main>

          {/* Sidebar */}
          <div className="sidebar-area">
            <Sidebar />
          </div>
        </div>
      </div>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .main-grid { grid-template-columns: 1fr !important; }
        }
        /* WordPress content styles */
        .wp-content h2 { font-weight: 900; font-size: 22px; border-left: 4px solid #ff6b35; padding: 8px 16px; margin: 40px 0 20px; }
        .wp-content h3 { font-weight: 700; font-size: 18px; border-bottom: 2px dashed #e0e0e0; padding-bottom: 8px; margin: 32px 0 16px; }
        .wp-content p { line-height: 1.9; margin-bottom: 20px; }
        .wp-content ul, .wp-content ol { margin: 16px 0; padding-left: 24px; }
        .wp-content li { margin-bottom: 8px; line-height: 1.7; }
        .wp-content table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        .wp-content table th { background: #f8f6f3; font-weight: 700; padding: 10px 14px; border: 1px solid #e8e5e0; }
        .wp-content table td { padding: 10px 14px; border: 1px solid #e8e5e0; }
        .wp-content img { max-width: 100%; height: auto; border-radius: 8px; }
        .wp-content a { color: #ff6b35; }
        .wp-content blockquote { border-left: 4px solid #ff6b35; padding: 16px 20px; margin: 20px 0; background: #fff4ef; border-radius: 0 8px 8px 0; }
      `}</style>
    </div>
  );
}
