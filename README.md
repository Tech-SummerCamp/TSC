# Tech.SummerCamp 2025 Official Website

Tech.SummerCamp（中・上級者向け学生ハッカソン）の公式Webサイトです。

## 🚀 概要

**Tech.SummerCamp**は、全国から選ばれた中・上級者の学生エンジニアが集まる、日本最高峰の学生ハッカソンです。48時間という限られた時間の中で、技術力の限界に挑戦し、イノベーティブなプロダクトを生み出します。

### イベント情報
- **日程**: 2025年9月20日(土)〜23日(火・祝)
- **場所**: 大阪市内会場 + オンライン（ハイブリッド開催）
- **参加者**: 全国の中・上級者学生エンジニア 60〜80名
- **賞金**: 最優秀賞30万円、優秀賞10万円

## 🛠️ 技術スタック

- **フロントエンド**: React 19 + Vite
- **ルーティング**: React Router DOM
- **スタイリング**: CSS Modules + Custom CSS Variables
- **デザイン**: ターミナル風デザイン（モノクローム + ターミナルグリーン）

## 📋 セットアップ

### 前提条件
- Node.js 18.0.0 以上
- npm または yarn

### インストール

1. **リポジトリをクローン**
   ```bash
   git clone <repository-url>
   cd my-react-app
   ```

2. **依存関係をインストール**
   ```bash
   npm install
   ```

3. **開発サーバーを起動**
   ```bash
   npm run dev
   ```

4. **ブラウザでアクセス**
   ```
   http://localhost:5173
   ```

## 🎯 利用可能なコマンド

### 開発
```bash
npm run dev          # 開発サーバー起動（ホットリロード有効）
```

### ビルド
```bash
npm run build        # 本番用ビルド
npm run preview      # ビルド結果をプレビュー
```

### 品質管理
```bash
npm run lint         # ESLintでコード品質チェック
```

## 📁 プロジェクト構造

```
src/
├── components/           # 再利用可能なコンポーネント
│   ├── Layout.jsx       # 基本レイアウト
│   ├── Navigation.jsx   # ナビゲーション
│   ├── Logo.jsx         # ロゴ（タイプライター効果）
│   └── Footer.jsx       # フッター
├── pages/               # ページコンポーネント
│   ├── 2025/           # 2025年度ページ
│   │   ├── Home.jsx    # トップページ
│   │   ├── Schedule.jsx # スケジュール
│   │   ├── FAQ.jsx     # よくある質問
│   │   └── News.jsx    # ニュース
│   └── 2024/           # 2024年度アーカイブ
├── styles/
│   └── global.css      # グローバルスタイル
└── main.jsx            # エントリーポイント
```

## 🚀 デプロイ

### デプロイ実行
```bash
npm run deploy
```

---

**Tech.SummerCamp 2025 - 学生エンジニアが得られる体験の最高峰**