# アプリ サポートサイト

iPhoneアプリ4本のサポート＆プライバシーポリシーをまとめた静的サイトです。
ビルド不要の素のHTML/CSS/JSなので、GitHub Pages にそのまま置くだけで公開できます。

## 対象アプリ

| アプリ | サポートページ |
|---|---|
| おんぷ よみ れんしゅう | `doremi.html` |
| おけいこ | `okeiko.html` |
| できたてキッチン | `dekitate.html` |
| Zero Scanner | `zeroscanner.html` |
| （共通）プライバシーポリシー | `privacy.html` |

## 構成

```
SupportPage/
├── index.html            # トップ（4アプリ一覧）
├── doremi.html           # 各アプリのサポート＋FAQ
├── okeiko.html
├── dekitate.html
├── zeroscanner.html
├── privacy.html          # 4アプリ共通プライバシーポリシー
├── assets/
│   ├── style.css         # 共通スタイル（レスポンシブ・ライト/ダーク対応）
│   ├── i18n.js           # 日本語/英語トグル（localStorageで記憶）
│   └── icons/            # 各アプリのアイコン（1024px）
├── .nojekyll             # GitHub PagesのJekyll処理を無効化
└── README.md
```

すべて相対リンクなので、ユーザーサイト（`https://ykawazura.github.io/`）でも
プロジェクトサイト（`https://ykawazura.github.io/<repo>/`）でもそのまま動きます。

## ローカル確認

```bash
cd SupportPage
python3 -m http.server 8000
# ブラウザで http://localhost:8000 を開く
```

## GitHub Pages で公開する手順

1. GitHubで新しいリポジトリを作成（例: `app-support`）。
2. この `SupportPage` の中身（`index.html` など）を **リポジトリ直下** に置いてpush。

   ```bash
   cd SupportPage
   git init
   git add .
   git commit -m "Add app support site"
   git branch -M main
   git remote add origin https://github.com/ykawazura/app-support.git
   git push -u origin main
   ```

3. リポジトリの **Settings → Pages** で、Source を `Deploy from a branch`、
   Branch を `main` / `/ (root)` に設定して保存。
4. 数分後、`https://ykawazura.github.io/app-support/` で公開されます。

## App Store Connect に登録するURL（例）

公開URLが `https://ykawazura.github.io/app-support/` の場合：

| アプリ | サポートURL | プライバシーポリシーURL |
|---|---|---|
| おんぷ よみ れんしゅう | `…/app-support/doremi.html` | `…/app-support/privacy.html` |
| おけいこ | `…/app-support/okeiko.html` | `…/app-support/privacy.html` |
| できたてキッチン | `…/app-support/dekitate.html` | `…/app-support/privacy.html` |
| Zero Scanner | `…/app-support/zeroscanner.html` | `…/app-support/privacy.html` |

> トップ（`…/app-support/`）をサポートURLにしてもOKです。その場合は利用者が一覧から選びます。

## メンテナンス

- 問い合わせ先メール: `ykapp.dev0123@gmail.com`（全ページ共通）。
  変更する場合は各HTMLの `mailto:` を一括置換してください。
- 文言の追加・修正は、各HTML内の `lang-ja`（日本語）/ `lang-en`（英語）の
  両方を更新してください（片方だけだと言語切替で空欄になります）。
