const INDEXNOW_KEY = "2c184b1ca6a04d6792e15fd74151f5f0";
const SITE_HOST = "navi.next-aura.com";

export async function pingIndexNow(urls: string[]) {
  if (!urls.length) return;
  try {
    await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: SITE_HOST,
        key: INDEXNOW_KEY,
        keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
        urlList: urls.map((u) => u.startsWith("http") ? u : `https://${SITE_HOST}${u}`),
      }),
    });
  } catch {
    // silently fail - indexing is best-effort
  }
}
