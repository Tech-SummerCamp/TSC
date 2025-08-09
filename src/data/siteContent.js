// サイトのコンテンツを一元管理するファイル
// 非エンジニアでも編集しやすいように設計

export const siteContent = {
  // ========== 基本情報 ==========
  eventInfo: {
    name: "Tech.SummerCamp",
    year: 2025,
    tagline: "学生エンジニアが得られる体験の最高峰",
    dates: "2025年9月20日(土) - 23日(火・祝)",
    location: "大阪市内会場 + オンライン（ハイブリッド）",
    participants: "60-80名",
    prize: {
      first: "¥300,000",
      second: "¥100,000",
      total: "¥400,000"
    }
  },

  // ========== スポンサー情報 ==========
  sponsors: {
    platinum: [
      // { name: "企業名", logo: "/images/sponsors/company1.png", url: "https://example.com" }
    ],
    gold: [
      // 追加例
    ],
    silver: [
      // 追加例
    ]
  },

  // ========== FAQ ==========
  faq: {
    participation: [
      {
        question: "参加条件は？",
        answer: "エンジニア歴2年以上、ハッカソン経験者、インターン経験者など、中・上級者の学生が対象です。"
      },
      {
        question: "選考はありますか？",
        answer: "はい、応募多数の場合は選考を行います。技術力とチーム貢献度を重視します。"
      }
    ],
    event: [
      {
        question: "オンライン参加は可能？",
        answer: "はい、ハイブリッド開催のため、オンライン参加も可能です。"
      },
      {
        question: "食事は提供されますか？",
        answer: "会場参加者には食事を提供します。オンライン参加者は各自でご用意ください。"
      }
    ],
    technical: [
      {
        question: "使用言語・技術の制限は？",
        answer: "特に制限はありません。チームで自由に技術選定してください。"
      }
    ]
  },

  // ========== メタ情報（SEO用） ==========
  meta: {
    title: "Tech.SummerCamp 2025 - 学生エンジニアが得られる体験の最高峰",
    description: "全国から選ばれた中・上級者の学生エンジニアが集まる、日本最高峰の学生ハッカソン。48時間の開発で技術力の限界に挑戦。最優秀賞30万円。",
    keywords: "学生ハッカソン,Tech.SummerCamp,学生エンジニア,プログラミングコンテスト,大阪",
    ogImage: "/images/og-image.png"
  },

  // ========== お問い合わせ ==========
  contact: {
    email: "info@tech-summercamp.jp",
    twitter: "@TechSummerCamp",
    // フォームのURLなど
  }
};

// カテゴリー定義
export const categories = {
  ANNOUNCEMENT: '開催情報',
  ENTRY: 'エントリー',
  WEBSITE: 'サイト更新',
  SPONSOR: 'スポンサー',
  EVENT: 'イベント',
  RESULT: '結果発表'
};

// ========== 更新方法 ==========
// 1. このファイルを開く
// 2. 該当する箇所を編集（例：newsに新しい記事を追加）
// 3. 保存すると自動的にサイトに反映される
// 
// 注意：
// - 日付は 'YYYY.MM.DD' 形式で記入
// - IDは重複しないように注意
// - importantをtrueにすると重要なお知らせとして表示