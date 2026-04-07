"""
ベストナビ X自動投稿スクリプト
- 記事URLをランダムに選んでツイート
- 1日3回投稿（朝8時、昼12時、夜20時）
- cronまたはGitHub Actionsで実行

使い方:
1. X Developer Portalでアプリ作成 → APIキー取得
2. .envに認証情報を設定
3. python x_auto_post.py
"""

import os
import random
import json
from datetime import datetime
from pathlib import Path

try:
    import tweepy
    from dotenv import load_dotenv
except ImportError:
    print("必要なパッケージをインストールしてください:")
    print("pip install tweepy python-dotenv")
    exit(1)

load_dotenv(Path(__file__).parent.parent / ".env")

# X API認証
client = tweepy.Client(
    consumer_key=os.getenv("X_API_KEY"),
    consumer_secret=os.getenv("X_API_SECRET"),
    access_token=os.getenv("X_ACCESS_TOKEN"),
    access_token_secret=os.getenv("X_ACCESS_TOKEN_SECRET"),
)

# 記事データ（カテゴリ別）
ARTICLES = {
    "vpn": [
        {"url": "https://navi.next-aura.com/vpn-osusume-ranking-2026/", "title": "VPNおすすめランキング2026", "emoji": "🔒"},
        {"url": "https://navi.next-aura.com/nordvpn-review-2026-2/", "title": "NordVPN徹底レビュー", "emoji": "🛡️"},
        {"url": "https://navi.next-aura.com/surfshark-review-2026-2/", "title": "Surfsharkレビュー", "emoji": "🦈"},
        {"url": "https://navi.next-aura.com/expressvpn-review-2026-2/", "title": "ExpressVPNレビュー", "emoji": "⚡"},
        {"url": "https://navi.next-aura.com/vpn-speed-test-2026/", "title": "VPN速度比較テスト", "emoji": "📊"},
        {"url": "https://navi.next-aura.com/vpn-china-osusume/", "title": "中国で使えるVPN", "emoji": "🇨🇳"},
        {"url": "https://navi.next-aura.com/free-vpn-kiken-riyuu/", "title": "無料VPNが危険な理由", "emoji": "⚠️"},
        {"url": "https://navi.next-aura.com/cheap-vpn-ranking/", "title": "格安VPNランキング", "emoji": "💰"},
        {"url": "https://navi.next-aura.com/netflix-vpn-japan/", "title": "海外からNetflixを見る方法", "emoji": "📺"},
        {"url": "https://navi.next-aura.com/vpn-iphone-setup-guide/", "title": "iPhone VPN設定方法", "emoji": "📱"},
    ],
    "ai": [
        {"url": "https://navi.next-aura.com/chatgpt-guide/", "title": "ChatGPT使い方ガイド", "emoji": "🤖"},
        {"url": "https://navi.next-aura.com/ai-image-generator/", "title": "AI画像生成ツール比較", "emoji": "🎨"},
        {"url": "https://navi.next-aura.com/ai-writing-tools/", "title": "AIライティングツール比較", "emoji": "✍️"},
    ],
    "server": [
        {"url": "https://navi.next-aura.com/xserver-review-2026/", "title": "Xserverレビュー", "emoji": "🖥️"},
        {"url": "https://navi.next-aura.com/conoha-wing-review-2026/", "title": "ConoHa WINGレビュー", "emoji": "🚀"},
        {"url": "https://navi.next-aura.com/xserver-vs-conoha/", "title": "Xserver vs ConoHa比較", "emoji": "⚔️"},
        {"url": "https://navi.next-aura.com/wordpress-blog-hajimekata/", "title": "WordPressブログの始め方", "emoji": "📝"},
    ],
    "crypto": [
        {"url": "https://navi.next-aura.com/crypto-hajimekata/", "title": "仮想通貨の始め方", "emoji": "💎"},
        {"url": "https://navi.next-aura.com/bitcoin-tsumitate/", "title": "ビットコイン積立比較", "emoji": "📈"},
        {"url": "https://navi.next-aura.com/coincheck-guide-2026/", "title": "Coincheck口座開設", "emoji": "🪙"},
    ],
    "career": [
        {"url": "https://navi.next-aura.com/programming-school-ranking-2026/", "title": "プログラミングスクール比較", "emoji": "💻"},
        {"url": "https://navi.next-aura.com/it-tenshoku-agent/", "title": "IT転職エージェント比較", "emoji": "👔"},
        {"url": "https://navi.next-aura.com/fukugyou-zaitaku/", "title": "副業在宅ワーク7選", "emoji": "🏠"},
        {"url": "https://navi.next-aura.com/webdesign-school/", "title": "Webデザインスクール比較", "emoji": "🎨"},
    ],
}

# ツイートテンプレート
TEMPLATES = [
    "{emoji} {title}\n\n{hook}\n\n詳しくはこちら👇\n{url}\n\n#ベストナビ {hashtags}",
    "【最新版】{title}\n\n{hook}\n\n{url}\n\n{hashtags}",
    "{hook}\n\n{emoji} 記事を更新しました\n👉 {title}\n\n{url}\n\n{hashtags}",
]

# カテゴリ別ハッシュタグ
HASHTAGS = {
    "vpn": "#VPN #セキュリティ #ネットセキュリティ",
    "ai": "#AI #ChatGPT #AIツール",
    "server": "#WordPress #ブログ #レンタルサーバー",
    "crypto": "#仮想通貨 #ビットコイン #投資",
    "career": "#転職 #プログラミング #副業",
}

# フック文（記事への興味を引く一言）
HOOKS = {
    "vpn": [
        "無料VPN使ってませんか？個人情報が売られてるかも...",
        "海外出張でNetflixが見れない問題、VPNで一発解決",
        "VPN選びで一番大事なのは速度じゃなくて○○",
        "月額300円台で使える高品質VPNがあるって知ってた？",
        "中国でLINEもGmailも使えない...でもVPNがあれば大丈夫",
    ],
    "ai": [
        "ChatGPTを使いこなせてる人、実は全体の10%もいない",
        "AIで記事を書くコツは「丸投げしない」こと",
        "AI画像生成、無料でここまでできるのはすごい",
    ],
    "server": [
        "サーバー選びで月1,000円ケチると、あとで5万円損する話",
        "WordPressブログ、実は10分で始められます",
        "XserverとConoHa、結局どっちがいいの？実測で比較しました",
    ],
    "crypto": [
        "ビットコイン、月500円の積立が一番リスク低い",
        "仮想通貨の口座開設、最短10分で終わります",
        "積立投資なら相場を気にしなくていいのがラク",
    ],
    "career": [
        "未経験からIT転職、30代でも全然間に合う",
        "プログラミングスクール、高ければいいってものじゃない",
        "在宅副業で月5万は、正しいやり方なら3ヶ月で達成できる",
    ],
}

# 投稿履歴管理（同じ記事を連続で投稿しない）
HISTORY_FILE = Path(__file__).parent.parent / "post_history.json"


def load_history():
    if HISTORY_FILE.exists():
        return json.loads(HISTORY_FILE.read_text(encoding="utf-8"))
    return []


def save_history(history):
    # 直近30件のみ保持
    HISTORY_FILE.write_text(
        json.dumps(history[-30:], ensure_ascii=False, indent=2),
        encoding="utf-8",
    )


def select_article(history):
    """最近投稿していない記事をランダムに選択"""
    all_articles = []
    for category, articles in ARTICLES.items():
        for article in articles:
            article["category"] = category
            all_articles.append(article)

    # 履歴にないものを優先
    recent_urls = set(history)
    candidates = [a for a in all_articles if a["url"] not in recent_urls]

    if not candidates:
        # 全記事投稿済みならリセット
        candidates = all_articles

    return random.choice(candidates)


def create_tweet(article):
    """ツイート文を生成"""
    category = article["category"]
    template = random.choice(TEMPLATES)
    hook = random.choice(HOOKS[category])

    tweet = template.format(
        emoji=article["emoji"],
        title=article["title"],
        hook=hook,
        url=article["url"],
        hashtags=HASHTAGS[category],
    )

    # 280文字制限チェック（日本語は1文字=2としてカウント）
    if len(tweet) > 280:
        # ハッシュタグを削ってリトライ
        tweet = template.format(
            emoji=article["emoji"],
            title=article["title"],
            hook=hook,
            url=article["url"],
            hashtags="",
        ).strip()

    return tweet


def post_tweet(tweet_text, dry_run=False):
    """ツイートを投稿"""
    if dry_run:
        print(f"[DRY RUN] {datetime.now().strftime('%Y-%m-%d %H:%M')}")
        print(f"{'=' * 50}")
        print(tweet_text)
        print(f"{'=' * 50}")
        print(f"文字数: {len(tweet_text)}")
        return True

    try:
        response = client.create_tweet(text=tweet_text)
        print(f"[SUCCESS] Tweet ID: {response.data['id']}")
        return True
    except Exception as e:
        print(f"[ERROR] {e}")
        return False


def main():
    import argparse

    parser = argparse.ArgumentParser(description="ベストナビ X自動投稿")
    parser.add_argument("--dry-run", action="store_true", help="投稿せずにプレビュー")
    parser.add_argument("--count", type=int, default=1, help="生成するツイート数")
    args = parser.parse_args()

    history = load_history()

    for _ in range(args.count):
        article = select_article(history)
        tweet = create_tweet(article)

        if post_tweet(tweet, dry_run=args.dry_run):
            history.append(article["url"])

    save_history(history)


if __name__ == "__main__":
    main()
