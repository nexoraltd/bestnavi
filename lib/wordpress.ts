import fs from "fs";
import path from "path";

export interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  modified: string;
  link: string;
  categories: number[];
}

export interface CategoryMeta {
  wpId: number;
  title: string;
  iconKey: string;
  description: string;
  productCount: number;       // 比較した製品数
  tags: string[];              // 対象者タグ
  trustBadge: string;          // 信頼性バッジテキスト
  topPickReason: string;       // 編集部おすすめポイント（この記事を読むべき理由）
}

export const CATEGORY_MAP: Record<string, CategoryMeta> = {
  vpn: { wpId: 48, title: "VPN比較ランキング", iconKey: "shield", description: "おすすめVPNサービスを速度・安全性・料金で徹底比較", productCount: 12, tags: ["初心者向け", "海外利用"], trustBadge: "12社を実測テスト", topPickReason: "10社を実機テストし、速度・安全性・料金で徹底比較" },
  server: { wpId: 51, title: "レンタルサーバー比較", iconKey: "server", description: "WordPress向けレンタルサーバーを性能・コスパで比較", productCount: 10, tags: ["WordPress向け", "ブログ初心者"], trustBadge: "10社を速度計測", topPickReason: "10社の表示速度を実測し、WordPress対応度まで検証" },
  ai: { wpId: 52, title: "AIツール比較ランキング", iconKey: "bot", description: "ChatGPT・画像生成AIなど最新AIツールを徹底比較", productCount: 15, tags: ["ビジネス活用", "クリエイター"], trustBadge: "15ツールを実際に使用", topPickReason: "15ツールを実際に使い、用途別に最適な選択肢を解説" },
  fx: { wpId: 59, title: "FX口座比較ランキング", iconKey: "trending-up", description: "FX口座をスプレッド・取引ツール・信頼性で比較", productCount: 15, tags: ["初心者向け", "少額投資"], trustBadge: "15社のスプレッドを実測", topPickReason: "15社のスプレッド・取引ツール・信頼性を実測比較" },
  crypto: { wpId: 53, title: "仮想通貨取引所比較", iconKey: "bitcoin", description: "仮想通貨取引所を手数料・セキュリティ・使いやすさで比較", productCount: 8, tags: ["初心者向け", "少額投資"], trustBadge: "8社を手数料検証", topPickReason: "8社の手数料・セキュリティ・使いやすさを実際に検証" },
  esim: { wpId: 50, title: "eSIM比較ランキング", iconKey: "smartphone", description: "海外旅行・出張に便利なeSIMサービスを比較", productCount: 10, tags: ["海外旅行", "出張"], trustBadge: "10サービスを現地テスト", topPickReason: "10サービスを現地で通信テストし、対応国数・速度で比較" },
  career: { wpId: 56, title: "キャリア・転職サービス比較", iconKey: "briefcase", description: "転職エージェント・キャリアサービスを比較", productCount: 8, tags: ["20-30代", "未経験OK"], trustBadge: "8サービスを徹底調査", topPickReason: "8サービスの求人数・サポート体制を利用者目線で調査" },
  school: { wpId: 55, title: "プログラミングスクール比較", iconKey: "graduation-cap", description: "プログラミングスクールを料金・カリキュラムで比較", productCount: 10, tags: ["未経験OK", "転職保証"], trustBadge: "10校を受講者取材", topPickReason: "10校の受講者を取材し、カリキュラム・転職実績で比較" },
  english: { wpId: 54, title: "英会話サービス比較", iconKey: "globe", description: "オンライン英会話サービスを料金・講師の質で比較", productCount: 12, tags: ["初心者向け", "ビジネス英語"], trustBadge: "12社を体験レッスン", topPickReason: "12社の体験レッスンを受講し、講師の質・料金で比較" },
  security: { wpId: 44, title: "セキュリティソフト比較", iconKey: "shield-check", description: "ウイルス対策・セキュリティソフトを性能で比較", productCount: 8, tags: ["Windows向け", "Mac対応"], trustBadge: "8製品を検出率テスト", topPickReason: "8製品の検出率・動作負荷を実測し、コスパまで比較" },
};

// LOW CVR記事 = 情報系・ハウツー系（比較ランキングに直結しない）
// これらは表示順で後回しにし、フィーチャーからも除外する
const LOW_CVR_POST_IDS = new Set([
  211,  // Coincheck口座開設ガイド
  229,  // VPN入門ガイド
  263,  // GMOコインガイド
  327,  // iPhone VPN設定方法
  331,  // WordPressブログ始め方
  335,  // 海外から日本のテレビ視聴
  339,  // Netflix VPN視聴
  343,  // Android VPN設定方法
  353,  // ChatGPT使い方
  359,  // 仮想通貨入門
  365,  // フィッシング対策
  379,  // サーバー移行ガイド
  545,  // FX確定申告
]);

// カテゴリ別の推し記事（最もCVRが高い記事を各カテゴリで固定）
// これらがランキング1位・フィーチャーに優先表示される
const PINNED_TOP_BY_CATEGORY: Record<number, number[]> = {
  48: [189, 205, 206],     // VPN: おすすめランキング, NordVPN(直契約), Surfshark(直契約)
  51: [210, 209, 259],     // Server: ランキング, Xserver, ConoHa
  52: [48, 355, 357],      // AI: おすすめ比較, 画像生成, ライティング
  59: [523, 525, 533],     // FX: ランキング, DMM FX, 外為オンライン
  53: [522, 361, 211],     // Crypto: ランキング, BTC積立, Coincheck
  50: [265, 345, 347],     // eSIM: おすすめ比較
  56: [289, 375, 377],     // Career: 転職エージェント比較
  55: [287, 371, 373],     // School: スクール比較
  54: [285, 367, 369],     // English: 英会話比較
  44: [267, 363],          // Security: セキュリティソフト比較
};

export function isHighCvr(postId: number): boolean {
  return !LOW_CVR_POST_IDS.has(postId);
}

/** CVR優先でソート: ピン留め記事 → HIGH CVR → LOW CVR（各グループ内は更新日順） */
function sortByCvr(posts: WPPost[], categoryId?: number): WPPost[] {
  const pinned = categoryId ? (PINNED_TOP_BY_CATEGORY[categoryId] || []) : [];

  return [...posts].sort((a, b) => {
    const aPinIdx = pinned.indexOf(a.id);
    const bPinIdx = pinned.indexOf(b.id);

    // ピン留め記事が最優先
    if (aPinIdx !== -1 && bPinIdx !== -1) return aPinIdx - bPinIdx;
    if (aPinIdx !== -1) return -1;
    if (bPinIdx !== -1) return 1;

    // HIGH CVR > LOW CVR
    const aHigh = isHighCvr(a.id);
    const bHigh = isHighCvr(b.id);
    if (aHigh && !bHigh) return -1;
    if (!aHigh && bHigh) return 1;

    // 同じCVRレベル内は更新日順
    return new Date(b.modified).getTime() - new Date(a.modified).getTime();
  });
}

// 静的JSONから全記事を読み込み（ビルド時に1回だけ）
function loadPosts(): WPPost[] {
  try {
    const jsonPath = path.join(process.cwd(), "data", "posts.json");
    const raw = fs.readFileSync(jsonPath, "utf-8");
    return JSON.parse(raw);
  } catch {
    console.warn("Warning: data/posts.json not found, returning empty posts");
    return [];
  }
}

let _postsCache: WPPost[] | null = null;
function getCachedPosts(): WPPost[] {
  if (!_postsCache) _postsCache = loadPosts();
  return _postsCache;
}

export async function getAllPosts(): Promise<WPPost[]> {
  return sortByCvr(getCachedPosts());
}

export async function getPostsByCategory(categoryId: number): Promise<WPPost[]> {
  const posts = getCachedPosts().filter((p) => p.categories.includes(categoryId));
  return sortByCvr(posts, categoryId);
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  return getCachedPosts().find((p) => p.slug === slug) || null;
}

export async function getAllSlugs(): Promise<string[]> {
  return getCachedPosts().map((p) => p.slug);
}
