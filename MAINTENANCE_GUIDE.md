# Tech.SummerCamp メンテナンスガイド

## 🎯 このガイドの目的

非エンジニア・初心者でも簡単にサイトを更新・管理できるようにするためのガイドです。

## 📝 よくある更新作業

### 1. ニュース記事の追加（最も頻繁）

1. `src/pages/2025/News.jsx` を開く
2. 以下の形式で新しい記事を追加：

```javascript
{
  id: '新しいID',
  date: '2025.03.15',
  category: 'ANNOUNCEMENT',
  title: '記事タイトル',
  content: '記事内容...'
}
```

### 2. スポンサー情報の更新

**現在の構造では、スポンサーページは未実装です。**
追加する場合は、News.jsxと同様の構造で作成することを推奨します。

### 3. スケジュールの変更

`src/pages/2025/Schedule.jsx` を編集
- 日付、時間、イベント内容を直接書き換え

### 4. FAQの追加・修正

`src/pages/2025/FAQ.jsx` を編集
- 質問と回答のペアを追加・修正

## 🚀 簡単な更新手順

### 準備（初回のみ）
1. Visual Studio Code をインストール
2. Node.js をインストール
3. プロジェクトをダウンロード

### 日常の更新作業
1. VSCodeでプロジェクトを開く
2. ターミナルで `npm run dev` を実行
3. ブラウザで確認しながら編集
4. 保存すると自動的に反映

### 本番への反映
1. `npm run build` を実行
2. `dist` フォルダの中身をサーバーにアップロード

## 🔧 トラブルシューティング

### よくあるエラーと対処法

**「npm: command not found」**
→ Node.jsがインストールされていません

**「Cannot find module」**
→ `npm install` を実行してください

**画面が真っ白になった**
→ ブラウザの開発者ツール（F12）でエラーを確認

## 📊 Google Analytics の設置

`index.html` の `<head>` タグ内に以下を追加：

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

## 🔐 セキュリティ対策

### 基本的な対策
- 定期的に `npm audit` を実行
- 依存関係を最新に保つ: `npm update`
- 環境変数に機密情報を保存（.env ファイル）

### Cloudflare の推奨設定
- WAF（Web Application Firewall）を有効化
- DDoS保護を有効化
- SSL/TLS暗号化を「Full」に設定

## 🎨 デザイン変更の基本

### 色の変更
`src/styles/global.css` で以下を編集：
```css
--color-terminal-green: #00FF41;  /* この値を変更 */
```

### フォントの変更
同じく `global.css` で：
```css
--font-mono: 'JetBrains Mono', monospace;  /* この値を変更 */
```

## 📱 レスポンシブ対応の確認

開発時は以下の画面サイズで確認：
- **PC**: 1920x1080
- **タブレット**: 768x1024
- **スマホ**: 375x667

Chrome開発者ツールで簡単に確認できます。

## 🔄 引き継ぎチェックリスト

### 新しい担当者に渡すもの
- [ ] GitHubアカウントの権限
- [ ] サーバーのアクセス情報
- [ ] ドメイン管理画面のアクセス
- [ ] Google Analyticsのアクセス
- [ ] このドキュメント

### 教えること（30分程度）
- [ ] VSCodeの基本操作
- [ ] `npm run dev` でプレビュー
- [ ] ファイルの編集方法
- [ ] `npm run build` でビルド
- [ ] アップロード方法

## 💡 WordPress からの移行で失われる機能と対策

### 1. ビジュアルエディタ → コード編集
**対策**: 
- シンプルなMarkdownエディタの導入を検討
- Netlify CMSやContentfulなどのヘッドレスCMS導入

### 2. プラグインによる機能拡張 → 手動実装
**対策**:
- 必要最小限の機能に絞る
- 外部サービス（フォーム→Google Forms、解析→GA）を活用

### 3. 自動バックアップ → 手動管理
**対策**:
- GitHubで自動的にバージョン管理
- Netlifyなどで自動デプロイ設定

## 🚀 推奨する追加ツール

### 1. **Netlify CMS**（無料）
- GitHubと連携
- ブラウザから記事編集可能
- 非エンジニアでも使いやすい

### 2. **Vercel**（無料枠あり）
- 自動デプロイ
- プレビュー環境
- 高速なCDN

### 3. **Cloudflare Pages**（無料）
- セキュリティ機能込み
- 高速配信
- 簡単なデプロイ

## 📞 困ったときは

1. エラーメッセージをそのままGoogle検索
2. ChatGPTに質問（コードとエラーを貼り付け）
3. 前任者に連絡

---

**最後に**: このサイトは「シンプルさ」を重視して作られています。
複雑な機能を追加するより、確実に動作する最小限の機能を維持することが大切です。