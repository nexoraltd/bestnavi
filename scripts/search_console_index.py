"""
Search Console インデックスリクエスト自動送信スクリプト

Profile 10 (ishida@next-aura.com) のChromeセッションを使って
Search Consoleに自動でインデックスリクエストを送信する。

使い方:
1. pip install playwright && playwright install chromium
2. Chrome Profile 10 でSearch Consoleにログイン済みであること
3. python search_console_index.py --day 1  (Day1の10件を送信)
"""

import argparse
import time
import sys

try:
    from playwright.sync_api import sync_playwright
except ImportError:
    print("pip install playwright && playwright install chromium")
    sys.exit(1)

URLS_BY_DAY = {
    1: [
        "https://navi.next-aura.com/vpn-osusume-ranking-2026/",
        "https://navi.next-aura.com/nordvpn-review-2026-2/",
        "https://navi.next-aura.com/surfshark-review-2026-2/",
        "https://navi.next-aura.com/expressvpn-review-2026-2/",
        "https://navi.next-aura.com/millenvpn-review-2026/",
        "https://navi.next-aura.com/vpn-beginner-guide-2026/",
        "https://navi.next-aura.com/nordvpn-vs-expressvpn-2026/",
        "https://navi.next-aura.com/vpn-speed-test-2026/",
        "https://navi.next-aura.com/vpn-china-osusume/",
        "https://navi.next-aura.com/vpn-iphone-setup-guide/",
    ],
    2: [
        # 新規記事2本
        "https://navi.next-aura.com/仮想通貨取引所ランキング2026-初心者向け安心取引/",
        "https://navi.next-aura.com/fx口座おすすめランキング2026-初心者向け安全な業者比較/",
        # 既存記事8件
        "https://navi.next-aura.com/vpn-koukoku/",
        "https://navi.next-aura.com/conoha-wing-hyakka/",
        "https://navi.next-aura.com/xserver-sekai/",
        "https://navi.next-aura.com/conohawing-matome/",
        "https://navi.next-aura.com/ai-generated-image/",
        "https://navi.next-aura.com/ai-image-generator-comparison/",
        "https://navi.next-aura.com/web-design-ai-tool-comparison/",
        "https://navi.next-aura.com/line-official-account-guide/",
    ],
    3: [
        "https://navi.next-aura.com/usa-esim/",
        "https://navi.next-aura.com/esim-compatible-phones/",
        "https://navi.next-aura.com/server-hosting-ranking-2026/",
        "https://navi.next-aura.com/xserver-review-2026/",
        "https://navi.next-aura.com/conoha-wing-review-2026/",
        "https://navi.next-aura.com/xserver-vs-conoha/",
        "https://navi.next-aura.com/kinsta-review-2026/",
        "https://navi.next-aura.com/wordpress-blog-hajimekata/",
        "https://navi.next-aura.com/wordpress-server-migration/",
        "https://navi.next-aura.com/blog-monetization/",
    ],
    4: [
        "https://navi.next-aura.com/security-software-ranking-2026/",
        "https://navi.next-aura.com/password-manager-comparison/",
        "https://navi.next-aura.com/phishing-protection/",
        "https://navi.next-aura.com/chatgpt-guide/",
        "https://navi.next-aura.com/ai-image-generator/",
        "https://navi.next-aura.com/ai-writing-tools/",
        "https://navi.next-aura.com/gmocoin-guide-2026/",
        "https://navi.next-aura.com/coincheck-guide-2026/",
        "https://navi.next-aura.com/crypto-hajimekata/",
        "https://navi.next-aura.com/bitcoin-tsumitate/",
    ],
    5: [
        "https://navi.next-aura.com/online-english-ranking-2026/",
        "https://navi.next-aura.com/toeic-online-english/",
        "https://navi.next-aura.com/kids-online-english/",
        "https://navi.next-aura.com/programming-school-ranking-2026/",
        "https://navi.next-aura.com/kids-programming-school/",
        "https://navi.next-aura.com/webdesign-school/",
        "https://navi.next-aura.com/career-counseling-ranking-2026/",
        "https://navi.next-aura.com/it-tenshoku-agent/",
        "https://navi.next-aura.com/fukugyou-zaitaku/",
        "https://navi.next-aura.com/2026ai5/",
    ],
}

# Chrome Profile 10 のパス
CHROME_USER_DATA = r"C:\Users\ishid\AppData\Local\Google\Chrome\User Data"
CHROME_PROFILE = "Profile 10"

SC_BASE = "https://search.google.com/search-console"


def request_index(page, url):
    """1つのURLに対してインデックスリクエストを送信"""
    inspect_url = f"{SC_BASE}/inspect?resource_id=https://navi.next-aura.com/&id={url}"

    try:
        # URL検査ページに直接アクセス
        page.goto(
            f"{SC_BASE}?resource_id=https://navi.next-aura.com/",
            wait_until="networkidle",
            timeout=30000,
        )
        time.sleep(2)

        # 上部の検索バーにURLを入力
        search_input = page.locator('input[type="text"]').first
        search_input.click()
        search_input.fill(url)
        page.keyboard.press("Enter")

        # URL検査結果を待機
        page.wait_for_timeout(8000)

        # 「インデックス登録をリクエスト」ボタンを探してクリック
        request_btn = page.get_by_text("インデックス登録をリクエスト")
        if request_btn.count() > 0:
            request_btn.first.click()
            # 確認ダイアログを待機
            page.wait_for_timeout(15000)
            print(f"  [OK] {url}")
            return True
        else:
            # 英語UIの場合
            request_btn_en = page.get_by_text("Request indexing")
            if request_btn_en.count() > 0:
                request_btn_en.first.click()
                page.wait_for_timeout(15000)
                print(f"  [OK] {url}")
                return True
            else:
                print(f"  [SKIP] {url} - ボタンが見つかりません（既にインデックス済み？）")
                return False
    except Exception as e:
        print(f"  [ERROR] {url} - {e}")
        return False


def main():
    parser = argparse.ArgumentParser(description="Search Console自動インデックスリクエスト")
    parser.add_argument("--day", type=int, required=True, choices=[1, 2, 3, 4, 5], help="実行するDay (1-5)")
    parser.add_argument("--headless", action="store_true", help="ヘッドレスモード")
    args = parser.parse_args()

    urls = URLS_BY_DAY[args.day]
    print(f"Day {args.day}: {len(urls)}件のインデックスリクエストを送信します")
    print("=" * 60)

    with sync_playwright() as p:
        # 既存のChromeプロファイルを使用（ログイン状態を引き継ぐ）
        browser = p.chromium.launch_persistent_context(
            user_data_dir=CHROME_USER_DATA,
            channel="chrome",
            headless=args.headless,
            args=[f"--profile-directory={CHROME_PROFILE}"],
        )

        page = browser.new_page()
        success = 0
        fail = 0

        for i, url in enumerate(urls, 1):
            print(f"\n[{i}/{len(urls)}] {url}")
            if request_index(page, url):
                success += 1
            else:
                fail += 1

            # レート制限回避（15秒待機）
            if i < len(urls):
                print("  待機中 (15秒)...")
                time.sleep(15)

        browser.close()

    print(f"\n{'=' * 60}")
    print(f"完了: 成功 {success}件 / 失敗 {fail}件")
    print(f"明日は --day {args.day + 1} を実行してください" if args.day < 5 else "全Day完了!")


if __name__ == "__main__":
    main()
