"use client";

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <html lang="ja">
      <body style={{ fontFamily: "sans-serif", padding: "48px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>予期しないエラーが発生しました</h1>
        <p style={{ color: "#666", marginBottom: 24 }}>
          申し訳ありません。ページの読み込みに失敗しました。
        </p>
        <button
          onClick={unstable_retry}
          style={{
            padding: "10px 24px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          再試行
        </button>
      </body>
    </html>
  );
}
