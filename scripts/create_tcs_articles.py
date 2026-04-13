#!/usr/bin/env python3
"""新規記事2本を下書きで作成（仮想通貨取引所ランキング・FX口座ランキング）"""
import os, sys, requests
from requests.auth import HTTPBasicAuth
from pathlib import Path

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

BASE_DIR = Path(__file__).parent.parent
for line in (BASE_DIR / ".env").read_text(encoding="utf-8").splitlines():
    if "=" in line and not line.strip().startswith("#"):
        k, v = line.strip().split("=", 1)
        os.environ.setdefault(k, v)

AUTH = HTTPBasicAuth(os.environ["WP_USER"], os.environ["WP_APP_PASSWORD"])
WP = os.environ["WP_URL"]

SISTER = """<!-- bestnavi-sister-sites-block -->
<div class="blank-box bb-blue" style="margin-top:40px;">
<p><strong>Related Sites</strong></p>
<p><a href="https://market.next-aura.com/" target="_blank" rel="noopener">不動産相場ナビ</a> | <a href="https://note.com/mi_autolab" target="_blank" rel="noopener">Claude Code副業自動化 note</a></p>
</div>
<!-- /bestnavi-sister-sites-block -->"""

# カテゴリ取得/作成
r = requests.get(f"{WP}/wp-json/wp/v2/categories?per_page=100", auth=AUTH, timeout=15)
cats = {c["name"]: c["id"] for c in r.json()}
if "投資・金融" not in cats:
    r = requests.post(f"{WP}/wp-json/wp/v2/categories", auth=AUTH, json={"name": "投資・金融", "slug": "investment-finance"}, timeout=15)
    if r.status_code == 201:
        cats["投資・金融"] = r.json()["id"]
crypto_cat = cats.get("仮想通貨", cats.get("未分類", 1))
fx_cat = cats.get("投資・金融", cats.get("未分類", 1))
print(f"crypto_cat={crypto_cat}, fx_cat={fx_cat}")

# 記事1
body1 = '<p>仮想通貨取引所を手数料・セキュリティ・使いやすさで徹底比較。</p>'
body1 += '<h2>仮想通貨取引所おすすめランキング</h2>'
body1 += '<table style="width:100%;border-collapse:collapse;margin:20px 0;"><thead><tr style="background:#1a237e;color:white;"><th style="padding:12px;">順位</th><th>取引所</th><th>取扱通貨</th><th>手数料</th><th>最低額</th></tr></thead><tbody>'
body1 += '<tr style="background:#fff8e1;"><td style="padding:12px;font-weight:bold;">1位</td><td><strong>Coincheck</strong></td><td>30+</td><td>無料</td><td>500円</td></tr>'
body1 += '<tr><td style="padding:12px;">2位</td><td><strong>GMOコイン</strong></td><td>26</td><td>Maker -0.01%</td><td>数十円</td></tr>'
body1 += '<tr style="background:#fafafa;"><td style="padding:12px;">3位</td><td><strong>bitFlyer</strong></td><td>33</td><td>無料(販売所)</td><td>1円</td></tr>'
body1 += '<tr><td style="padding:12px;">4位</td><td>SBI VCトレード</td><td>24</td><td>無料</td><td>500円</td></tr>'
body1 += '<tr style="background:#fafafa;"><td style="padding:12px;">5位</td><td>bitbank</td><td>40+</td><td>Maker -0.02%</td><td>数百円</td></tr>'
body1 += '</tbody></table>'
body1 += '<h2>1位: Coincheck</h2><p>アプリDL数No.1。500円から投資可能、取引手数料無料。初心者に最適。</p>'
body1 += '<div style="margin:25px 0;padding:20px;background:#1a237e;border-radius:12px;text-align:center;"><a href="#coincheck-affiliate" style="display:inline-block;background:#ffd54f;color:#1a237e;padding:14px 35px;border-radius:8px;font-weight:bold;text-decoration:none;">Coincheckで口座開設 →</a></div>'
body1 += '<h2>2位: GMOコイン</h2><p>入出金・送金手数料が全て無料。コスト重視の中級者向け。</p>'
body1 += '<h2>3位: bitFlyer</h2><p>BTC取引量6年連続No.1。1円から投資可能。セキュリティ世界トップクラス。</p>'
body1 += '<h2>口座開設の手順（最短10分）</h2><ol><li>メールアドレス登録</li><li>本人確認（スマホで運転免許証撮影）</li><li>入金・購入</li></ol>'
body1 += SISTER

r1 = requests.post(f"{WP}/wp-json/wp/v2/posts", auth=AUTH, json={
    "title": "【2026年最新】仮想通貨取引所おすすめランキング5選｜手数料・セキュリティ・使いやすさを徹底比較",
    "slug": "crypto-exchange-ranking-2026",
    "content": body1,
    "status": "draft",
    "categories": [crypto_cat],
}, timeout=60)
print(f"記事1: {r1.status_code}" + (f" ID={r1.json()['id']}" if r1.status_code == 201 else f" {r1.text[:200]}"))

# 記事2
body2 = '<p>FX口座をスプレッド・取引ツール・スワップポイントで徹底比較。</p>'
body2 += '<h2>FX口座おすすめランキング</h2>'
body2 += '<table style="width:100%;border-collapse:collapse;margin:20px 0;"><thead><tr style="background:#0d47a1;color:white;"><th style="padding:12px;">順位</th><th>FX口座</th><th>USD/JPY</th><th>通貨ペア</th><th>最小単位</th></tr></thead><tbody>'
body2 += '<tr style="background:#fff8e1;"><td style="padding:12px;font-weight:bold;">1位</td><td><strong>DMM FX</strong></td><td>0.2銭</td><td>21</td><td>10,000通貨</td></tr>'
body2 += '<tr><td style="padding:12px;">2位</td><td><strong>GMOクリック証券</strong></td><td>0.2銭</td><td>20</td><td>1,000通貨</td></tr>'
body2 += '<tr style="background:#fafafa;"><td style="padding:12px;">3位</td><td><strong>SBI FXトレード</strong></td><td>0.18銭</td><td>34</td><td>1通貨</td></tr>'
body2 += '<tr><td style="padding:12px;">4位</td><td>松井証券 MATSUI FX</td><td>0.2銭</td><td>20</td><td>1通貨</td></tr>'
body2 += '<tr style="background:#fafafa;"><td style="padding:12px;">5位</td><td>ヒロセ通商 LION FX</td><td>0.2銭</td><td>54</td><td>1,000通貨</td></tr>'
body2 += '<tr><td style="padding:12px;">6位</td><td>みんなのFX</td><td>0.2銭</td><td>34</td><td>1,000通貨</td></tr>'
body2 += '<tr style="background:#fafafa;"><td style="padding:12px;">7位</td><td>LIGHT FX</td><td>0.18銭</td><td>46</td><td>1,000通貨</td></tr>'
body2 += '</tbody></table>'
body2 += '<h2>1位: DMM FX</h2><p>業界最狭水準のスプレッド。スマホアプリの完成度が高くデイトレに最適。</p>'
body2 += '<h2>2位: GMOクリック証券</h2><p>1,000通貨から取引可能。はっちゅう君など高性能ツールが充実。</p>'
body2 += '<h2>3位: SBI FXトレード</h2><p>1通貨（約数円）から取引可能。初心者の練習用に最適。スプレッドも業界最狭。</p>'
body2 += '<h2>FX口座の選び方</h2><ul><li><strong>スプレッド</strong>: 0.2銭以下なら優秀</li><li><strong>最小取引単位</strong>: 1通貨なら数円から開始可能</li><li><strong>取引ツール</strong>: スマホアプリの使いやすさを重視</li></ul>'
body2 += SISTER

r2 = requests.post(f"{WP}/wp-json/wp/v2/posts", auth=AUTH, json={
    "title": "【2026年最新】FX口座おすすめランキング7選｜スプレッド・ツール・スワップで徹底比較",
    "slug": "fx-account-ranking-2026",
    "content": body2,
    "status": "draft",
    "categories": [fx_cat],
}, timeout=60)
print(f"記事2: {r2.status_code}" + (f" ID={r2.json()['id']}" if r2.status_code == 201 else f" {r2.text[:200]}"))
