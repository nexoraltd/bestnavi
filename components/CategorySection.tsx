"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

const categories: Category[] = [
  { id: "vpn", name: "VPN", icon: "🔒", count: 12 },
  { id: "server", name: "レンタルサーバー", icon: "⚙️", count: 15 },
  { id: "ai", name: "AIツール", icon: "🤖", count: 20 },
  { id: "fx", name: "FX口座", icon: "📈", count: 8 },
  { id: "crypto", name: "仮想通貨取引所", icon: "₿", count: 10 },
];

export function CategorySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="categories" className="w-full py-16 lg:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-light-text dark:text-dark-text mb-4">
            カテゴリから探す
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            あなたが探している商品カテゴリを選択して、
            最高のランキングをチェックしましょう。
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8"
        >
          {categories.map((category) => (
            <motion.div key={category.id} variants={itemVariants}>
              <Link href={`/ranking/${category.id}`}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -8 }}
                  whileTap={{ scale: 0.98 }}
                  className="h-full bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8 cursor-pointer hover:border-primary-orange dark:hover:border-primary-orange transition-all duration-300 shadow-md hover:shadow-lg group"
                >
                  <div className="flex flex-col items-center justify-center gap-4 h-full">
                    <span className="text-4xl lg:text-5xl group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </span>
                    <h3 className="text-lg lg:text-xl font-bold text-center text-light-text dark:text-dark-text group-hover:text-primary-orange transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">
                      {category.count}件
                    </p>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
