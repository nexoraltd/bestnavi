"use client";

import Image from "next/image";
import { getBannersForArticle, BannerConfig } from "@/lib/banners";
import { ExternalLink } from "lucide-react";

interface BannerSectionProps {
  postId: number;
  categoryIds: number[];
  position?: "top" | "middle" | "bottom";
}

export function BannerSection({ postId, categoryIds, position = "middle" }: BannerSectionProps) {
  const banners = getBannersForArticle(postId, categoryIds);

  if (!banners.length) return null;

  // Select banner based on available space
  const selectedBanner = banners[0]; // Default to first banner

  const handleClick = () => {
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag("event", "banner_click", {
        event_category: "affiliate_banner",
        event_label: selectedBanner.programName,
        position,
        page_path: window.location.pathname,
      });
    }
  };

  return (
    <a
      href={selectedBanner.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      style={{
        display: "block",
        margin: position === "top" ? "12px 0 24px" : position === "bottom" ? "24px 0 12px" : "28px 0",
        padding: 0,
        textDecoration: "none",
        textAlign: "center",
        borderRadius: "var(--radius-md)",
        overflow: "hidden",
        transition: "transform 0.15s, box-shadow 0.15s",
      }}
      className="banner-link"
    >
      <Image
        src={selectedBanner.imageUrl}
        alt={selectedBanner.programName}
        width={selectedBanner.width}
        height={selectedBanner.height}
        priority={position === "top"}
        quality={85}
        style={{
          maxWidth: "100%",
          height: "auto",
          display: "block",
          borderRadius: "var(--radius-md)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      />
    </a>
  );
}

export function BannerGrid({ postId, categoryIds }: { postId: number; categoryIds: number[] }) {
  const banners = getBannersForArticle(postId, categoryIds);

  if (!banners.length) return null;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: 16,
        margin: "28px 0",
      }}
    >
      {banners.slice(0, 3).map((banner, idx) => (
        <a
          key={idx}
          href={banner.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            padding: 0,
            textDecoration: "none",
            textAlign: "center",
            borderRadius: "var(--radius-md)",
            overflow: "hidden",
            transition: "transform 0.15s, box-shadow 0.15s",
          }}
        >
          <Image
            src={banner.imageUrl}
            alt={banner.programName}
            width={banner.width}
            height={banner.height}
            quality={85}
            style={{
              maxWidth: "100%",
              height: "auto",
              display: "block",
              borderRadius: "var(--radius-md)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          />
        </a>
      ))}
    </div>
  );
}
