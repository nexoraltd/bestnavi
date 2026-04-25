"use client";

import Link from "next/link";
import { ChevronRight, ArrowRight, Clock, ShieldCheck, Award } from "lucide-react";
import { getCategoryIcon } from "@/lib/category-icons";
import type { WPPost } from "@/lib/wordpress";

interface CategoryGroup {
  key: string;
  title: string;
  iconKey: string;
  topPickReason: string;
  posts: WPPost[];
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/&[^;]+;/g, " ").trim();
}

export function CategorySections({ groups }: { groups: CategoryGroup[] }) {
  return (
    <>
      {groups.map((group, groupIdx) => {
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
            {/* Section Header */}
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

            {/* 更新日 */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <span style={{ fontSize: 11, color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 3 }}>
                <Clock size={10} />
                2026年4月更新
              </span>
            </div>

            {/* 1位カード */}
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
                    {group.topPickReason && (
                      <div
                        style={{
                          background: "var(--gold-bg)",
                          borderRadius: 6,
                          padding: "10px 14px",
                          marginBottom: 12,
                          fontSize: 12,
                          color: "var(--text-secondary)",
                          lineHeight: 1.6,
                        }}
                      >
                        <ShieldCheck size={11} style={{ display: "inline", marginRight: 4, color: "var(--accent)", verticalAlign: "middle" }} />
                        {group.topPickReason}
                      </div>
                    )}

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

            {/* 2位以降 */}
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
    </>
  );
}
