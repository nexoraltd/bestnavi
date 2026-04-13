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

// 提携プログラムのあるカテゴリのみ掲載
// 削除: ai(52) / fx(59) / crypto(53) / esim(50) / security(44)
export const CATEGORY_MAP: Record<string, CategoryMeta> = {
  vpn:     { wpId: 48, title: "VPN比較ランキング",           iconKey: "shield",          description: "NordVPN・ExpressVPN・Surfshark・MillenVPNを速度・安全性・料金で徹底比較", productCount: 4,  tags: ["初心者向け", "海外利用"],        trustBadge: "提携4サービス掲載",    topPickReason: "NordVPN・ExpressVPN・Surfshark・MillenVPNを速度・料金で比較" },
  server:  { wpId: 51, title: "レンタルサーバー比較",        iconKey: "server",          description: "エックスサーバー・ConoHa WING・Kinstaを性能・コスパで比較",            productCount: 3,  tags: ["WordPress向け", "ブログ初心者"], trustBadge: "提携3サービス掲載",    topPickReason: "エックスサーバー・ConoHa WING・Kinstaを料金・性能で比較" },
  english: { wpId: 54, title: "英会話スクール比較",           iconKey: "globe",           description: "BestTeacher・ECC・NOVA・Global Step Academyを料金・講師の質で徹底比較", productCount: 4, tags: ["初心者向け", "ビジネス英語"],    trustBadge: "提携4サービス掲載",    topPickReason: "BestTeacher・ECC・NOVA・GSAを料金・カリキュラムで比較" },
  school:  { wpId: 55, title: "プログラミングスクール比較",  iconKey: "graduation-cap",  description: "Life is Tech!・Winスクール・インターノウスを料金・カリキュラムで比較", productCount: 3,  tags: ["未経験OK", "社会人向け"],        trustBadge: "提携3サービス掲載",    topPickReason: "Life is Tech!・Winスクール・インターノウスを料金・カリキュラムで比較" },
  career:  { wpId: 56, title: "IT転職サービス比較",          iconKey: "briefcase",       description: "テックゴー・ウズウズ・エストレ・社内SE転職ナビを徹底比較",              productCount: 4,  tags: ["20-30代", "未経験OK"],          trustBadge: "提携4サービス掲載",    topPickReason: "IT転職を成功させるエージェント・スクールを比較" },
  fukugyo: { wpId: 57, title: "副業・スキルアップ比較",      iconKey: "trending-up",     description: "SideLine・infraAIなど在宅でできる副業・AIスキル習得サービスを比較",    productCount: 2,  tags: ["副業初心者", "社会人"],          trustBadge: "提携2サービス掲載",     topPickReason: "副業で稼ぐAI・ITスキル習得サービスを解説" },
  fx:      { wpId: 59, title: "FX比較ランキング",             iconKey: "trending-up",     description: "DMM FX・外為オンライン・FXブロードネットをスプレッド・ツールで徹底比較", productCount: 3,  tags: ["FX初心者", "自動売買"],          trustBadge: "提携3社掲載",           topPickReason: "スプレッド・口座開設キャンペーンでFX会社を比較" },
};

// ランキング記事を各カテゴリ先頭に固定
const PINNED_TOP_BY_CATEGORY: Record<number, number[]> = {
  48: [189, 337, 335, 340, 205, 206, 261, 339, 338],  // VPN: ランキング→テレワーク→Netflix→iPhone→NordVPN→Surfshark→Millen→ExpressVPN→Rakulink
  51: [210, 296, 211, 209, 259, 295],       // Server: ランキング→Xserver vs ConoHa→WordPress→Xserver→ConoHa→Kinsta
  54: [285, 367, 385, 388, 389],             // English: ランキング→BestTeacher→GSA→ECC→NOVA
  55: [287, 371, 373, 374, 369],            // School: ランキング→LifeIstech→Winスクール→インターノウス→ティントル
  56: [290, 291, 289, 292, 293],            // Career: ランキング→テックゴー→エストレ→ウズウズ→社内SE
  57: [601, 600, 602],                      // Fukugyo: 副業ランキング→SideLine→infraAI
  59: [700, 705, 701, 702, 703, 704],       // FX: ランキング→始め方→DMM FX→外為オンライン→FXブロードネット→ひまわり証券
};

export function isHighCvr(_postId: number): boolean {
  return true; // 全記事がCVR対象（提携ベースのみ）
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
  // In Next.js 16, page params receive URL-encoded slugs while API routes receive decoded.
  // Decode the incoming slug so it matches the decoded slugs stored in posts.json.
  let decodedSlug = slug;
  try { decodedSlug = decodeURIComponent(slug); } catch { /* invalid encoding, use as-is */ }
  return getCachedPosts().find((p) => p.slug === slug || p.slug === decodedSlug) || null;
}

export async function getAllSlugs(): Promise<string[]> {
  return getCachedPosts().map((p) => p.slug);
}
