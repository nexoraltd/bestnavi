import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getPostsByCategory, CATEGORY_MAP } from "@/lib/wordpress";

interface RelatedArticlesProps {
  currentPostId: number;
  categoryIds: number[];
}

export async function RelatedArticles({ currentPostId, categoryIds }: RelatedArticlesProps) {
  if (!categoryIds.length) return null;

  const catId = categoryIds[0];
  const posts = await getPostsByCategory(catId);
  const related = posts.filter((p) => p.id !== currentPostId).slice(0, 3);
  if (!related.length) return null;

  const catEntry = Object.entries(CATEGORY_MAP).find(([, m]) => m.wpId === catId);
  const catName = catEntry ? catEntry[1].title : "関連記事";
  const catKey = catEntry ? catEntry[0] : null;

  function stripHtml(html: string) {
    return html.replace(/<[^>]*>/g, "").replace(/&[^;]+;/g, " ").trim();
  }

  return (
    <section style={{ marginTop: 36 }}>
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        marginBottom: 12,
      }}>
        <h2 style={{ fontSize: 16, fontWeight: 700, color: "var(--text-primary)", margin: 0 }}>
          {catName}の関連記事
        </h2>
        {catKey && (
          <Link
            href={`/ranking/${catKey}`}
            style={{ fontSize: 12, color: "var(--accent)", textDecoration: "none", display: "flex", alignItems: "center", gap: 2 }}
          >
            すべて見る <ChevronRight size={12} />
          </Link>
        )}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {related.map((post) => (
          <Link
            key={post.id}
            href={`/post/${post.slug}`}
            style={{
              display: "flex", alignItems: "center", gap: 12,
              padding: "12px 16px",
              background: "var(--bg-section)",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border)",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.5, marginBottom: 2 }}>
                {stripHtml(post.title.rendered)}
              </div>
              <div style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.5 }}>
                {stripHtml(post.excerpt.rendered).slice(0, 80)}…
              </div>
            </div>
            <ChevronRight size={16} style={{ color: "var(--text-muted)", flexShrink: 0 }} />
          </Link>
        ))}
      </div>
    </section>
  );
}
