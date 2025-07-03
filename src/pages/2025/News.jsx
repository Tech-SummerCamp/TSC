import NewsCard from '../../components/common/NewsCard';
import './News.css';

const News = () => {
  const newsItems = [
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
    <div className="news">
      <section className="section">
        <div className="container">
          <h1 className="page-title">
            <span className="glitch" data-text="NEWS">NEWS</span>
          </h1>
          
          <div className="news-grid">
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