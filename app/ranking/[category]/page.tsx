"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RankingCard } from "@/components/RankingCard";
import { Sidebar } from "@/components/Sidebar";
import type { RankingItem } from "@/components/RankingCard";

const categoryMeta: Record<string, { title: string; icon: string }> = {
  vpn: { title: "VPN比較ランキング", icon: "🔒" },
  server: { title: "レンタルサーバー比較", icon: "🖥️" },
  ai: { title: "AIツール比較ランキング", icon: "🤖" },
  fx: { title: "FX口座比較ランキング", icon: "📈" },
  crypto: { title: "仮想通貨取引所比較", icon: "₿" },
};

const sampleRankings: RankingItem[] = [
  {
    rank: 1, name: "サンプル 1位", description: "1位の説明文です。",
    rating: 4.9, price: "¥1,000/月〜",
    tags: ["おすすめ", "人気"],
    pros: ["メリット1", "メリット2"],
    specs: [{ label: "料金", value: "¥1,000/月〜" }, { label: "特徴", value: "業界最高水準" }],
  },
  {
    rank: 2, name: "サンプル 2位", description: "2位の説明文です。",
    rating: 4.7, price: "¥800/月〜",
    tags: ["高速"],
    pros: ["メリット1"],
    specs: [{ label: "料金", value: "¥800/月〜" }],
  },
];

export default function RankingPage({ params }: { params: { category: string } }) {
  const meta = categoryMeta[params.category] || { title: "ランキング", icon: "🏆" };

  return (
    <div style={{ background: "var(--bg-warm)", minHeight: "100vh" }}>
      <Header />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 16px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 32, alignItems: "start" }} className="main-grid">
          <main>
            <div className="section-header">
              <span style={{ fontSize: 24 }}>{meta.icon}</span>
              <h2>{meta.title}【2026年4月最新】</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {sampleRankings.map((item) => (
                <RankingCard key={item.rank} item={item} />
              ))}
            </div>
          </main>
          <div className="sidebar-area"><Sidebar /></div>
        </div>
      </div>
      <Footer />
      <style>{`@media(max-width:768px){.main-grid{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}
