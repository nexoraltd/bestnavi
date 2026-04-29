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
  "credit-card": { wpId: 60, title: "クレジットカード比較",   iconKey: "credit-card",     description: "楽天カード・三井住友カード(NL)・JCBカード Wなど年会費無料の高還元クレジットカードを徹底比較。初めてのカード選びから高単価ゴールドカードまで解説。", productCount: 6, tags: ["年会費無料", "ポイント高還元"],   trustBadge: "提携6サービス掲載",     topPickReason: "楽天カード・三井住友(NL)・JCBカード Wをポイント還元・特典で比較" },
  tenshoku: { wpId: 61, title: "転職エージェント比較",        iconKey: "briefcase",       description: "doda・マイナビ転職・リクルートエージェントなど人気転職エージェントを求人数・サポート・年齢別におすすめを徹底比較。転職成功率を上げる選び方ガイド付き。", productCount: 5, tags: ["20-40代", "初めての転職"],      trustBadge: "提携5サービス掲載",     topPickReason: "求人数・サポート・得意領域で転職エージェントを徹底比較" },
  haken:    { wpId: 62, title: "派遣会社比較ランキング",      iconKey: "users",           description: "テンプスタッフ・スタッフサービス・パソナなど大手派遣会社を求人数・福利厚生・サポートで徹底比較。派遣会社の選び方と登録の流れも解説。", productCount: 4, tags: ["派遣初心者", "事務・軽作業"],    trustBadge: "提携4サービス掲載",     topPickReason: "求人数・時給・福利厚生で派遣会社を徹底比較" },
  shukatsu: { wpId: 63, title: "就活エージェント比較",        iconKey: "graduation-cap",  description: "キャリアチケット・ハタラクティブ・就職エージェントneoなど新卒・既卒向け就活エージェントを内定率・サポートで徹底比較。就活を成功させる選び方ガイド付き。", productCount: 4, tags: ["新卒・既卒", "未経験OK"],        trustBadge: "提携4サービス掲載",     topPickReason: "内定率・求人数・サポート充実度で就活エージェントを比較" },
  kuruma:   { wpId: 64, title: "車買取サービス比較",          iconKey: "trending-up",     description: "カーセブン・ガリバー・ネクステージなど車買取・一括査定サービスを査定額・手続きのしやすさで徹底比較。愛車を高く売るためのコツも解説。", productCount: 4, tags: ["一括査定", "高額買取"],           trustBadge: "提携4サービス掲載",     topPickReason: "査定額・手数料・手続きのしやすさで車買取サービスを比較" },
  "houjin-card": { wpId: 65, title: "法人カード・ETC比較",     iconKey: "credit-card",     description: "FASIOビジネス・法人ETCカード・法人ガソリンカードを年会費・発行スピード・キャッシュバック率で徹底比較。新会社でも作れるおすすめの法人カードを厳選。", productCount: 4, tags: ["新会社OK", "年会費無料"],        trustBadge: "提携4サービス掲載",     topPickReason: "年会費・発行スピード・経費精算しやすさで法人カードを比較" },
  kaikei:   { wpId: 66, title: "会計・確定申告ソフト比較",     iconKey: "book-open",       description: "マネーフォワード クラウド確定申告・freee・弥生など個人事業主・副業向け会計ソフトを料金・使いやすさ・サポートで徹底比較。", productCount: 3, tags: ["副業", "個人事業主"],          trustBadge: "提携3サービス掲載",     topPickReason: "料金・連携サービス・使いやすさで会計ソフトを比較" },
  "wifi-sim": { wpId: 67, title: "WiFi・格安SIM比較",          iconKey: "smartphone",      description: "誰でもWi-Fi・Lyprimo・スマホプリペイドなど審査なし・即日使えるWiFi・SIMサービスを月額料金・通信容量で徹底比較。", productCount: 3, tags: ["審査なし", "即日利用"],         trustBadge: "提携3サービス掲載",     topPickReason: "月額・通信容量・縛り条件でWiFi・SIMを比較" },
  "gift-card": { wpId: 68, title: "ギフトカード比較",           iconKey: "credit-card",     description: "Visaのデジタルギフト・金券ねっと・スマホプリペイドなどクレカで購入できるギフトカードを購入のしやすさ・ポイント還元で比較。", productCount: 3, tags: ["クレカ購入", "高還元"],         trustBadge: "提携3サービス掲載",     topPickReason: "クレカポイント還元・即時発行で選ぶギフトカード" },
};

// ランキング記事を各カテゴリ先頭に固定
const PINNED_TOP_BY_CATEGORY: Record<number, number[]> = {
  48: [189, 337, 335, 340, 756, 757, 566, 205, 206, 261, 339, 338, 578, 579, 580, 581, 582],  // VPN: ランキング→各記事→SUIKA→セカイ→Surfshark Antivirus
  60: [800, 805, 806, 807, 801, 802, 803, 804, 808, 809],                    // クレカ: ランキング→年会費無料比較→初めてのカード→ポイント還元率比較→楽天→三井住友(NL)→JCB W→dカードGOLD→エポス→ゴールド比較
  50: [712, 715, 716, 717],                  // eSIM: ランキング→Airalo口コミ→海外旅行比較→設定ガイド
  51: [210, 296, 211, 209, 259, 295, 560, 564, 551, 553, 559, 550, 556, 576, 577, 590, 591, 592, 593],  // Server: 各記事+ConoHa VPS/for GAME/XServerドライブ/Windows VPS
  54: [285, 367, 385, 388, 389, 392, 393, 394],  // English: ランキング→各社+ランカル→AQUES→ワールドアイキッズ
  55: [287, 371, 563, 567, 373, 374, 369],   // School: ランキング→LifeIstech→スクール比較→データサイエンス→Winスクール→インターノウス→ティントル
  56: [290, 291, 562, 565, 289, 292, 293],   // Career: ランキング→テックゴー→エンジニア比較→40代→エストレ→ウズウズ→社内SE
  57: [601, 600, 602, 603, 604, 605],        // Fukugyo: 副業ランキング→SideLine→infraAI→Webデザイン→動画編集→AI副業
  59: [700, 705, 701, 750, 702, 751, 703, 754, 755, 561, 714, 706, 707, 752, 753],  // FX: ランキング→始め方→DMM FX→外為オンライン(新)→旧外為→ひまわり(新)→FXブロードネット→SBI FX→GMOクリック→FX用VPS→口座選び→スプレッド→自動売買→税金→スマホアプリ
  61: [900, 997, 998, 999, 1000, 1001],  // 転職: LP→circus→iDA→オイシルキャリア→エストレ→karricon
  62: [910, 1009, 1010],  // 派遣: LP→MCナースネット→MC介護のお仕事
  63: [920, 1011],  // 就活: LP→atGP
  64: [930, 1002, 1003],  // 車買取: LP→enkiro→kenkikaitoriya
  65: [940, 1004, 1005, 1006],  // 法人カード: LP→ETC組合→FASIO→ガソリンカード
  66: [950, 995, 996],  // 会計: LP→freee→弥生
  67: [960, 991, 992, 993, 994],  // WiFi: LP→ゴエン→だれでも→LYPモバイル→スマホプリペイド
  68: [970, 1007, 1008],  // ギフトカード: LP→Visaデジタルギフト→金券ねっと
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
