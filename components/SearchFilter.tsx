"use client";

import { useState } from "react";

export function SearchFilter() {
  const [category, setCategory] = useState("");
  const [budget, setBudget] = useState("");
  const [speed, setSpeed] = useState("");

  return (
    <section style={{
      background: "#3a3a3a",
      padding: "24px 0",
      borderBottom: "1px solid #555",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px" }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 8,
          marginBottom: 16, color: "#fff"
        }}>
          <span style={{ fontSize: 20 }}>🔍</span>
          <span style={{ fontSize: 16, fontWeight: 700 }}>
            あなたに<span style={{ color: "#ff6b35" }}>ピッタリ</span>のサービスを探す
          </span>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 12,
          marginBottom: 16,
        }}>
          <div>
            <label style={{ fontSize: 12, color: "#ccc", marginBottom: 4, display: "block" }}>カテゴリ</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{
                width: "100%", padding: "10px 12px",
                borderRadius: 8, border: "1px solid #555",
                background: "#4a4a4a", color: "#fff",
                fontSize: 14, cursor: "pointer",
                appearance: "none",
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ff6b35' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 12px center",
              }}
            >
              <option value="">指定なし</option>
              <option value="vpn">VPN</option>
              <option value="server">レンタルサーバー</option>
              <option value="ai">AIツール</option>
              <option value="fx">FX口座</option>
              <option value="crypto">仮想通貨取引所</option>
            </select>
          </div>

          <div>
            <label style={{ fontSize: 12, color: "#ccc", marginBottom: 4, display: "block" }}>予算</label>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              style={{
                width: "100%", padding: "10px 12px",
                borderRadius: 8, border: "1px solid #555",
                background: "#4a4a4a", color: "#fff",
                fontSize: 14, cursor: "pointer",
                appearance: "none",
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ff6b35' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 12px center",
              }}
            >
              <option value="">指定なし</option>
              <option value="free">無料</option>
              <option value="500">〜500円/月</option>
              <option value="1000">〜1,000円/月</option>
              <option value="3000">〜3,000円/月</option>
              <option value="over">3,000円以上</option>
            </select>
          </div>

          <div>
            <label style={{ fontSize: 12, color: "#ccc", marginBottom: 4, display: "block" }}>重視するポイント</label>
            <select
              value={speed}
              onChange={(e) => setSpeed(e.target.value)}
              style={{
                width: "100%", padding: "10px 12px",
                borderRadius: 8, border: "1px solid #555",
                background: "#4a4a4a", color: "#fff",
                fontSize: 14, cursor: "pointer",
                appearance: "none",
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ff6b35' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 12px center",
              }}
            >
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
          <button
            className="cta-primary"
            style={{ padding: "14px 60px", fontSize: 16 }}
          >
            🔍 この条件で検索
          </button>
        </div>
      </div>
    </section>
  );
}
