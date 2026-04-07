"""
Google Search Console インデックスリクエスト（Selenium + Chrome DevTools）
Playwrightの問題を回避し、既に開かれているChromeセッションを使用
"""

import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
import sys

# Day 2 URLs (新規記事 + 既存記事)
DAY2_URLS = [
    "https://navi.next-aura.com/仮想通貨取引所ランキング2026-初心者向け安心取引/",
    "https://navi.next-aura.com/fx口座おすすめランキング2026-初心者向け安全な業者比較/",
    "https://navi.next-aura.com/vpn-koukoku/",
    "https://navi.next-aura.com/conoha-wing-hyakka/",
    "https://navi.next-aura.com/xserver-sekai/",
    "https://navi.next-aura.com/conohawing-matome/",
    "https://navi.next-aura.com/ai-generated-image/",
    "https://navi.next-aura.com/ai-image-generator-comparison/",
    "https://navi.next-aura.com/web-design-ai-tool-comparison/",
    "https://navi.next-aura.com/line-official-account-guide/",
]

def request_indexing(driver, url):
    """1つのURLについてGSCでインデックスリクエストを送信"""
    try:
        # Search Console に移動
        gsc_url = "https://search.google.com/search-console?resource_id=https://navi.next-aura.com/"
        driver.get(gsc_url)
        time.sleep(3)

        # URL検査バーを探してクリック
        wait = WebDriverWait(driver, 10)

        # 検査バーの入力フィールド（複数種類のセレクタを試す）
        try:
            # 日本語UIの場合
            input_field = wait.until(
                EC.presence_of_element_located((By.CSS_SELECTOR, "input[type='text'][aria-label*='検査']"))
            )
        except:
            # 英語UIの場合
            input_field = wait.until(
                EC.presence_of_element_located((By.CSS_SELECTOR, "input[type='text']"))
            )

        input_field.click()
        input_field.clear()
        input_field.send_keys(url)
        time.sleep(1)

        # Enterキーで検査実行
        from selenium.webdriver.common.keys import Keys
        input_field.send_keys(Keys.RETURN)
        time.sleep(5)

        # 「インデックス登録をリクエスト」ボタンを待機
        try:
            request_btn = wait.until(
                EC.element_to_be_clickable((By.XPATH, "//*[contains(text(), 'インデックス')]"))
            )
            request_btn.click()
            time.sleep(3)
            print(f"  ✅ {url}")
            return True
        except:
            # 既にインデックス済みの可能性
            print(f"  ⏭️  {url} (既にインデックス済み？)")
            return False

    except Exception as e:
        print(f"  ❌ {url} - {e}")
        return False

def main():
    print("Google Search Console インデックスリクエスト (Selenium)")
    print("=" * 70)
    print(f"Day 2: {len(DAY2_URLS)}件を送信します\n")

    # Chrome オプション
    options = Options()
    options.add_argument("--user-data-dir=C:\\Users\\ishid\\AppData\\Local\\Google\\Chrome\\User Data")
    options.add_argument("--profile-directory=Default")  # Default プロファイルを使用

    try:
        driver = webdriver.Chrome(options=options)

        success = 0
        skip = 0

        for i, url in enumerate(DAY2_URLS, 1):
            print(f"\n[{i}/{len(DAY2_URLS)}]")
            if request_indexing(driver, url):
                success += 1
            else:
                skip += 1

            # レート制限回避
            if i < len(DAY2_URLS):
                print("  待機中 (10秒)...")
                time.sleep(10)

        driver.quit()

        print(f"\n{'=' * 70}")
        print(f"完了: 成功 {success}件 / スキップ {skip}件")

    except Exception as e:
        print(f"エラー: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
