"use client";

import { useState } from "react";
import { Search } from "lucide-react";

export function SearchFilter() {
  const [category, setCategory] = useState("");
  const [budget, setBudget] = useState("");
  const [criteria, setCriteria] = useState("");

  const selectStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 12px",
    borderRadius: 6,
    border: "1px solid var(--border)",
    background: "#fff",
    color: "var(--text-primary)",
    fontSize: 14,
    cursor: "pointer",
    appearance: "none" as const,
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 12px center",
  };

  return (
    <section
      style={{
        background: "#fff",
        padding: "24px 0",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 14,
          }}
        >
          <Search size={17} strokeWidth={2} style={{ color: "var(--accent)" }} />
          <span style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)" }}>
            条件を絞り込む
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 12,
            marginBottom: 14,
          }}
        >
          <div>
            <label style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 4, display: "block" }}>カテゴリ</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} style={selectStyle}>
              <option value="">指定なし</option>
              <option value="vpn">VPN</option>
              <option value="server">レンタルサーバー</option>
              <option value="ai">AIツール</option>
              <option value="fx">FX口座</option>
              <option value="crypto">仮想通貨取引所</option>
            </select>
          </div>

          <div>
            <label style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 4, display: "block" }}>予算</label>
            <select value={budget} onChange={(e) => setBudget(e.target.value)} style={selectStyle}>
              <option value="">指定なし</option>
              <option value="free">無料</option>
              <option value="500">〜500円/月</option>
              <option value="1000">〜1,000円/月</option>
              <option value="3000">〜3,000円/月</option>
              <option value="over">3,000円以上</option>
            </select>
          </div>

          <div>
            <label style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 4, display: "block" }}>重視するポイント</label>
            <select value={criteria} onChange={(e) => setCriteria(e.target.value)} style={selectStyle}>
              <option value="">指定なし</option>
              <option value="cost">コスパ重視</option>
              <option value="speed">速度・スピード重視</option>
              <option value="security">安全性重視</option>
              <option value="beginner">初心者向け</option>
              <option value="support">サポート充実</option>
            </select>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <button className="cta-primary" style={{ gap: 6 }}>
            <Search size={15} />
            この条件で検索
          </button>
        </div>
      </div>
    </section>
  );
}
