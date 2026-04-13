// 提携プログラムのバナー設定
// 非提携プログラム（AI/FX/eSIM/仮想通貨/セキュリティ）は削除済み

export interface BannerConfig {
  programName: string;
  affiliateId: string;
  url: string;
  width: number;
  height: number;
  imageUrl: string;
}

// ─── VPN ──────────────────────────────────────────────────────
const NORDVPN_BANNERS: BannerConfig[] = [
  { programName: "NordVPN", affiliateId: "142267", url: "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=142267", width: 300, height: 250, imageUrl: "/images/banners/nordvpn-300x250.gif" },
  { programName: "NordVPN", affiliateId: "142267", url: "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=142267", width: 728, height: 90,  imageUrl: "/images/banners/nordvpn-728x90.gif" },
];

const SURFSHARK_BANNERS: BannerConfig[] = [
  { programName: "Surfshark", affiliateId: "45127", url: "https://get.surfshark.net/aff_c?offer_id=926&aff_id=45127", width: 300, height: 250, imageUrl: "/images/banners/surfshark-300x250.png" },
];

const MILLENVPN_BANNER: BannerConfig = {
  programName: "MillenVPN", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4AZSSR+66O50Y+3JTE+HXKQP",
  width: 300, height: 250,
  imageUrl: "https://www29.a8.net/svt/bgt?aid=260331147374&wid=001&eno=01&mid=s00000016565003012000&mc=1",
};

// ─── Server ───────────────────────────────────────────────────
const XSERVER_BANNER: BannerConfig = {
  programName: "Xserver", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4AZS0X+FYJBJM+CO4+61JSI",
  width: 300, height: 250,
  imageUrl: "https://www24.a8.net/svt/bgt?aid=260330145965&wid=001&eno=01&mid=s00000001642001038000&mc=1",
};

const CONOHA_BANNER: BannerConfig = {
  programName: "ConoHa WING", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4AZSSR+5H2I0I+50+5SKSCY",
  width: 300, height: 250,
  imageUrl: "https://www24.a8.net/svt/bgt?aid=260331147331&wid=001&eno=01&mid=s00000000018035008000&mc=1",
};

const KINSTA_BANNERS: BannerConfig[] = [
  { programName: "Kinsta", affiliateId: "BVQFWTYMMLOV", url: "https://kinsta.com/jp/?kaid=BVQFWTYMMLOV", width: 300, height: 250, imageUrl: "/images/banners/kinsta-300x250.png" },
  { programName: "Kinsta", affiliateId: "BVQFWTYMMLOV", url: "https://kinsta.com/jp/?kaid=BVQFWTYMMLOV", width: 728, height: 90,  imageUrl: "/images/banners/kinsta-728x90.png" },
];

// ─── English ──────────────────────────────────────────────────
const BESTTEACHER_BANNER: BannerConfig = {
  programName: "ベストティーチャー", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4AXCKE+68GFUA+2ZIK+69HA9",
  width: 300, height: 250,
  imageUrl: "https://www25.a8.net/svt/bgt?aid=260216798377&wid=001&eno=01&mid=s00000013934001008000&mc=1",
};

const GSA_BANNER: BannerConfig = {
  programName: "Global Step Academy", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4AXCKE+6F07HU+477W+609HU",
  width: 300, height: 250,
  imageUrl: "https://www26.a8.net/svt/bgt?aid=260216798388&wid=001&eno=01&mid=s00000019598001006000&mc=1",
};

// ─── School ───────────────────────────────────────────────────
const WINSCHOOL_BANNER: BannerConfig = {
  programName: "Winスクール", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4AXCKE+67V08I+529E+5ZMCH",
  width: 300, height: 250,
  imageUrl: "https://www21.a8.net/svt/bgt?aid=260216798376&wid=001&eno=01&mid=s00000023621001006000&mc=1",
};

const LIFETECH_BANNER: BannerConfig = {
  programName: "Life is Tech", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4AXCKE+6AU69E+5G36+5YZ75",
  width: 300, height: 250,
  imageUrl: "https://www20.a8.net/svt/bgt?aid=260216798381&wid=001&eno=01&mid=s00000025413001003000&mc=1",
};

// ─── Career ───────────────────────────────────────────────────
const GIFTS_BANNER: BannerConfig = {
  programName: "エストレ", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4AXCKE+66O50Y+5OBU+5YZ75",
  width: 300, height: 250,
  imageUrl: "https://www29.a8.net/svt/bgt?aid=260216798374&wid=001&eno=01&mid=s00000026481001003000&mc=1",
};

// ─── カテゴリ別バナー ──────────────────────────────────────────
// カテゴリID → そのカテゴリの提携プログラムバナー
export const CATEGORY_BANNERS: Record<number, BannerConfig[]> = {
  48: [...NORDVPN_BANNERS, ...SURFSHARK_BANNERS, MILLENVPN_BANNER],
  51: [XSERVER_BANNER, CONOHA_BANNER, ...KINSTA_BANNERS.filter(b => b.width <= 300)],
  54: [BESTTEACHER_BANNER, GSA_BANNER],
  55: [WINSCHOOL_BANNER, LIFETECH_BANNER],
  56: [GIFTS_BANNER],
  57: [],  // SideLine: バナー画像なし
};

// ─── 記事固有バナー（レビュー記事はその製品を優先表示）──────
export const POST_BANNERS: Record<number, BannerConfig[]> = {
  // VPN
  // VPN まとめ記事 → 全バナー
  189: [...NORDVPN_BANNERS, ...SURFSHARK_BANNERS, MILLENVPN_BANNER],
  335: [...NORDVPN_BANNERS, ...SURFSHARK_BANNERS, MILLENVPN_BANNER],
  // VPN 個別記事 → その製品のみ
  205: NORDVPN_BANNERS,
  206: SURFSHARK_BANNERS,
  261: [MILLENVPN_BANNER],
  // Server まとめ記事 → 全バナー
  210: [XSERVER_BANNER, CONOHA_BANNER, ...KINSTA_BANNERS.filter(b => b.width <= 300)],
  // Server 個別記事 → その製品のみ
  209: [XSERVER_BANNER],
  259: [CONOHA_BANNER],
  295: KINSTA_BANNERS.filter(b => b.width <= 300),
  // English まとめ記事 → 全バナー
  285: [BESTTEACHER_BANNER, GSA_BANNER],
  // English 個別記事 → その製品のみ
  367: [BESTTEACHER_BANNER],
  369: [],  // ティントル: バナー画像なし
  385: [GSA_BANNER],
  // School まとめ記事 → 全バナー
  287: [WINSCHOOL_BANNER, LIFETECH_BANNER],
  // School 個別記事 → その製品のみ
  371: [LIFETECH_BANNER],
  373: [WINSCHOOL_BANNER],
  // Career 個別記事
  289: [GIFTS_BANNER],
  // Fukugyo 個別記事
  600: [],
};

export function getBannersForArticle(postId: number, categoryIds: number[]): BannerConfig[] {
  if (postId in POST_BANNERS) {
    return POST_BANNERS[postId];
  }
  for (const categoryId of categoryIds) {
    if (CATEGORY_BANNERS[categoryId]?.length) {
      return CATEGORY_BANNERS[categoryId];
    }
  }
  return [];
}
