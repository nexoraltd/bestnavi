"use client";

import { useEffect, useRef } from "react";
import type { BannerConfig } from "@/lib/banners";

interface ArticleContentProps {
  html: string;
  banners?: BannerConfig[];
  /** h2何個おきにバナーを挿入するか（デフォルト3） */
  bannerInterval?: number;
}

/**
 * 記事本文レンダラー
 * - h2セクション間にアフィリエイトバナーを自動挿入（DOM操作）
 * - WordPressのCTAブロックを全体クリック可に
 */
export function ArticleContent({ html, banners = [], bannerInterval = 3 }: ArticleContentProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    // --- バナー挿入 ---
    if (banners.length > 0) {
      const h2s = container.querySelectorAll("h2");
      let bannerIdx = 0;

      h2s.forEach((h2, i) => {
        // h2のインデックスが bannerInterval の倍数（0-indexedなので i+1 で判定）
        // 例: interval=3 → 3番目、6番目、9番目のh2の前にバナー挿入
        if ((i + 1) % bannerInterval === 0 && i > 0) {
          const banner = banners[bannerIdx % banners.length];
          bannerIdx++;

          const link = document.createElement("a");
          link.href = banner.clickTrackingUrl || banner.url;
          link.target = "_blank";
          link.rel = "noopener noreferrer sponsored";
          link.style.cssText = `display:block;margin:32px auto;padding:0;text-decoration:none;text-align:center;max-width:${banner.width}px;`;
          link.setAttribute("data-banner", "true");

          link.addEventListener("click", () => {
            if (typeof (window as any).gtag === "function") {
              (window as any).gtag("event", "banner_click", {
                event_category: "affiliate_banner",
                event_label: banner.programName,
                position: "in_article",
                page_path: window.location.pathname,
              });
            }
          });

          const img = document.createElement("img");
          img.src = banner.imageUrl;
          img.alt = banner.programName;
          img.width = banner.width;
          img.height = banner.height;
          img.loading = "lazy";
          img.style.cssText = "max-width:100%;height:auto;display:block;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.1);";

          link.appendChild(img);
          // h2の前に挿入
          h2.parentNode?.insertBefore(link, h2);
        }
      });
    }

    // --- WordPressのCTAブロックを全体クリック可に ---
    const blocks = container.querySelectorAll<HTMLElement>("div[style*='background']");
    blocks.forEach((block) => {
      const links = block.querySelectorAll<HTMLAnchorElement>("a");
      if (links.length === 1) {
        const link = links[0];
        block.style.cursor = "pointer";
        block.style.position = "relative";
        if (!block.querySelector(".cta-overlay")) {
          const overlay = document.createElement("a");
          overlay.href = link.href;
          overlay.target = link.target || "_blank";
          overlay.rel = "noopener noreferrer";
          overlay.className = "cta-overlay";
          overlay.style.cssText = "position:absolute;inset:0;z-index:2;display:block;";
          overlay.setAttribute("aria-hidden", "true");
          block.appendChild(overlay);
        }
      }
    });

    // クリーンアップ: バナーを除去（HMRやre-render時の重複防止）
    return () => {
      container.querySelectorAll("a[data-banner]").forEach((el) => el.remove());
    };
  }, [html, banners, bannerInterval]);

  return (
    <div
      ref={ref}
      className="wp-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
