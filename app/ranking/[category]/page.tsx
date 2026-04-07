"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RankingCard } from "@/components/RankingCard";
import { RankingCarousel } from "@/components/RankingCarousel";
import { motion } from "framer-motion";
import Link from "next/link";

interface RankingPageProps {
  params: {
    category: string;
  };
}

const categoryData: Record<string, { title: string; description: string; icon: string }> = {
  vpn: {
    title: "VPN比較ランキング",
    description: "安全性と速度を兼ね備えた最高のVPNサービスを比較",
    icon: "🔒",
  },
  server: {
    title: "レンタルサーバー比較",
    description: "WordPress運営に最適なサーバーを厳選比較",
    icon: "⚙️",
  },
  ai: {
    title: "AIツール比較ランキング",
    description: "最新のAIツールを徹底比較 - ChatGPT, Claude, など",
    icon: "🤖",
  },
  fx: {
    title: "FX口座比較ランキング",
    description: "初心者から上級者まで - おすすめFX口座を厳選",
    icon: "📈",
  },
  crypto: {
    title: "仮想通貨取引所比較",
    description: "安全で信頼できる仮想通貨取引所を比較",
    icon: "₿",
  },
};

const rankingData: Record<
  string,
  Array<{
    rank: number;
    title: string;
    description: string;
    price: string;
    rating: number;
  }>
> = {
  vpn: [
    {
      rank: 1,
      title: "ExpressVPN",
      description: "世界最速のVPN。94カ国で利用可能。強力な暗号化。",
      price: "$6.67/月",
      rating: 4.9,
    },
    {
      rank: 2,
      title: "NordVPN",
      description: "高速で安全。日本語サポート完備。",
      price: "$3.99/月",
      rating: 4.8,
    },
    {
      rank: 3,
      title: "Surfshark",
      description: "無制限デバイス接続。コストパフォーマンス最高。",
      price: "$2.19/月",
      rating: 4.7,
    },
  ],
  server: [
    {
      rank: 1,
      title: "ConoHa WING",
      description: "国内最速。WordPressに最適。サポート充実。",
      price: "¥2,140/月",
      rating: 4.9,
    },
    {
      rank: 2,
      title: "Xserver",
      description: "安定性抜群。高機能。初心者向け。",
      price: "¥990/月",
      rating: 4.8,
    },
    {
      rank: 3,
      title: "さくらインターネット",
      description: "信頼性で定評。幅広い機能。",
      price: "¥605/月",
      rating: 4.6,
    },
  ],
  ai: [
    {
      rank: 1,
      title: "ChatGPT Plus",
      description: "最新AI。GPT-4対応。高速応答。",
      price: "$20/月",
      rating: 4.9,
    },
    {
      rank: 2,
      title: "Claude Pro",
      description: "論理思考に優れたAI。高い精度。",
      price: "$20/月",
      rating: 4.8,
    },
    {
      rank: 3,
      title: "Google Gemini Pro",
      description: "マルチモーダル対応。高速処理。",
      price: "¥1,900/月",
      rating: 4.7,
    },
  ],
  fx: [
    {
      rank: 1,
      title: "GMOクリック証券",
      description: "初心者向け。スプレッド最小。サポート充実。",
      price: "完全無料",
      rating: 4.9,
    },
    {
      rank: 2,
      title: "DMMFXて",
      description: "人気No.1。ツール豊富。評判高い。",
      price: "完全無料",
      rating: 4.8,
    },
    {
      rank: 3,
      title: "YJFX!",
      description: "Yahooの信頼性。アプリが優秀。",
      price: "完全無料",
      rating: 4.7,
    },
  ],
  crypto: [
    {
      rank: 1,
      title: "bitFlyer",
      description: "日本最大級。セキュリティ最高水準。",
      price: "無料口座開設",
      rating: 4.8,
    },
    {
      rank: 2,
      title: "Coincheck",
      description: "シンプルで使いやすい。初心者向け。",
      price: "無料口座開設",
      rating: 4.7,
    },
    {
      rank: 3,
      title: "GMOコイン",
      description: "GMO傘下で信頼性高い。手数料安い。",
      price: "無料口座開設",
      rating: 4.6,
    },
  ],
};

export default function RankingPage({ params }: RankingPageProps) {
  const category = params.category as keyof typeof categoryData;
  const data = categoryData[category];
  const rankings = rankingData[category] || [];
  const [checkedRanks, setCheckedRanks] = useState<number[]>([]);

  if (!data) {
    return (
      <div className="flex flex-col min-h-screen w-full">
        <Header />
        <main className="flex-1 flex items-center justify-center py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-light-text dark:text-dark-text mb-4">
              カテゴリが見つかりません
            </h1>
            <Link href="/" className="text-primary-orange hover:underline">
              ホームに戻る
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleCheck = (rank: number, checked: boolean) => {
    if (checked) {
      setCheckedRanks([...checkedRanks, rank]);
    } else {
      setCheckedRanks(checkedRanks.filter((r) => r !== rank));
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-white dark:bg-dark-bg">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-gray-light to-white dark:from-gray-900 dark:to-dark-bg py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl lg:text-5xl">{data.icon}</span>
                <h1 className="text-3xl lg:text-5xl font-bold text-light-text dark:text-dark-text">
                  {data.title}
                </h1>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                {data.description}
              </p>
              {checkedRanks.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-block bg-primary-orange text-white px-6 py-3 rounded-lg font-semibold"
                >
                  {checkedRanks.length}件を比較中
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="w-full py-8 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-light-text dark:text-dark-text mb-2">
                  ソート
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-light-text dark:text-dark-text focus:ring-2 focus:ring-primary-orange outline-none">
                  <option>おすすめ順</option>
                  <option>評価が高い順</option>
                  <option>価格が安い順</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Rankings Grid */}
        <section className="w-full py-16 lg:py-24 bg-white dark:bg-dark-bg">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
            >
              {rankings.map((ranking) => (
                <motion.div
                  key={ranking.rank}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className={`${ranking.rank <= 3 ? "lg:col-span-1" : ""}`}
                >
                  <RankingCard
                    rank={ranking.rank}
                    title={ranking.title}
                    description={ranking.description}
                    price={ranking.price}
                    rating={ranking.rating}
                    onCheck={handleCheck}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Comparison Button */}
            {checkedRanks.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-center"
              >
                <button className="px-10 py-4 bg-primary-orange hover:bg-orange-600 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                  {checkedRanks.length}件を比較する
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Latest Articles */}
        <RankingCarousel />
      </main>

      <Footer />
    </div>
  );
}
