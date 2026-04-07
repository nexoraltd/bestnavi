# X自動投稿セットアップガイド

## 1. Xアカウント開設

ベストナビ専用アカウントを作成:
- アカウント名案: `@bestnavi_tech` or `@navi_techguide`
- プロフィール: 「VPN・AI・サーバー・プログラミングの比較レビューサイト。最新情報を毎日発信中」
- URL: https://navi.next-aura.com

## 2. X Developer Portal 設定

1. https://developer.x.com にログイン
2. 「Projects & Apps」→「+ Create Project」
3. プロジェクト名: `bestnavi-auto`
4. App名: `bestnavi-poster`
5. 「Keys and tokens」タブで以下を取得:
   - API Key
   - API Key Secret
   - Access Token
   - Access Token Secret
6. **User authentication settings**:
   - App permissions: **Read and Write**
   - Type: **Web App**

## 3. 環境設定

```bash
cd bestnavi
cp .env.example .env
# .envに取得したキーを設定

pip install tweepy python-dotenv
```

## 4. テスト実行

```bash
# プレビュー（投稿しない）
python scripts/x_auto_post.py --dry-run --count 3

# 本番投稿（1件）
python scripts/x_auto_post.py
```

## 5. 定期実行（Windows タスクスケジューラ）

```bash
# 朝8時
schtasks /create /tn "BestnaviTweet_Morning" /tr "python C:\Users\ishid\claude-projects\bestnavi\scripts\x_auto_post.py" /sc daily /st 08:00

# 昼12時
schtasks /create /tn "BestnaviTweet_Noon" /tr "python C:\Users\ishid\claude-projects\bestnavi\scripts\x_auto_post.py" /sc daily /st 12:00

# 夜20時
schtasks /create /tn "BestnaviTweet_Night" /tr "python C:\Users\ishid\claude-projects\bestnavi\scripts\x_auto_post.py" /sc daily /st 20:00
```
