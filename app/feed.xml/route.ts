import { getAllPosts } from "@/lib/wordpress";

const SITE_URL = "https://navi.next-aura.com";
const SITE_TITLE = "ベストナビ";
const SITE_DESCRIPTION = "VPN・レンタルサーバー・英会話・プログラミングスクールなど厳選サービスを比較するアフィリエイトメディア";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim().slice(0, 200);
}

export async function GET() {
  const posts = await getAllPosts();
  const latest = posts.slice(0, 20);

  const items = latest
    .map((post) => {
      const title = escapeXml(post.title.rendered);
      const link = `${SITE_URL}/post/${post.slug}`;
      const description = escapeXml(stripHtml(post.excerpt.rendered));
      const pubDate = new Date(post.date).toUTCString();
      return `    <item>
      <title>${title}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description>${description}</description>
      <pubDate>${pubDate}</pubDate>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_TITLE)}</title>
    <link>${SITE_URL}</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>ja</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
