import { useNews } from '../../hooks/useNews';
import NewsCard from '../../components/common/NewsCard';

const News = () => {
  const { articles, loading } = useNews();

  if (loading) {
    return (
      <div className="pt-8">
        <section className="">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-mono font-bold text-center mb-12 md:mb-16">
                <span className="glitch" data-text="NEWS">NEWS</span>
              </h1>
              <div className="flex justify-center items-center min-h-[300px]">
                <div className="text-white font-mono">Loading...</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-8">
      <section className="">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-mono font-bold text-center mb-12 md:mb-16">
              <span className="glitch" data-text="NEWS">NEWS</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 auto-rows-fr">
              {articles.map(article => (
                <NewsCard
                  key={article.slug}
                  date={new Date(article.date).toLocaleDateString('ja-JP', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                  }).replace(/\//g, '.')}
                  tag={article.category.toUpperCase()}
                  title={article.title}
                  excerpt={article.excerpt || ''}
                  tagType={article.category as any}
                  href={`/TSC/news/${article.slug}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;