"""
はてなブックマーク自動ブクマスクリプト

はてなアカウントでログイン後、ベストナビの記事を1日5件ずつブックマーク。
一度にやりすぎるとスパム扱いされるので、3日間に分散して実行。

使い方:
1. pip install playwright && playwright install chromium
2. python backlink_hatena.py --setup  (はてなアカウント情報を設定)
3. python backlink_hatena.py --day 1  (Day1の記事をブクマ)
"""

import argparse
import json
import time
import sys
from pathlib import Path

try:
    from playwright.sync_api import sync_playwright
except ImportError:
    print("pip install playwright && playwright install chromium")
    sys.exit(1)

CONFIG_FILE = Path(__file__).parent.parent / ".hatena_config.json"

# ブクマ対象（SEO的に重要な記事を優先、自然なタグ付き）
BOOKMARKS_BY_DAY = {
    1: [
        {"url": "https://navi.next-aura.com/vpn-osusume-ranking-2026/", "comment": "VPN選びの参考に。速度テスト付きで信頼できる", "tags": ["VPN", "セキュリティ", "比較"]},
        {"url": "https://navi.next-aura.com/chatgpt-guide/", "comment": "ChatGPTの使い方がわかりやすくまとまってる", "tags": ["ChatGPT", "AI", "仕事効率化"]},
        {"url": "https://navi.next-aura.com/wordpress-blog-hajimekata/", "comment": "WordPress始めるならこの手順が一番わかりやすい", "tags": ["WordPress", "ブログ", "始め方"]},
        {"url": "https://navi.next-aura.com/programming-school-ranking-2026/", "comment": "プログラミングスクールの比較がフラットで良い", "tags": ["プログラミング", "スクール", "学習"]},
        {"url": "https://navi.next-aura.com/crypto-hajimekata/", "comment": "仮想通貨の口座開設手順が丁寧", "tags": ["仮想通貨", "投資", "初心者"]},
    ],
    2: [
        {"url": "https://navi.next-aura.com/xserver-review-2026/", "comment": "Xserverの実測データが参考になる", "tags": ["Xserver", "レンタルサーバー", "WordPress"]},
        {"url": "https://navi.next-aura.com/nordvpn-review-2026-2/", "comment": "NordVPNの速度テストが詳しい", "tags": ["NordVPN", "VPN", "レビュー"]},
        {"url": "https://navi.next-aura.com/ai-writing-tools/", "comment": "AIライティングツールの比較が実用的", "tags": ["AI", "ライティング", "ツール"]},
        {"url": "https://navi.next-aura.com/esim-ranking-2026/", "comment": "海外旅行用eSIMの料金比較が助かる", "tags": ["eSIM", "海外旅行", "通信"]},
        {"url": "https://navi.next-aura.com/it-tenshoku-agent/", "comment": "IT転職エージェントの選び方が参考になった", "tags": ["転職", "IT", "エージェント"]},
    ],
    3: [
        {"url": "https://navi.next-aura.com/security-software-ranking-2026/", "comment": "セキュリティソフトの機能比較が網羅的", "tags": ["セキュリティ", "ウイルス対策", "比較"]},
        {"url": "https://navi.next-aura.com/free-vpn-kiken-riyuu/", "comment": "無料VPNのリスクを具体的に解説していて参考になる", "tags": ["VPN", "セキュリティ", "無料"]},
        {"url": "https://navi.next-aura.com/blog-monetization/", "comment": "ブログ収益化のロードマップがわかりやすい", "tags": ["ブログ", "収益化", "副業"]},
        {"url": "https://navi.next-aura.com/online-english-ranking-2026/", "comment": "オンライン英会話の無料体験比較が便利", "tags": ["英会話", "オンライン", "学習"]},
        {"url": "https://navi.next-aura.com/ai-image-generator/", "comment": "AI画像生成ツールの無料枠比較が実用的", "tags": ["AI", "画像生成", "ツール"]},
    ],
}


def setup():
    """はてなアカウント情報を設定"""
    print("はてなアカウント情報を入力してください:")
    username = input("ユーザー名 (はてなID): ")
    password = input("パスワード: ")
    config = {"username": username, "password": password}
    CONFIG_FILE.write_text(json.dumps(config, ensure_ascii=False))
    print(f"設定を保存しました: {CONFIG_FILE}")


def bookmark_articles(day, headless=False):
    """指定Dayの記事をブクマ"""
    if not CONFIG_FILE.exists():
        print("先に --setup を実行してください")
        return

    config = json.loads(CONFIG_FILE.read_text())
    bookmarks = BOOKMARKS_BY_DAY[day]

    print(f"Day {day}: {len(bookmarks)}件のブックマークを追加します")
    print("=" * 60)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=headless)
        context = browser.new_context()
        page = context.new_page()

        # はてなログイン
        print("はてなにログイン中...")
        page.goto("https://www.hatena.ne.jp/login")
        page.fill('input[name="name"]', config["username"])
        page.fill('input[name="password"]', config["password"])
        page.click('button[type="submit"]')
        page.wait_for_timeout(3000)

        success = 0
        for i, bm in enumerate(bookmarks, 1):
            print(f"\n[{i}/{len(bookmarks)}] {bm['url']}")
            try:
                # ブクマ追加ページ
                encoded_url = bm["url"]
                page.goto(f"https://b.hatena.ne.jp/entry/panel/?url={encoded_url}")
                page.wait_for_timeout(2000)

                # コメント入力
                comment_input = page.locator('textarea').first
                if comment_input.count() > 0:
                    comment_input.fill(bm["comment"])

                # タグ追加
                for tag in bm["tags"]:
                    tag_input = page.locator('input[placeholder*="タグ"]').first
                    if tag_input.count() > 0:
                        tag_input.fill(tag)
                        page.keyboard.press("Enter")
                        page.wait_for_timeout(500)

                # ブクマボタン
                submit_btn = page.get_by_text("ブックマーク")
                if submit_btn.count() > 0:
                    submit_btn.first.click()
                    page.wait_for_timeout(3000)
                    print(f"  [OK] ブクマ完了")
                    success += 1
                else:
                    print(f"  [SKIP] ボタンが見つかりません")

            except Exception as e:
                print(f"  [ERROR] {e}")

            # スパム対策: 30秒間隔
            if i < len(bookmarks):
                print("  待機中 (30秒)...")
                time.sleep(30)

        browser.close()

    print(f"\n{'=' * 60}")
    print(f"完了: {success}/{len(bookmarks)}件ブクマ成功")


def main():
    parser = argparse.ArgumentParser(description="はてなブックマーク自動ブクマ")
    parser.add_argument("--setup", action="store_true", help="アカウント設定")
    parser.add_argument("--day", type=int, choices=[1, 2, 3], help="実行するDay (1-3)")
    parser.add_argument("--headless", action="store_true", help="ヘッドレスモード")
    args = parser.parse_args()

    if args.setup:
        setup()
    elif args.day:
        bookmark_articles(args.day, headless=args.headless)
    else:
        parser.print_help()


if __name__ == "__main__":
    main()
