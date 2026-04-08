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

// NordVPN banners (aff_id=142267) - Self-hosted local images
const NORDVPN_BANNERS: BannerConfig[] = [
  {
    programName: "NordVPN",
    affiliateId: "142267",
    url: "https://visit.nordvpn.com/",
    width: 970,
    height: 250,
    imageUrl: "/images/banners/nordvpn-970x250.gif",
  },
  {
    programName: "NordVPN",
    affiliateId: "142267",
    url: "https://visit.nordvpn.com/",
    width: 728,
    height: 90,
    imageUrl: "/images/banners/nordvpn-728x90.gif",
  },
  {
    programName: "NordVPN",
    affiliateId: "142267",
    url: "https://visit.nordvpn.com/",
    width: 300,
    height: 250,
    imageUrl: "/images/banners/nordvpn-300x250.gif",
  },
  {
    programName: "NordVPN",
    affiliateId: "142267",
    url: "https://visit.nordvpn.com/",
    width: 160,
    height: 600,
    imageUrl: "/images/banners/nordvpn-160x600.gif",
  },
];

// Surfshark banners (aff_id=45127) - Self-hosted local images
const SURFSHARK_BANNERS: BannerConfig[] = [
  {
    programName: "Surfshark",
    affiliateId: "45127",
    url: "https://surfshark.com/",
    width: 300,
    height: 250,
    imageUrl: "/images/banners/surfshark-300x250.png",
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

// A8.net banners — 実URL（2026-04-09 管理画面から取得）
const A8_BANNERS: BannerConfig[] = [
  // MillenVPN (insId: s00000016565003)
  {
    programName: "MillenVPN",
    affiliateId: "a26021579611",
    url: "https://px.a8.net/svt/ejp?a8mat=4AZSSR+66O50Y+3JTE+HXKQP",
    width: 300,
    height: 250,
    imageUrl: "https://www29.a8.net/svt/bgt?aid=260331147374&wid=001&eno=01&mid=s00000016565003012000&mc=1",
  },
  // Xserver レンタルサーバー (insId: s00000001642001)
  {
    programName: "Xserver",
    affiliateId: "a26021579611",
    url: "https://px.a8.net/svt/ejp?a8mat=4AZS0X+FYJBJM+CO4+66H9D",
    width: 300,
    height: 250,
    imageUrl: "https://www24.a8.net/svt/bgt?aid=260330145965&wid=001&eno=01&mid=s00000001642001038000&mc=1",
  },
  // ConoHa WING (insId: s00000000018035)
  {
    programName: "ConoHa WING",
    affiliateId: "a26021579611",
    url: "https://px.a8.net/svt/ejp?a8mat=4AZSSR+5H2I0I+50+5SFFGH",
    width: 300,
    height: 250,
    imageUrl: "https://www24.a8.net/svt/bgt?aid=260331147331&wid=001&eno=01&mid=s00000000018035008000&mc=1",
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

// Kinsta banners (kaid=BVQFWTYMMLOV) - Self-hosted local images
const KINSTA_BANNERS: BannerConfig[] = [
  {
    programName: "Kinsta",
    affiliateId: "BVQFWTYMMLOV",
    url: "https://kinsta.com/",
    width: 300,
    height: 250,
    imageUrl: "/images/banners/kinsta-300x250.png",
  },
  {
    programName: "Kinsta",
    affiliateId: "BVQFWTYMMLOV",
    url: "https://kinsta.com/",
    width: 728,
    height: 90,
    imageUrl: "/images/banners/kinsta-728x90.png",
  },
  {
    programName: "Kinsta",
    affiliateId: "BVQFWTYMMLOV",
    url: "https://kinsta.com/",
    width: 120,
    height: 120,
    imageUrl: "/images/banners/kinsta-120x120.png",
  },
];

// Map categories to their banner programs
// 取得済み全バナーをカテゴリにマッピング（ローテーション表示）
export const CATEGORY_BANNERS: Record<number, BannerConfig[]> = {
  48: [  // VPN — NordVPN直契約 + Surfshark直契約 + A8 MillenVPN
    ...NORDVPN_BANNERS.filter(b => b.width <= 300),
    ...SURFSHARK_BANNERS,
    ...A8_BANNERS.filter(b => b.programName === "MillenVPN"),
  ],
  51: [  // Server — Kinsta直契約 + A8 Xserver/ConoHa
    ...KINSTA_BANNERS.filter(b => b.width <= 300),
    ...A8_BANNERS.filter(b => ["Xserver", "ConoHa WING", "ConoHa VPS"].includes(b.programName)),
  ],
  50: MOSHIMO_BANNERS,         // eSIM (Airalo via もしも)
  59: TCS_FX_BANNERS,          // FX (DMM FX, FXブロードネット, 外為オンライン, ひまわり証券, ヒロセ通商)
  53: [...TCS_CRYPTO_BANNERS, ...VALUECOMMERCE_BANNERS], // Crypto (Coincheck + DMM Bitcoin + bitFlyer)
  52: A8_BANNERS.filter(b => b.programName === "Xserver"),  // AI（A8実提携なし→Xserverバナーで代替）
  55: A8_BANNERS.filter(b => b.programName === "Xserver"),  // School（同上）
  54: A8_BANNERS.filter(b => b.programName === "Xserver"),  // English（同上）
  56: A8_BANNERS.filter(b => b.programName === "Xserver"),  // Career（同上）
  44: [...NORDVPN_BANNERS.filter(b => b.width <= 300), ...SURFSHARK_BANNERS], // Security
};

// 記事固有のバナー（レビュー記事にはその製品のバナーを優先表示）
export const POST_BANNERS: Record<number, BannerConfig[]> = {
  // VPN レビュー
  205: NORDVPN_BANNERS.filter(b => b.width <= 300),                 // NordVPNレビュー → NordVPNバナー
  206: SURFSHARK_BANNERS,                                            // Surfsharkレビュー → Surfsharkバナー
  207: A8_BANNERS.filter(b => b.programName === "MillenVPN"),        // ExpressVPNレビュー → MillenVPN（VPN系）
  61:  A8_BANNERS.filter(b => b.programName === "MillenVPN"),        // CyberGhostレビュー → MillenVPN（VPN系）
  189: [                                                             // VPNランキング → NordVPN+Surfshark+MillenVPN
    ...NORDVPN_BANNERS.filter(b => b.width <= 300),
    ...SURFSHARK_BANNERS,
    ...A8_BANNERS.filter(b => b.programName === "MillenVPN"),
  ],
  261: [A8_BANNERS.find(b => b.programName === "MillenVPN")!].filter(Boolean), // MillenVPN → MillenVPN
  232: NORDVPN_BANNERS.filter(b => b.width <= 300),   // NordVPN vs ExpressVPN → NordVPN
  // Server レビュー
  209: A8_BANNERS.filter(b => b.programName === "Xserver"),     // Xserver → Xserver
  259: A8_BANNERS.filter(b => b.programName === "ConoHa WING"), // ConoHa → ConoHa
  295: KINSTA_BANNERS.filter(b => b.width <= 300),              // Kinsta → Kinsta
  351: A8_BANNERS.filter(b => ["Xserver", "ConoHa WING"].includes(b.programName)), // 比較 → 両方
  // FX レビュー
  525: TCS_FX_BANNERS.filter(b => b.programName === "DMM FX"),  // DMM FX → DMM FX
  533: TCS_FX_BANNERS.filter(b => b.programName.includes("外為オンライン")), // 外為 → 外為
  534: TCS_FX_BANNERS.filter(b => b.programName === "FXブロードネット"),
  535: TCS_FX_BANNERS.filter(b => b.programName === "ひまわり証券"),
  // Crypto レビュー
  211: TCS_CRYPTO_BANNERS,                             // Coincheck → Coincheck
  263: VALUECOMMERCE_BANNERS,                          // GMOコイン → DMM Bitcoin/bitFlyer
  // eSIM
  265: MOSHIMO_BANNERS,                                // eSIMランキング → Airalo
  345: MOSHIMO_BANNERS, 347: MOSHIMO_BANNERS,          // 韓国/アメリカeSIM
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
