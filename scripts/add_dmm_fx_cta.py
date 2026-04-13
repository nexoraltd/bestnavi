#!/usr/bin/env python3
"""
TCS DMM FX 提携承認後:
1. FX記事(ID 523)にDMM FX CTAボタンを挿入
2. DMM FX専用レビュー記事を新規投稿

使い方:
  1. TCS管理画面で DMM FX の広告リンクを取得
  2. 以下の TCS_DMM_FX_URL を差し替え
  3. python scripts/add_dmm_fx_cta.py
"""
import sys
import requests
from requests.auth import HTTPBasicAuth

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

WP_BASE = "https://navi.next-aura.com/wp-json/wp/v2"
AUTH = HTTPBasicAuth("nexora", "S3Zl 0QAd nqf4 mZja mWOp mJls")

# ==========================================
# ↓↓↓ TCS管理画面から取得したリンクに差し替え ↓↓↓
# ==========================================
TCS_DMM_FX_URL = "https://www.tcs-asp.net/PLACEHOLDER_DMM_FX"
# ==========================================

SISTER = """<!-- bestnavi-sister-sites-block -->
<div class="blank-box bb-blue" style="margin-top:40px;">
<p><strong>Related Sites</strong></p>
<p><a href="https://market.next-aura.com/" target="_blank" rel="noopener">不動産相場ナビ</a> | <a href="https://note.com/mi_autolab" target="_blank" rel="noopener">Claude Code副業自動化 note</a></p>
</div>
<!-- /bestnavi-sister-sites-block -->"""


def add_cta_to_fx_article():
    """FX記事(ID 523)にDMM FX CTAを追加"""
    print("=" * 50)
    print("STEP 1: FX記事(ID 523)にDMM FX CTA挿入")
    print("=" * 50)

    r = requests.get(f"{WP_BASE}/posts/523?context=edit", auth=AUTH, timeout=15)
    if r.status_code != 200:
        print(f"  GET失敗: {r.status_code}")
        return
    d = r.json()
    raw = d["content"]["raw"]
    title = d["title"]["raw"]
    print(f"  記事: {title}")

    if "tcs-dmm-fx-cta" in raw:
        print("  既にCTA挿入済み。スキップ")
        return

    # DMM FXセクションの後にCTAを追加
    cta = f"""
<!-- tcs-dmm-fx-cta -->
<div style="margin: 30px 0; padding: 25px; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border-radius: 12px; text-align: center; border: 2px solid #0f3460;">
<p style="color: #e94560; font-size: 1.3em; font-weight: bold; margin-bottom: 5px;">DMM FX</p>
<p style="color: rgba(255,255,255,0.9); font-size: 0.95em; margin-bottom: 15px;">業界最狭水準スプレッド｜最短30分で口座開設｜取引手数料無料</p>
<a href="{TCS_DMM_FX_URL}" target="_blank" rel="noopener sponsored" style="display: inline-block; background: linear-gradient(135deg, #e94560, #c23152); color: #fff; padding: 16px 45px; border-radius: 8px; font-weight: bold; text-decoration: none; font-size: 1.1em; box-shadow: 0 4px 15px rgba(233,69,96,0.3);">無料で口座開設する →</a>
<p style="color: rgba(255,255,255,0.5); font-size: 0.75em; margin-top: 10px;">※最短5分で申込完了。口座開設・維持費無料</p>
</div>
<!-- /tcs-dmm-fx-cta -->
"""

    # DMM FXの「こんな方向け」の後に挿入
    insert_marker = "こんな方向け</strong>: 低スプレッドで頻繁に取引したい方、サポート重視の方</li>\n</ul>"
    if insert_marker in raw:
        raw = raw.replace(insert_marker, insert_marker + "\n" + cta)
        print("  DMM FXセクション直後にCTA挿入")
    else:
        # フォールバック: h3の2位セクション前に挿入
        if "<h3>2." in raw:
            raw = raw.replace("<h3>2.", cta + "\n<h3>2.")
            print("  2位セクション前にCTA挿入")
        else:
            print("  挿入位置が見つからない。記事末尾にCTA追加")
            if "bestnavi-sister-sites-block" in raw:
                raw = raw.replace("<!-- bestnavi-sister-sites-block -->", cta + "\n<!-- bestnavi-sister-sites-block -->")
            else:
                raw = raw.rstrip() + "\n" + cta

    r2 = requests.post(
        f"{WP_BASE}/posts/523",
        auth=AUTH,
        json={"content": raw},
        timeout=60,
    )
    if r2.status_code == 200:
        print(f"  記事更新完了: https://navi.next-aura.com/?p=523")
    else:
        print(f"  更新失敗: {r2.status_code} {r2.text[:200]}")


def create_dmm_fx_review():
    """DMM FX専用レビュー記事を新規作成"""
    print()
    print("=" * 50)
    print("STEP 2: DMM FX専用レビュー記事を新規投稿")
    print("=" * 50)

    content = f"""<p>DMM FXは、DMM.com証券が運営する国内最大級のFXサービスです。業界最狭水準のスプレッドと直感的な取引ツールで、初心者からデイトレーダーまで幅広く支持されています。この記事では、DMM FXの特徴・メリット・デメリット・口座開設の手順を徹底解説します。</p>

<!-- tcs-dmm-fx-cta-top -->
<div style="margin: 30px 0; padding: 25px; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border-radius: 12px; text-align: center; border: 2px solid #0f3460;">
<p style="color: #e94560; font-size: 1.3em; font-weight: bold; margin-bottom: 5px;">DMM FX 口座開設（無料）</p>
<p style="color: rgba(255,255,255,0.9); font-size: 0.95em; margin-bottom: 15px;">最短30分で取引スタート｜業界最狭水準スプレッド｜取引手数料0円</p>
<a href="{TCS_DMM_FX_URL}" target="_blank" rel="noopener sponsored" style="display: inline-block; background: linear-gradient(135deg, #e94560, #c23152); color: #fff; padding: 16px 45px; border-radius: 8px; font-weight: bold; text-decoration: none; font-size: 1.1em; box-shadow: 0 4px 15px rgba(233,69,96,0.3);">今すぐ無料で口座開設 →</a>
<p style="color: rgba(255,255,255,0.5); font-size: 0.75em; margin-top: 10px;">※口座開設・口座維持費 完全無料</p>
</div>
<!-- /tcs-dmm-fx-cta-top -->

<h2>DMM FXの基本情報</h2>
<table style="width:100%;border-collapse:collapse;margin:20px 0;">
<thead><tr style="background:#1a1a2e;color:white;"><th style="padding:12px;text-align:left;">項目</th><th style="padding:12px;text-align:left;">内容</th></tr></thead>
<tbody>
<tr><td style="padding:10px;border-bottom:1px solid #eee;"><strong>運営会社</strong></td><td style="padding:10px;border-bottom:1px solid #eee;">株式会社DMM.com証券（金融庁登録）</td></tr>
<tr style="background:#fafafa;"><td style="padding:10px;border-bottom:1px solid #eee;"><strong>USD/JPYスプレッド</strong></td><td style="padding:10px;border-bottom:1px solid #eee;">0.2銭（原則固定）</td></tr>
<tr><td style="padding:10px;border-bottom:1px solid #eee;"><strong>通貨ペア数</strong></td><td style="padding:10px;border-bottom:1px solid #eee;">21通貨ペア</td></tr>
<tr style="background:#fafafa;"><td style="padding:10px;border-bottom:1px solid #eee;"><strong>最小取引単位</strong></td><td style="padding:10px;border-bottom:1px solid #eee;">1,000通貨（ミニ）/ 10,000通貨（ラージ）</td></tr>
<tr><td style="padding:10px;border-bottom:1px solid #eee;"><strong>取引手数料</strong></td><td style="padding:10px;border-bottom:1px solid #eee;">無料</td></tr>
<tr style="background:#fafafa;"><td style="padding:10px;border-bottom:1px solid #eee;"><strong>口座開設費・維持費</strong></td><td style="padding:10px;border-bottom:1px solid #eee;">無料</td></tr>
<tr><td style="padding:10px;border-bottom:1px solid #eee;"><strong>入出金手数料</strong></td><td style="padding:10px;border-bottom:1px solid #eee;">クイック入金：無料</td></tr>
<tr style="background:#fafafa;"><td style="padding:10px;border-bottom:1px solid #eee;"><strong>サポート</strong></td><td style="padding:10px;border-bottom:1px solid #eee;">24時間対応（LINE・電話・メール）</td></tr>
<tr><td style="padding:10px;"><strong>デモ取引</strong></td><td style="padding:10px;">あり（3ヶ月間・500万円の仮想資金）</td></tr>
</tbody>
</table>

<h2>DMM FXのメリット5つ</h2>

<h3>1. 業界最狭水準のスプレッド</h3>
<p>DMM FXのドル円スプレッドは0.2銭（原則固定）。業界トップクラスの低コストで、特にデイトレードやスキャルピングなど取引頻度の高いスタイルに適しています。取引手数料も完全無料なので、コストを最小限に抑えられます。</p>

<h3>2. 高性能な取引ツール</h3>
<p>PC用の「DMM FX PLUS」とスマホアプリの両方が用意されており、どちらも直感的で使いやすい設計です。ワンタッチ発注、29種類のテクニカル指標、カスタマイズ可能なチャートレイアウトなど、初心者でも使いこなせる高機能ツールが揃っています。</p>

<h3>3. 取引するほどお得なポイント制度</h3>
<p>新規取引1ロットごとにポイントが付与され、貯まったポイントは現金に交換できます。取引を重ねるほど実質的なキャッシュバックになるため、アクティブトレーダーほどお得です。</p>

<h3>4. 24時間対応の充実サポート</h3>
<p>電話・メールに加え、LINEでの問い合わせにも対応。FX初心者でも疑問をすぐに解決できる体制が整っています。国内FX業者の中でも特にサポート体制が充実しています。</p>

<h3>5. 最短30分で口座開設・取引開始</h3>
<p>スマホで本人確認書類を撮影するだけで、最短30分で審査完了。即日取引を開始できます。面倒な書類の郵送は不要です。</p>

<h2>DMM FXのデメリット・注意点</h2>

<h3>1. 最小取引単位は1,000通貨</h3>
<p>SBI FXトレード（1通貨〜）や松井証券（1通貨〜）と比べると、最小ロットがやや大きめです。ドル円の場合、1,000通貨で約6,000円の証拠金が必要になります。</p>

<h3>2. 通貨ペア数は21種類</h3>
<p>ヒロセ通商（54種類）やLIGHT FX（46種類）と比べると少なめです。ただし主要通貨ペアは全てカバーしており、初心者〜中級者には十分な品揃えです。</p>

<h3>3. スキャルピングに関する注意</h3>
<p>極端に短時間での大量注文は制限される場合があります。一般的なデイトレードには問題ありませんが、高頻度のスキャルピングを主体とする場合は注意が必要です。</p>

<h2>DMM FXはこんな人におすすめ</h2>
<ul>
<li>FXをこれから始める初心者（サポート充実・ツールが使いやすい）</li>
<li>取引コストを最小限にしたいデイトレーダー（業界最狭スプレッド）</li>
<li>スマホメインで取引したい人（アプリの完成度が高い）</li>
<li>安心・安全な国内大手で取引したい人（金融庁登録・DMM.comグループ）</li>
</ul>

<h2>口座開設の手順（最短5分で申込完了）</h2>
<ol>
<li><strong>公式サイトで申込フォームを入力</strong>（氏名・住所・投資経験など）</li>
<li><strong>本人確認書類をアップロード</strong>（運転免許証 or マイナンバーカード）</li>
<li><strong>審査完了</strong>（最短30分）</li>
<li><strong>入金して取引開始</strong>（クイック入金なら即反映）</li>
</ol>

<!-- tcs-dmm-fx-cta-bottom -->
<div style="margin: 30px 0; padding: 25px; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border-radius: 12px; text-align: center; border: 2px solid #0f3460;">
<p style="color: #e94560; font-size: 1.3em; font-weight: bold; margin-bottom: 5px;">DMM FX 口座開設（無料）</p>
<p style="color: rgba(255,255,255,0.9); font-size: 0.95em; margin-bottom: 15px;">最短30分で取引スタート｜新規キャッシュバックキャンペーン実施中</p>
<a href="{TCS_DMM_FX_URL}" target="_blank" rel="noopener sponsored" style="display: inline-block; background: linear-gradient(135deg, #e94560, #c23152); color: #fff; padding: 16px 45px; border-radius: 8px; font-weight: bold; text-decoration: none; font-size: 1.1em; box-shadow: 0 4px 15px rgba(233,69,96,0.3);">今すぐ無料で口座開設 →</a>
<p style="color: rgba(255,255,255,0.5); font-size: 0.75em; margin-top: 10px;">※口座開設・口座維持費 完全無料。最短5分で申込完了</p>
</div>
<!-- /tcs-dmm-fx-cta-bottom -->

<h2>よくある質問（FAQ）</h2>
<dl>
<dt><strong>Q. DMM FXの口座開設に費用はかかりますか？</strong></dt>
<dd>A. 口座開設費・口座維持費ともに完全無料です。取引手数料も無料なので、スプレッド以外のコストはかかりません。</dd>

<dt><strong>Q. 初心者でも使いこなせますか？</strong></dt>
<dd>A. はい。取引ツールは直感的に操作でき、24時間LINEサポートも利用可能です。デモ取引で練習してから本番に移行することもできます。</dd>

<dt><strong>Q. 最低いくらから始められますか？</strong></dt>
<dd>A. ドル円の場合、1,000通貨（最小ロット）で約6,000円の証拠金から取引可能です。</dd>

<dt><strong>Q. スマホだけで取引できますか？</strong></dt>
<dd>A. はい。口座開設からトレードまで、全てスマホアプリで完結します。</dd>
</dl>

<h2>まとめ</h2>
<p>DMM FXは、低コスト・高機能ツール・充実サポートの三拍子が揃った、初心者からアクティブトレーダーまでおすすめできるFX口座です。口座開設は無料で最短5分で申込完了するので、まずは口座を作ってデモ取引から始めてみましょう。</p>

{SISTER}"""

    # カテゴリ取得
    r = requests.get(f"{WP_BASE}/categories?per_page=100", auth=AUTH, timeout=15)
    cats = {c["name"]: c["id"] for c in r.json()}
    fx_cat = cats.get("投資・金融", cats.get("未分類", 1))
    print(f"  カテゴリ: 投資・金融 (ID={fx_cat})")

    r2 = requests.post(f"{WP_BASE}/posts", auth=AUTH, json={
        "title": "【2026年最新】DMM FX 徹底レビュー｜評判・メリット・口座開設手順を完全解説",
        "slug": "dmm-fx-review-2026",
        "content": content,
        "status": "publish",
        "categories": [fx_cat],
    }, timeout=60)

    if r2.status_code == 201:
        post_id = r2.json()["id"]
        link = r2.json()["link"]
        print(f"  記事投稿成功: ID={post_id}")
        print(f"  URL: {link}")
        return post_id
    else:
        print(f"  投稿失敗: {r2.status_code} {r2.text[:300]}")
        return None


def main():
    if "PLACEHOLDER" in TCS_DMM_FX_URL:
        print("=" * 50)
        print("WARNING: TCS_DMM_FX_URL がプレースホルダーのままです。")
        print("TCS管理画面で DMM FX のリンクを取得し、このスクリプトの URL を更新してから再実行してください。")
        print("=" * 50)
        print()
        print("プレースホルダーのまま記事を投稿します（後でリンク差し替え可能）")
        print()

    add_cta_to_fx_article()
    new_id = create_dmm_fx_review()

    print()
    print("=" * 50)
    print("完了サマリー")
    print("=" * 50)
    if "PLACEHOLDER" in TCS_DMM_FX_URL:
        print("  [要対応] TCS管理画面でDMM FXの広告リンクを取得し、")
        print("  このスクリプトのTCS_DMM_FX_URLを更新して再実行してください。")
        print("  → 既に投稿済みの記事のリンクが自動的に更新されます。")


if __name__ == "__main__":
    main()
