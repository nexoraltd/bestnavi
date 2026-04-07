"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RankingCarousel } from "@/components/RankingCarousel";
import { motion } from "framer-motion";
import Link from "next/link";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = params;

  return (
    <div className="flex flex-col min-h-screen w-full bg-white dark:bg-dark-bg">
      <Header />

      <main className="flex-1">
        {/* Article Header */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full bg-gradient-to-br from-gray-light to-white dark:from-gray-900 dark:to-dark-bg py-12 lg:py-20"
        >
          <div className="container mx-auto px-4 max-w-3xl">
            <time className="text-sm text-gray-500 dark:text-gray-400">
              2026年4月7日
            </time>
            <h1 className="text-4xl lg:text-5xl font-bold text-light-text dark:text-dark-text my-6">
              VPN選びの完全ガイド - 最適なものの選び方
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              VPNサービスを選ぶ際に重要なポイントと、各製品の比較方法を詳しくご説明します。
              セキュリティ、速度、価格など、すべての角度から検討しましょう。
            </p>
            <div className="mt-8 flex items-center justify-between py-6 border-t border-gray-300 dark:border-gray-600">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">作成者</p>
                <p className="font-semibold text-light-text dark:text-dark-text">ベストナビ編集部</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600 dark:text-gray-400">読了時間</p>
                <p className="font-semibold text-light-text dark:text-dark-text">5分</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Article Content */}
        <article className="w-full py-16 lg:py-24">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg dark:prose-invert max-w-none"
            >
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-light-text dark:text-dark-text mb-6">
                  VPNとは？
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  VPN（Virtual Private Network）は、インターネット接続を暗号化し、あなたのIPアドレスを隠すテクノロジーです。
                  これにより、オンラインプライバシーが保護され、より安全にインターネットを利用できます。
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  特に公共のWi-Fiネットワークを使用する際に、VPNは非常に重要な役割を果たします。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-light-text dark:text-dark-text mb-6">
                  VPN選びの重要なポイント
                </h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-4">
                      1. セキュリティと暗号化
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      最新の暗号化技術（AES-256など）を使用しているかどうかを確認しましょう。
                      また、ノーログポリシー（ユーザーの活動ログを記録しない）があるかも重要です。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-4">
                      2. 接続速度
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      VPNを使用すると接続が遅くなることがありますが、質の高いサービスを選べば
                      その影響を最小限に抑えられます。多くのレビューを参考にしましょう。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-4">
                      3. サーバー数とロケーション
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      多くのサーバーと地域をカバーしているサービスほど、より多くのオプションが得られます。
                      あなたがアクセスしたい地域のサーバーがあるか確認しましょう。
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-light-text dark:text-dark-text mb-6">
                  おすすめのVPN サービス
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  詳細なランキングと比較は、下記のページをご覧ください：
                </p>
                <motion.a
                  href="/ranking/vpn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-8 py-4 bg-primary-orange hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  VPNランキングを見る →
                </motion.a>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-light-text dark:text-dark-text mb-6">
                  まとめ
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  VPNの選択は、セキュリティ、速度、価格、ユーザーレビューなど、複数の要素を考慮する必要があります。
                  当サイトのランキングを参考に、あなたのニーズに最適なVPNサービスを見つけてください。
                </p>
              </section>
            </motion.div>
          </div>
        </article>

        {/* Purchase CTA */}
        <section className="w-full py-16 lg:py-24 bg-gradient-to-r from-primary-orange to-orange-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                今すぐ始めましょう
              </h2>
              <p className="text-lg text-orange-100 mb-8">
                安全で高速なVPNサービスで、プライバシーを保護しましょう
              </p>
              <motion.a
                href="https://www.expressvpn.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-10 py-4 bg-white text-primary-orange font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all"
              >
                ExpressVPNで始める
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Related Articles */}
        <RankingCarousel />

        {/* Sidebar - Popular Articles */}
        <section className="w-full py-16 lg:py-24 bg-gray-light dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2" />
              <aside className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
                >
                  <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-6">
                    人気カテゴリ
                  </h3>
                  <div className="space-y-3">
                    {["VPN", "サーバー", "AIツール", "FX", "仮想通貨"].map((cat) => (
                      <Link
                        key={cat}
                        href="#"
                        className="block px-4 py-3 bg-gray-light dark:bg-gray-700 hover:bg-primary-orange hover:text-white text-light-text dark:text-dark-text rounded-lg transition-all"
                      >
                        {cat}ランキング
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
