const WP_API = "https://navi.next-aura.com/wp-json/wp/v2";

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
