#!/usr/bin/env python3
"""
TCS DMM FXのプレースホルダーリンクを実際のアフィリエイトリンクに一括差し替え。

使い方:
  python scripts/replace_dmm_fx_links.py "https://www.tcs-asp.net/alink?AC=xxxxx&LC=xxxxx&SQ=0&is498=1"
"""
import sys
import requests
from requests.auth import HTTPBasicAuth

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

WP_BASE = "https://navi.next-aura.com/wp-json/wp/v2"
AUTH = HTTPBasicAuth("nexora", "S3Zl 0QAd nqf4 mZja mWOp mJls")

PLACEHOLDER = "https://www.tcs-asp.net/PLACEHOLDER_DMM_FX"

# DMM FXリンクが含まれる記事
TARGET_POSTS = [523, 526]  # FXランキング記事, DMM FXレビュー記事


def main():
    if len(sys.argv) < 2:
        print("使い方: python scripts/replace_dmm_fx_links.py <TCS_DMM_FX_URL>")
        print("例: python scripts/replace_dmm_fx_links.py \"https://www.tcs-asp.net/alink?AC=xxxxx&LC=xxxxx&SQ=0&is498=1\"")
        return

    real_url = sys.argv[1].strip()
    if "tcs-asp.net" not in real_url and "PLACEHOLDER" not in real_url:
        print(f"WARNING: URLにtcs-asp.netが含まれていません: {real_url}")
        confirm = input("続行しますか? (y/n): ")
        if confirm.lower() != "y":
            return

    print(f"差し替え先URL: {real_url}")
    print()

    for pid in TARGET_POSTS:
        r = requests.get(f"{WP_BASE}/posts/{pid}?context=edit", auth=AUTH, timeout=15)
        if r.status_code != 200:
            print(f"  [{pid}] GET失敗: {r.status_code}")
            continue

        d = r.json()
        raw = d["content"]["raw"]
        title = d["title"]["raw"][:60]

        if PLACEHOLDER not in raw:
            print(f"  [{pid}] {title} — プレースホルダーなし（スキップ）")
            continue

        new_raw = raw.replace(PLACEHOLDER, real_url)
        count = raw.count(PLACEHOLDER)

        r2 = requests.post(
            f"{WP_BASE}/posts/{pid}",
            auth=AUTH,
            json={"content": new_raw},
            timeout=60,
        )
        if r2.status_code == 200:
            print(f"  [{pid}] {title} — {count}箇所差し替え完了")
        else:
            print(f"  [{pid}] 更新失敗: {r2.status_code}")

    print()
    print("完了。記事のリンクが全てTCSアフィリエイトリンクに更新されました。")


if __name__ == "__main__":
    main()
