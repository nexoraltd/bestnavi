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

// TCS banners - FX programs (DMM FX, 外為オンライン, FXブロードネット, ひまわり証券)
// To add: Navigate to TCS-Affiliate dashboard → each program → 素材 (materials) → copy banner URLs
const TCS_FX_BANNERS: BannerConfig[] = [
  // DMM FX banners
  {
    programName: "DMM FX",
    affiliateId: "DMM",
    url: "https://fx.dmm.com/",
    width: 300,
    height: 250,
    imageUrl: "", // TODO: Get from TCS dashboard → DMM FX program → 素材
  },
  // 外為オンライン (Gaitame Online) banners
  {
    programName: "外為オンライン",
    affiliateId: "NJT",
    url: "https://www.gaitame.com/",
    width: 300,
    height: 250,
    imageUrl: "", // TODO: Get from TCS dashboard → 外為オンライン program → 素材
  },
];

// A8.net banners - VPN, hosting, education programs
// To add: Navigate to A8.net → each program → 素材 (materials) section
const A8_BANNERS: BannerConfig[] = [
  {
    programName: "MillenVPN",
    affiliateId: "A8",
    url: "https://millenvpn.com/",
    width: 300,
    height: 250,
    imageUrl: "", // TODO: Get from A8.net → MillenVPN program → 素材
  },
];

// もしも (Moshimo) banners - Airalo eSIM
// To add: もしも管理画面 → Airalo program → 広告素材
const MOSHIMO_BANNERS: BannerConfig[] = [
  {
    programName: "Airalo",
    affiliateId: "MOSHIMO",
    url: "https://www.airalo.com/",
    width: 300,
    height: 250,
    imageUrl: "", // TODO: Get from もしも dashboard → Airalo promotion → 広告素材
  },
];

// バリューコマース (ValueCommerce) banners - FX/Crypto
// To add: VC管理画面 → program → 広告素材
const VALUECOMMERCE_BANNERS: BannerConfig[] = [];

// Kinsta banners (kaid=BVQFWTYMMLOV)
const KINSTA_BANNERS: BannerConfig[] = [
  {
    programName: "Kinsta",
    affiliateId: "BVQFWTYMMLOV",
    url: "https://kinsta.com/",
    width: 300,
    height: 250,
    imageUrl: "https://affiliate.kinsta.com/img/affiliate-banners/JAPANESE/WordPress/300x250%20wp-dark-general.png",
  },
  {
    programName: "Kinsta",
    affiliateId: "BVQFWTYMMLOV",
    url: "https://kinsta.com/",
    width: 728,
    height: 90,
    imageUrl: "https://affiliate.kinsta.com/img/affiliate-banners/JAPANESE/WordPress/728x90%20wp-dark-general.png",
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
  50: MOSHIMO_BANNERS, // eSIM - Airalo (via もしも) banners pending
  59: TCS_FX_BANNERS, // FX - TCS program banners (DMM FX, 外為オンライン, etc) pending
  53: A8_BANNERS, // Crypto - A8.net banners pending
  // Note: Once banners are added to above arrays, they will auto-display in matching article categories
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
