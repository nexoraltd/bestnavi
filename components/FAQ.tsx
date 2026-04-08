"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
        <HelpCircle size={18} strokeWidth={2} style={{ color: "var(--accent)" }} />
        <h2 style={{ fontSize: 16, fontWeight: 700 }}>よくある質問</h2>
      </div>

      {items.map((item, i) => (
        <div key={i} style={{ borderBottom: i < items.length - 1 ? "1px solid var(--bg-section)" : "none" }}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            style={{
              width: "100%",
              padding: "14px 20px",
              background: openIndex === i ? "var(--bg-section)" : "transparent",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 14,
              fontWeight: 600,
              color: "var(--text-primary)",
              textAlign: "left",
              transition: "background 0.15s",
            }}
          >
            <span
              style={{
                width: 24,
                height: 24,
                borderRadius: 4,
                background: "var(--accent)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 12,
                fontWeight: 700,
                flexShrink: 0,
              }}
            >
              Q
            </span>
            <span style={{ flex: 1 }}>{item.question}</span>
            <ChevronDown
              size={16}
              style={{
                color: "var(--text-muted)",
                transform: openIndex === i ? "rotate(180deg)" : "rotate(0)",
                transition: "transform 0.2s",
              }}
            />
          </button>

          {openIndex === i && (
            <div
              style={{
                padding: "0 20px 14px 56px",
                fontSize: 14,
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                animation: "fadeInUp 0.2s ease-out",
              }}
            >
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 4,
                    background: "var(--green-light)",
                    color: "var(--green)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
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
