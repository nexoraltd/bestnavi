import { Header } from "@/components/Header";
import { HeroBanner } from "@/components/HeroBanner";
import { SearchFilter } from "@/components/SearchFilter";
import { RankingCard } from "@/components/RankingCard";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FAQ } from "@/components/FAQ";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import type { RankingItem } from "@/components/RankingCard";

const vpnRankings: RankingItem[] = [
  {
    rank: 1,
    name: "NordVPN",
    description: "世界60カ国以上にサーバーを展開。軍事レベルのAES-256暗号化でセキュリティは業界最高水準。日本語サポートも完備で初心者にもおすすめ。",
    rating: 4.9,
    price: "$3.99/月〜",
    tags: ["おすすめ", "人気", "高速"],
    pros: [
      "世界60カ国5,500台以上のサーバー",
      "30日間返金保証で安心",
      "同時接続6台まで対応",
      "24時間日本語カスタマーサポート",
    ],
    specs: [
      { label: "月額料金", value: "$3.99〜（2年プラン）" },
      { label: "サーバー数", value: "5,500台以上" },
      { label: "同時接続", value: "6台" },
      { label: "返金保証", value: "30日間" },
      { label: "暗号化", value: "AES-256" },
    ],
  },
  {
    rank: 2,
    name: "ExpressVPN",
    description: "94カ国にサーバーを展開する最速VPN。独自のLightwayプロトコルで圧倒的な速度を実現。ストリーミングに最適。",
    rating: 4.8,
    price: "$6.67/月〜",
    tags: ["高速", "安全"],
    pros: [
      "業界最速のLightwayプロトコル",
      "94カ国に3,000台以上のサーバー",
      "Netflix等のストリーミング対応",
      "キルスイッチ標準搭載",
    ],
    specs: [
      { label: "月額料金", value: "$6.67〜（1年プラン）" },
      { label: "サーバー数", value: "3,000台以上" },
      { label: "同時接続", value: "8台" },
      { label: "返金保証", value: "30日間" },
      { label: "暗号化", value: "AES-256" },
    ],
  },
  {
    rank: 3,
    name: "Surfshark",
    description: "無制限デバイス接続が最大の魅力。家族全員で使えてコストパフォーマンス抜群。広告ブロック機能も搭載。",
    rating: 4.7,
    price: "$2.19/月〜",
    tags: ["無料", "初心者向け"],
    pros: [
      "デバイス接続数が無制限",
      "業界最安クラスの月額料金",
      "CleanWeb（広告ブロック）搭載",
      "MultiHopでセキュリティ強化",
    ],
    specs: [
      { label: "月額料金", value: "$2.19〜（2年プラン）" },
      { label: "サーバー数", value: "3,200台以上" },
      { label: "同時接続", value: "無制限" },
      { label: "返金保証", value: "30日間" },
      { label: "暗号化", value: "AES-256" },
    ],
  },
];

const comparisonHeaders = ["NordVPN", "ExpressVPN", "Surfshark"];
const comparisonRows = [
  { feature: "月額料金", values: ["$3.99〜", "$6.67〜", "$2.19〜"] },
  { feature: "サーバー数", values: ["5,500+", "3,000+", "3,200+"] },
  { feature: "同時接続数", values: ["6台", "8台", "無制限"] },
  { feature: "日本語サポート", values: [true, true, true] },
  { feature: "30日返金保証", values: [true, true, true] },
  { feature: "広告ブロック", values: [true, false, true] },
  { feature: "ノーログポリシー", values: [true, true, true] },
  { feature: "Netflix対応", values: [true, true, true] },
  { feature: "キルスイッチ", values: [true, true, true] },
];

const faqItems = [
  {
    question: "VPNとは何ですか？初心者でも使えますか？",
    answer: "VPN（Virtual Private Network）はインターネット接続を暗号化し、プライバシーを保護するサービスです。最近のVPNはアプリをインストールしてワンクリックで接続するだけなので、初心者の方でも簡単に使えます。"
  },
  {
    question: "無料のVPNではダメですか？",
    answer: "無料VPNは速度制限やデータ上限があるだけでなく、ユーザーデータを第三者に販売しているケースもあります。セキュリティとプライバシーを重視するなら、信頼できる有料VPNの利用をおすすめします。"
  },
  {
    question: "VPNを使うと速度は遅くなりますか？",
    answer: "暗号化処理のため若干の速度低下はありますが、当サイトで紹介している上位VPNでは、通常のブラウジングやストリーミングに支障のない速度を維持しています。"
  },
  {
    question: "返金保証はどのように利用できますか？",
    answer: "各VPNサービスには30日間の返金保証があります。期間内にカスタマーサポートに連絡するだけで全額返金されます。実質的に無料でお試しできます。"
  },
];

export default function Home() {
  return (
    <div style={{ background: "var(--bg-warm)", minHeight: "100vh" }}>
      <Header />
      <HeroBanner />
      <SearchFilter />

      {/* Main Content: 1 Column + Sidebar */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 16px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 300px",
          gap: 32,
          alignItems: "start",
        }}
        className="main-grid"
        >
          {/* Main Column */}
          <main>
            {/* Section Header */}
            <div className="section-header">
              <span style={{ fontSize: 24 }}>🏆</span>
              <h2>VPNおすすめランキング【2026年4月最新】</h2>
            </div>

            {/* Info Box */}
            <div style={{
              background: "#fff4ef",
              border: "1px solid #ffcdb2",
              borderRadius: 10,
              padding: "14px 18px",
              marginBottom: 24,
              display: "flex", alignItems: "flex-start", gap: 10,
              fontSize: 13, color: "#555", lineHeight: 1.7,
            }}>
              <span style={{ fontSize: 20, flexShrink: 0 }}>📌</span>
              <div>
                当ランキングは各サービスの公式情報・料金・機能をもとに比較しています。
                ※当サイトはアフィリエイトプログラムを利用しています。
              </div>
            </div>

            {/* Ranking Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 40 }}>
              {vpnRankings.map((item) => (
                <RankingCard key={item.rank} item={item} />
              ))}
            </div>

            {/* Comparison Table */}
            <div style={{ marginBottom: 40 }}>
              <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />
            </div>

            {/* FAQ */}
            <div style={{ marginBottom: 40 }}>
              <FAQ items={faqItems} />
            </div>

            {/* Bottom CTA */}
            <div style={{
              background: "linear-gradient(135deg, #ff6b35, #ff8f42)",
              borderRadius: 16,
              padding: "32px 24px",
              textAlign: "center",
              color: "#fff",
              boxShadow: "0 8px 30px rgba(255,107,53,0.25)",
            }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>📊</div>
              <h3 style={{ fontSize: 22, fontWeight: 900, marginBottom: 8 }}>他のカテゴリもチェック</h3>
              <p style={{ fontSize: 14, opacity: 0.9, marginBottom: 20 }}>
                VPN以外にもFX・仮想通貨・サーバー・AIツールのランキングを公開中
              </p>
              <a href="#categories" style={{
                display: "inline-block",
                background: "#fff",
                color: "#ff6b35",
                padding: "14px 48px",
                borderRadius: 50,
                fontWeight: 900,
                fontSize: 16,
                textDecoration: "none",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                transition: "transform 0.2s",
              }}>
                カテゴリ一覧を見る →
              </a>
            </div>
          </main>

          {/* Sidebar */}
          <div className="sidebar-area">
            <Sidebar />
          </div>
        </div>
      </div>

      <Footer />

      {/* Responsive Grid Override */}
      <style>{`
        @media (max-width: 768px) {
          .main-grid {
            grid-template-columns: 1fr !important;
          }
          .sidebar-area {
            order: 2;
          }
        }
      `}</style>
    </div>
  );
}
