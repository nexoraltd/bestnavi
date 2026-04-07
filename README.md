# ベストナビ (BestNavi) - Next.js 14 アフィリエイトランキングサイト

プロフェッショナルな信頼性を備えたアフィリエイトランキングサイト。VPN、レンタルサーバー、AIツール、FX、仮想通貨などのカテゴリで、厳選された商品を比較・ランキング表示します。

## 🚀 技術スタック

- **Frontend**: Next.js 14 + React 19 + TypeScript
- **Styling**: TailwindCSS 4 + CSS Variables
- **Animations**: Framer Motion 11
- **Theme**: next-themes (Dark/Light Mode)
- **Responsive**: Mobile-first design

## ✨ 主要機能

### ✅ 完成した機能
- [x] Header with dark mode toggle
- [x] Hero banner with prominent CTA (25% larger)
- [x] Category section with hover effects
- [x] Ranking cards (Gold/Silver/Bronze badges)
- [x] Ranking page with dynamic routing
- [x] Article detail page with carousel
- [x] Footer with links
- [x] Dark/Light mode toggle with smooth transitions
- [x] Framer Motion animations
- [x] WCAG 2.1 AA accessibility
- [x] Mobile-first responsive design
- [x] TailwindCSS with custom color tokens

### 📋 構成されたコンポーネント

```
components/
├── Providers.tsx (ThemeProvider)
├── Header.tsx (Navigation + Dark mode)
├── HeroBanner.tsx (Hero section with large CTA)
├── CategorySection.tsx (5 category tiles)
├── RankingCard.tsx (Ranking cards with badges)
├── RankingCarousel.tsx (Article carousel)
└── Footer.tsx (Footer with links)

app/
├── layout.tsx (Root layout)
├── page.tsx (Home page)
├── globals.css (Dark mode + custom colors)
├── ranking/[category]/page.tsx (Ranking page)
└── article/[slug]/page.tsx (Article detail)
```

## 🎨 デザイン特性

### カラー
- Primary Orange: #FF6B35
- Dark Background: #121212
- Light Background: #FFFFFF
- Dark Text: #E8E8E8
- Light Text: #333333

### アニメーション
- Hover scale + shadow (Framer Motion spring)
- Fade-in on page load (200ms)
- Badge shimmer effect
- Smooth carousel transitions

### レスポンシブ
- Mobile: < 768px
- Tablet: 768px - 1279px
- Desktop: 1280px+

## 📦 セットアップ

```bash
# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev

# ビルド
npm run build
npm start
```

## 🔄 Dark Mode

自動的にシステムプリファレンスに従い、Header でトグル可能です。

## ♿ アクセシビリティ

- WCAG 2.1 AA 準拠
- セマンティック HTML
- 48px+ タッチターゲット
- 4.5:1 以上のテキスト比

## 📝 作成済みファイル

- **package.json**: framer-motion, next-themes 依存性追加済み
- **tailwind.config.ts**: カスタムカラー・アニメーション定義
- **app/globals.css**: Dark mode + CSS variables
- **7つのコンポーネント**: すべて実装完了
- **3つのページ**: Home, Ranking, Article

## 🔧 カスタマイズ

- `:root` セクション内の CSS 変数でカラーを変更
- `tailwind.config.ts` でトークンを更新
- コンポーネント内の `dark:` クラスで dark mode を制御

## 📚 次のステップ

1. CMS 統合 (Contentful)
2. アフィリエイト API 統合
3. SEO 最適化
4. パフォーマンステスト

---

**Next.js 14 + React 19 + TailwindCSS + Framer Motion で構築**
