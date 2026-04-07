"""
Google Search Console Indexing API
URLをバッチで自動送信
"""

import httplib2
import json
import time
import sys
from google.oauth2 import service_account
from google.auth.transport.requests import Request

# Day 2 URLs
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

# サービスアカウント認証情報（googleCredentials.jsonまたは.envから取得）
CREDENTIALS_FILE = "google_credentials.json"  # セットアップが必要

def get_credentials():
    """Google OAuth認証情報を取得"""
    try:
        credentials = service_account.Credentials.from_service_account_file(
            CREDENTIALS_FILE,
            scopes=["https://www.googleapis.com/auth/indexing"]
        )
        credentials.refresh(Request())
        return credentials
    except FileNotFoundError:
        print(f"❌ {CREDENTIALS_FILE} が見つかりません")
        print("セットアップが必要です:")
        print("  1. Google Cloud Console で Indexing API を有効化")
        print("  2. サービスアカウント を作成")
        print("  3. JSON認証情報を {CREDENTIALS_FILE} として保存")
        sys.exit(1)

def request_indexing(credentials, url):
    """URLをGSCにインデックス登録リクエスト"""
    INDEXING_API = "https://indexing.googleapis.com/v3/urlNotifications:publish"

    http = httplib2.Http()
    credentials.authorize(http)

    body = {
        "url": url,
        "type": "URL_UPDATED"
    }

    try:
        response, content = http.request(
            INDEXING_API,
            method="POST",
            body=json.dumps(body),
            headers={"Content-Type": "application/json"}
        )

        if response.status == 200:
            print(f"  ✅ {url}")
            return True
        else:
            print(f"  ❌ {url} - Status {response.status}")
            return False
    except Exception as e:
        print(f"  ❌ {url} - {e}")
        return False

def main():
    print("Google Search Console Indexing API")
    print("=" * 70)
    print(f"Day 2: {len(DAY2_URLS)}件を送信します\n")

    credentials = get_credentials()
    success = 0

    for i, url in enumerate(DAY2_URLS, 1):
        print(f"[{i}/{len(DAY2_URLS)}]")
        if request_indexing(credentials, url):
            success += 1
        time.sleep(2)  # レート制限

    print(f"\n{'=' * 70}")
    print(f"完了: {success}件 / {len(DAY2_URLS)}件")

if __name__ == "__main__":
    main()
