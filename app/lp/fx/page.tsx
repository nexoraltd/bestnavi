import type { Metadata } from "next";
import { ABTestCTA } from "@/components/ABTestCTA";
import Script from "next/script";

const DMM_FX_URL =
  "https://www.tcs-asp.net/alink?AC=C95498&LC=DMM2&SQ=0&is498=1";

export const metadata: Metadata = {
  title: "【2026年最新】FX口座おすすめ比較｜初心者が失敗しない選び方",
  description:
    "FX口座選びで失敗しないために。手数料・スプレッド・ツール・サポートを徹底比較。初心者におすすめのFX口座をランキング形式で紹介。",
  robots: { index: false, follow: false }, // 広告LP用: noindex
};

function CheckIcon() {
  return (
    <span
      style={{
        color: "#22c55e",
        fontWeight: 900,
        fontSize: 18,
        marginRight: 8,
      }}
    >
      ✓
    </span>
  );
}

export default function FxLandingPage() {
  return (
    <div
      style={{
        background: "#fafafa",
        minHeight: "100vh",
        fontFamily: '"Noto Sans JP", sans-serif',
      }}
    >
      {/* Minimal Header */}
      <header
        style={{
          background: "#fff",
          borderBottom: "2px solid #ff6b35",
          padding: "12px 16px",
          textAlign: "center",
        }}
      >
        <span style={{ fontWeight: 900, fontSize: 18, color: "#1a1a1a" }}>
          ベストナビ
        </span>
        <span style={{ color: "#888", fontSize: 12, marginLeft: 8 }}>
          FX口座比較の専門メディア
        </span>
      </header>

      <main style={{ maxWidth: 720, margin: "0 auto", padding: "32px 16px" }}>
        {/* Hero */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div
            style={{
              display: "inline-block",
              background: "#ff6b35",
              color: "#fff",
              padding: "4px 16px",
              borderRadius: 20,
              fontSize: 12,
              fontWeight: 700,
              marginBottom: 12,
            }}
          >
            2026年4月 最新版
          </div>
          <h1
            style={{
              fontSize: "clamp(24px, 5vw, 34px)",
              fontWeight: 900,
              lineHeight: 1.4,
              color: "#1a1a1a",
              marginBottom: 16,
            }}
          >
            FX口座選びで
            <br />
            <span style={{ color: "#ff6b35" }}>損していませんか？</span>
          </h1>
          <p
            style={{
              color: "#666",
              fontSize: 15,
              lineHeight: 1.8,
              maxWidth: 560,
              margin: "0 auto",
            }}
          >
            「どのFX口座がいいかわからない」
            <br />
            そんなあなたのために、元金融機関勤務のライターが
            <br />
            手数料・スプレッド・使いやすさを徹底比較しました。
          </p>
        </div>

        {/* Trust Badges */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 24,
            marginBottom: 40,
            flexWrap: "wrap",
          }}
        >
          {[
            { num: "15社", label: "比較検証" },
            { num: "50万+", label: "データ分析" },
            { num: "毎月", label: "情報更新" },
          ].map((b) => (
            <div
              key={b.label}
              style={{
                textAlign: "center",
                padding: "12px 20px",
                background: "#fff",
                borderRadius: 12,
                border: "1px solid #eee",
              }}
            >
              <div
                style={{ fontSize: 22, fontWeight: 900, color: "#ff6b35" }}
              >
                {b.num}
              </div>
              <div style={{ fontSize: 11, color: "#999" }}>{b.label}</div>
            </div>
          ))}
        </div>

        {/* Problem Section */}
        <section style={{ marginBottom: 40 }}>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 900,
              borderLeft: "4px solid #ff6b35",
              paddingLeft: 12,
              marginBottom: 16,
            }}
          >
            こんな悩みはありませんか？
          </h2>
          <div
            style={{
              background: "#fff4ef",
              borderRadius: 12,
              padding: 20,
            }}
          >
            {[
              "FX口座が多すぎてどれを選べばいいかわからない",
              "手数料やスプレッドの違いがよくわからない",
              "初心者でも安心して使える口座を知りたい",
              "副業でFXを始めたいが、会社にバレないか心配",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 8,
                  marginBottom: 12,
                  fontSize: 14,
                  lineHeight: 1.7,
                }}
              >
                <span style={{ color: "#ff6b35", flexShrink: 0 }}>▶</span>
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Solution: DMM FX */}
        <section style={{ marginBottom: 40 }}>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 900,
              borderLeft: "4px solid #ff6b35",
              paddingLeft: 12,
              marginBottom: 16,
            }}
          >
            結論：初心者にはDMM FXがおすすめ
          </h2>

          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              border: "2px solid #ff6b35",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                background: "#ff6b35",
                color: "#fff",
                padding: "10px 20px",
                fontWeight: 900,
                fontSize: 14,
                textAlign: "center",
              }}
            >
              口座開設数 業界No.1
            </div>
            <div style={{ padding: 24 }}>
              <h3
                style={{ fontSize: 24, fontWeight: 900, marginBottom: 16 }}
              >
                DMM FX
              </h3>

              <div style={{ marginBottom: 20 }}>
                {[
                  "業界最狭水準のスプレッド（USD/JPY 0.2銭）",
                  "取引手数料・口座維持費・入出金手数料すべて0円",
                  "スマホアプリが直感的で初心者に人気",
                  "24時間の電話・メール・LINEサポート",
                  "最短30分で口座開設完了",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 6,
                      marginBottom: 10,
                      fontSize: 14,
                      lineHeight: 1.6,
                    }}
                  >
                    <CheckIcon />
                    {item}
                  </div>
                ))}
              </div>

              {/* Spec Table */}
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: 13,
                }}
              >
                <tbody>
                  {[
                    ["スプレッド", "USD/JPY 0.2銭（業界最狭）"],
                    ["最小取引単位", "10,000通貨"],
                    ["取引手数料", "無料"],
                    ["通貨ペア", "21通貨ペア"],
                    ["デモ口座", "あり（3ヶ月間）"],
                    ["口座開設", "最短30分"],
                  ].map(([label, value]) => (
                    <tr key={label}>
                      <td
                        style={{
                          padding: "10px 14px",
                          background: "#f8f8f8",
                          fontWeight: 700,
                          borderBottom: "1px solid #eee",
                          width: "35%",
                        }}
                      >
                        {label}
                      </td>
                      <td
                        style={{
                          padding: "10px 14px",
                          borderBottom: "1px solid #eee",
                        }}
                      >
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA (AB Test) */}
        <ABTestCTA affiliateUrl={DMM_FX_URL} serviceName="DMM FX" />

        {/* FAQ */}
        <section style={{ marginBottom: 40 }}>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 900,
              borderLeft: "4px solid #ff6b35",
              paddingLeft: 12,
              marginBottom: 16,
            }}
          >
            よくある質問
          </h2>
          {[
            {
              q: "FX初心者でも本当に大丈夫？",
              a: "DMM FXはデモ口座で練習でき、24時間のLINEサポートもあるので初心者に最適です。",
            },
            {
              q: "口座開設に費用はかかる？",
              a: "口座開設・維持費・取引手数料すべて無料です。",
            },
            {
              q: "副業でFXをやると会社にバレる？",
              a: "確定申告時に「普通徴収」を選べば住民税の通知が会社に届かないので、基本的にバレません。",
            },
            {
              q: "最低いくらあれば始められる？",
              a: "DMM FXの最小取引単位は10,000通貨。USD/JPYなら証拠金約6万円から取引可能です。レバレッジを活用できます。",
            },
          ].map((faq) => (
            <details
              key={faq.q}
              style={{
                background: "#fff",
                borderRadius: 10,
                border: "1px solid #eee",
                padding: "16px 20px",
                marginBottom: 8,
              }}
            >
              <summary
                style={{
                  fontWeight: 700,
                  fontSize: 14,
                  cursor: "pointer",
                  lineHeight: 1.6,
                }}
              >
                {faq.q}
              </summary>
              <p
                style={{
                  marginTop: 12,
                  fontSize: 13,
                  color: "#555",
                  lineHeight: 1.8,
                }}
              >
                {faq.a}
              </p>
            </details>
          ))}
        </section>

        {/* Second CTA */}
        <ABTestCTA affiliateUrl={DMM_FX_URL} serviceName="DMM FX" />

        {/* Disclaimer */}
        <div
          style={{
            marginTop: 40,
            padding: 16,
            background: "#f5f5f5",
            borderRadius: 8,
            fontSize: 11,
            color: "#999",
            lineHeight: 1.7,
          }}
        >
          <p>
            ※当ページはアフィリエイトプログラムを利用しています。リンク経由でサービスに申し込むと当サイトに報酬が発生する場合があります。
          </p>
          <p>
            ※FX取引にはリスクがあります。投資は自己責任で行ってください。レバレッジ取引では、預託証拠金以上の損失が発生する可能性があります。
          </p>
          <p style={{ marginTop: 8 }}>
            運営: ベストナビ | お問い合わせ: contact@next-aura.com
          </p>
        </div>
      </main>

      {/* FAQ Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "FX初心者でも本当に大丈夫？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "DMM FXはデモ口座で練習でき、24時間のLINEサポートもあるので初心者に最適です。",
                },
              },
              {
                "@type": "Question",
                name: "口座開設に費用はかかる？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "口座開設・維持費・取引手数料すべて無料です。",
                },
              },
              {
                "@type": "Question",
                name: "副業でFXをやると会社にバレる？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "確定申告時に「普通徴収」を選べば住民税の通知が会社に届かないので、基本的にバレません。",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
