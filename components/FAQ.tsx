"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div style={{
      background: "#fff",
      borderRadius: 12,
      border: "1px solid var(--border)",
      overflow: "hidden",
      boxShadow: "var(--shadow-card)",
    }}>
      <div className="section-header" style={{ margin: 0, padding: "16px 20px", borderBottom: "3px solid #ff6b35", borderRadius: 0 }}>
        <span style={{ fontSize: 22 }}>❓</span>
        <h2>よくある質問</h2>
      </div>

      {items.map((item, i) => (
        <div key={i} style={{ borderBottom: i < items.length - 1 ? "1px solid #f0f0f0" : "none" }}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            style={{
              width: "100%",
              padding: "16px 20px",
              background: openIndex === i ? "#fff4ef" : "transparent",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 14,
              fontWeight: 700,
              color: "#1a1a1a",
              textAlign: "left",
              transition: "background 0.15s",
            }}
          >
            <span style={{
              width: 28, height: 28,
              borderRadius: "50%",
              background: "#ff6b35",
              color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 13, fontWeight: 900, flexShrink: 0,
            }}>
              Q
            </span>
            <span style={{ flex: 1 }}>{item.question}</span>
            <span style={{
              fontSize: 18, color: "#ff6b35",
              transform: openIndex === i ? "rotate(180deg)" : "rotate(0)",
              transition: "transform 0.2s",
            }}>
              ▼
            </span>
          </button>

          {openIndex === i && (
            <div style={{
              padding: "0 20px 16px 60px",
              fontSize: 14, color: "#555", lineHeight: 1.8,
              animation: "fadeInUp 0.2s ease-out",
            }}>
              <div style={{
                display: "flex", gap: 12, alignItems: "flex-start",
              }}>
                <span style={{
                  width: 28, height: 28,
                  borderRadius: "50%",
                  background: "#e8f5e9",
                  color: "#2e8b57",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 13, fontWeight: 900, flexShrink: 0,
                }}>
                  A
                </span>
                <p style={{ margin: 0 }}>{item.answer}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
