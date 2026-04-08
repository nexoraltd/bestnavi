// Affiliate banner URLs by category and affiliate program
export interface BannerConfig {
  programName: string;
  affiliateId: string;
  url: string;
  width: number;
  height: number;
  imageUrl: string;
  clickTrackingUrl?: string;
}

// NordVPN banners (aff_id=142267)
const NORDVPN_BANNERS: BannerConfig[] = [
  {
    programName: "NordVPN",
    affiliateId: "142267",
    url: "https://visit.nordvpn.com/",
    width: 970,
    height: 250,
    imageUrl: "https://media.go2speed.org/brand/files/nordvpn/15/20160616034751-NordVPN_970x250_1.gif",
  },
  {
    programName: "NordVPN",
    affiliateId: "142267",
    url: "https://visit.nordvpn.com/",
    width: 728,
    height: 90,
    imageUrl: "https://media.go2speed.org/brand/files/nordvpn/15/NordVPN_728x90_1.gif",
  },
  {
    programName: "NordVPN",
    affiliateId: "142267",
    url: "https://visit.nordvpn.com/",
    width: 300,
    height: 250,
    imageUrl: "https://media.go2speed.org/brand/files/nordvpn/15/20160616034636-NordVPN_300x250_1.gif",
  },
  {
    programName: "NordVPN",
    affiliateId: "142267",
    url: "https://visit.nordvpn.com/",
    width: 160,
    height: 600,
    imageUrl: "https://media.go2speed.org/brand/files/nordvpn/15/NordVPN_160x600_1.gif",
  },
];

// Surfshark banners (aff_id=45127) - Limited options available
const SURFSHARK_BANNERS: BannerConfig[] = [
  {
    programName: "Surfshark",
    affiliateId: "45127",
    url: "https://surfshark.com/",
    width: 300,
    height: 250,
    imageUrl: "https://media.go2app.org/user_content/brand/logos/surfshark/logo_1713430575.png",
  },
];

// Kinsta banners (kaid=BVQFWTYMMLOV)
const KINSTA_BANNERS: BannerConfig[] = [
  {
    programName: "Kinsta",
    affiliateId: "BVQFWTYMMLOV",
    url: "https://kinsta.com/",
    width: 300,
    height: 250,
    imageUrl: "https://affiliate.kinsta.com/img/affiliate-banners/JAPANESE/WordPress/240x240%20wp-dark-general.png",
  },
  {
    programName: "Kinsta",
    affiliateId: "BVQFWTYMMLOV",
    url: "https://kinsta.com/",
    width: 120,
    height: 120,
    imageUrl: "https://affiliate.kinsta.com/img/affiliate-banners/JAPANESE/WordPress/120x120%20wp-light-general.png",
  },
];

// Map categories to their banner programs
export const CATEGORY_BANNERS: Record<number, BannerConfig[]> = {
  48: NORDVPN_BANNERS, // VPN category
  51: KINSTA_BANNERS, // Server category
  50: [], // eSIM - Airalo banners pending
  59: [], // FX - TCS program banners pending
  53: [], // Crypto - Pending
};

// Map specific post IDs to banners (for mixed category articles)
export const POST_BANNERS: Record<number, BannerConfig[]> = {
  // Post-specific overrides (empty by default, relies on category banners)
};

export function getBannersForArticle(postId: number, categoryIds: number[]): BannerConfig[] {
  // First check post-specific banners
  if (POST_BANNERS[postId]?.length) {
    return POST_BANNERS[postId];
  }

  // Then check category banners
  for (const categoryId of categoryIds) {
    if (CATEGORY_BANNERS[categoryId]?.length) {
      return CATEGORY_BANNERS[categoryId];
    }
  }

  return [];
}
