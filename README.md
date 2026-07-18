# アプリ サポートサイト

iPhoneアプリ5本のサポート＆プライバシーポリシーをまとめた静的サイトです。
ビルド不要の素のHTML/CSS/JSなので、GitHub Pages にそのまま置くだけで公開できます。

## 対象アプリ

| アプリ | サポートページ |
|---|---|
| おんぷ よみ れんしゅう | `doremi.html` |
| おけいこ | `okeiko.html` |
| できたてキッチン | `dekitate.html` |
| Zero Scanner | `zeroscanner.html` |
| おたより管理 | `otayori.html` |
| （共通）プライバシーポリシー | `privacy.html` |

## 構成

```
SupportPage/
├── index.html            # トップ（5アプリ一覧）
├── doremi.html           # 各アプリのサポート＋FAQ
├── okeiko.html
├── dekitate.html
├── zeroscanner.html
├── otayori.html
├── privacy.html          # 5アプリ共通プライバシーポリシー
├── assets/
│   ├── style.css         # 共通スタイル（レスポンシブ・ライト/ダーク対応）
│   ├── i18n.js           # 日本語/英語トグル（localStorageで記憶）
│   └── icons/            # 各アプリのアイコン（1024px）
├── .nojekyll             # GitHub PagesのJekyll処理を無効化
└── README.md
```

すべて相対リンクで構成しています。このサイトはユーザーサイト
`https://ykapp-dev.github.io/`（リポジトリ `ykapp-dev/ykapp-dev.github.io`）の
ルートで配信されます。

## ローカル確認

```bash
cd SupportPage
python3 -m http.server 8000
# ブラウザで http://localhost:8000 を開く
```

## GitHub Pages で公開する手順

このリポジトリは `ykapp-dev/ykapp-dev.github.io`（ユーザーサイト）で、
`.github/workflows/deploy.yml` により GitHub Actions で自動デプロイされます。

1. 変更を `main` に push する。

   ```bash
   git add .
   git commit -m "Update support site"
   git push origin main
   ```

2. 初回のみ、リポジトリの **Settings → Pages → Build and deployment → Source** を
   **「GitHub Actions」** に設定する。
3. 以後、`main` に push するたびに Actions が走り、数分後に公開されます。

## App Store Connect に登録するURL

公開URLはルート配信です（`https://ykapp-dev.github.io/`）。

| アプリ | サポートURL | プライバシーポリシーURL |
|---|---|---|
| おんぷ よみ れんしゅう | `https://ykapp-dev.github.io/doremi.html` | `https://ykapp-dev.github.io/privacy.html` |
| おけいこ | `https://ykapp-dev.github.io/okeiko.html` | `https://ykapp-dev.github.io/privacy.html` |
| できたてキッチン | `https://ykapp-dev.github.io/dekitate.html` | `https://ykapp-dev.github.io/privacy.html` |
| Zero Scanner | `https://ykapp-dev.github.io/zeroscanner.html` | `https://ykapp-dev.github.io/privacy.html` |
| おたより管理 | `https://ykapp-dev.github.io/otayori.html` | `https://ykapp-dev.github.io/privacy.html` |

> トップ（`https://ykapp-dev.github.io/`）をサポートURLにしてもOKです。その場合は利用者が一覧から選びます。

## メンテナンス

- 問い合わせ先メール: `ykapp.dev0123@gmail.com`（全ページ共通）。
  変更する場合は各HTMLの `mailto:` を一括置換してください。
- 文言の追加・修正は、各HTML内の `lang-ja`（日本語）/ `lang-en`（英語）の
  両方を更新してください（片方だけだと言語切替で空欄になります）。
