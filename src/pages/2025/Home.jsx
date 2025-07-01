import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';
import './Home.css';

const Home = () => {

  return (
    <div className="home">
      <section className="hero section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-logo">
              <Logo size="large" showYear={true} />
            </div>
            
            <p className="hero-subtitle glitch" data-text="学生エンジニアが得られる体験の最高峰">
              学生エンジニアが得られる体験の最高峰
            </p>
            
            <div className="hero-info">
              <div className="terminal-box">
                <p>{'> '} Date: 2025.09.20(Sat) - 23(Tue)</p>
                <p>{'> '} Location: Osaka + Online</p>
                <p>{'> '} Participants: 60-80 students</p>
                <p>{'> '} Prize: ¥300,000 (1st), ¥100,000 (2nd)</p>
              </div>
            </div>
            
            <div className="hero-actions">
              <Link to="/2025/entry" className="btn btn-primary">
                <span className="btn-prefix">[</span>
                ENTRY
                <span className="btn-suffix">]</span>
              </Link>
              <Link to="/2025/about" className="btn btn-secondary">
                <span className="btn-prefix">[</span>
                LEARN MORE
                <span className="btn-suffix">]</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="features section">
        <div className="container">
          <h2 className="section-title">
            <span className="glitch" data-text="// FEATURES">// FEATURES</span>
          </h2>
          
          <div className="features-grid">
            <div className="feature-card">
              <h3>48 Hours Development</h3>
              <p>2日間×24時間の集中開発期間。限界まで技術に没頭する体験。</p>
            </div>
            
            <div className="feature-card">
              <h3>Top Engineers Only</h3>
              <p>全国から集まる中・上級者のみ。ハイレベルな環境での切磋琢磨。</p>
            </div>
            
            <div className="feature-card">
              <h3>¥400,000 Total Prize</h3>
              <p>最優秀賞30万円、優秀賞10万円。実力に見合った評価を。</p>
            </div>
            
            <div className="feature-card">
              <h3>Hybrid Event</h3>
              <p>大阪会場＋オンライン参加。全国どこからでも参加可能。</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="news-preview section">
        <div className="container">
          <h2 className="section-title">
            <span className="glitch" data-text="// LATEST NEWS">// LATEST NEWS</span>
          </h2>
          
          <div className="news-list">
            <article className="news-item">
              <time className="news-date">2025.01.15</time>
              <h3 className="news-title">
                <Link to="/2025/news">Tech.SummerCamp 2025 開催決定</Link>
              </h3>
            </article>
            
            <article className="news-item">
              <time className="news-date">2025.01.15</time>
              <h3 className="news-title">
                <Link to="/2025/news">公式サイトオープン</Link>
              </h3>
            </article>
          </div>
          
          <Link to="/2025/news" className="more-link">
            {'> '} View all news
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;