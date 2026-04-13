#!/usr/bin/env python3
"""
ベストナビ全記事の末尾に姉妹サイト誘導ブロックを REST API 経由で追記する。

idempotent: 既に挿入済みの記事はスキップ。
"""
import os
import re
import sys
import time
import requests
from requests.auth import HTTPBasicAuth
from pathlib import Path

BASE_DIR = Path(__file__).parent.parent
ENV_FILE = BASE_DIR / ".env"

# .env読み込み
for line in ENV_FILE.read_text(encoding="utf-8").splitlines():
    if "=" in line and not line.strip().startswith("#"):
        k, v = line.strip().split("=", 1)
        os.environ.setdefault(k, v)

USER = os.environ["WP_USER"]
PASS = os.environ["WP_APP_PASSWORD"]
WP_URL = os.environ["WP_URL"]
AUTH = HTTPBasicAuth(USER, PASS)

MARKER = "bestnavi-sister-sites-block"

# WordPressの投稿に埋め込むHTML（Cocoonの装飾クラスを使用）
SISTER_SITES_HTML = f"""
<!-- {MARKER} -->
<div class="blank-box bb-blue" style="margin-top:40px;">
<p><strong>✦ 関連サイト ✦</strong></p>
<p>📊 <a href="https://market.next-aura.com/" target="_blank" rel="noopener">不動産相場ナビ</a> — 500万件超の実取引データからエリア相場をAIが即表示。住宅ローン・固定資産税シミュレーターも無料。</p>
<p>📖 <a href="https://note.com/mi_autolab" target="_blank" rel="noopener">Claude Code副業自動化 note</a> — Claude Codeで作った自動化システムの実装手順を公開中。ノーコード対応。</p>
</div>
<!-- /{MARKER} -->
"""


def fetch_all_posts():
    """全記事を取得（ページング）"""
    posts = []
    page = 1
    while True:
        r = requests.get(
            f"{WP_URL}/wp-json/wp/v2/posts",
            auth=AUTH,
            params={"per_page": 100, "page": page, "context": "edit", "status": "publish"},
            timeout=30,
        )
        if r.status_code != 200:
            break
        batch = r.json()
        if not batch:
            break
        posts.extend(batch)
        if len(batch) < 100:
            break
        page += 1
    return posts


def update_post(post_id: int, new_content: str):
    r = requests.post(
        f"{WP_URL}/wp-json/wp/v2/posts/{post_id}",
        auth=AUTH,
        json={"content": new_content},
        timeout=60,
    )
    return r.status_code == 200, r.text[:200] if r.status_code != 200 else ""


def main():
    dry_run = "--dry-run" in sys.argv
    posts = fetch_all_posts()
    print(f"📚 取得: {len(posts)} 記事")

    success = 0
    skipped = 0
    failed = 0

    for p in posts:
        pid = p["id"]
        title = p["title"]["rendered"][:60]
        raw = p["content"]["raw"] or ""

        if MARKER in raw:
            print(f"  ⏭️  [{pid}] {title} — 既に挿入済み")
            skipped += 1
            continue

        new_content = raw.rstrip() + "\n\n" + SISTER_SITES_HTML
        print(f"  📝 [{pid}] {title}")

        if dry_run:
            print(f"     [DRY-RUN] +{len(SISTER_SITES_HTML)} chars")
            success += 1
            continue

        ok, err = update_post(pid, new_content)
        if ok:
            print(f"     ✅ 更新完了")
            success += 1
        else:
            print(f"     ❌ 失敗: {err}")
            failed += 1

        time.sleep(0.5)  # rate limit 保護

    print(f"\n{'=' * 60}")
    print(f"成功: {success} / スキップ: {skipped} / 失敗: {failed} / 合計: {len(posts)}")


if __name__ == "__main__":
    main()
