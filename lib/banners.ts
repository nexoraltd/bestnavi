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

// TCS banners - FX programs (DMM FX, 外為オンライン, FXブロードネット, ひまわり証券, ヒロセ通商)
// Banners from TCS-Affiliate: https://www.tcs-asp.net/
const TCS_FX_BANNERS: BannerConfig[] = [
  {
    programName: "DMM FX",
    affiliateId: "DMM2",
    url: "https://www.tcs-asp.net/alink?AC=C140972&LC=DMM2&SQ=0&isq=55",
    width: 300,
    height: 250,
    imageUrl: "https://img.tcs-asp.net/imagesender?ac=C140972&lc=DMM2&isq=55&psq=0",
    clickTrackingUrl: "https://www.tcs-asp.net/alink?AC=C140972&LC=DMM2&SQ=0&isq=55",
  },
  {
    programName: "FXブロードネット",
    affiliateId: "FXTS1",
    url: "https://www.tcs-asp.net/alink?AC=C140972&LC=FXTS1&SQ=0&isq=79",
    width: 300,
    height: 250,
    imageUrl: "https://img.tcs-asp.net/imagesender?ac=C140972&lc=FXTS1&isq=79&psq=0",
    clickTrackingUrl: "https://www.tcs-asp.net/alink?AC=C140972&LC=FXTS1&SQ=0&isq=79",
  },
  {
    programName: "外為オンライン 口座開設",
    affiliateId: "NJT2",
    url: "https://www.tcs-asp.net/alink?AC=C140972&LC=NJT2&SQ=0&isq=51",
    width: 300,
    height: 250,
    imageUrl: "https://img.tcs-asp.net/imagesender?ac=C140972&lc=NJT2&isq=51&psq=0",
    clickTrackingUrl: "https://www.tcs-asp.net/alink?AC=C140972&LC=NJT2&SQ=0&isq=51",
  },
  {
    programName: "外為オンライン 資料請求",
    affiliateId: "NJT1",
    url: "https://www.tcs-asp.net/alink?AC=C140972&LC=NJT1&SQ=0&isq=26",
    width: 300,
    height: 250,
    imageUrl: "https://img.tcs-asp.net/imagesender?ac=C140972&lc=NJT1&isq=26&psq=0",
    clickTrackingUrl: "https://www.tcs-asp.net/alink?AC=C140972&LC=NJT1&SQ=0&isq=26",
  },
  {
    programName: "ひまわり証券",
    affiliateId: "HIM97",
    url: "https://www.tcs-asp.net/alink?AC=C140972&LC=HIM97&SQ=0&isq=201",
    width: 300,
    height: 250,
    imageUrl: "https://img.tcs-asp.net/imagesender?ac=C140972&lc=HIM97&isq=201&psq=0",
    clickTrackingUrl: "https://www.tcs-asp.net/alink?AC=C140972&LC=HIM97&SQ=0&isq=201",
  },
  {
    programName: "ヒロセ通商 LION FX",
    affiliateId: "HIR99",
    url: "https://www.tcs-asp.net/alink?AC=C140972&LC=HIR99&SQ=0&isq=48",
    width: 300,
    height: 250,
    imageUrl: "https://img.tcs-asp.net/imagesender?ac=C140972&lc=HIR99&isq=48&psq=0",
    clickTrackingUrl: "https://www.tcs-asp.net/alink?AC=C140972&LC=HIR99&SQ=0&isq=48",
  },
];

// A8.net banners - VPN, hosting, education programs
// Note: A8.net UI structure changed - using stable banner image URLs from CDN
const A8_BANNERS: BannerConfig[] = [
  {
    programName: "MillenVPN",
    affiliateId: "A8",
    url: "https://pub.a8.net/a8v2/as/detail?asid=33826",
    width: 300,
    height: 250,
    imageUrl: "https://image.a8.net/a8/a8.gif?url=https%3A%2F%2Fmillenvpn.com%2F&asid=33826",
  },
  {
    programName: "ConoHa WING",
    affiliateId: "A8",
    url: "https://pub.a8.net/a8v2/as/detail?asid=5013",
    width: 300,
    height: 250,
    imageUrl: "https://image.a8.net/a8/a8.gif?url=https%3A%2F%2Fwww.conoha.jp%2Fwing%2F&asid=5013",
  },
  {
    programName: "Xserver",
    affiliateId: "A8",
    url: "https://pub.a8.net/a8v2/as/detail?asid=5009",
    width: 300,
    height: 250,
    imageUrl: "https://image.a8.net/a8/a8.gif?url=https%3A%2F%2Fwww.xserver.ne.jp%2F&asid=5009",
  },
];

// TCS Crypto banners - Coincheck
// Banners from TCS-Affiliate: https://www.tcs-asp.net/
const TCS_CRYPTO_BANNERS: BannerConfig[] = [
  {
    programName: "Coincheck",
    affiliateId: "COINC1",
    url: "https://www.tcs-asp.net/alink?AC=C140972&LC=COINC1&SQ=0&isq=201",
    width: 300,
    height: 250,
    imageUrl: "https://img.tcs-asp.net/imagesender?ac=C140972&lc=COINC1&isq=201&psq=0",
    clickTrackingUrl: "https://www.tcs-asp.net/alink?AC=C140972&LC=COINC1&SQ=0&isq=201",
  },
];

// もしも (Moshimo) banners - Airalo eSIM
// Banners from もしもアフィリエイト: https://af.moshimo.com/
const MOSHIMO_BANNERS: BannerConfig[] = [
  {
    programName: "Airalo",
    affiliateId: "MOSHIMO",
    url: "https://af.moshimo.com/media/programs/view/pid/airalo",
    width: 300,
    height: 250,
    imageUrl: "https://images.moshimo.com/af_ads/700x500/airalo_300x250.png",
  },
];

// バリューコマース (ValueCommerce) banners - FX/Crypto
// Banners from バリューコマース: https://aff.valuecommerce.ne.jp/
const VALUECOMMERCE_BANNERS: BannerConfig[] = [
  {
    programName: "DMM Bitcoin",
    affiliateId: "VC",
    url: "https://aff.valuecommerce.ne.jp/ad/adDetail?vc=2BNHP8",
    width: 300,
    height: 250,
    imageUrl: "https://images.valuecommerce.com/vcomm/ads/v2/dmm-bitcoin_300x250.jpg",
  },
  {
    programName: "bitFlyer",
    affiliateId: "VC",
    url: "https://aff.valuecommerce.ne.jp/ad/adDetail?vc=5DKFCZ",
    width: 300,
    height: 250,
    imageUrl: "https://images.valuecommerce.com/vcomm/ads/v2/bitflyer_300x250.jpg",
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
  48: NORDVPN_BANNERS, // VPN category (NordVPN direct contract)
  51: KINSTA_BANNERS, // Server/Hosting category (Kinsta direct contract)
  50: MOSHIMO_BANNERS, // eSIM category (Airalo via もしも)
  59: TCS_FX_BANNERS, // FX category (DMM FX, FXブロードネット, 外為オンライン x2, ひまわり証券, ヒロセ通商)
  53: TCS_CRYPTO_BANNERS, // Crypto category (Coincheck via TCS)
  // Note: All banners active and auto-display in matching article categories
  // Additional ASP programs ready for integration: A8_BANNERS (MillenVPN/ConoHa/Xserver), VALUECOMMERCE_BANNERS
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
