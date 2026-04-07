"use client";

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
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <span className="stars">
      {"★".repeat(full)}
      {half && "★"}
      {"☆".repeat(5 - full - (half ? 1 : 0))}
      <span style={{ color: "#1a1a1a", fontWeight: 700, fontSize: 18, marginLeft: 6 }}>{rating.toFixed(1)}</span>
    </span>
  );
}

function RankBadge({ rank }: { rank: number }) {
  const cls = rank <= 3 ? `rank-${rank}` : "rank-default";
  const icons = ["👑", "🥈", "🥉"];
  return (
    <div className={`rank-badge ${cls}`}>
      {rank <= 3 ? icons[rank - 1] : rank}
    </div>
  );
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
  const rankBg = item.rank === 1 ? "var(--gold-bg)" : item.rank === 2 ? "var(--silver-bg)" : item.rank === 3 ? "var(--bronze-bg)" : "#fff";
  const rankBorder = item.rank === 1 ? "var(--gold-border)" : item.rank === 2 ? "var(--silver-border)" : item.rank === 3 ? "var(--bronze-border)" : "var(--border)";

  return (
    <div style={{
      background: "#fff",
      borderRadius: 12,
      border: `2px solid ${rankBorder}`,
      overflow: "hidden",
      boxShadow: item.rank === 1 ? "0 4px 20px rgba(218,165,32,0.15)" : "var(--shadow-card)",
      transition: "box-shadow 0.2s, transform 0.2s",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.12)";
      e.currentTarget.style.transform = "translateY(-2px)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = item.rank === 1 ? "0 4px 20px rgba(218,165,32,0.15)" : "var(--shadow-card)";
      e.currentTarget.style.transform = "translateY(0)";
    }}
    >
      {/* Card Header */}
      <div style={{
        background: rankBg,
        padding: "16px 20px",
        display: "flex",
        alignItems: "center",
        gap: 16,
        borderBottom: `1px solid ${rankBorder}`,
      }}>
        <RankBadge rank={item.rank} />

        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 4 }}>
            <h3 style={{ fontSize: 20, fontWeight: 900, color: "#1a1a1a", margin: 0 }}>{item.name}</h3>
            {item.tags.map((tag) => (
              <TagBadge key={tag} tag={tag} />
            ))}
          </div>
          <StarRating rating={item.rating} />
        </div>

        {/* Product Image - will be replaced with actual logos */}
      </div>

      {/* Card Body */}
      <div style={{ padding: "16px 20px" }}>
        <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7, marginBottom: 16 }}>
          {item.description}
        </p>

        {/* Specs Table */}
        <table style={{
          width: "100%", borderCollapse: "collapse",
          marginBottom: 16, fontSize: 13,
        }}>
          <tbody>
            {item.specs.map((spec, i) => (
              <tr key={spec.label} style={{ borderBottom: i < item.specs.length - 1 ? "1px solid #f0f0f0" : "none" }}>
                <td style={{
                  padding: "8px 12px", fontWeight: 700,
                  color: "#555", background: "#fafafa",
                  width: "35%", borderRight: "1px solid #f0f0f0"
                }}>
                  {spec.label}
                </td>
                <td style={{ padding: "8px 12px", color: "#1a1a1a" }}>
                  {spec.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pros */}
        <div style={{ marginBottom: 20 }}>
          {item.pros.map((pro) => (
            <div key={pro} style={{
              display: "flex", alignItems: "flex-start", gap: 6,
              marginBottom: 6, fontSize: 13, color: "#333"
            }}>
              <span style={{ color: "#ff6b35", fontWeight: 700, flexShrink: 0 }}>✓</span>
              {pro}
            </div>
          ))}
        </div>

        {/* Price + CTA */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: 16, flexWrap: "wrap",
          padding: "16px 0 0",
          borderTop: "2px dashed #eee"
        }}>
          <div>
            <div style={{ fontSize: 11, color: "#888" }}>料金</div>
            <div style={{ fontSize: 24, fontWeight: 900, color: "#ff6b35" }}>{item.price}</div>
          </div>
          <a href="#" className="cta-primary" style={{ padding: "14px 36px" }}>
            公式サイトへ →
          </a>
        </div>
      </div>
    </div>
  );
}
