import type { MetadataRoute } from "next";
import { getAllPosts, CATEGORY_MAP } from "@/lib/wordpress";

const SITE_URL = "https://navi.next-aura.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/post/${post.slug}`,
    lastModified: new Date(post.modified),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const categoryEntries: MetadataRoute.Sitemap = Object.keys(CATEGORY_MAP).map(
    (cat) => ({
      url: `${SITE_URL}/ranking/${cat}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    })
  );

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/about`,   lastModified: new Date("2026-01-01"), changeFrequency: "monthly", priority: 0.4 },
    { url: `${SITE_URL}/contact`, lastModified: new Date("2026-01-01"), changeFrequency: "monthly", priority: 0.3 },
    { url: `${SITE_URL}/privacy`, lastModified: new Date("2026-01-01"), changeFrequency: "yearly",  priority: 0.2 },
    { url: `${SITE_URL}/terms`,   lastModified: new Date("2026-01-01"), changeFrequency: "yearly",  priority: 0.2 },
  ];

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    ...categoryEntries,
    ...postEntries,
    ...staticPages,
  ];
}
