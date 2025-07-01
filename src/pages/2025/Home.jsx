import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';
import './Home.css';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = '学生エンジニアが得られる体験の最高峰';

  useEffect(() => {
    let currentIndex = 0;
    
    const typeWriter = () => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeWriter, 120 + Math.random() * 80); // Variable speed for realism
      } else {
        // Typing complete, hide cursor after a delay
        setTimeout(() => setShowCursor(false), 2000);
      }
    };

    const timer = setTimeout(typeWriter, 1000); // Initial delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home">
      <section className="hero section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-tagline">
              <h1 className="main-tagline typewriter">
                <span className="typed-text">
                  {typedText}
                </span>
                {showCursor && <span className="typewriter-cursor">|</span>}
              </h1>
            </div>
            
            
            <div className="about-content">
              <section className="about-section">
                <h3>Tech.SummerCampは、全国から選ばれた中・上級者の学生エンジニアが集まる、
                日本最高峰の学生ハッカソンです。</h3>
                <p>
                  48時間という限られた時間の中で、技術力の限界に挑戦し、
                  イノベーティブなプロダクトを生み出す。
                  それがTech.SummerCampです。
                </p>
              </section>
              
              <section className="about-section">
                <h2>// TARGET</h2>
                <div className="target-grid">
                  <div className="target-item">
                    <h3>エンジニア歴2年以上</h3>
                    <p>実務レベルの開発経験を持つ学生</p>
                  </div>
                  <div className="target-item">
                    <h3>ハッカソン経験者</h3>
                    <p>複数回参加または受賞経験がある学生</p>
                  </div>
                  <div className="target-item">
                    <h3>インターン経験者</h3>
                    <p>企業での実務経験を持つ学生</p>
                  </div>
                  <div className="target-item">
                    <h3>プロダクトリリース経験</h3>
                    <p>実際にユーザーが使うサービスを作った学生</p>
                  </div>
                  <div className="target-item">
                    <h3>技術カンファレンス登壇</h3>
                    <p>勉強会やカンファレンスで発表経験がある学生</p>
                  </div>
                  <div className="target-item">
                    <h3>チームリーダー経験</h3>
                    <p>技術力でチームを牽引できる学生</p>
                  </div>
                </div>
              </section>
              
              <section className="about-section">
                <h2>// EVENT DETAILS</h2>
                <div className="details-grid">
                  <div className="detail-item">
                    <h3>開催日程</h3>
                    <p>2025年9月20日(土) - 23日(火・祝)</p>
                  </div>
                  <div className="detail-item">
                    <h3>開催形式</h3>
                    <p>大阪会場 + オンライン（ハイブリッド）</p>
                  </div>
                  <div className="detail-item">
                    <h3>参加人数</h3>
                    <p>60-80名（選考あり）</p>
                  </div>
                  <div className="detail-item">
                    <h3>チーム編成</h3>
                    <p>4-5名 / チーム</p>
                  </div>
                  <div className="detail-item">
                    <h3>開発時間</h3>
                    <p>48時間（2日間×24時間）</p>
                  </div>
                  <div className="detail-item">
                    <h3>賞金総額</h3>
                    <p>40万円</p>
                  </div>
                </div>
              </section>
              
              <section className="about-section">
                <h2>// PRIZES</h2>
                <div className="prizes">
                  <div className="prize-item">
                    <h3 className="prize-rank">1st PLACE</h3>
                    <p className="prize-amount">¥300,000</p>
                  </div>
                  <div className="prize-item">
                    <h3 className="prize-rank">2nd PLACE</h3>
                    <p className="prize-amount">¥100,000</p>
                  </div>
                </div>
              </section>
              
              <section className="about-section">
                <h2>// PAST WINNERS</h2>
                <div className="winners">
                  <div className="winner-item">
                    <h3>2024年度 最優秀賞</h3>
                    <h4>「ALL IN」</h4>
                    <p>全てのチャットアプリの通知を統合するサービス。
                    Slack、Discord、Teams等の通知を一元管理し、
                    AIが重要度を判定して最適なタイミングで通知。</p>
                  </div>
                  <div className="winner-item">
                    <h3>2024年度 優秀賞</h3>
                    <h4>「CallJourney」</h4>
                    <p>飲食店の電話予約を完全自動化するサービス。
                    音声認識と自然言語処理により、人間と遜色ない
                    自然な会話で予約対応を実現。</p>
                  </div>
                </div>
              </section>
            </div>
            
            <div className="hero-code">
              <Logo size="large" showYear={false} />
            </div>
            
            <div className="hero-actions">
              <Link to="/2025/entry" className="btn btn-primary">
                <span className="btn-prefix">[</span>
                ENTRY
                <span className="btn-suffix">]</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="news-preview section">
        <div className="container">
          <h2 className="section-title">
            <span className="glitch" data-text="// LATEST NEWS">// LATEST NEWS</span>
          </h2>
          
          <div className="news-grid">
            <article className="news-card">
              <div className="news-header">
                <time className="news-date">2025.01.15</time>
                <span className="news-tag">ANNOUNCEMENT</span>
              </div>
              <h3 className="news-title">
                <Link to="/2025/news">Tech.SummerCamp 2025 開催決定</Link>
              </h3>
              <p className="news-excerpt">
                2025年度のTech.SummerCampの開催が正式に決定しました。今年も最高峰の学生エンジニア体験をお届けします。
              </p>
            </article>
            
            <article className="news-card">
              <div className="news-header">
                <time className="news-date">2025.01.15</time>
                <span className="news-tag">WEBSITE</span>
              </div>
              <h3 className="news-title">
                <Link to="/2025/news">公式サイトオープン</Link>
              </h3>
              <p className="news-excerpt">
                Tech.SummerCamp 2025の公式サイトがオープンしました。最新情報をチェックして、エントリーに備えましょう。
              </p>
            </article>
          </div>
          
          <div className="news-more">
            <Link to="/2025/news" className="news-more-btn">
              <span className="btn-prefix">[</span>
              VIEW ALL NEWS
              <span className="btn-suffix">]</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;