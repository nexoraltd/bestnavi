#!/usr/bin/env python3
"""
TCS Coincheck 提携承認後に実行するスクリプト。
仮想通貨関連記事の直リンクをTCSアフィリエイトリンクに一括差し替え。

使い方:
  1. TCS管理画面で Coincheck の広告リンクを取得
  2. 以下の TCS_COINCHECK_URL を差し替え
  3. python scripts/replace_crypto_links.py を実行

環境: bestnavi/.env にWP認証情報
"""
import os
import re
import sys
import requests
from requests.auth import HTTPBasicAuth
from pathlib import Path

BASE_DIR = Path(__file__).parent.parent
for line in (BASE_DIR / ".env").read_text(encoding="utf-8").splitlines():
    if "=" in line and not line.strip().startswith("#"):
        k, v = line.strip().split("=", 1)
        os.environ.setdefault(k, v)

AUTH = HTTPBasicAuth(os.environ["WP_USER"], os.environ["WP_APP_PASSWORD"])
WP_URL = os.environ["WP_URL"]

# ==========================================
# ↓↓↓ TCS承認後にここを更新 ↓↓↓
# ==========================================
TCS_COINCHECK_URL = "https://www.tcs-asp.net/PLACEHOLDER_COINCHECK"  # TCS管理画面から取得したリンクに差し替え
TCS_BITFLYER_URL = ""  # bitFlyer 提携できたら
TCS_GMOCOIN_URL = ""   # GMOコイン 提携できたら
# ==========================================

# 対象記事
TARGET_POSTS = [
    211,  # Coincheck口座開設手順
    359,  # 仮想通貨の始め方
    361,  # ビットコイン積立投資
    263,  # GMOコイン評判
]


def replace_links(post_id: int):
    r = requests.get(f"{WP_URL}/wp-json/wp/v2/posts/{post_id}?context=edit", auth=AUTH, timeout=15)
    if r.status_code != 200:
        print(f"  ❌ GET失敗: {r.status_code}")
        return

    d = r.json()
    raw = d["content"]["raw"]
    title = d["title"]["rendered"][:50]
    original = raw

    # Coincheck 直リンク → TCSリンク
    if TCS_COINCHECK_URL and "PLACEHOLDER" not in TCS_COINCHECK_URL:
        raw = re.sub(
            r'href=["\']https?://coincheck\.com/?["\']',
            f'href="{TCS_COINCHECK_URL}"',
            raw,
        )

    # bitFlyer 直リンク → TCSリンク
    if TCS_BITFLYER_URL:
        raw = re.sub(
            r'href=["\']https?://bitflyer\.com/?["\']',
            f'href="{TCS_BITFLYER_URL}"',
            raw,
        )

    # GMOコイン 直リンク → TCSリンク
    if TCS_GMOCOIN_URL:
        raw = re.sub(
            r'href=["\']https?://coin\.z\.com/?["\']',
            f'href="{TCS_GMOCOIN_URL}"',
            raw,
        )

    if raw == original:
        print(f"  ⏭️  [{post_id}] {title} — 変更なし")
        return

    # CTAボタン追加（まだない場合）
    if "tcs-crypto-cta" not in raw:
        cta = f"""
<!-- tcs-crypto-cta -->
<div style="margin: 30px 0; padding: 25px; background: #1a237e; border-radius: 12px; text-align: center;">
<p style="color: #ffd54f; font-size: 1.2em; font-weight: bold; margin-bottom: 10px;">✦ 今すぐ口座開設 ✦</p>
<p style="color: rgba(255,255,255,0.9); font-size: 0.9em; margin-bottom: 20px;">最短10分で完了。取引手数料無料。</p>
<a href="{TCS_COINCHECK_URL}" target="_blank" rel="noopener" style="display: inline-block; background: #ffd54f; color: #1a237e; padding: 15px 40px; border-radius: 8px; font-weight: bold; text-decoration: none; font-size: 1.1em;">Coincheckで口座開設する →</a>
</div>
<!-- /tcs-crypto-cta -->
"""
        # 姉妹サイトブロックの前に挿入
        if "bestnavi-sister-sites-block" in raw:
            raw = raw.replace("<!-- bestnavi-sister-sites-block -->", cta + "\n<!-- bestnavi-sister-sites-block -->")
        else:
            raw = raw.rstrip() + "\n" + cta

    r2 = requests.post(
        f"{WP_URL}/wp-json/wp/v2/posts/{post_id}",
        auth=AUTH,
        json={"content": raw},
        timeout=60,
    )
    if r2.status_code == 200:
        print(f"  ✅ [{post_id}] {title} — 更新完了")
    else:
        print(f"  ❌ [{post_id}] 更新失敗: {r2.status_code}")


def main():
    if "PLACEHOLDER" in TCS_COINCHECK_URL:
        print("⚠️  TCS_COINCHECK_URL がプレースホルダーのままです。")
        print("   TCS管理画面で Coincheck のリンクを取得し、このスクリプトの URL を更新してから再実行してください。")
        if "--force" not in sys.argv:
            return

    for pid in TARGET_POSTS:
        replace_links(pid)


if __name__ == "__main__":
    main()
