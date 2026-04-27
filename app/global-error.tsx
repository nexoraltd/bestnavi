"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="ja">
      <body style={{ fontFamily: "sans-serif", padding: "48px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>エラーが発生しました</h1>
        <p style={{ color: "#666", marginBottom: 24 }}>ページを再読み込みしてください。</p>
        <button
          onClick={reset}
          style={{ padding: "10px 24px", background: "#2563eb", color: "#fff", border: "none", borderRadius: 6, fontSize: 14, cursor: "pointer" }}
        >
          再試行
        </button>
      </body>
    </html>
  );
}
