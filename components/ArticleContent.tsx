"use client";

import { useEffect, useRef } from "react";

interface ArticleContentProps {
  html: string;
}

// 製品キーワード → バナー設定（クライアント側に直接定義）
// キーワードはh2テキスト（小文字）でマッチング
const SECTION_BANNERS: Array<{
  keywords: string[];
  url: string;
  imageUrl: string;
  programName: string;
  width: number;
  height: number;
}> = [
  {
    keywords: ["nordvpn"],
    url: "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=142267",
    imageUrl: "/images/banners/nordvpn-728x90.gif",
    programName: "NordVPN",
    width: 728, height: 90,
  },
  {
    keywords: ["surfshark"],
    url: "https://get.surfshark.net/aff_c?offer_id=926&aff_id=45127",
    imageUrl: "/images/banners/surfshark-300x250.png",
    programName: "Surfshark",
    width: 300, height: 250,
  },
  {
    keywords: ["millenvpn", "ミレンvpn", "millen"],
    url: "https://px.a8.net/svt/ejp?a8mat=4AZSSR+66O50Y+3JTE+HV7V6",
    imageUrl: "https://www29.a8.net/svt/bgt?aid=260331147374&wid=001&eno=01&mid=s00000016565003012000&mc=1",
    programName: "MillenVPN",
    width: 300, height: 250,
  },
  {
    keywords: ["expressvpn"],
    url: "https://px.a8.net/svt/ejp?a8mat=4B1K5O+5Q0036+5JSS+5YRHE",
    imageUrl: "https://www28.a8.net/svt/bgt?aid=260413260346&wid=001&eno=01&mid=s00000025894001003000&mc=1",
    programName: "ExpressVPN",
    width: 300, height: 250,
  },
  {
    keywords: ["エックスサーバー", "xserver"],
    url: "https://px.a8.net/svt/ejp?a8mat=4AZS0X+FYJBJM+CO4+6L9O1",
    imageUrl: "https://www27.a8.net/svt/bgt?aid=260330145965&wid=001&eno=01&mid=s00000001642001107000&mc=1",
    programName: "エックスサーバー",
    width: 728, height: 90,
  },
  {
    keywords: ["conoha", "コノハ"],
    url: "https://px.a8.net/svt/ejp?a8mat=4AZSSR+5H2I0I+50+5SNCY9",
    imageUrl: "https://www25.a8.net/svt/bgt?aid=260331147331&wid=001&eno=01&mid=s00000000018035045000&mc=1",
    programName: "ConoHa WING",
    width: 728, height: 90,
  },
  {
    keywords: ["kinsta"],
    url: "https://kinsta.com/jp/?kaid=BVQFWTYMMLOV",
    imageUrl: "/images/banners/kinsta-728x90.png",
    programName: "Kinsta",
    width: 728, height: 90,
  },
  {
    keywords: ["bestteacher", "ベストティーチャー"],
    url: "https://px.a8.net/svt/ejp?a8mat=4AXCKE+68GFUA+2ZIK+60WN5",
    imageUrl: "https://www22.a8.net/svt/bgt?aid=260216798377&wid=001&eno=01&mid=s00000013934001012000&mc=1",
    programName: "BestTeacher",
    width: 728, height: 90,
  },
  {
    keywords: ["global step academy", "gsa"],
    url: "https://px.a8.net/svt/ejp?a8mat=4AXCKE+6F07HU+477W+609HU",
    imageUrl: "https://www26.a8.net/svt/bgt?aid=260216798388&wid=001&eno=01&mid=s00000019598001006000&mc=1",
    programName: "Global Step Academy",
    width: 300, height: 250,
  },
  {
    keywords: ["winスクール", "winschool"],
    url: "https://px.a8.net/svt/ejp?a8mat=4AXCKE+67V08I+529E+5ZMCH",
    imageUrl: "https://www21.a8.net/svt/bgt?aid=260216798376&wid=001&eno=01&mid=s00000023621001006000&mc=1",
    programName: "Winスクール",
    width: 300, height: 250,
  },
  {
    keywords: ["life is tech", "lifetech", "ライフイズテック"],
    url: "https://px.a8.net/svt/ejp?a8mat=4AXCKE+6AU69E+5G36+5YZ75",
    imageUrl: "https://www20.a8.net/svt/bgt?aid=260216798381&wid=001&eno=01&mid=s00000025413001003000&mc=1",
    programName: "Life is Tech!",
    width: 300, height: 250,
  },
  {
    keywords: ["エストレ", "gifts"],
    url: "https://px.a8.net/svt/ejp?a8mat=4AXCKE+66O50Y+5OBU+5YZ75",
    imageUrl: "https://www29.a8.net/svt/bgt?aid=260216798374&wid=001&eno=01&mid=s00000026481001003000&mc=1",
    programName: "エストレ",
    width: 300, height: 250,
  },
  {
    keywords: ["infraai", "インフラai"],
    url: "https://px.a8.net/svt/ejp?a8mat=4AZ8K6+84BUSY+5UGY+5Z6WX",
    imageUrl: "https://www26.a8.net/svt/bgt?aid=260304918491&wid=001&eno=01&mid=s00000027277001004000&mc=1",
    programName: "infraAI",
    width: 300, height: 250,
  },
  {
    keywords: ["dmm fx", "dmm　fx"],
    url: "https://www.tcs-asp.net/alink?AC=C140972&LC=DMM2&SQ=0&isq=1",
    imageUrl: "https://img.tcs-asp.net/imagesender?ac=C140972&lc=DMM2&isq=55&psq=0",
    programName: "DMM FX",
    width: 300, height: 250,
  },
  {
    keywords: ["外為オンライン"],
    url: "https://www.tcs-asp.net/alink?AC=C140972&LC=NJT2&SQ=0&isq=1",
    imageUrl: "https://img.tcs-asp.net/imagesender?ac=C140972&lc=NJT2&isq=5&psq=0",
    programName: "外為オンライン",
    width: 300, height: 250,
  },
  {
    keywords: ["fxブロードネット", "fxbroad"],
    url: "https://www.tcs-asp.net/alink?AC=C140972&LC=FXTS1&SQ=0&isq=1",
    imageUrl: "https://img.tcs-asp.net/imagesender?ac=C140972&lc=FXTS1&isq=3&psq=0",
    programName: "FXブロードネット",
    width: 300, height: 250,
  },
];

function findBannerForHeading(h2Text: string) {
  const lower = h2Text.toLowerCase();
  return SECTION_BANNERS.find(({ keywords }) =>
    keywords.some((kw) => lower.includes(kw))
  ) ?? null;
}

function createBannerEl(
  banner: (typeof SECTION_BANNERS)[number],
  programName: string
): HTMLAnchorElement {
  const link = document.createElement("a");
  link.href = banner.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer sponsored";
  link.setAttribute("data-banner", "true");
  link.style.cssText = `display:block;margin:20px auto 8px;text-align:center;max-width:${banner.width}px;`;

  link.addEventListener("click", () => {
    if (typeof (window as unknown as { gtag?: Function }).gtag === "function") {
      (window as unknown as { gtag: Function }).gtag("event", "banner_click", {
        event_category: "affiliate_banner",
        event_label: programName,
        position: "in_section",
        page_path: window.location.pathname,
      });
    }
  });

  const img = document.createElement("img");
  img.src = banner.imageUrl;
  img.alt = programName;
  img.width = banner.width;
  img.height = banner.height;
  img.loading = "lazy";
  img.style.cssText =
    "max-width:100%;height:auto;display:block;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.12);";

  link.appendChild(img);
  return link;
}

/**
 * 記事本文レンダラー
 * - h2テキストから製品を自動判定し、そのセクションの末尾（次のh2直前）に製品バナーを注入
 * - WordPressのCTAブロックを全体クリック可に
 */
export function ArticleContent({ html }: ArticleContentProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    // --- h2/h3 に ID を付与（目次リンク用） ---
    const headingEls = container.querySelectorAll<HTMLElement>("h2, h3");
    headingEls.forEach((el, i) => {
      if (!el.id) {
        const text = el.textContent?.trim() || "";
        const id =
          text
            .replace(
              /[^\w\u3000-\u9fff\u30a0-\u30ff\uff00-\uffef\u4e00-\u9fff]+/g,
              "-"
            )
            .replace(/^-|-$/g, "") || `heading-${i}`;
        el.id = id;
      }
    });

    // --- セクション別バナー注入 ---
    // h2テキストで製品を判定し、そのセクション末尾（次のh2直前）にバナーを挿入
    const h2s = Array.from(container.querySelectorAll<HTMLElement>("h2"));

    h2s.forEach((h2, i) => {
      const h2Text = h2.textContent || "";
      const banner = findBannerForHeading(h2Text);
      if (!banner) return;

      const bannerEl = createBannerEl(banner, banner.programName);

      // 挿入位置: 次のh2の直前（セクション末尾）
      const nextH2 = h2s[i + 1];
      if (nextH2 && nextH2.parentNode) {
        nextH2.parentNode.insertBefore(bannerEl, nextH2);
      } else {
        // 最後のセクションはコンテナ末尾に追加
        container.appendChild(bannerEl);
      }
    });

    // --- WordPressのCTAブロックを全体クリック可に ---
    const blocks = container.querySelectorAll<HTMLElement>(
      "div[style*='background']"
    );
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
          overlay.style.cssText =
            "position:absolute;inset:0;z-index:2;display:block;";
          overlay.setAttribute("aria-hidden", "true");
          block.appendChild(overlay);
        }
      }
    });

    // クリーンアップ（HMR・re-render時の重複防止）
    return () => {
      container.querySelectorAll("a[data-banner]").forEach((el) => el.remove());
    };
  }, [html]);

  return (
    <div
      ref={ref}
      className="wp-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
