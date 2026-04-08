"use client";

import { Check, X, BarChart3 } from "lucide-react";

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
    <div
      style={{
        background: "#fff",
        borderRadius: "var(--radius-lg)",
        border: "1px solid var(--border)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: "14px 20px",
          borderBottom: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <BarChart3 size={18} strokeWidth={2} style={{ color: "var(--accent)" }} />
        <h2 style={{ fontSize: 16, fontWeight: 700 }}>比較表</h2>
      </div>

      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, minWidth: 500 }}>
          <thead>
            <tr style={{ background: "var(--bg-section)" }}>
              <th
                style={{
                  padding: "10px 16px",
                  textAlign: "left",
                  fontWeight: 600,
                  color: "var(--text-secondary)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                比較項目
              </th>
              {headers.map((h, i) => (
                <th
                  key={h}
                  style={{
                    padding: "10px 16px",
                    textAlign: "center",
                    fontWeight: 700,
                    color: i === 0 ? "var(--accent)" : "var(--text-primary)",
                    borderBottom: "1px solid var(--border)",
                    background: i === 0 ? "var(--accent-light)" : "transparent",
                    minWidth: 120,
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={row.feature} style={{ borderBottom: ri < rows.length - 1 ? "1px solid var(--bg-section)" : "none" }}>
                <td
                  style={{
                    padding: "9px 16px",
                    fontWeight: 600,
                    color: "var(--text-secondary)",
                    background: "var(--bg-section)",
                  }}
                >
                  {row.feature}
                </td>
                {row.values.map((val, vi) => (
                  <td
                    key={vi}
                    style={{
                      padding: "9px 16px",
                      textAlign: "center",
                      background: vi === 0 ? "#fefce8" : "transparent",
                    }}
                  >
                    {typeof val === "boolean" ? (
                      val ? (
                        <Check size={16} strokeWidth={2.5} style={{ color: "var(--green)" }} />
                      ) : (
                        <X size={16} strokeWidth={2} style={{ color: "#d1d5db" }} />
                      )
                    ) : (
                      <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>{val}</span>
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
