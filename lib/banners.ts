// 提携プログラムのバナー設定
// 非提携プログラム（AI/FX/eSIM/仮想通貨/セキュリティ）は削除済み

export interface BannerConfig {
  programName: string;
  affiliateId: string;
  url: string;
  width: number;
  height: number;
  imageUrl: string;
  iframeUrl?: string; // Impact iFrame embed URL (CORSのため画像直接参照不可の場合)
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

const SUIKAVPN_BANNER: BannerConfig = {
  programName: "スイカVPN", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THV+FN831U+4R3G+62ENL",
  width: 300, height: 250,
  imageUrl: "https://www23.a8.net/svt/bgt?aid=260425363946&wid=001&eno=01&mid=s00000022174001019000&mc=1",
};

const SEKAIVPN_BANNER: BannerConfig = {
  programName: "セカイVPN", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THV+FMMNG2+7QW+1ZJG1T",
  width: 300, height: 250,
  imageUrl: "https://www23.a8.net/svt/bgt?aid=260425363945&wid=001&eno=01&mid=s00000001004012016000&mc=1",
};

const SURFSHARK_ANTIVIRUS_BANNER: BannerConfig = {
  programName: "Surfshark Antivirus", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THW+SKTTE+4LSW+BXIYP",
  width: 300, height: 250,
  imageUrl: "https://www26.a8.net/svt/bgt?aid=260425364048&wid=001&eno=01&mid=s00000021488002004000&mc=1",
};

// ─── eSIM Airalo (Impact) ─────────────────────────────────────
// 汎用EN: ongoing | JPキャンペーン(PHUKET/NAPLES/TOKYO): 〜2026-05-01
const AIRALO_JP_PHUKET_300x250: BannerConfig = {
  programName: "Airalo eSIM",
  affiliateId: "7171485",
  url: "https://airalo.pxf.io/c/7171485/3810612/15608",
  width: 300, height: 250, imageUrl: "",
  iframeUrl: "//a.impactradius-go.com/gen-ad-code/7171485/3810612/15608/",
};
const AIRALO_JP_PHUKET_300x600: BannerConfig = {
  programName: "Airalo eSIM",
  affiliateId: "7171485",
  url: "https://airalo.pxf.io/c/7171485/3810613/15608",
  width: 300, height: 600, imageUrl: "",
  iframeUrl: "//a.impactradius-go.com/gen-ad-code/7171485/3810613/15608/",
};
const AIRALO_EN_GENERIC_320x1360: BannerConfig = {
  programName: "Airalo eSIM",
  affiliateId: "7171485",
  url: "https://airalo.pxf.io/c/7171485/1349058/15608",
  width: 320, height: 1360, imageUrl: "",
  iframeUrl: "//a.impactradius-go.com/gen-ad-code/7171485/1349058/15608/",
};

// ─── eSIM ─────────────────────────────────────────────────────
const SAILY_BANNER: BannerConfig = {
  programName: "Saily eSIM", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THW+T69F6+5L2C+5YZ75",
  width: 300, height: 250,
  imageUrl: "https://www29.a8.net/svt/bgt?aid=260425364049&wid=001&eno=01&mid=s00000026058001003000&mc=1",
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

const NOVA_BANNER: BannerConfig = {
  programName: "NOVA（新・お茶の間留学）", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THV+ES9JLE+320A+NV9N5",
  width: 300, height: 250,
  imageUrl: "https://www29.a8.net/svt/bgt?aid=260425363894&wid=001&eno=01&mid=s00000014257004009000&mc=1",
};

const LANCUL_BANNER: BannerConfig = {
  programName: "LanCul英会話カフェ", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THV+EV8PMA+4FL0+62ENL",
  width: 300, height: 250,
  imageUrl: "https://www25.a8.net/svt/bgt?aid=260425363899&wid=001&eno=01&mid=s00000020682001019000&mc=1",
};

const BIZMATES_BANNER: BannerConfig = {
  programName: "Bizmates（ビズメイツ）", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THV+ELPRXU+2QEI+6AZAP",
  width: 300, height: 250,
  imageUrl: "https://www24.a8.net/svt/bgt?aid=260425363883&wid=001&eno=01&mid=s00000012753001059000&mc=1",
};

const WORLDIKIDS_BANNER: BannerConfig = {
  programName: "ワールドアイキッズ", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THV+EY7VN6+4MZ4+5ZMCH",
  width: 300, height: 250,
  imageUrl: "https://www22.a8.net/svt/bgt?aid=260425363904&wid=001&eno=01&mid=s00000021640001006000&mc=1",
};

const BWATASHI_BANNER: BannerConfig = {
  programName: "b わたしの英会話", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THV+FFHG6Q+27TW+601S1",
  width: 300, height: 250,
  imageUrl: "https://www27.a8.net/svt/bgt?aid=260425363933&wid=001&eno=01&mid=s00000010346001008000&mc=1",
};

const EIGOX_BANNER: BannerConfig = {
  programName: "エイゴックス", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THV+EQH8S2+2TKO+639IP",
  width: 300, height: 250,
  imageUrl: "https://www21.a8.net/svt/bgt?aid=260425363891&wid=001&eno=01&mid=s00000013164001023000&mc=1",
};

const STUDYSAPURI_ENGLISH_BANNER: BannerConfig = {
  programName: "スタディサプリEnglish", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THV+EOOXYQ+3AQG+TUVZL",
  width: 300, height: 250,
  imageUrl: "https://www20.a8.net/svt/bgt?aid=260425363888&wid=001&eno=01&mid=s00000015388005015000&mc=1",
};

const WILLIES_BANNER: BannerConfig = {
  programName: "ウィリーズオンライン英会話", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THV+EPADKI+4JKM+5ZMCH",
  width: 300, height: 250,
  imageUrl: "https://www29.a8.net/svt/bgt?aid=260425363889&wid=001&eno=01&mid=s00000021199001006000&mc=1",
};

const AQUES_BANNER: BannerConfig = {
  programName: "AQUES（オンライン英会話）", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THV+EU1UEQ+4D4Y+609HT",
  width: 300, height: 250,
  imageUrl: "https://www21.a8.net/svt/bgt?aid=260425363897&wid=001&eno=01&mid=s00000020365001009000&mc=1",
};

const ESPI_BANNER: BannerConfig = {
  programName: "eスポーツ英会話eスピ！", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THV+EWFKTU+5LPE+5YZ75",
  width: 300, height: 250,
  imageUrl: "https://www21.a8.net/svt/bgt?aid=260425363901&wid=001&eno=01&mid=s00000026141001003000&mc=1",
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

const SKILLHACKS_BANNER: BannerConfig = {
  programName: "SkillHacks（プログラミング）", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THV+FIGM7M+4K3S+61JSH",
  width: 300, height: 250,
  imageUrl: "https://www25.a8.net/svt/bgt?aid=260425363938&wid=001&eno=01&mid=s00000021268001015000&mc=1",
};

// ─── Career / 転職 ────────────────────────────────────────────
const CIRCUS_BANNER: BannerConfig = {
  programName: "転職AGENT Navi（circus）", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THU+5EORLE+5BJK+5ZEMP",
  width: 300, height: 250,
  imageUrl: "https://www29.a8.net/svt/bgt?aid=260425362327&wid=001&eno=01&mid=s00000024824001005000&mc=1",
};

const IDA_BANNER: BannerConfig = {
  programName: "iDA（アパレル・ファッション転職）", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THV+CULTTE+50TG+626XT",
  width: 300, height: 250,
  imageUrl: "https://www23.a8.net/svt/bgt?aid=260425363777&wid=001&eno=01&mid=s00000023434001018000&mc=1",
};

const OISHIRU_BANNER: BannerConfig = {
  programName: "オイシルキャリア（生鮮業界転職）", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THV+9K4KFM+5UIW+5ZMCH",
  width: 300, height: 250,
  imageUrl: "https://www21.a8.net/svt/bgt?aid=260425363578&wid=001&eno=01&mid=s00000027284001006000&mc=1",
};

const GIFTS_BANNER: BannerConfig = {
  programName: "エストレ", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4AXCKE+66O50Y+5OBU+5YZ75",
  width: 300, height: 250,
  imageUrl: "https://www29.a8.net/svt/bgt?aid=260216798374&wid=001&eno=01&mid=s00000026481001003000&mc=1",
};

const KARRICON_BANNER: BannerConfig = {
  programName: "キャリコン（20代転職）", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THV+8TC27M+5PN2+5YZ75",
  width: 300, height: 250,
  imageUrl: "https://www28.a8.net/svt/bgt?aid=260425363533&wid=001&eno=01&mid=s00000026651001003000&mc=1",
};

const MIRAIFU_BANNER: BannerConfig = {
  programName: "ミライフ（転職エージェント）", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THV+8TXHTE+5S0C+5YZ75",
  width: 300, height: 250,
  imageUrl: "https://www29.a8.net/svt/bgt?aid=260425363534&wid=001&eno=01&mid=s00000026958001003000&mc=1",
};

// ─── IT転職 ───────────────────────────────────────────────────
const TECHGO_BANNER: BannerConfig = {
  programName: "テックゴー（IT転職）", affiliateId: "5484611",
  url: "https://af.moshimo.com/af/c/click?a_id=5484611&p_id=6722&pc_id=19209&pl_id=90844",
  width: 300, height: 250,
  imageUrl: "https://image.moshimo.com/af-img/5666/000000090844.png",
};

const TECHCLIPS_BANNER: BannerConfig = {
  programName: "TechClipsエージェント", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THV+8SQMLU+3SWM+601S1",
  width: 300, height: 250,
  imageUrl: "https://www23.a8.net/svt/bgt?aid=260425363532&wid=001&eno=01&mid=s00000017743001008000&mc=1",
};

const MASSMEDIAAN_BANNER: BannerConfig = {
  programName: "マスメディアン", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THV+CO225U+3JN0+6H729",
  width: 300, height: 250,
  imageUrl: "https://www25.a8.net/svt/bgt?aid=260425363766&wid=001&eno=01&mid=s00000016542001088000&mc=1",
};

// ─── 特化型転職（もしもアフィリエイト）──────────────────────────
const TWINPRO_BANNER: BannerConfig = {
  programName: "ツインプロ（会計士・税理士転職）", affiliateId: "5485114",
  url: "https://af.moshimo.com/af/c/click?a_id=5485114&p_id=6451&pc_id=18215&pl_id=82585",
  width: 300, height: 250,
  imageUrl: "https://image.moshimo.com/af-img/5666/000000082585.png",
};

const TAMESY_BANNER: BannerConfig = {
  programName: "Tamesy（転職エージェント）", affiliateId: "5484769",
  url: "https://af.moshimo.com/af/c/click?a_id=5484769&p_id=7048&pc_id=20176&pl_id=89504",
  width: 299, height: 298,
  imageUrl: "https://image.moshimo.com/af-img/6847/000000089504.png",
};

const MABEGINNERS_BANNER: BannerConfig = {
  programName: "M&A BEGINNERS（M&A転職）", affiliateId: "5485112",
  url: "https://af.moshimo.com/af/c/click?a_id=5485112&p_id=6421&pc_id=18143&pl_id=82943",
  width: 300, height: 250,
  imageUrl: "https://image.moshimo.com/af-img/4936/000000082943.png",
};

const HRCAGENT_BANNER: BannerConfig = {
  programName: "HR CAREER AGENT（人材転職）", affiliateId: "5485113",
  url: "https://af.moshimo.com/af/c/click?a_id=5485113&p_id=6422&pc_id=18145&pl_id=82950",
  width: 300, height: 250,
  imageUrl: "https://image.moshimo.com/af-img/4936/000000082950.png",
};

// ─── バーチャルオフィス ────────────────────────────────────────
const VIRTUALOFFICE1_BANNER: BannerConfig = {
  programName: "バーチャルオフィス1", affiliateId: "5484742",
  url: "https://af.moshimo.com/af/c/click?a_id=5484742&p_id=7268&pc_id=20845&pl_id=91893",
  width: 300, height: 250,
  imageUrl: "https://image.moshimo.com/af-img/0810/000000091893.jpg",
};

// ─── 就活 ─────────────────────────────────────────────────────
const ATGP_BANNER: BannerConfig = {
  programName: "atGP 就活エージェント", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THV+E7FDF6+3UNE+1HM30X",
  width: 300, height: 250,
  imageUrl: "https://www29.a8.net/svt/bgt?aid=260425363859&wid=001&eno=01&mid=s00000017969009005000&mc=1",
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

// ─── マイカーリース ────────────────────────────────────────────
const ENKIRO_BANNER: BannerConfig = {
  programName: "エンキロ（距離で支払うマイカーリース）", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THV+8KEK4Y+5O9C+5YZ75",
  width: 300, height: 250,
  imageUrl: "https://www29.a8.net/svt/bgt?aid=260425363518&wid=001&eno=01&mid=s00000026472001003000&mc=1",
};

// ─── 車買取 ───────────────────────────────────────────────────
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

const HAISHAL_BANNER: BannerConfig = {
  programName: "ハイシャル（廃車買取）", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THV+8LLFCI+5L7M+5YZ75",
  width: 300, height: 250,
  imageUrl: "https://www23.a8.net/svt/bgt?aid=260425363520&wid=001&eno=01&mid=s00000026077001003000&mc=1",
};

const KENKIKAITORIYA_BANNER: BannerConfig = {
  programName: "建機買取屋.コム（重機買取）", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THV+8IM9BM+4HKO+BYLJL",
  width: 300, height: 250,
  imageUrl: "https://www29.a8.net/svt/bgt?aid=260425363515&wid=001&eno=01&mid=s00000020940002009000&mc=1",
};

// ─── 医療・介護転職 ────────────────────────────────────────────
const MCNURSENET_BANNER: BannerConfig = {
  programName: "MCナースネット（看護師転職）", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THV+DE94S2+28MI+62ENL",
  width: 300, height: 250,
  imageUrl: "https://www24.a8.net/svt/bgt?aid=260425363810&wid=001&eno=01&mid=s00000010449001019000&mc=1",
};

const MCCAREGIVING_BANNER: BannerConfig = {
  programName: "MC介護のお仕事", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THV+DBVECY+28MI+NVWSH",
  width: 300, height: 250,
  imageUrl: "https://www25.a8.net/svt/bgt?aid=260425363806&wid=001&eno=01&mid=s00000010449004012000&mc=1",
};

// ─── 家事代行 ─────────────────────────────────────────────────
const CATHAND_BANNER: BannerConfig = {
  programName: "キャットハンド（家事代行）", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THV+F3KS36+3G9W+5ZU29",
  width: 300, height: 250,
  imageUrl: "https://www20.a8.net/svt/bgt?aid=260425363913&wid=001&eno=01&mid=s00000016106001007000&mc=1",
};

// ─── 法人カード/ETC ───────────────────────────────────────────
const ETC_KUMIAI_MANGA_BANNER: BannerConfig = {
  programName: "法人ETCカード（ETC協同組合）", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THV+FTRUPE+3EV2+TTTEP",
  width: 300, height: 250,
  imageUrl: "https://www24.a8.net/svt/bgt?aid=260425363957&wid=001&eno=01&mid=s00000015923005010000&mc=1",
};

const FASIO_BANNER: BannerConfig = {
  programName: "FASIOビジネスカード", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THV+G8NOTU+49Z2+609HT",
  width: 300, height: 250,
  imageUrl: "https://www23.a8.net/svt/bgt?aid=260425363982&wid=001&eno=01&mid=s00000019955001009000&mc=1",
};

const GASOLINE_CARD_BANNER: BannerConfig = {
  programName: "法人ガソリンカード（高速情報協同組合）", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THV+FRZJW2+1WW0+TUO9T",
  width: 300, height: 250,
  imageUrl: "https://www26.a8.net/svt/bgt?aid=260425363954&wid=001&eno=01&mid=s00000008928005014000&mc=1",
};

const ETC_SPEED_BANNER: BannerConfig = {
  programName: "法人ETCカードNO.1スピード発行（ETC協同組合）", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THV+FXCGC2+3EV2+60OXD",
  width: 300, height: 250,
  imageUrl: "https://www27.a8.net/svt/bgt?aid=260425363963&wid=001&eno=01&mid=s00000015923001011000&mc=1",
};

const ETC_GASOLINE_MANGA2_BANNER: BannerConfig = {
  programName: "法人ガソリンカード・マンガ版（ETC協同組合）", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THV+FSKZHU+3EV2+ZRXQP",
  width: 300, height: 250,
  imageUrl: "https://www24.a8.net/svt/bgt?aid=260425363955&wid=001&eno=01&mid=s00000015923006009000&mc=1",
};

// ─── 会計・確定申告 ────────────────────────────────────────────
const MONEYFORWARD_BANNER: BannerConfig = {
  programName: "マネーフォワード クラウド確定申告", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THV+FUYPWY+4JGQ+C2GFL",
  width: 300, height: 250,
  imageUrl: "https://www28.a8.net/svt/bgt?aid=260425363959&wid=001&eno=01&mid=s00000021185002027000&mc=1",
};

const FREEE_BANNER: BannerConfig = {
  programName: "freee会計", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THZ+2P1ODU+3SPO+9FFFOX",
  width: 300, height: 250,
  imageUrl: "https://www22.a8.net/svt/bgt?aid=260425367163&wid=001&eno=01&mid=s00000017718057011000&mc=1",
};

const YAYOI_BANNER: BannerConfig = {
  programName: "弥生シリーズ", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THZ+2QTZ76+35XE+661TT",
  width: 300, height: 250,
  imageUrl: "https://www20.a8.net/svt/bgt?aid=260425367166&wid=001&eno=01&mid=s00000014765001036000&mc=1",
};

// ─── WiFi・SIM ────────────────────────────────────────────────
const GOENMOBILE_BANNER: BannerConfig = {
  programName: "ごえんモバイル（格安SIM）", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THV+FVK5IQ+424K+TSQTT",
  width: 300, height: 250,
  imageUrl: "https://www20.a8.net/svt/bgt?aid=260425363960&wid=001&eno=01&mid=s00000018938005005000&mc=1",
};

const DAREDEMO_WIFI_BANNER: BannerConfig = {
  programName: "誰でもWi-Fi", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THV+FBBEYA+4G6O+1ZHAW1",
  width: 300, height: 250,
  imageUrl: "https://www24.a8.net/svt/bgt?aid=260425363926&wid=001&eno=01&mid=s00000020760012006000&mc=1",
};

const LYPRIMO_BANNER: BannerConfig = {
  programName: "Lyprimo（リプリモ）", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THV+FPLTGY+529Y+5ZMCH",
  width: 300, height: 250,
  imageUrl: "https://www20.a8.net/svt/bgt?aid=260425363950&wid=001&eno=01&mid=s00000023623001006000&mc=1",
};

const SMARTPHONE_PREPAID_BANNER: BannerConfig = {
  programName: "スマホプリペイド", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THV+FP0DV6+5IYS+614CX",
  width: 300, height: 250,
  imageUrl: "https://www24.a8.net/svt/bgt?aid=260425363949&wid=001&eno=01&mid=s00000025786001013000&mc=1",
};

// ─── ギフトカード ─────────────────────────────────────────────
const VISA_GIFT_BANNER: BannerConfig = {
  programName: "Visaのデジタルギフト", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THV+G6VE0I+54A6+5ZMCH",
  width: 300, height: 250,
  imageUrl: "https://www22.a8.net/svt/bgt?aid=260425363979&wid=001&eno=01&mid=s00000023883001006000&mc=1",
};

const KINKEN_NET_BANNER: BannerConfig = {
  programName: "金券ねっと", affiliateId: "a26021579611",
  url: "https://px.a8.net/svt/ejp?a8mat=4B1THV+FAPZCI+3J2Q+601S1",
  width: 300, height: 250,
  imageUrl: "https://www21.a8.net/svt/bgt?aid=260425363925&wid=001&eno=01&mid=s00000016469001008000&mc=1",
};

// ─── クレジットカード ──────────────────────────────────────────
// 申請状況 (2026-04-29):
//   楽天カード    : スキップ（A8.net/もしも掲載なし・楽天独自ASP申請省略）
//   三井住友NL    : A8.net申請中 (s00000023355003)
//   JCBカードW    : A8.net掲載なし（独自ASP経由で申請要）
//   dカードGOLD   : A8.net申請中 (s00000013470008 = GOLD U 版)
//   ライフカード  : A8.net掲載なし
// → 承認後: A8.net広告リンク作成 → url/imageUrl を実URLに差し替え

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
  48: [...NORDVPN_BANNERS, ...SURFSHARK_BANNERS, MILLENVPN_BANNER, EXPRESSVPN_BANNER, SUIKAVPN_BANNER, SEKAIVPN_BANNER, SURFSHARK_ANTIVIRUS_BANNER],
  50: [AIRALO_JP_PHUKET_300x250, AIRALO_JP_PHUKET_300x600, SAILY_BANNER, AIRALO_EN_GENERIC_320x1360],
  51: [XSERVER_BANNER, CONOHA_BANNER, ...KINSTA_BANNERS.filter(b => b.width <= 300)],
  54: [BESTTEACHER_BANNER, GSA_BANNER, NOVA_BANNER, LANCUL_BANNER, BIZMATES_BANNER, WORLDIKIDS_BANNER, BWATASHI_BANNER, EIGOX_BANNER, STUDYSAPURI_ENGLISH_BANNER, WILLIES_BANNER, AQUES_BANNER, ESPI_BANNER],
  55: [WINSCHOOL_BANNER, LIFETECH_BANNER, SKILLHACKS_BANNER],
  56: [GIFTS_BANNER],
  57: [INFRAAI_BANNER, VIRTUALOFFICE1_BANNER],
  59: [FXTF_BANNER, DMMFX_BANNER, GAIATE_BANNER, FXBROAD_BANNER],
  // クレカ: 申請承認後に TODO_xxx を実URLに差し替え
  60: [SMBC_CARD_BANNER, JCB_CARD_BANNER, DCARD_GOLD_BANNER, EPOS_CARD_BANNER, LIFECARD_BANNER],
  61: [TECHGO_BANNER, TWINPRO_BANNER, TAMESY_BANNER, MABEGINNERS_BANNER, HRCAGENT_BANNER, CIRCUS_BANNER, OISHIRU_BANNER, IDA_BANNER, TECHCLIPS_BANNER, MASSMEDIAAN_BANNER, KARRICON_BANNER, MIRAIFU_BANNER],
  62: [MCNURSENET_BANNER, MCCAREGIVING_BANNER],
  63: [ATGP_BANNER],
  64: [ENKIRO_BANNER, UCARPAC_BANNER, CTN_KAITORI_BANNER, YUNYUSHA_KAITORI_BANNER, HAISHAL_BANNER, KENKIKAITORIYA_BANNER],
  65: [ETC_KUMIAI_MANGA_BANNER, GASOLINE_CARD_BANNER, FASIO_BANNER, ETC_SPEED_BANNER, ETC_GASOLINE_MANGA2_BANNER],
  66: [MONEYFORWARD_BANNER, FREEE_BANNER, YAYOI_BANNER],
  67: [GOENMOBILE_BANNER, DAREDEMO_WIFI_BANNER, LYPRIMO_BANNER, SMARTPHONE_PREPAID_BANNER],
  68: [VISA_GIFT_BANNER, KINKEN_NET_BANNER, SMARTPHONE_PREPAID_BANNER],
};

// ─── 記事固有バナー（レビュー記事はその製品を優先表示）──────
export const POST_BANNERS: Record<number, BannerConfig[]> = {
  // ── VPN ──────────────────────────────────────────────────────
  189: [...NORDVPN_BANNERS, ...SURFSHARK_BANNERS, MILLENVPN_BANNER, EXPRESSVPN_BANNER],
  335: [...NORDVPN_BANNERS, ...SURFSHARK_BANNERS, MILLENVPN_BANNER, EXPRESSVPN_BANNER],
  337: [...NORDVPN_BANNERS, ...SURFSHARK_BANNERS, MILLENVPN_BANNER],
  340: [...NORDVPN_BANNERS, ...SURFSHARK_BANNERS],
  341: [...NORDVPN_BANNERS, ...SURFSHARK_BANNERS],
  342: [...NORDVPN_BANNERS, EXPRESSVPN_BANNER],
  343: [...NORDVPN_BANNERS, ...SURFSHARK_BANNERS],
  205: NORDVPN_BANNERS,
  206: SURFSHARK_BANNERS,
  261: [MILLENVPN_BANNER],
  339: [EXPRESSVPN_BANNER],
  338: [],  // Rakulink: バナー画像なし
  756: [...NORDVPN_BANNERS, EXPRESSVPN_BANNER],
  757: [...NORDVPN_BANNERS, ...SURFSHARK_BANNERS],
  710: [...NORDVPN_BANNERS, ...SURFSHARK_BANNERS, MILLENVPN_BANNER, EXPRESSVPN_BANNER, SUIKAVPN_BANNER, SEKAIVPN_BANNER],
  711: [...NORDVPN_BANNERS, ...SURFSHARK_BANNERS, MILLENVPN_BANNER],
  566: [...NORDVPN_BANNERS, ...SURFSHARK_BANNERS, MILLENVPN_BANNER, SUIKAVPN_BANNER, SEKAIVPN_BANNER],
  569: [...NORDVPN_BANNERS, MILLENVPN_BANNER, EXPRESSVPN_BANNER],
  578: [...NORDVPN_BANNERS, ...SURFSHARK_BANNERS, MILLENVPN_BANNER],
  579: [...NORDVPN_BANNERS, ...SURFSHARK_BANNERS, EXPRESSVPN_BANNER],
  580: [SUIKAVPN_BANNER, ...NORDVPN_BANNERS, ...SURFSHARK_BANNERS, MILLENVPN_BANNER],
  581: [SEKAIVPN_BANNER, ...NORDVPN_BANNERS, ...SURFSHARK_BANNERS, MILLENVPN_BANNER],
  582: [SURFSHARK_ANTIVIRUS_BANNER, ...SURFSHARK_BANNERS, ...NORDVPN_BANNERS],
  972: [SURFSHARK_ANTIVIRUS_BANNER, ...SURFSHARK_BANNERS, ...NORDVPN_BANNERS],

  // ── Server ───────────────────────────────────────────────────
  210: [XSERVER_BANNER, CONOHA_BANNER, ...KINSTA_BANNERS.filter(b => b.width <= 300)],
  211: [XSERVER_BANNER, CONOHA_BANNER],
  296: [XSERVER_BANNER, CONOHA_BANNER],
  297: [XSERVER_BANNER, CONOHA_BANNER],
  209: [XSERVER_BANNER],
  259: [CONOHA_BANNER],
  295: KINSTA_BANNERS.filter(b => b.width <= 300),
  713: [XSERVER_BANNER, CONOHA_BANNER, ...KINSTA_BANNERS.filter(b => b.width <= 300)],
  550: [XSERVER_BANNER, CONOHA_BANNER],
  551: [XSERVER_BANNER, CONOHA_BANNER],
  553: [CONOHA_BANNER, XSERVER_BANNER],
  554: [XSERVER_BANNER, CONOHA_BANNER],
  555: [CONOHA_BANNER, XSERVER_BANNER],
  556: [XSERVER_BANNER, CONOHA_BANNER],
  557: [XSERVER_BANNER],
  558: [XSERVER_BANNER],
  559: [XSERVER_BANNER, CONOHA_BANNER],
  560: [XSERVER_BANNER, CONOHA_BANNER],
  564: [XSERVER_BANNER, CONOHA_BANNER],
  576: [XSERVER_BANNER, CONOHA_BANNER],
  577: [XSERVER_BANNER, CONOHA_BANNER, ...KINSTA_BANNERS.filter(b => b.width <= 300)],
  590: [CONOHA_BANNER, XSERVER_BANNER],
  591: [CONOHA_BANNER, XSERVER_BANNER],
  592: [XSERVER_BANNER, CONOHA_BANNER],
  593: [XSERVER_BANNER, CONOHA_BANNER],

  // ── English ──────────────────────────────────────────────────
  285: [BESTTEACHER_BANNER, GSA_BANNER, NOVA_BANNER, LANCUL_BANNER, BIZMATES_BANNER, WORLDIKIDS_BANNER],
  390: [BESTTEACHER_BANNER, GSA_BANNER],
  391: [GSA_BANNER, WORLDIKIDS_BANNER],
  367: [BESTTEACHER_BANNER],
  369: [],  // ティントル: バナー画像なし
  385: [GSA_BANNER],
  388: [],  // ECC: バナー画像なし（承認後差し替え）
  389: [NOVA_BANNER],
  392: [LANCUL_BANNER],
  393: [BIZMATES_BANNER],
  394: [WORLDIKIDS_BANNER],
  573: [BESTTEACHER_BANNER, GSA_BANNER, NOVA_BANNER, LANCUL_BANNER, BIZMATES_BANNER, EIGOX_BANNER],
  976: [BESTTEACHER_BANNER, GSA_BANNER, NOVA_BANNER, LANCUL_BANNER],
  978: [BESTTEACHER_BANNER, BIZMATES_BANNER, AQUES_BANNER],

  // ── School ───────────────────────────────────────────────────
  287: [WINSCHOOL_BANNER, LIFETECH_BANNER],
  375: [WINSCHOOL_BANNER, LIFETECH_BANNER],
  376: [LIFETECH_BANNER, WINSCHOOL_BANNER],
  371: [LIFETECH_BANNER],
  373: [WINSCHOOL_BANNER],
  374: [],  // インターノウス: バナー画像なし
  563: [WINSCHOOL_BANNER, LIFETECH_BANNER, SKILLHACKS_BANNER],
  567: [WINSCHOOL_BANNER, LIFETECH_BANNER, SKILLHACKS_BANNER],
  574: [WINSCHOOL_BANNER, SKILLHACKS_BANNER],
  979: [WINSCHOOL_BANNER, LIFETECH_BANNER, SKILLHACKS_BANNER],
  981: [WINSCHOOL_BANNER, LIFETECH_BANNER, SKILLHACKS_BANNER],

  // ── Career ───────────────────────────────────────────────────
  290: [GIFTS_BANNER],
  291: [TECHGO_BANNER, TECHCLIPS_BANNER, MASSMEDIAAN_BANNER],  // テックゴー個別記事
  575: [TECHGO_BANNER, TECHCLIPS_BANNER, MASSMEDIAAN_BANNER],  // it-career-techgo-review-2026
  292: [],  // ウズウズカレッジ個別記事
  293: [],  // 社内SE転職ナビ個別記事
  294: [GIFTS_BANNER],
  289: [GIFTS_BANNER],
  562: [TECHCLIPS_BANNER, TECHGO_BANNER, MASSMEDIAAN_BANNER, GIFTS_BANNER],
  565: [TECHCLIPS_BANNER, TECHGO_BANNER, MASSMEDIAAN_BANNER],
  571: [TECHCLIPS_BANNER, GIFTS_BANNER, MASSMEDIAAN_BANNER],
  759: [TECHCLIPS_BANNER, GIFTS_BANNER, MASSMEDIAAN_BANNER],

  // ── Fukugyo ──────────────────────────────────────────────────
  601: [INFRAAI_BANNER],
  603: [INFRAAI_BANNER],
  604: [INFRAAI_BANNER],
  600: [],
  602: [INFRAAI_BANNER],
  568: [INFRAAI_BANNER, SKILLHACKS_BANNER, VIRTUALOFFICE1_BANNER],
  570: [INFRAAI_BANNER, VIRTUALOFFICE1_BANNER],
  605: [INFRAAI_BANNER, VIRTUALOFFICE1_BANNER],

  // ── FX ───────────────────────────────────────────────────────
  700: [FXTF_BANNER, DMMFX_BANNER, GAIATE_BANNER, FXBROAD_BANNER],
  705: [FXTF_BANNER, DMMFX_BANNER, GAIATE_BANNER],
  706: [FXTF_BANNER, DMMFX_BANNER, GAIATE_BANNER, FXBROAD_BANNER],
  701: [DMMFX_BANNER],
  702: [GAIATE_BANNER],
  703: [FXBROAD_BANNER],
  704: [],  // ひまわり証券
  707: [FXBROAD_BANNER],
  754: [DMMFX_BANNER],
  755: [DMMFX_BANNER],
  552: [FXTF_BANNER, DMMFX_BANNER, FXBROAD_BANNER],
  561: [FXTF_BANNER, DMMFX_BANNER, GAIATE_BANNER, FXBROAD_BANNER],
  714: [DMMFX_BANNER, FXTF_BANNER, GAIATE_BANNER, FXBROAD_BANNER],
  750: [GAIATE_BANNER, DMMFX_BANNER, FXTF_BANNER, FXBROAD_BANNER],
  751: [DMMFX_BANNER, GAIATE_BANNER, FXTF_BANNER],
  752: [FXTF_BANNER, DMMFX_BANNER],
  753: [DMMFX_BANNER, FXTF_BANNER, GAIATE_BANNER],

  // ── eSIM Airalo ──────────────────────────────────────────────
  572: [AIRALO_JP_PHUKET_300x250, AIRALO_JP_PHUKET_300x600, AIRALO_EN_GENERIC_320x1360], // esim-airalo-review-2026
  715: [AIRALO_JP_PHUKET_300x250, AIRALO_JP_PHUKET_300x600, AIRALO_EN_GENERIC_320x1360], // airalo-esim-kuchikomi-review-2026
  712: [AIRALO_JP_PHUKET_300x250, AIRALO_JP_PHUKET_300x600, SAILY_BANNER],
  716: [AIRALO_JP_PHUKET_300x250, SAILY_BANNER, AIRALO_EN_GENERIC_320x1360],
  717: [AIRALO_JP_PHUKET_300x250, SAILY_BANNER],
  971: [SAILY_BANNER, AIRALO_JP_PHUKET_300x250],
  975: [AIRALO_JP_PHUKET_300x250, SAILY_BANNER],
  977: [],  // Rakulink eSIM: バナーなし
  980: [AIRALO_JP_PHUKET_300x250, SAILY_BANNER],

  // ── 仮想通貨 ─────────────────────────────────────────────────
  758: [],

  // ── クレジットカード ──────────────────────────────────────────
  800: [SMBC_CARD_BANNER, JCB_CARD_BANNER, DCARD_GOLD_BANNER, EPOS_CARD_BANNER],
  801: [],
  802: [SMBC_CARD_BANNER],
  803: [JCB_CARD_BANNER],
  804: [DCARD_GOLD_BANNER],
  805: [SMBC_CARD_BANNER, JCB_CARD_BANNER, EPOS_CARD_BANNER, LIFECARD_BANNER],
  806: [EPOS_CARD_BANNER, LIFECARD_BANNER],
  807: [SMBC_CARD_BANNER, JCB_CARD_BANNER, DCARD_GOLD_BANNER],
  808: [EPOS_CARD_BANNER],
  809: [SMBC_CARD_BANNER, DCARD_GOLD_BANNER],

  // ── 転職/派遣/就活/車買取 ─────────────────────────────────────
  900: [TECHGO_BANNER, TWINPRO_BANNER, MABEGINNERS_BANNER, HRCAGENT_BANNER, CIRCUS_BANNER, OISHIRU_BANNER, IDA_BANNER, TECHCLIPS_BANNER, MASSMEDIAAN_BANNER, MIRAIFU_BANNER],
  983: [TECHCLIPS_BANNER, TECHGO_BANNER, MASSMEDIAAN_BANNER, KARRICON_BANNER],
  984: [MASSMEDIAAN_BANNER, TECHCLIPS_BANNER, TECHGO_BANNER],
  985: [KARRICON_BANNER, MIRAIFU_BANNER, CIRCUS_BANNER, TAMESY_BANNER],
  910: [],
  1009: [MCNURSENET_BANNER],             // MCナースネット（看護師派遣）
  1010: [MCCAREGIVING_BANNER, MCNURSENET_BANNER],  // MC介護のお仕事
  974: [MCNURSENET_BANNER, MCCAREGIVING_BANNER],
  920: [ATGP_BANNER],
  1011: [ATGP_BANNER],                   // atGP就活エージェント
  1012: [MIRAIFU_BANNER, CIRCUS_BANNER, KARRICON_BANNER],  // ミライフ転職エージェント
  1013: [ESPI_BANNER, BESTTEACHER_BANNER, AQUES_BANNER],  // eスポーツ英会話eスピ！
  1014: [GOENMOBILE_BANNER, DAREDEMO_WIFI_BANNER, LYPRIMO_BANNER, SMARTPHONE_PREPAID_BANNER],  // 格安SIM乗り換えガイド
  1015: [DAREDEMO_WIFI_BANNER, GOENMOBILE_BANNER, LYPRIMO_BANNER, SMARTPHONE_PREPAID_BANNER],  // ポケットWiFivs格安SIM
  1016: [LYPRIMO_BANNER, GOENMOBILE_BANNER, DAREDEMO_WIFI_BANNER, SMARTPHONE_PREPAID_BANNER],  // SIMフリー設定ガイド
  930: [ENKIRO_BANNER, UCARPAC_BANNER, CTN_KAITORI_BANNER, YUNYUSHA_KAITORI_BANNER, HAISHAL_BANNER],
  987: [UCARPAC_BANNER, CTN_KAITORI_BANNER, ENKIRO_BANNER, HAISHAL_BANNER],
  988: [CTN_KAITORI_BANNER, UCARPAC_BANNER, YUNYUSHA_KAITORI_BANNER],
  989: [YUNYUSHA_KAITORI_BANNER, UCARPAC_BANNER, CTN_KAITORI_BANNER],
  990: [HAISHAL_BANNER, UCARPAC_BANNER, CTN_KAITORI_BANNER],

  // ── 法人カード/ETC ───────────────────────────────────────────
  940: [ETC_KUMIAI_MANGA_BANNER, GASOLINE_CARD_BANNER, FASIO_BANNER, ETC_SPEED_BANNER, ETC_GASOLINE_MANGA2_BANNER],

  // ── 会計・確定申告 ────────────────────────────────────────────
  950: [MONEYFORWARD_BANNER, FREEE_BANNER, YAYOI_BANNER],

  // ── WiFi・SIM ────────────────────────────────────────────────
  960: [GOENMOBILE_BANNER, DAREDEMO_WIFI_BANNER, LYPRIMO_BANNER, SMARTPHONE_PREPAID_BANNER],

  // ── ギフトカード ──────────────────────────────────────────────
  970: [VISA_GIFT_BANNER, KINKEN_NET_BANNER, SMARTPHONE_PREPAID_BANNER],

  // ── WiFi・SIM 個別レビュー ────────────────────────────────────
  991: [GOENMOBILE_BANNER, DAREDEMO_WIFI_BANNER, LYPRIMO_BANNER, SMARTPHONE_PREPAID_BANNER],
  992: [DAREDEMO_WIFI_BANNER, GOENMOBILE_BANNER, LYPRIMO_BANNER],
  993: [LYPRIMO_BANNER, GOENMOBILE_BANNER, DAREDEMO_WIFI_BANNER],
  994: [SMARTPHONE_PREPAID_BANNER, GOENMOBILE_BANNER, LYPRIMO_BANNER],

  // ── 会計 個別レビュー ─────────────────────────────────────────
  995: [FREEE_BANNER, MONEYFORWARD_BANNER, YAYOI_BANNER],
  996: [YAYOI_BANNER, MONEYFORWARD_BANNER, FREEE_BANNER],
  973: [YAYOI_BANNER, MONEYFORWARD_BANNER, FREEE_BANNER],
  982: [MONEYFORWARD_BANNER, FREEE_BANNER, YAYOI_BANNER],

  // ── 転職 個別レビュー ─────────────────────────────────────────
  997: [CIRCUS_BANNER, OISHIRU_BANNER, MIRAIFU_BANNER, KARRICON_BANNER],
  998: [IDA_BANNER, CIRCUS_BANNER, MIRAIFU_BANNER],
  999: [OISHIRU_BANNER, CIRCUS_BANNER, MIRAIFU_BANNER],
  1000: [GIFTS_BANNER, CIRCUS_BANNER, MIRAIFU_BANNER],
  1001: [KARRICON_BANNER, MIRAIFU_BANNER, CIRCUS_BANNER],

  // ── 車買取 個別レビュー ───────────────────────────────────────
  1002: [ENKIRO_BANNER, UCARPAC_BANNER, CTN_KAITORI_BANNER],
  1003: [KENKIKAITORIYA_BANNER, UCARPAC_BANNER, CTN_KAITORI_BANNER],

  // ── 法人カード/ETC 個別レビュー ──────────────────────────────
  1004: [ETC_KUMIAI_MANGA_BANNER, ETC_SPEED_BANNER, GASOLINE_CARD_BANNER, FASIO_BANNER],
  1005: [FASIO_BANNER, ETC_KUMIAI_MANGA_BANNER, GASOLINE_CARD_BANNER],
  1006: [GASOLINE_CARD_BANNER, ETC_KUMIAI_MANGA_BANNER, FASIO_BANNER],

  // ── ギフトカード 個別レビュー ─────────────────────────────────
  1007: [VISA_GIFT_BANNER, KINKEN_NET_BANNER],
  1008: [KINKEN_NET_BANNER, VISA_GIFT_BANNER],
};

export function getBannersForArticle(postId: number, categoryIds: number[]): BannerConfig[] {
  const filter = (banners: BannerConfig[]) => banners.filter(b => !b.url.includes("TODO"));
  if (postId in POST_BANNERS) {
    return filter(POST_BANNERS[postId]);
  }
  for (const categoryId of categoryIds) {
    if (CATEGORY_BANNERS[categoryId]?.length) {
      return filter(CATEGORY_BANNERS[categoryId]);
    }
  }
  return [];
}
