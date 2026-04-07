"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

interface Article {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
}

const articles: Article[] = [
  {
    id: "1",
    title: "VPN選びの完全ガイド - 最適なものの選び方",
    date: "2026-04-05",
    excerpt: "VPNを選ぶ際に重要なポイントと、各製品の比較方法をご紹介します。",
    image: "📝",
  },
  {
    id: "2",
    title: "2026年最新のAIツール比較レポート",
    date: "2026-04-04",
    excerpt: "ChatGPT、Claude、その他の最新AIツールを徹底比較。",
    image: "🤖",
  },
  {
    id: "3",
    title: "初心者向けFX口座選びのポイント",
    date: "2026-04-03",
    excerpt: "FX初心者が口座を選ぶ際に注意すべき点をまとめました。",
    image: "📈",
  },
  {
    id: "4",
    title: "レンタルサーバー比較 - WordPressに最適なものは？",
    date: "2026-04-02",
    excerpt: "ブロガーやサイト運営者向けの最適なサーバーを見つけよう。",
    image: "⚙️",
  },
];

export function RankingCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      const newScrollLeft =
        scrollRef.current.scrollLeft +
        (direction === "right" ? scrollAmount : -scrollAmount);
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-gray-light dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-light-text dark:text-dark-text mb-4">
            最新記事
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            カテゴリ関連の最新情報と詳細なガイドをチェック
          </p>
        </motion.div>

        <div className="relative">
          {/* Carousel Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
            style={{
              scrollBehavior: "smooth",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {articles.map((article) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex-shrink-0 w-full sm:w-96"
              >
                <motion.a
                  href="#"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="block h-full bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
                >
                  {/* Image */}
                  <div className="w-full h-48 bg-gradient-to-br from-primary-orange/20 to-primary-orange/5 dark:from-primary-orange/30 dark:to-primary-orange/10 flex items-center justify-center">
                    <span className="text-6xl">{article.image}</span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col h-56">
                    <time className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                      {new Date(article.date).toLocaleDateString("ja-JP")}
                    </time>
                    <h3 className="text-lg font-bold text-light-text dark:text-dark-text mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 flex-1 line-clamp-2 mb-4">
                      {article.excerpt}
                    </p>
                    <div className="text-primary-orange font-semibold text-sm">
                      続きを読む →
                    </div>
                  </div>
                </motion.a>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/3 transform -translate-y-1/2 -translate-x-6 lg:-translate-x-12 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl hover:bg-gray-light dark:hover:bg-gray-700 transition-all"
            aria-label="Previous"
          >
            <svg
              className="w-6 h-6 text-light-text dark:text-dark-text"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/3 transform -translate-y-1/2 translate-x-6 lg:translate-x-12 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl hover:bg-gray-light dark:hover:bg-gray-700 transition-all"
            aria-label="Next"
          >
            <svg
              className="w-6 h-6 text-light-text dark:text-dark-text"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
