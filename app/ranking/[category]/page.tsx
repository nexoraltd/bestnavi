import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import { CATEGORY_MAP, getPostsByCategory } from "@/lib/wordpress";
import { getCategoryIcon } from "@/lib/category-icons";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Calendar, ShieldCheck, Tag, Award, ArrowRight, ExternalLink } from "lucide-react";

const SITE_URL = "https://navi.next-aura.com";

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
    { q: "無料お試し期間はありますか？", a: "エックスサーバーは10日間無料トライアル、ConoHa WINGは最大2ヶ月無料キャンペーンを実施しています（時期によって変わる場合あり）。" },
  ],
  english: [
    { q: "オンライン英会話はどれくらいで効果が出ますか？", a: "毎日15〜30分学習した場合、3〜6ヶ月で日常会話レベルの向上を実感する方が多いです。ビジネス英語・TOEICスコアアップには6〜12ヶ月の継続学習が目安です。" },
    { q: "英語が全く話せなくても受講できますか？", a: "はい。BestTeacherは英作文から始めるため初心者でも安心です。Global Step AcademyはゼロからのカリキュラムでECC・NOVAも入門コースがあります。" },
    { q: "子供に英会話を習わせるならどれがいいですか？", a: "Global Step Academyが子供向けとして特に人気です。ECC外語学院・駅前留学NOVAも子供向けコースを全国展開しており、送迎なしで自宅受講できるオンラインコースも選べます。" },
    { q: "通学型とオンライン英会話、どちらがいいですか？", a: "継続のしやすさでいえばオンライン、規律・環境づくりには通学型が向いています。ECC・NOVAは通学・オンラインどちらにも対応しているので、生活スタイルで選べます。" },
  ],
  school: [
    { q: "プログラミングスクールは完全未経験でも入れますか？", a: "はい。Life is Tech!・Winスクール・インターノウスはすべて未経験・初心者歓迎です。無料カウンセリングで自分のレベルと目標を確認した上で最適なコースを選べます。" },
    { q: "プログラミング習得にどれくらいかかりますか？", a: "Webサイト制作の基礎なら1〜3ヶ月、就転職可能なエンジニアレベルには3〜6ヶ月が目安です。毎日1〜2時間の学習習慣が最短ルートです。" },
    { q: "社会人が働きながら学べますか？", a: "Winスクールはオンライン動画で自分のペースで学習できます。インターノウスもオンライン完結コースがあり、平日夜・週末に学習できます。" },
    { q: "プログラミングスクールの費用はどれくらいですか？", a: "目的・期間によって数万円〜数十万円が相場です。インターノウスは転職支援込みのためトータルコスパが高く、無料カウンセリングで費用の詳細を確認できます。" },
  ],
  career: [
    { q: "IT転職に資格は必要ですか？", a: "必須ではありません。実務経験・ポートフォリオが重視されます。ただし基本情報技術者試験・AWSなどのクラウド資格があると書類選考で有利になることが多いです。" },
    { q: "未経験からIT業界に転職できますか？", a: "可能です。ウズウズカレッジやエストレのようなスキル習得+転職支援のサービスを使えば、未経験からエンジニア・Webデザイナー・Webマーケターへの転職実績が多数あります。" },
    { q: "IT転職エージェントは完全無料ですか？", a: "はい。テックゴー・社内SE転職ナビは求職者側は完全無料です（費用は採用企業が負担）。スキル習得系サービス（ウズウズ・エストレ）は学習費用がかかる場合があります。" },
    { q: "IT転職後の年収はどれくらい上がりますか？", a: "個人差はありますが、異業種からIT転職した場合、年収50〜200万円アップの事例が多く報告されています。テックゴーでは年収交渉サポートも行っています。" },
  ],
  fukugyo: [
    { q: "副業はどのくらいで収入が発生しますか？", a: "スキル習得に1〜3ヶ月、初案件獲得に1〜2ヶ月かかるのが一般的です。スタートから4〜6ヶ月後に最初の収入を得る方が多く、その後継続案件で安定します。" },
    { q: "副業は会社にバレますか？", a: "住民税の納付方法を「普通徴収」にすることでバレにくくなります。ただし就業規則で副業禁止の場合は事前確認・申告が必要です。" },
    { q: "副業で月5万円稼ぐのは現実的ですか？", a: "Webデザイン・動画編集・SNS運用代行などのITスキルを習得すれば、6ヶ月〜1年で月5万円は現実的な目標です。SideLineのような副業特化スクールで効率よくスキルを身につけるのがおすすめです。" },
    { q: "確定申告は必要ですか？", a: "副業収入が年間20万円を超える場合は確定申告が必要です。20万円以下でも住民税の申告が必要な場合があるため、税務署や税理士に確認することをおすすめします。" },
  ],
  fx: [
    { q: "FXとは何ですか？", a: "FX（外国為替証拠金取引）は、円・ドル・ユーロなど異なる通貨を交換する取引で、為替レートの変動を利用して利益を狙います。少ない資金でもレバレッジをかけて大きな取引が可能です。" },
    { q: "FXは初心者でも始められますか？", a: "はい。口座開設は無料で、1000円程度の少額から取引できます。ただしレバレッジによる損失リスクもあるため、まずデモトレードで練習することをおすすめします。" },
    { q: "スプレッドとは何ですか？", a: "スプレッドとは買値と売値の差額で、FX取引のコストです。スプレッドが狭いほど取引コストが安くなります。DMM FXは主要通貨ペアのスプレッドが業界最狭水準です。" },
    { q: "FXで損失が出た場合、追加の損失はありますか？", a: "国内FX会社はほぼすべてゼロカットシステムを採用しており、口座残高以上の損失は発生しません。ロスカット機能で一定以上の損失が出ると自動的に決済されます。" },
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
  const [firstPost, ...restPosts] = posts;

  // JSON-LD 構造化データ
  const itemListJsonLd = posts.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${meta.title}【2026年最新】`,
    "description": meta.description,
    "url": `${SITE_URL}/ranking/${category}`,
    "itemListElement": posts.slice(0, 10).map((post, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": post.title.rendered.replace(/<[^>]+>/g, ""),
      "url": `${SITE_URL}/post/${post.slug}`
    }))
  } : null;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": meta.title, "item": `${SITE_URL}/ranking/${category}` }
    ]
  };

  const faqs = CATEGORY_FAQ[category] || [];
  const faqJsonLd = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(({ q, a }) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": { "@type": "Answer", "text": a }
    }))
  } : null;

  return (
    <div style={{ background: "var(--bg-warm)", minHeight: "100vh" }}>
      {itemListJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
      <Header />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 16px" }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 28, alignItems: "start" }}
          className="main-grid"
        >
          <main>
            {/* Header */}
            <div style={{ marginBottom: 6 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <div style={{ width: 34, height: 34, borderRadius: 8, background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={18} strokeWidth={2} style={{ color: "#fff" }} />
                </div>
                <h1 style={{ fontSize: 22, fontWeight: 800 }}>{meta.title}</h1>
              </div>


              {meta.description && (
                <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>
                  {meta.description}
                </p>
              )}
            </div>

            {posts.length === 0 ? (
              <div style={{ background: "#fff", borderRadius: "var(--radius-lg)", padding: "36px 24px", textAlign: "center", color: "var(--text-muted)", border: "1px solid var(--border)" }}>
                <p>このカテゴリの記事は準備中です。</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {/* 1位カード - 大型 */}
                {firstPost && (
                  <Link href={`/post/${firstPost.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                    <article
                      className="top-pick-card"
                      style={{
                        background: "#fff",
                        borderRadius: "var(--radius-lg)",
                        border: "2px solid var(--gold-border)",
                        padding: "22px",
                        transition: "box-shadow 0.15s, transform 0.15s",
                        position: "relative",
                      }}
                    >
                      <div style={{ position: "absolute", top: 0, left: 20, background: "linear-gradient(135deg, #f59e0b, #d97706)", color: "#fff", fontSize: 11, fontWeight: 700, padding: "3px 12px", borderRadius: "0 0 6px 6px", display: "flex", alignItems: "center", gap: 4 }}>
                        <Award size={12} />
                        おすすめ1位
                      </div>

                      <div style={{ marginTop: 10 }}>
                        <h2 style={{ fontSize: 18, fontWeight: 800, lineHeight: 1.5, marginBottom: 8, color: "var(--text-primary)" }}>
                          {stripHtml(firstPost.title.rendered)}
                        </h2>
                        <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7, margin: "0 0 12px" }}>
                          {stripHtml(firstPost.excerpt.rendered).slice(0, 150)}...
                        </p>

                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
                          <div style={{ fontSize: 12, color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 4 }}>
                            <Calendar size={12} />
                            更新: {new Date(firstPost.modified).toLocaleDateString("ja-JP")}
                          </div>
                          <span className="cta-primary" style={{ padding: "10px 24px", fontSize: 14, gap: 5 }}>
                            記事を読む
                            <ArrowRight size={13} />
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                )}

                {/* 2位以降 */}
                {restPosts.map((post, i) => {
                  const excerpt = stripHtml(post.excerpt.rendered).slice(0, 100);
                  const isTop3 = i < 2;
                  return (
                    <Link key={post.id} href={`/post/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                      <article
                        className="article-card"
                        style={{
                          background: i % 2 === 0 ? "#fff" : "var(--bg-section)",
                          borderRadius: "var(--radius-md)",
                          padding: "16px 18px",
                          border: isTop3 ? `1px solid ${i === 0 ? "var(--silver-border)" : "var(--bronze-border)"}` : "1px solid var(--border)",
                          display: "flex",
                          gap: 14,
                          alignItems: "flex-start",
                          transition: "box-shadow 0.15s, transform 0.15s",
                        }}
                      >
                        <div
                          style={{
                            background: i === 0 ? "linear-gradient(135deg, #d1d5db, #9ca3af)" : i === 1 ? "linear-gradient(135deg, #fcd34d, #d97706)" : "var(--bg-section)",
                            color: isTop3 ? "#fff" : "var(--text-muted)",
                            width: 32, height: 32, borderRadius: 6,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontWeight: 800, fontSize: 13, flexShrink: 0,
                          }}
                        >
                          {i + 2}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <h3 style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.5, marginBottom: 4, color: "var(--text-primary)" }}>
                            {stripHtml(post.title.rendered)}
                          </h3>
                          {excerpt && <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>{excerpt}...</p>}
                          <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 6, display: "flex", alignItems: "center", gap: 4 }}>
                            <Calendar size={11} />
                            更新: {new Date(post.modified).toLocaleDateString("ja-JP")}
                          </div>
                        </div>
                        <ChevronRight size={18} style={{ color: "var(--text-muted)", flexShrink: 0, alignSelf: "center" }} />
                      </article>
                    </Link>
                  );
                })}
              </div>
            )}

            {/* FAQ セクション */}
            {faqs.length > 0 && (
              <div style={{ marginTop: 32, background: "#fff", borderRadius: "var(--radius-lg)", border: "1px solid var(--border)", padding: "24px" }}>
                <h2 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16, color: "var(--text-primary)" }}>
                  よくある質問（FAQ）
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  {faqs.map(({ q, a }, i) => (
                    <div key={i} style={{ borderBottom: i < faqs.length - 1 ? "1px solid var(--border)" : "none", padding: "14px 0" }}>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text-primary)", marginBottom: 6 }}>
                        Q. {q}
                      </div>
                      <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.75 }}>
                        {a}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Other categories */}
            <div style={{ marginTop: 32, background: "var(--bg-section)", borderRadius: "var(--radius-lg)", padding: "20px" }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 14 }}>他のカテゴリ</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {Object.entries(CATEGORY_MAP)
                  .filter(([key]) => key !== category)
                  .map(([key, val]) => {
                    const CatIcon = getCategoryIcon(val.iconKey);
                    return (
                      <Link key={key} href={`/ranking/${key}`} style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "#fff", border: "1px solid var(--border)", borderRadius: 6, padding: "6px 12px", fontSize: 13, color: "var(--text-secondary)", textDecoration: "none", fontWeight: 500 }}>
                        <CatIcon size={13} strokeWidth={2} />
                        {val.title}
                      </Link>
                    );
                  })}
              </div>
            </div>
          </main>
          <div className="sidebar-area"><Sidebar /></div>
        </div>
      </div>
      <Footer />
      <style>{`
        @media(max-width:768px){.main-grid{grid-template-columns:1fr!important}}
        .article-card:hover{box-shadow:var(--shadow-md);transform:translateY(-1px)}
        .top-pick-card:hover{box-shadow:var(--shadow-lg);transform:translateY(-2px)}
      `}</style>
    </div>
  );
}
