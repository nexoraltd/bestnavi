"""
IndexNow API スクリプト — Bing/Yandex/Naverにインデックスリクエスト送信

IndexNowは認証キーファイルをサイトルートに置くだけで使える。
Google Search Console不要でBing/Yandexのインデックスを高速化。

使い方:
1. python index_now.py --setup  (キーファイル生成 → wp-adminからアップロード)
2. python index_now.py --submit (全URLをIndexNowに送信)
"""

import json
import uuid
import argparse
from pathlib import Path

try:
    import requests
except ImportError:
    print("pip install requests")
    exit(1)

SITE_URL = "https://navi.next-aura.com"
KEY_FILE = Path(__file__).parent.parent / "indexnow_key.txt"

URLS = [
    "/vpn-osusume-ranking-2026/",
    "/nordvpn-review-2026-2/",
    "/surfshark-review-2026-2/",
    "/expressvpn-review-2026-2/",
    "/millenvpn-review-2026/",
    "/vpn-beginner-guide-2026/",
    "/nordvpn-vs-expressvpn-2026/",
    "/vpn-speed-test-2026/",
    "/vpn-china-osusume/",
    "/vpn-iphone-setup-guide/",
    "/android-vpn-setup/",
    "/cheap-vpn-ranking/",
    "/netflix-vpn-japan/",
    "/free-vpn-kiken-riyuu/",
    "/kaigai-kara-nihon-tv-vpn/",
    "/best-vpns-for-foreigners-living-in-japan-march-2026/",
    "/cyberghost-review-2026/",
    "/nordvpn2026/",
    "/esim-ranking-2026/",
    "/korea-esim/",
    "/usa-esim/",
    "/esim-compatible-phones/",
    "/server-hosting-ranking-2026/",
    "/xserver-review-2026/",
    "/conoha-wing-review-2026/",
    "/xserver-vs-conoha/",
    "/kinsta-review-2026/",
    "/wordpress-blog-hajimekata/",
    "/wordpress-server-migration/",
    "/blog-monetization/",
    "/security-software-ranking-2026/",
    "/password-manager-comparison/",
    "/phishing-protection/",
    "/chatgpt-guide/",
    "/ai-image-generator/",
    "/ai-writing-tools/",
    "/gmocoin-guide-2026/",
    "/coincheck-guide-2026/",
    "/crypto-hajimekata/",
    "/bitcoin-tsumitate/",
    "/online-english-ranking-2026/",
    "/toeic-online-english/",
    "/kids-online-english/",
    "/programming-school-ranking-2026/",
    "/kids-programming-school/",
    "/webdesign-school/",
    "/career-counseling-ranking-2026/",
    "/it-tenshoku-agent/",
    "/fukugyou-zaitaku/",
    "/2026ai5/",
    "/post/saily-esim-review-2026/",
    "/post/surfshark-antivirus-review-2026/",
    "/post/yayoi-series-review-2026/",
    "/post/kojo-kyujin-folder-review-2026/",
    "/post/dinomo-wifi-review-2026/",
    "/post/kimini-eikaiwa-review-2026/",
    "/post/rakulink-esim-review-2026/",
    "/post/worldtalk-eikaiwa-review-2026/",
    "/post/daytora-programming-review-2026/",
    "/post/nomad-sim-review-2026/",
    "/post/dmm-webcamp-review-2026/",
    "/post/moneyforward-cloud-review-2026/",
]


def setup_key():
    """IndexNow用のキーを生成"""
    key = uuid.uuid4().hex
    KEY_FILE.write_text(key)

    # キーファイルの内容（サイトルートにアップロードする）
    key_verify_file = Path(__file__).parent.parent / f"{key}.txt"
    key_verify_file.write_text(key)

    print(f"IndexNowキーを生成しました: {key}")
    print(f"")
    print(f"次の手順:")
    print(f"1. wp-admin にログイン")
    print(f"2. WP File Manager プラグインで以下のファイルをサイトルートにアップロード:")
    print(f"   ファイル名: {key}.txt")
    print(f"   内容: {key}")
    print(f"   アップロード先: /home/xs236932/navi.next-aura.com/public_html/{key}.txt")
    print(f"")
    print(f"3. ブラウザで確認: {SITE_URL}/{key}.txt")
    print(f"   → キー文字列が表示されればOK")
    print(f"")
    print(f"4. 確認後、以下を実行:")
    print(f"   python index_now.py --submit")


def submit_urls():
    """全URLをIndexNow APIに送信"""
    if not KEY_FILE.exists():
        print("キーファイルが見つかりません。先に --setup を実行してください。")
        return

    key = KEY_FILE.read_text().strip()
    full_urls = [f"{SITE_URL}{path}" for path in URLS]

    # IndexNow API (Bing)
    payload = {
        "host": "navi.next-aura.com",
        "key": key,
        "keyLocation": f"{SITE_URL}/{key}.txt",
        "urlList": full_urls,
    }

    endpoints = [
        ("Bing/Yandex/Naver", "https://api.indexnow.org/indexnow"),
        ("Bing直接", "https://www.bing.com/indexnow"),
        ("Yandex直接", "https://yandex.com/indexnow"),
    ]

    for name, endpoint in endpoints:
        try:
            resp = requests.post(
                endpoint,
                json=payload,
                headers={"Content-Type": "application/json; charset=utf-8"},
                timeout=30,
            )
            status = "OK" if resp.status_code in (200, 202) else f"Error {resp.status_code}"
            print(f"[{status}] {name}: {resp.status_code} - {len(full_urls)}件送信")
        except Exception as e:
            print(f"[ERROR] {name}: {e}")

    print(f"\n合計 {len(full_urls)} URLを送信しました。")
    print("Bing/Yandexのインデックスは通常24〜48時間以内に反映されます。")


def main():
    parser = argparse.ArgumentParser(description="IndexNow API URL送信")
    parser.add_argument("--setup", action="store_true", help="キーファイルを生成")
    parser.add_argument("--submit", action="store_true", help="URLを送信")
    args = parser.parse_args()

    if args.setup:
        setup_key()
    elif args.submit:
        submit_urls()
    else:
        parser.print_help()


if __name__ == "__main__":
    main()
