const WP_HOST = process.env.NEXT_PUBLIC_WP_HOST || "navi.next-aura.com";
const WP_API = `https://${WP_HOST}/wp-json/wp/v2`;

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

export const CATEGORY_MAP: Record<string, { wpId: number; title: string; icon: string; description: string }> = {
  vpn: { wpId: 48, title: "VPN比較ランキング", icon: "🔒", description: "おすすめVPNサービスを速度・安全性・料金で徹底比較" },
  server: { wpId: 51, title: "レンタルサーバー比較", icon: "🖥️", description: "WordPress向けレンタルサーバーを性能・コスパで比較" },
  ai: { wpId: 52, title: "AIツール比較ランキング", icon: "🤖", description: "ChatGPT・画像生成AIなど最新AIツールを徹底比較" },
  fx: { wpId: 59, title: "FX口座比較ランキング", icon: "📈", description: "FX口座をスプレッド・取引ツール・信頼性で比較" },
  crypto: { wpId: 53, title: "仮想通貨取引所比較", icon: "₿", description: "仮想通貨取引所を手数料・セキュリティ・使いやすさで比較" },
  esim: { wpId: 50, title: "eSIM比較ランキング", icon: "📱", description: "海外旅行・出張に便利なeSIMサービスを比較" },
  career: { wpId: 56, title: "キャリア・転職サービス比較", icon: "💼", description: "転職エージェント・キャリアサービスを比較" },
  school: { wpId: 55, title: "プログラミングスクール比較", icon: "🎓", description: "プログラミングスクールを料金・カリキュラムで比較" },
  english: { wpId: 54, title: "英会話サービス比較", icon: "🌍", description: "オンライン英会話サービスを料金・講師の質で比較" },
  security: { wpId: 44, title: "セキュリティソフト比較", icon: "🛡️", description: "ウイルス対策・セキュリティソフトを性能で比較" },
};

export async function getAllPosts(): Promise<WPPost[]> {
  const posts: WPPost[] = [];
  let page = 1;

  while (true) {
    const res = await fetch(
      `${WP_API}/posts?per_page=50&page=${page}&_fields=id,slug,title,excerpt,date,modified,link,categories`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) break;
    const data = await res.json();
    if (!data.length) break;
    posts.push(...data);
    page++;
  }

  return posts;
}

export async function getPostsByCategory(categoryId: number): Promise<WPPost[]> {
  const res = await fetch(
    `${WP_API}/posts?categories=${categoryId}&per_page=50&_fields=id,slug,title,excerpt,date,modified,link,categories`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) return [];
  return res.json();
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const res = await fetch(
    `${WP_API}/posts?slug=${encodeURIComponent(slug)}&_fields=id,slug,title,content,excerpt,date,modified,link,categories`,
    { cache: "no-store" }
  );
  if (!res.ok) return null;
  const data = await res.json();
  return data[0] || null;
}

export async function getAllSlugs(): Promise<string[]> {
  const posts = await getAllPosts();
  return posts.map((p) => p.slug);
}
