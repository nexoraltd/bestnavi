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

const EXPRESSVPN_BANNER: BannerConfig = {
  programName: "ExpressVPN", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1K5O+5Q0036+5JSS+5YZ75",
  width: 300, height: 250,
  imageUrl: "https://www28.a8.net/svt/bgt?aid=260413260346&wid=001&eno=01&mid=s00000025894001003000&mc=1",
};

const MILLENVPN_BANNER: BannerConfig = {
  programName: "MillenVPN", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4AZSSR+66O50Y+3JTE+HXKQP",
  width: 300, height: 250,
  imageUrl: "https://www29.a8.net/svt/bgt?aid=260331147374&wid=001&eno=01&mid=s00000016565003012000&mc=1",
};

// ─── Server ───────────────────────────────────────────────────
const XSERVER_BANNER: BannerConfig = {
  programName: "Xserver", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4AZS0X+FYJBJM+CO4+6L9O1",
  width: 728, height: 90,
  imageUrl: "https://www27.a8.net/svt/bgt?aid=260330145965&wid=001&eno=01&mid=s00000001642001107000&mc=1",
};

const CONOHA_BANNER: BannerConfig = {
  programName: "ConoHa WING", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4AZSSR+5H2I0I+50+5SNCY9",
  width: 728, height: 90,
  imageUrl: "https://www25.a8.net/svt/bgt?aid=260331147331&wid=001&eno=01&mid=s00000000018035045000&mc=1",
};

const KINSTA_BANNERS: BannerConfig[] = [
  { programName: "Kinsta", affiliateId: "BVQFWTYMMLOV", url: "https://kinsta.com/jp/?kaid=BVQFWTYMMLOV", width: 300, height: 250, imageUrl: "/images/banners/kinsta-300x250.png" },
  { programName: "Kinsta", affiliateId: "BVQFWTYMMLOV", url: "https://kinsta.com/jp/?kaid=BVQFWTYMMLOV", width: 728, height: 90,  imageUrl: "/images/banners/kinsta-728x90.png" },
];

// ─── English ──────────────────────────────────────────────────
const BESTTEACHER_BANNER: BannerConfig = {
  programName: "ベストティーチャー", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4AXCKE+68GFUA+2ZIK+60WN5",
  width: 728, height: 90,
  imageUrl: "https://www22.a8.net/svt/bgt?aid=260216798377&wid=001&eno=01&mid=s00000013934001012000&mc=1",
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

// ─── FX (TCS) ─────────────────────────────────────────────────
const DMMFX_BANNER: BannerConfig = {
  programName: "DMM FX", affiliateId: "C140972",
  url: "https://www.tcs-asp.net/alink?AC=C140972&LC=DMM2&SQ=0&isq=1",
  width: 300, height: 250,
  imageUrl: "https://img.tcs-asp.net/imagesender?ac=C140972&lc=DMM2&isq=55&psq=0",
};

const GAIATE_BANNER: BannerConfig = {
  programName: "外為オンライン", affiliateId: "C140972",
  url: "https://www.tcs-asp.net/alink?AC=C140972&LC=NJT2&SQ=0&isq=1",
  width: 300, height: 250,
  imageUrl: "https://img.tcs-asp.net/imagesender?ac=C140972&lc=NJT2&isq=5&psq=0",
};

const FXBROAD_BANNER: BannerConfig = {
  programName: "FXブロードネット", affiliateId: "C140972",
  url: "https://www.tcs-asp.net/alink?AC=C140972&LC=FXTS1&SQ=0&isq=1",
  width: 300, height: 250,
  imageUrl: "https://img.tcs-asp.net/imagesender?ac=C140972&lc=FXTS1&isq=3&psq=0",
};

const FXTF_BANNER: BannerConfig = {
  programName: "FXTF", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THU+7DJCKY+48D0+626XT",
  width: 300, height: 250,
  imageUrl: "https://www20.a8.net/svt/bgt?aid=260425362446&wid=001&eno=01&mid=s00000019746001018000&mc=1",
};

// ─── 車買取（即時提携完了） ──────────────────────────────────────
const UCARPAC_BANNER: BannerConfig = {
  programName: "ユーカーパック", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THV+8CNX9U+3O80+626XT",
  width: 300, height: 250,
  imageUrl: "https://www29.a8.net/svt/bgt?aid=260425363505&wid=001&eno=01&mid=s00000017136001018000&mc=1",
};

const CTN_KAITORI_BANNER: BannerConfig = {
  programName: "CTN車一括査定", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THV+8D9CVM+5I4S+5YRHE",
  width: 300, height: 250,
  imageUrl: "https://www17.a8.net/svt/bgt?aid=260425363506&wid=001&eno=01&mid=s00000025678001050000&mc=1",
};

const YUNYUSHA_KAITORI_BANNER: BannerConfig = {
  programName: "輸入車買取センター", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THV+8C2HO2+57G2+62MDE",
  width: 300, height: 250,
  imageUrl: "https://www13.a8.net/svt/bgt?aid=260425363504&wid=001&eno=01&mid=s00000024293001003000&mc=1",
};

// ─── クレジットカード ──────────────────────────────────────────
// TODO: A8.net/バリューコマース/もしも で各カード申請後にURLを設定
const RAKUTEN_CARD_BANNER: BannerConfig = {
  programName: "楽天カード", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1K5O+TODO_RAKUTEN",
  width: 300, height: 250,
  imageUrl: "https://www.a8.net/svt/bgt?aid=TODO_RAKUTEN&wid=001&eno=01&mc=1",
};

const SMBC_CARD_BANNER: BannerConfig = {
  programName: "三井住友カード(NL)", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1K5O+TODO_SMBC",
  width: 300, height: 250,
  imageUrl: "https://www.a8.net/svt/bgt?aid=TODO_SMBC&wid=001&eno=01&mc=1",
};

const JCB_CARD_BANNER: BannerConfig = {
  programName: "JCBカード W", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1K5O+TODO_JCB",
  width: 300, height: 250,
  imageUrl: "https://www.a8.net/svt/bgt?aid=TODO_JCB&wid=001&eno=01&mc=1",
};

const DCARD_GOLD_BANNER: BannerConfig = {
  programName: "dカード GOLD", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1K5O+TODO_DCARD",
  width: 300, height: 250,
  imageUrl: "https://www.a8.net/svt/bgt?aid=TODO_DCARD&wid=001&eno=01&mc=1",
};

const EPOS_CARD_BANNER: BannerConfig = {
  programName: "エポスカード", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THU+2OG8S2+38L8+BXQOH",
  width: 300, height: 250,
  imageUrl: "https://www17.a8.net/svt/bgt?aid=260425362162&wid=001&eno=01&mid=s00000015110002003000&mc=1",
};

const LIFECARD_BANNER: BannerConfig = {
  programName: "ライフカード", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1K5O+TODO_LIFECARD",
  width: 300, height: 250,
  imageUrl: "https://www.a8.net/svt/bgt?aid=TODO_LIFECARD&wid=001&eno=01&mc=1",
};

// ─── Fukugyo ──────────────────────────────────────────────────
const INFRAAI_BANNER: BannerConfig = {
  programName: "infraAI", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4AZ8K6+84BUSY+5UGY+5Z6WX",
  width: 300, height: 250,
  imageUrl: "https://www26.a8.net/svt/bgt?aid=260304918491&wid=001&eno=01&mid=s00000027277001004000&mc=1",
};

// ─── カテゴリ別バナー ──────────────────────────────────────────
// カテゴリID → そのカテゴリの提携プログラムバナー
export const CATEGORY_BANNERS: Record<number, BannerConfig[]> = {
  48: [...NORDVPN_BANNERS, ...SURFSHARK_BANNERS, MILLENVPN_BANNER, EXPRESSVPN_BANNER],
  51: [XSERVER_BANNER, CONOHA_BANNER, ...KINSTA_BANNERS.filter(b => b.width <= 300)],
  54: [BESTTEACHER_BANNER, GSA_BANNER],
  55: [WINSCHOOL_BANNER, LIFETECH_BANNER],
  56: [GIFTS_BANNER],
  57: [INFRAAI_BANNER],  // Fukugyo: infraAI
  59: [FXTF_BANNER, DMMFX_BANNER, GAIATE_BANNER, FXBROAD_BANNER],  // FX
  // クレカ: 申請承認後に TODO_xxx を実URLに差し替え
  60: [RAKUTEN_CARD_BANNER, SMBC_CARD_BANNER, JCB_CARD_BANNER, DCARD_GOLD_BANNER, EPOS_CARD_BANNER, LIFECARD_BANNER],
  // 新カテゴリ: ASP申請承認後にバナー追加
  61: [],  // 転職: doda/マイナビ転職/テンプスタッフ等（バリューコマース/A8/もしも申請待ち）
  62: [],  // 派遣: テンプスタッフ等（A8申請待ち）
  63: [],  // 就活: キャリアチケット/ハタラクティブ等（A8申請待ち）
  64: [UCARPAC_BANNER, CTN_KAITORI_BANNER, YUNYUSHA_KAITORI_BANNER],  // 車買取: ユーカーパック/CTN/輸入車買取センター（A8即時提携完了）
  65: [],  // 法人カード/ETC: FASIO/法人ETC/法人ガソリン（A8提携完了→リンク取得待ち）
  66: [],  // 会計・確定申告: マネーフォワード/freee/弥生（A8提携完了→リンク取得待ち）
  67: [],  // WiFi・SIM: 誰でもWi-Fi/Lyprimo/スマホプリペイド（A8提携完了→リンク取得待ち）
  68: [],  // ギフトカード: Visaギフト/金券ねっと/スマホプリペイド（A8提携完了→リンク取得待ち）
};

// ─── 記事固有バナー（レビュー記事はその製品を優先表示）──────
export const POST_BANNERS: Record<number, BannerConfig[]> = {
  // ── VPN ──────────────────────────────────────────────────────
  // ランキング・まとめ → 全バナー
  189: [...NORDVPN_BANNERS, ...SURFSHARK_BANNERS, MILLENVPN_BANNER, EXPRESSVPN_BANNER],
  335: [...NORDVPN_BANNERS, ...SURFSHARK_BANNERS, MILLENVPN_BANNER, EXPRESSVPN_BANNER],
  337: [...NORDVPN_BANNERS, ...SURFSHARK_BANNERS, MILLENVPN_BANNER],  // テレワーク記事
  // 用途別ガイド（比較記事）→ 比較対象製品のバナー
  340: [...NORDVPN_BANNERS, ...SURFSHARK_BANNERS],  // iPhone向けVPN
  341: [...NORDVPN_BANNERS, ...SURFSHARK_BANNERS],  // Android向けVPN
  342: [...NORDVPN_BANNERS, EXPRESSVPN_BANNER],     // 海外旅行向けVPN
  343: [...NORDVPN_BANNERS, ...SURFSHARK_BANNERS],  // NordVPN vs Surfshark
  // 個別記事 → その製品のバナーのみ
  205: NORDVPN_BANNERS,
  206: SURFSHARK_BANNERS,
  261: [MILLENVPN_BANNER],
  339: [EXPRESSVPN_BANNER],
  338: [],  // Rakulink: バナー画像なし

  // ── Server ───────────────────────────────────────────────────
  // ランキング・まとめ → 全バナー
  210: [XSERVER_BANNER, CONOHA_BANNER, ...KINSTA_BANNERS.filter(b => b.width <= 300)],
  211: [XSERVER_BANNER, CONOHA_BANNER],  // WordPress開設ガイド
  296: [XSERVER_BANNER, CONOHA_BANNER],  // Xserver vs ConoHa 比較
  297: [XSERVER_BANNER, CONOHA_BANNER],  // ブログ開設ガイド
  // 個別記事 → その製品のバナーのみ
  209: [XSERVER_BANNER],
  259: [CONOHA_BANNER],
  295: KINSTA_BANNERS.filter(b => b.width <= 300),

  // ── English ──────────────────────────────────────────────────
  // ランキング・まとめ → 全バナー
  285: [BESTTEACHER_BANNER, GSA_BANNER],
  390: [BESTTEACHER_BANNER, GSA_BANNER],  // ビジネス英会話ガイド
  391: [BESTTEACHER_BANNER, GSA_BANNER],  // 子供英会話ガイド
  // 個別記事 → その製品のバナーのみ
  367: [BESTTEACHER_BANNER],
  369: [],  // ティントル: バナー画像なし
  385: [GSA_BANNER],
  388: [],  // ECC: バナー画像なし（承認後差し替え）
  389: [],  // NOVA: バナー画像なし（承認後差し替え）

  // ── School ───────────────────────────────────────────────────
  // ランキング・まとめ → 全バナー
  287: [WINSCHOOL_BANNER, LIFETECH_BANNER],
  375: [WINSCHOOL_BANNER, LIFETECH_BANNER],  // Webデザインスクール比較
  376: [LIFETECH_BANNER, WINSCHOOL_BANNER],  // プログラミング入門ガイド
  // 個別記事 → その製品のバナーのみ
  371: [LIFETECH_BANNER],
  373: [WINSCHOOL_BANNER],
  374: [],  // インターノウス: バナー画像なし（承認後差し替え）

  // ── Career ───────────────────────────────────────────────────
  // ランキング・まとめ → 全バナー
  290: [GIFTS_BANNER],
  291: [],  // テックゴー個別記事: バナー画像なし（承認後差し替え）
  292: [],  // ウズウズカレッジ個別記事: バナー画像なし（承認後差し替え）
  293: [],  // 社内SE転職ナビ個別記事: バナー画像なし（承認後差し替え）
  294: [GIFTS_BANNER],  // IT転職初心者ロードマップ（まとめ系）
  // 個別記事 → その製品のバナーのみ
  289: [GIFTS_BANNER],

  // ── Fukugyo ──────────────────────────────────────────────────
  // ランキング・まとめ → 全バナー
  601: [INFRAAI_BANNER],
  603: [INFRAAI_BANNER],  // Web副業ガイド
  604: [INFRAAI_BANNER],  // 動画編集副業ガイド
  // 個別記事 → その製品のバナーのみ
  600: [],        // SideLine: バナー画像なし
  602: [INFRAAI_BANNER],

  // ── FX ───────────────────────────────────────────────────────
  // ランキング・まとめ → 全バナー
  700: [FXTF_BANNER, DMMFX_BANNER, GAIATE_BANNER, FXBROAD_BANNER],
  705: [FXTF_BANNER, DMMFX_BANNER, GAIATE_BANNER],   // FX初心者ガイド
  706: [FXTF_BANNER, DMMFX_BANNER, GAIATE_BANNER, FXBROAD_BANNER],  // FXスプレッド比較
  // 個別記事 → その製品のバナーのみ
  701: [DMMFX_BANNER],
  702: [GAIATE_BANNER],
  703: [FXBROAD_BANNER],
  704: [],  // ひまわり証券: バナー画像なし（承認後差し替え）
  707: [FXBROAD_BANNER],  // FX自動売買ガイド（FXブロードネット）
  // 新規FX個別記事
  754: [DMMFX_BANNER],   // SBI FXトレード評判: TCS/DMM FXのCTAを表示
  755: [DMMFX_BANNER],   // GMOクリック証券FX評判: TCS/DMM FXのCTAを表示

  // ── VPN ───────────────────────────────────────────────────────
  // 新規VPN記事
  756: [...NORDVPN_BANNERS, EXPRESSVPN_BANNER],   // NordVPN vs ExpressVPN
  757: [...NORDVPN_BANNERS, ...SURFSHARK_BANNERS], // iPhone iOS VPN設定ガイド

  // ── 仮想通貨 ─────────────────────────────────────────────────
  758: [],  // bitFlyer評判: バナーなし（Coincheckリンクは現状維持）

  // ── クレジットカード（ASP申請後にTODO_xxx → 実URLに差し替え） ────
  800: [RAKUTEN_CARD_BANNER, SMBC_CARD_BANNER, JCB_CARD_BANNER, DCARD_GOLD_BANNER, EPOS_CARD_BANNER],  // ランキング
  801: [RAKUTEN_CARD_BANNER],       // 楽天カードレビュー
  802: [SMBC_CARD_BANNER],          // 三井住友(NL)レビュー
  803: [JCB_CARD_BANNER],           // JCBカード Wレビュー
  804: [DCARD_GOLD_BANNER],         // dカード GOLDレビュー
  805: [RAKUTEN_CARD_BANNER, SMBC_CARD_BANNER, JCB_CARD_BANNER, EPOS_CARD_BANNER, LIFECARD_BANNER],  // 年会費無料比較
  806: [RAKUTEN_CARD_BANNER, EPOS_CARD_BANNER, LIFECARD_BANNER],  // 初めてのカード
  807: [RAKUTEN_CARD_BANNER, SMBC_CARD_BANNER, JCB_CARD_BANNER, DCARD_GOLD_BANNER],  // 還元率比較
  808: [EPOS_CARD_BANNER],          // エポスカードレビュー
  809: [SMBC_CARD_BANNER, DCARD_GOLD_BANNER],  // ゴールドカード比較

  // ── 転職/派遣/就活/車買取（ASP申請承認後にバナー追加）────
  900: [],  // 転職エージェントランキング
  910: [],  // 派遣会社ランキング
  920: [],  // 就活エージェントランキング
  930: [],  // 車買取ランキング
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
