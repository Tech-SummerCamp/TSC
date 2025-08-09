import { useParams, Link } from 'react-router-dom';
import { useNewsArticle } from '../../hooks/useNews';
import '../../styles/news.css';

const NewsDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { article, loading } = useNewsArticle(slug || '');

  if (loading) {
    return (
      <div className="pt-8">
        <section className="min-h-screen">
          <div className="container mx-auto px-6 py-8">
            <div className="flex justify-center items-center min-h-[300px]">
              <div className="text-white font-mono">Loading...</div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="pt-8">
        <section className="min-h-screen">
          <div className="container mx-auto px-6 py-8">
            <div className="text-center">
              <h1 className="text-4xl font-mono font-bold mb-4">404</h1>
              <p className="text-gray-400 mb-8">記事が見つかりませんでした</p>
              <Link 
                to="/news" 
                className="inline-block bg-white text-black px-6 py-3 font-mono hover:bg-[#00FF41] hover:text-black transition-colors"
              >
                ニュース一覧に戻る
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-8">
      <section className="min-h-screen">
        <div className="container mx-auto px-6 py-8">
          <div className="max-w-4xl mx-auto">
            {/* パンくずリスト */}
            <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm font-mono text-gray-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  HOME
                </Link>
              </li>
              <li className="before:content-['/'] before:mx-2">
                <Link to="/news" className="hover:text-white transition-colors">
                  NEWS
                </Link>
              </li>
              <li className="before:content-['/'] before:mx-2 text-white">
                {article.title}
              </li>
            </ol>
            </nav>

            {/* 記事ヘッダー */}
            <header className="mb-12 pb-8 border-b border-gray-800">
            <div className="flex items-center gap-4 mb-4">
              <span className={`
                inline-block px-3 py-1 text-xs font-mono uppercase
                ${article.category === 'announcement' ? 'bg-[#00FF41] text-black' : 'bg-gray-700 text-white'}
              `}>
                {article.category}
              </span>
              <time className="text-gray-400 font-mono text-sm">
                {new Date(article.date).toLocaleDateString('ja-JP', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            <p className="text-gray-400 text-sm font-mono">by {article.author}</p>
            </header>

            {/* 記事本文 */}
            <article>
            <div 
              className="news-content"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            </article>

            {/* 記事フッター */}
            <footer className="mt-16 pt-8 border-t border-gray-800">
            <Link 
              to="/news" 
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white font-mono transition-colors group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              ニュース一覧に戻る
            </Link>
            </footer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsDetail;