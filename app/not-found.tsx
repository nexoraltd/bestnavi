export const dynamic = "force-dynamic";

export const metadata = {
  title: "ページが見つかりません | ベストナビ",
  description: "お探しのページは見つかりませんでした。",
};

export default function NotFound() {
  return (
    <main style={{ padding: "80px 24px", textAlign: "center", minHeight: "60vh" }}>
      <h1 style={{ fontSize: "32px", fontWeight: 700, marginBottom: "16px" }}>
        404 - ページが見つかりません
      </h1>
      <p style={{ color: "#666", marginBottom: "32px" }}>
        お探しのページは削除されたか、URLが変更された可能性があります。
      </p>
      <a
        href="/"
        style={{
          display: "inline-block",
          padding: "12px 32px",
          background: "#1a73e8",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        トップページに戻る
      </a>
    </main>
  );
}
