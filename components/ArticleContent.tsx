"use client";

import { useEffect, useRef } from "react";

interface ArticleContentProps {
  html: string;
  /** 表示するh2セクション数（デフォルト3） */
  maxSections?: number;
}

/**
 * 記事本文レンダラー
 * - 最初のN個のh2セクションのみ表示（ハード截断）
 * - WordPressのCTAブロック（div[style*="background"]）を全体クリック可に
 */
export function ArticleContent({ html, maxSections = 3 }: ArticleContentProps) {
  const ref = useRef<HTMLDivElement>(null);

  // h2位置で截断
  const h2Regex = /<h2[\s>]/gi;
  const positions: number[] = [];
  let match;
  while ((match = h2Regex.exec(html)) !== null) {
    positions.push(match.index);
  }

  // h2がmaxSections以下 → 全文表示
  const cutoff = positions.length > maxSections ? positions[maxSections] : null;
  const displayHtml = cutoff ? html.slice(0, cutoff) : html;

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    // WordPressのCTAブロック（背景色付きdiv）を全体クリック可にする
    const blocks = container.querySelectorAll<HTMLElement>("div[style*='background']");
    blocks.forEach((block) => {
      const links = block.querySelectorAll<HTMLAnchorElement>("a");
      if (links.length === 1) {
        const link = links[0];
        block.style.cursor = "pointer";
        block.style.position = "relative";
        // 透明オーバーレイリンクで全体をカバー
        if (!block.querySelector(".cta-overlay")) {
          const overlay = document.createElement("a");
          overlay.href = link.href;
          overlay.target = link.target || "_blank";
          overlay.rel = "noopener noreferrer";
          overlay.className = "cta-overlay";
          overlay.style.cssText =
            "position:absolute;inset:0;z-index:2;display:block;";
          overlay.setAttribute("aria-hidden", "true");
          block.appendChild(overlay);
        }
      }
    });
  }, [displayHtml]);

  return (
    <div
      ref={ref}
      className="wp-content"
      dangerouslySetInnerHTML={{ __html: displayHtml }}
    />
  );
}
