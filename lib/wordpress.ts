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
  vpn:     { wpId: 48, title: "VPN比較ランキング",           iconKey: "shield",          description: "2026年最新VPNを徹底比較。NordVPN・ExpressVPN・Surfsharkを速度・料金・セキュリティで比較。初心者でも失敗しないVPN選びガイド付き。", productCount: 4,  tags: ["初心者向け", "海外利用"],        trustBadge: "提携4サービス掲載",    topPickReason: "NordVPN・ExpressVPN・Surfshark・MillenVPNを速度・料金で比較" },
  server:  { wpId: 51, title: "レンタルサーバー比較",        iconKey: "server",          description: "2026年最新レンタルサーバーを徹底比較。エックスサーバー・ConoHa WINGを料金・表示速度・WordPress性能で比較。初心者向けおすすめサーバーを解説。",            productCount: 3,  tags: ["WordPress向け", "ブログ初心者"], trustBadge: "提携3サービス掲載",    topPickReason: "エックスサーバー・ConoHa WING・Kinstaを料金・性能で比較" },
  english: { wpId: 54, title: "英会話スクール比較",           iconKey: "globe",           description: "BestTeacher・ECC・NOVA・Global Step Academyを料金・講師の質で徹底比較", productCount: 4, tags: ["初心者向け", "ビジネス英語"],    trustBadge: "提携4サービス掲載",    topPickReason: "BestTeacher・ECC・NOVA・GSAを料金・カリキュラムで比較" },
  school:  { wpId: 55, title: "プログラミングスクール比較",  iconKey: "graduation-cap",  description: "Life is Tech!・Winスクール・インターノウスを料金・カリキュラムで比較", productCount: 3,  tags: ["未経験OK", "社会人向け"],        trustBadge: "提携3サービス掲載",    topPickReason: "Life is Tech!・Winスクール・インターノウスを料金・カリキュラムで比較" },
  career:  { wpId: 56, title: "IT転職サービス比較",          iconKey: "briefcase",       description: "テックゴー・ウズウズ・エストレ・社内SE転職ナビを徹底比較",              productCount: 4,  tags: ["20-30代", "未経験OK"],          trustBadge: "提携4サービス掲載",    topPickReason: "IT転職を成功させるエージェント・スクールを比較" },
  fukugyo: { wpId: 57, title: "副業・スキルアップ比較",      iconKey: "trending-up",     description: "SideLine・infraAIなど在宅でできる副業・AIスキル習得サービスを比較",    productCount: 2,  tags: ["副業初心者", "社会人"],          trustBadge: "提携2サービス掲載",     topPickReason: "副業で稼ぐAI・ITスキル習得サービスを解説" },
  fx:      { wpId: 59, title: "FX比較ランキング",             iconKey: "trending-up",     description: "DMM FX・外為オンライン・ひまわり証券・FXブロードネットをスプレッド・ツールで徹底比較", productCount: 4,  tags: ["FX初心者", "自動売買"],          trustBadge: "提携4社掲載",           topPickReason: "スプレッド・ツール・キャンペーンでFX会社を徹底比較" },
  esim:    { wpId: 50, title: "eSIM比較ランキング",            iconKey: "smartphone",      description: "Airalo・Rakulinkなど海外旅行・海外出張向けeSIMサービスを料金・対応国・使いやすさで徹底比較", productCount: 2, tags: ["海外旅行", "海外出張"],          trustBadge: "提携2サービス掲載",     topPickReason: "世界200カ国対応Airaloを中心にeSIMの選び方を解説" },
};

// ランキング記事を各カテゴリ先頭に固定
const PINNED_TOP_BY_CATEGORY: Record<number, number[]> = {
  48: [189, 337, 335, 340, 756, 757, 566, 205, 206, 261, 339, 338, 578, 579],  // VPN: ランキング→テレワーク→Netflix→iPhone→NordVPN vs ExpressVPN→iOS設定ガイド→無料体験→NordVPN→Surfshark→Millen→ExpressVPN→Rakulink→Mac→Netflix海外
  50: [712, 715, 716, 717],                  // eSIM: ランキング→Airalo口コミ→海外旅行比較→設定ガイド
  51: [210, 296, 211, 209, 259, 295, 560, 564, 551, 553, 559, 550, 556, 576, 577],  // Server: ランキング→比較→WordPress→Xserver→ConoHa→Kinsta→全サービス→WP専用→VPSランキング→ゲームサーバー→WindowsVPS→Business→XServerビジネス→XServerBiz評判→格安比較
  54: [285, 367, 385, 388, 389],             // English: ランキング→BestTeacher→GSA→ECC→NOVA
  55: [287, 371, 563, 567, 373, 374, 369],   // School: ランキング→LifeIstech→スクール比較→データサイエンス→Winスクール→インターノウス→ティントル
  56: [290, 291, 562, 565, 289, 292, 293],   // Career: ランキング→テックゴー→エンジニア比較→40代→エストレ→ウズウズ→社内SE
  57: [601, 600, 602, 603, 604, 605],        // Fukugyo: 副業ランキング→SideLine→infraAI→Webデザイン→動画編集→AI副業
  59: [700, 705, 701, 750, 702, 751, 703, 754, 755, 561, 714, 706, 707, 752, 753],  // FX: ランキング→始め方→DMM FX→外為オンライン(新)→旧外為→ひまわり(新)→FXブロードネット→SBI FX→GMOクリック→FX用VPS→口座選び→スプレッド→自動売買→税金→スマホアプリ
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
