import { Link } from 'react-router-dom';
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

  const getCategoryClass = (category) => {
    const classes = {
      announcement: 'category-announcement',
      website: 'category-website',
      update: 'category-update',
      important: 'category-important'
    };
    return classes[category] || '';
  };

  return (
    <div className="news">
      <section className="section">
        <div className="container">
          <h1 className="page-title">
            <span className="glitch" data-text="NEWS">NEWS</span>
          </h1>
          
          <div className="news-grid">
            {newsItems.map(item => (
              <article key={item.id} className="news-card">
                <div className="news-header">
                  <time className="news-date">{item.date}</time>
                  <span className={`news-tag ${getCategoryClass(item.category)}`}>
                    {item.category.toUpperCase()}
                  </span>
                </div>
                <h2 className="news-title">{item.title}</h2>
                <p className="news-excerpt">{item.content}</p>
              </article>
            ))}
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default News;