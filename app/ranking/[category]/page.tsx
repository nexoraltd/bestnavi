import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CATEGORY_MAP, getPostsByCategory } from "@/lib/wordpress";
import { getCategoryIcon } from "@/lib/category-icons";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Calendar, ExternalLink } from "lucide-react";

const SITE_URL = "https://navi.next-aura.com";

// カテゴリ別絞り込みフィルター定義
const FILTER_GROUPS: Record<
  string,
  { label: string; type: "radio" | "checkbox"; options: string[] }[]
> = {
  vpn: [
    { label: "月額料金", type: "radio", options: ["指定なし", "¥500以下", "¥500〜¥1,000", "¥1,000以上"] },
    { label: "接続台数", type: "radio", options: ["指定なし", "1〜5台", "6台以上", "無制限"] },
    { label: "対応OS", type: "checkbox", options: ["Windows", "Mac", "iOS", "Android"] },
    { label: "特徴", type: "checkbox", options: ["ログなし", "返金保証", "P2P対応", "帯域無制限"] },
  ],
  server: [
    { label: "月額料金", type: "radio", options: ["指定なし", "¥1,000以下", "¥1,000〜¥2,000", "¥2,000以上"] },
    { label: "特徴", type: "checkbox", options: ["WordPress対応", "無料お試し", "独自ドメイン無料", "高速SSD"] },
  ],
  english: [
    { label: "受講形式", type: "radio", options: ["指定なし", "オンライン", "通学"] },
    { label: "対象", type: "checkbox", options: ["初心者向け", "子供向け", "TOEIC対策", "ビジネス英語"] },
  ],
  school: [
    { label: "学習スタイル", type: "radio", options: ["指定なし", "動画+メンター", "通学", "オンライン完結"] },
    { label: "目的", type: "checkbox", options: ["就転職サポート", "未経験歓迎", "副業向け", "転職保証"] },
  ],
  career: [
    { label: "対象年齢", type: "radio", options: ["指定なし", "20代", "30代", "40代以上"] },
    { label: "特徴", type: "checkbox", options: ["未経験OK", "完全無料", "転職保証", "スキル習得付き"] },
  ],
  fukugyo: [
    { label: "副業の種類", type: "radio", options: ["指定なし", "Webデザイン", "動画編集", "AI活用"] },
    { label: "特徴", type: "checkbox", options: ["在宅OK", "副業初心者向け", "スキル習得から"] },
  ],
  fx: [
    { label: "スプレッド", type: "radio", options: ["指定なし", "最狭水準", "業界平均以下"] },
    { label: "特徴", type: "checkbox", options: ["FX初心者向け", "自動売買対応", "キャッシュバック"] },
  ],
  esim: [
    { label: "用途", type: "radio", options: ["指定なし", "海外旅行", "海外出張", "長期滞在"] },
    { label: "特徴", type: "checkbox", options: ["200カ国対応", "アプリで即購入", "データ追加可"] },
  ],
};
const DEFAULT_FILTERS = [
  { label: "料金", type: "radio" as const, options: ["指定なし", "安い順", "高い順"] },
  { label: "特徴", type: "checkbox" as const, options: ["初心者向け", "無料お試し", "サポート充実"] },
];

const RANK_STYLE: Record<number, { bg: string; color: string; label: string }> = {
  1: { bg: "linear-gradient(135deg,#f59e0b,#d97706)", color: "#fff", label: "1位" },
  2: { bg: "linear-gradient(135deg,#9ca3af,#6b7280)", color: "#fff", label: "2位" },
  3: { bg: "linear-gradient(135deg,#cd7f32,#a0522d)", color: "#fff", label: "3位" },
};

const CATEGORY_FAQ: Record<string, { q: string; a: string }[]> = {
  vpn: [
    { q: "VPNとは何ですか？", a: "VPN（Virtual Private Network）はインターネット通信を暗号化してプライバシーを守る仕組みです。公共Wi-Fi利用時の盗聴防止や、海外から日本コンテンツにアクセスする際に使われます。" },
    { q: "無料VPNは安全ですか？", a: "無料VPNは速度制限・通信ログの記録・広告表示などのリスクがあります。セキュリティを重視するなら、第三者監査済みのNordVPNやSurfsharkなど有料VPNを強く推奨します。" },
    { q: "VPNで速度は落ちますか？", a: "VPNを使うと若干の速度低下は避けられませんが、NordVPN（NordLynxプロトコル）やExpressVPN（Lightwayプロトコル）は速度低下が最小限でZoom・動画視聴にも支障ありません。" },
    { q: "スマホでも使えますか？", a: "はい。NordVPN・Surfshark・ExpressVPNはiOS・Android両対応のアプリがあり、スマートフォンからでも簡単に接続できます。" },
    { q: "返金保証はありますか？", a: "NordVPN・Surfshark・ExpressVPNはいずれも30日間の返金保証があります。合わなければ全額返金されるため、リスクなく試せます。" },
  ],
  server: [
    { q: "レンタルサーバーとVPSの違いは何ですか？", a: "レンタルサーバーは複数ユーザーでサーバーを共有する形式で初心者向け。VPSは仮想的に専用サーバーを持つ形式でカスタマイズ性が高い反面、技術知識が必要です。WordPressブログ初心者にはレンタルサーバーが最適です。" },
    { q: "WordPressに最適なサーバーはどれですか？", a: "国内サイトはエックスサーバーまたはConoHa WINGがコスパ・速度ともに最高クラスです。海外向けや高トラフィックサイトにはKinstaが向いています。" },
    { q: "初心者でもサーバーは設定できますか？", a: "エックスサーバー・ConoHa WINGはWordPressの自動インストール機能があり、初心者でも10分以内にブログを開設できます。サポートも充実しているので安心して使えます。" },
  ],
  english: [
    { q: "オンライン英会話はどれくらいで効果が出ますか？", a: "毎日15〜30分学習した場合、3〜6ヶ月で日常会話レベルの向上を実感する方が多いです。ビジネス英語・TOEICスコアアップには6〜12ヶ月の継続学習が目安です。" },
    { q: "英語が全く話せなくても受講できますか？", a: "はい。BestTeacherは英作文から始めるため初心者でも安心です。Global Step AcademyはゼロからのカリキュラムでECC・NOVAも入門コースがあります。" },
  ],
  school: [
    { q: "プログラミングスクールは完全未経験でも入れますか？", a: "はい。Life is Tech!・Winスクール・インターノウスはすべて未経験・初心者歓迎です。無料カウンセリングで自分のレベルと目標を確認した上で最適なコースを選べます。" },
    { q: "社会人が働きながら学べますか？", a: "Winスクールはオンライン動画で自分のペースで学習できます。インターノウスもオンライン完結コースがあり、平日夜・週末に学習できます。" },
  ],
  career: [
    { q: "未経験からIT業界に転職できますか？", a: "可能です。ウズウズカレッジやエストレのようなスキル習得+転職支援のサービスを使えば、未経験からエンジニア・Webデザイナーへの転職実績が多数あります。" },
    { q: "IT転職エージェントは完全無料ですか？", a: "はい。テックゴー・社内SE転職ナビは求職者側は完全無料です（費用は採用企業が負担）。" },
  ],
  fukugyo: [
    { q: "副業はどのくらいで収入が発生しますか？", a: "スキル習得に1〜3ヶ月、初案件獲得に1〜2ヶ月かかるのが一般的です。スタートから4〜6ヶ月後に最初の収入を得る方が多く、その後継続案件で安定します。" },
    { q: "副業は会社にバレますか？", a: "住民税の納付方法を「普通徴収」にすることでバレにくくなります。ただし就業規則で副業禁止の場合は事前確認・申告が必要です。" },
  ],
  fx: [
    { q: "FXとは何ですか？", a: "FX（外国為替証拠金取引）は、円・ドル・ユーロなど異なる通貨を交換する取引で、為替レートの変動を利用して利益を狙います。少ない資金でもレバレッジをかけて大きな取引が可能です。" },
    { q: "FXは初心者でも始められますか？", a: "はい。口座開設は無料で、1000円程度の少額から取引できます。ただしレバレッジによる損失リスクもあるため、まずデモトレードで練習することをおすすめします。" },
  ],
};

export async function generateStaticParams() {
  return Object.keys(CATEGORY_MAP).map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const meta = CATEGORY_MAP[category];
  if (!meta) return { title: "ランキング | ベストナビ" };

  const title = `${meta.title}【2026年最新】| ベストナビ`;
  const description = meta.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/ranking/${category}`,
      siteName: "ベストナビ",
      type: "website",
      locale: "ja_JP",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] },
    alternates: { canonical: `${SITE_URL}/ranking/${category}` },
  };
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/&[^;]+;/g, " ").trim();
}

export default async function RankingPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const meta = CATEGORY_MAP[category] || {
    wpId: 0, title: "ランキング", iconKey: "award", description: "",
    productCount: 0, tags: [], trustBadge: "", topPickReason: "",
  };

  const Icon = getCategoryIcon(meta.iconKey);
  const posts = meta.wpId ? await getPostsByCategory(meta.wpId) : [];
  const filters = FILTER_GROUPS[category] || DEFAULT_FILTERS;
  const faqs = CATEGORY_FAQ[category] || [];

  // 構造化データ
  const itemListJsonLd = posts.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${meta.title}【2026年最新】`,
    description: meta.description,
    url: `${SITE_URL}/ranking/${category}`,
    itemListElement: posts.slice(0, 10).map((post, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: post.title.rendered.replace(/<[^>]+>/g, ""),
      url: `${SITE_URL}/post/${post.slug}`,
    })),
  } : null;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: meta.title, item: `${SITE_URL}/ranking/${category}` },
    ],
  };

  const faqJsonLd = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  } : null;

  return (
    <div style={{ background: "var(--bg-warm)", minHeight: "100vh" }}>
      {itemListJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}

      <Header />

      {/* Breadcrumb */}
      <div style={{ background: "#fff", borderBottom: "1px solid var(--border)", padding: "8px 16px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "var(--text-muted)" }}>
          <Link href="/" style={{ color: "var(--accent)", textDecoration: "none" }}>ホーム</Link>
          <ChevronRight size={12} />
          <span>{meta.title}</span>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "20px 16px" }}>
        <div
          className="ranking-layout"
          style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 20, alignItems: "start" }}
        >
          {/* ===== Left: Filter sidebar ===== */}
          <aside style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", padding: "16px", position: "sticky", top: 16 }}>
            <h3 style={{ fontSize: 13, fontWeight: 700, marginBottom: 14, color: "var(--text-primary)", borderBottom: "2px solid var(--accent)", paddingBottom: 8 }}>
              絞り込み条件
            </h3>

            {filters.map((group) => (
              <div key={group.label} style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text-secondary)", marginBottom: 8 }}>
                  {group.label}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {group.options.map((opt) => (
                    <label key={opt} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--text-primary)", cursor: "pointer" }}>
                      <input
                        type={group.type}
                        name={group.label}
                        defaultChecked={group.type === "radio" && opt === "指定なし"}
                        style={{ accentColor: "var(--accent)", cursor: "pointer" }}
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <button
              style={{
                width: "100%",
                background: "var(--accent)",
                color: "#fff",
                border: "none",
                borderRadius: "var(--radius-sm)",
                padding: "10px",
                fontSize: 13,
                fontWeight: 700,
                cursor: "pointer",
                marginTop: 4,
              }}
            >
              この条件で表示
            </button>
          </aside>

          {/* ===== Right: Main content ===== */}
          <main>
            {/* Title bar */}
            <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", padding: "14px 18px", marginBottom: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                <div style={{ width: 28, height: 28, borderRadius: 7, background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={15} strokeWidth={2} style={{ color: "#fff" }} />
                </div>
                <h1 style={{ fontSize: 18, fontWeight: 800, color: "var(--text-primary)" }}>{meta.title}</h1>
              </div>
              {meta.description && (
                <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                  {meta.description}
                </p>
              )}
            </div>

            {/* Sort bar */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10, fontSize: 13 }}>
              <span style={{ color: "var(--text-muted)" }}>
                <strong style={{ color: "var(--text-primary)" }}>{posts.length}</strong>件
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--text-secondary)" }}>
                並べ替え:
                <select style={{ fontSize: 13, border: "1px solid var(--border)", borderRadius: 4, padding: "3px 8px", color: "var(--text-primary)", background: "#fff", cursor: "pointer" }}>
                  <option>人気ランキング順</option>
                  <option>新着順</option>
                </select>
              </div>
            </div>

            {/* Article cards */}
            {posts.length === 0 ? (
              <div style={{ background: "#fff", borderRadius: "var(--radius-md)", padding: "36px", textAlign: "center", color: "var(--text-muted)", border: "1px solid var(--border)" }}>
                このカテゴリの記事は準備中です。
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {posts.map((post, i) => {
                  const rank = i + 1;
                  const rankStyle = RANK_STYLE[rank];
                  const title = stripHtml(post.title.rendered);
                  const excerpt = stripHtml(post.excerpt.rendered).slice(0, 120);
                  const updatedDate = new Date(post.modified).toLocaleDateString("ja-JP");

                  return (
                    <article
                      key={post.id}
                      className="service-card"
                      style={{
                        background: "#fff",
                        border: "1px solid var(--border)",
                        borderRadius: "var(--radius-md)",
                        display: "flex",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      {/* Rank ribbon */}
                      <div
                        style={{
                          width: 52,
                          flexShrink: 0,
                          background: rankStyle
                            ? rankStyle.bg
                            : i % 2 === 0 ? "var(--bg-section)" : "#f9fafb",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 2,
                          padding: "12px 4px",
                        }}
                      >
                        <span style={{ fontSize: 18, fontWeight: 900, color: rankStyle ? rankStyle.color : "var(--text-muted)", lineHeight: 1 }}>
                          {rank}
                        </span>
                        <span style={{ fontSize: 10, fontWeight: 700, color: rankStyle ? rankStyle.color : "var(--text-muted)" }}>
                          位
                        </span>
                      </div>

                      {/* Content */}
                      <div style={{ flex: 1, padding: "14px 16px", minWidth: 0 }}>
                        <Link href={`/post/${post.slug}`} style={{ textDecoration: "none" }}>
                          <h2 style={{ fontSize: 15, fontWeight: 700, color: "var(--accent)", lineHeight: 1.5, marginBottom: 6 }}>
                            {title}
                          </h2>
                        </Link>
                        {excerpt && (
                          <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.65, marginBottom: 8 }}>
                            {excerpt}...
                          </p>
                        )}
                        <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "var(--text-muted)" }}>
                          <Calendar size={11} />
                          更新: {updatedDate}
                        </div>
                      </div>

                      {/* CTA */}
                      <div style={{ flexShrink: 0, display: "flex", alignItems: "center", padding: "14px 16px", borderLeft: "1px solid var(--border)" }}>
                        <Link
                          href={`/post/${post.slug}`}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 4,
                            background: "#f97316",
                            color: "#fff",
                            textDecoration: "none",
                            borderRadius: "var(--radius-sm)",
                            padding: "10px 14px",
                            fontSize: 12,
                            fontWeight: 700,
                            whiteSpace: "nowrap",
                            lineHeight: 1.4,
                          }}
                        >
                          <ExternalLink size={13} />
                          詳細を見る
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}

            {/* FAQ */}
            {faqs.length > 0 && (
              <div style={{ marginTop: 28, background: "#fff", borderRadius: "var(--radius-md)", border: "1px solid var(--border)", padding: "20px" }}>
                <h2 style={{ fontSize: 15, fontWeight: 800, marginBottom: 14 }}>よくある質問</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  {faqs.map(({ q, a }, i) => (
                    <div key={i} style={{ borderBottom: i < faqs.length - 1 ? "1px solid var(--border)" : "none", padding: "13px 0" }}>
                      <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 5 }}>Q. {q}</div>
                      <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.75 }}>{a}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Other categories */}
            <div style={{ marginTop: 20, background: "var(--bg-section)", borderRadius: "var(--radius-md)", padding: "16px" }}>
              <h3 style={{ fontSize: 13, fontWeight: 700, marginBottom: 10 }}>他のカテゴリ</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {Object.entries(CATEGORY_MAP)
                  .filter(([key]) => key !== category)
                  .map(([key, val]) => {
                    const CatIcon = getCategoryIcon(val.iconKey);
                    return (
                      <Link key={key} href={`/ranking/${key}`} style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "#fff", border: "1px solid var(--border)", borderRadius: 5, padding: "5px 10px", fontSize: 12, color: "var(--text-secondary)", textDecoration: "none", fontWeight: 500 }}>
                        <CatIcon size={12} strokeWidth={2} />
                        {val.title}
                      </Link>
                    );
                  })}
              </div>
            </div>
          </main>
        </div>
      </div>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .ranking-layout { grid-template-columns: 1fr !important; }
          aside { position: static !important; }
        }
        .service-card { transition: box-shadow 0.15s; }
        .service-card:hover { box-shadow: var(--shadow-md); }
      `}</style>
    </div>
  );
}
