"use client";

import { Star, Check, ExternalLink } from "lucide-react";

export interface RankingItem {
  rank: number;
  name: string;
  description: string;
  rating: number;
  price: string;
  tags: string[];
  pros: string[];
  specs: { label: string; value: string }[];
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
      <div style={{ display: "flex", gap: 1 }}>
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            size={14}
            fill={i <= Math.round(rating) ? "#f59e0b" : "none"}
            stroke={i <= Math.round(rating) ? "#f59e0b" : "#d1d5db"}
            strokeWidth={2}
          />
        ))}
      </div>
      <span style={{ fontWeight: 700, fontSize: 15, color: "var(--text-primary)" }}>
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

function RankBadge({ rank }: { rank: number }) {
  const cls = rank <= 3 ? `rank-${rank}` : "rank-default";
  return <div className={`rank-badge ${cls}`}>{rank}</div>;
}

function TagBadge({ tag }: { tag: string }) {
  const tagStyles: Record<string, string> = {
    "人気": "badge-popular",
    "おすすめ": "badge-recommended",
    "無料": "badge-free",
    "即日": "badge-fast",
    "新着": "badge-new",
    "高速": "badge-fast",
    "安全": "badge-free",
    "初心者向け": "badge-popular",
  };
  return <span className={`badge ${tagStyles[tag] || "badge-popular"}`}>{tag}</span>;
}

export function RankingCard({ item }: { item: RankingItem }) {
  const isTop3 = item.rank <= 3;

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "var(--radius-lg)",
        border: isTop3 ? `1px solid ${item.rank === 1 ? "var(--gold-border)" : item.rank === 2 ? "var(--silver-border)" : "var(--bronze-border)"}` : "1px solid var(--border)",
        overflow: "hidden",
        boxShadow: "var(--shadow-card)",
        transition: "box-shadow 0.15s, transform 0.15s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "var(--shadow-lg)";
        e.currentTarget.style.transform = "translateY(-1px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "var(--shadow-card)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Header */}
      <div
        style={{
          background: item.rank === 1 ? "var(--gold-bg)" : item.rank === 2 ? "var(--silver-bg)" : item.rank === 3 ? "var(--bronze-bg)" : "#fff",
          padding: "14px 20px",
          display: "flex",
          alignItems: "center",
          gap: 14,
          borderBottom: "1px solid var(--border)",
        }}
      >
        <RankBadge rank={item.rank} />
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap", marginBottom: 4 }}>
            <h3 style={{ fontSize: 18, fontWeight: 800, color: "var(--text-primary)", margin: 0 }}>
              {item.name}
            </h3>
            {item.tags.map((tag) => (
              <TagBadge key={tag} tag={tag} />
            ))}
          </div>
          <StarRating rating={item.rating} />
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "16px 20px" }}>
        <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 14 }}>
          {item.description}
        </p>

        {/* Specs */}
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 14, fontSize: 13 }}>
          <tbody>
            {item.specs.map((spec, i) => (
              <tr key={spec.label} style={{ borderBottom: i < item.specs.length - 1 ? "1px solid var(--bg-section)" : "none" }}>
                <td
                  style={{
                    padding: "7px 12px",
                    fontWeight: 600,
                    color: "var(--text-secondary)",
                    background: "var(--bg-section)",
                    width: "35%",
                  }}
                >
                  {spec.label}
                </td>
                <td style={{ padding: "7px 12px", color: "var(--text-primary)" }}>{spec.value}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pros */}
        <div style={{ marginBottom: 16 }}>
          {item.pros.map((pro) => (
            <div
              key={pro}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 6,
                marginBottom: 5,
                fontSize: 13,
                color: "var(--text-secondary)",
              }}
            >
              <Check size={14} style={{ color: "var(--green)", flexShrink: 0, marginTop: 3 }} strokeWidth={2.5} />
              {pro}
            </div>
          ))}
        </div>

        {/* Price + CTA */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
            padding: "14px 0 0",
            borderTop: "1px solid var(--border)",
          }}
        >
          <div>
            <div style={{ fontSize: 11, color: "var(--text-muted)" }}>料金</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: "var(--cta)" }}>{item.price}</div>
          </div>
          <a href="#" className="cta-primary" style={{ gap: 6 }}>
            公式サイトへ
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
