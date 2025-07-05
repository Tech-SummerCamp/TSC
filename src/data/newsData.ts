export interface NewsArticle {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  content: string;
  excerpt?: string;
}

// 実際のMarkdownファイルの内容を反映
export const newsArticles: NewsArticle[] = [
  {
    slug: '2025-02-01-entry-start',
    title: 'エントリー受付開始！',
    date: '2025-02-01',
    author: 'TSC運営チーム',
    category: 'announcement',
    excerpt: 'お待たせしました！Tech.SummerCamp 2025のエントリー受付を開始しました。',
    content: `
<h1>エントリー受付開始！</h1>
<p>お待たせしました！Tech.SummerCamp 2025のエントリー受付を開始しました。</p>
<h2>参加条件</h2>
<p>学生かつ以下のいずれかに該当する方：</p>
<ul>
<li>エンジニア歴2年以上</li>
<li>ハッカソン参加経験が複数回</li>
<li>ハッカソン受賞経験が1回以上</li>
<li>インターン内定/参加経験あり</li>
<li>プロダクトのリリース経験あり</li>
<li>勉強会・カンファレンス登壇経験あり</li>
<li>技術力でチームを牽引できる自信がある</li>
</ul>
<h2>エントリー方法</h2>
<p><a href="/2025/entry">エントリーページ</a>から必要事項を記入してお申し込みください。</p>
<p><strong>締切</strong>: 2025年3月31日(月) 23:59</p>
<p>皆様のご応募をお待ちしています！</p>
    `
  },
  {
    slug: '2025-01-01-site-open',
    title: 'Tech.SummerCamp 2025 サイトオープン',
    date: '2025-01-01',
    author: 'TSC運営チーム',
    category: 'announcement',
    excerpt: 'Tech.SummerCamp 2025の公式サイトをオープンしました！',
    content: `
<h1>Tech.SummerCamp 2025 サイトオープン</h1>
<p>Tech.SummerCamp 2025の公式サイトをオープンしました！</p>
<p>今年も「学生エンジニアが得られる体験の最高峰」をコンセプトに、全国の中・上級者学生エンジニアが集まる4日間のハッカソンを開催します。</p>
<h2>開催概要</h2>
<ul>
<li><strong>日程</strong>: 2025年9月20日(土)〜23日(火・祝)</li>
<li><strong>場所</strong>: 大阪市内会場 + オンライン（ハイブリッド開催）</li>
<li><strong>参加者</strong>: 全国の中・上級者学生エンジニア 60〜80名</li>
<li><strong>賞金</strong>: 最優秀賞30万円、優秀賞10万円</li>
</ul>
<h2>今後のスケジュール</h2>
<p>詳細は順次公開していきますので、お楽しみに！</p>
<p>エントリー開始は2月を予定しています。</p>
    `
  }
];