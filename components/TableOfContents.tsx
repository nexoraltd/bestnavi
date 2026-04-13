interface Heading {
  id: string;
  text: string;
  level: number;
}

function slugify(text: string, index: number): string {
  const slug = text
    .replace(/<[^>]+>/g, "")
    .trim()
    .replace(/[^\w\u3000-\u9fff\u30a0-\u30ff\uff00-\uffef\u4e00-\u9fff]+/g, "-")
    .replace(/^-|-$/g, "");
  return slug || `heading-${index}`;
}

export function extractHeadings(html: string): Heading[] {
  const headings: Heading[] = [];
  const regex = /<h([23])(?:[^>]*)>([\s\S]*?)<\/h\1>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const level = parseInt(match[1], 10);
    const raw = match[2].replace(/<[^>]+>/g, "").replace(/&[^;]+;/g, " ").trim();
    if (!raw) continue;
    const id = slugify(raw, headings.length);
    headings.push({ id, text: raw, level });
  }
  return headings;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const h2only = headings.filter((h) => h.level === 2);
  if (h2only.length < 2) return null;

  return (
    <nav
      aria-label="目次"
      style={{
        background: "var(--bg-section)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-md)",
        padding: "16px 20px",
        marginBottom: 28,
      }}
    >
      <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text-primary)", marginBottom: 10 }}>
        📋 目次
      </div>
      <ol style={{ margin: 0, padding: "0 0 0 18px", display: "flex", flexDirection: "column", gap: 6 }}>
        {h2only.map((h, i) => (
          <li key={h.id} style={{ fontSize: 13, lineHeight: 1.5 }}>
            <a
              href={`#${h.id}`}
              style={{ color: "var(--accent)", textDecoration: "none" }}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
