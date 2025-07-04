import NewsCard from '../../components/common/NewsCard';

interface NewsItem {
  id: number;
  date: string;
  title: string;
  content: string;
  category: 'announcement' | 'website' | 'update' | 'important' | 'default';
}

const News = () => {
  const newsItems: NewsItem[] = [
    {
      id: 1,
      date: '2025.01.15',
      title: 'Tech.SummerCamp 2025 開催決定',
      content: 'Tech.SummerCamp 2025の開催が正式に決定しました。今年も全国から選ばれた学生エンジニアが集まります。',
      category: 'announcement'
    },
    {
      id: 2,
      date: '2025.01.15',
      title: '公式サイトオープン',
      content: 'Tech.SummerCamp 2025の公式サイトがオープンしました。今後、イベントに関する最新情報はこちらでお知らせします。',
      category: 'website'
    }
  ];


  return (
    <div className="pt-8">
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-mono font-bold text-center mb-12 md:mb-16">
            <span className="glitch" data-text="NEWS">NEWS</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {newsItems.map(item => (
              <NewsCard
                key={item.id}
                date={item.date}
                tag={item.category.toUpperCase()}
                title={item.title}
                excerpt={item.content}
                tagType={item.category}
              />
            ))}
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default News;