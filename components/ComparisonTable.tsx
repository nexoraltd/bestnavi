"use client";

interface ComparisonRow {
  feature: string;
  values: (string | boolean)[];
}

interface ComparisonProps {
  headers: string[];
  rows: ComparisonRow[];
}

export function ComparisonTable({ headers, rows }: ComparisonProps) {
  return (
    <div style={{
      background: "#fff",
      borderRadius: 12,
      border: "1px solid var(--border)",
      overflow: "hidden",
      boxShadow: "var(--shadow-card)",
    }}>
      <div className="section-header" style={{ margin: 0, padding: "16px 20px", borderBottom: "3px solid #ff6b35", borderRadius: 0 }}>
        <span style={{ fontSize: 22 }}>📊</span>
        <h2>比較表</h2>
      </div>

      <div style={{ overflowX: "auto" }}>
        <table style={{
          width: "100%", borderCollapse: "collapse",
          fontSize: 13, minWidth: 500,
        }}>
          <thead>
            <tr style={{ background: "#f8f6f3" }}>
              <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700, color: "#555", borderBottom: "2px solid #eee" }}>
                比較項目
              </th>
              {headers.map((h, i) => (
                <th key={h} style={{
                  padding: "12px 16px",
                  textAlign: "center",
                  fontWeight: 900,
                  color: i === 0 ? "#ff6b35" : "#333",
                  borderBottom: "2px solid #eee",
                  background: i === 0 ? "#fff4ef" : "transparent",
                  minWidth: 120,
                }}>
                  {i === 0 && <span style={{ fontSize: 14 }}>👑 </span>}
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={row.feature} style={{
                borderBottom: ri < rows.length - 1 ? "1px solid #f0f0f0" : "none",
              }}>
                <td style={{
                  padding: "10px 16px",
                  fontWeight: 700,
                  color: "#555",
                  background: "#fafafa",
                }}>
                  {row.feature}
                </td>
                {row.values.map((val, vi) => (
                  <td key={vi} style={{
                    padding: "10px 16px",
                    textAlign: "center",
                    background: vi === 0 ? "#fffbf5" : "transparent",
                  }}>
                    {typeof val === "boolean" ? (
                      val ? (
                        <span style={{ color: "#2e8b57", fontWeight: 900, fontSize: 18 }}>✓</span>
                      ) : (
                        <span style={{ color: "#ccc", fontSize: 18 }}>✕</span>
                      )
                    ) : (
                      <span style={{ color: "#333", fontWeight: 500 }}>{val}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
