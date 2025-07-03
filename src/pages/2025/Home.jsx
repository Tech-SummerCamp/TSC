import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/common/Logo';
import NewsCard from '../../components/common/NewsCard';
import SectionTitle from '../../components/common/SectionTitle';
import GridItem from '../../components/home/GridItem';
import PrizeItem from '../../components/home/PrizeItem';
import WinnerItem from '../../components/home/WinnerItem';
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
    <div className="home" style={{ width: '100%', overflowX: 'hidden' }}>
      <section className="hero section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-logo">
              <img src="/techsummercamp_logo.png" alt="Tech.SummerCamp Logo" className="main-logo" />
            </div>
            <div className="hero-tagline">
              <h1 className="main-tagline typewriter">
                <span className="typewriter-text">
                  {typedText || '\u00A0'}
                </span>
                <span className="typewriter-cursor" style={{ visibility: showCursor ? 'visible' : 'hidden' }}>|</span>
              </h1>
            </div>
            
            
            <div className="about-content">
              <section className="about-section hero-description">
                <p className="description-main">
                  Tech.SummerCampは、全国から選ばれた中・上級者の学生エンジニアが集まる、<br />
                  日本最高峰の学生ハッカソンです。
                </p>
                <p className="description-sub">
                  48時間という限られた時間の中で、技術力の限界に挑戦し、<br />
                  イノベーティブなプロダクトを生み出す。<br />
                  それがTech.SummerCampです。
                </p>
                <div className="hero-actions prominent-entry">
                  <Link to="/2025/entry" className="mega-entry-btn">
                    <span className="btn-glow"></span>
                    <span className="btn-content">
                      <span className="btn-text">ENTRY NOW</span>
                      <span className="btn-arrow">→</span>
                    </span>
                  </Link>
                </div>
              </section>
              
              <section className="about-section">
                <h2>// TARGET</h2>
                <div className="target-grid">
                  <GridItem
                    title="エンジニア歴2年以上"
                    description="実務レベルの開発経験を持つ学生"
                    type="target"
                  />
                  <GridItem
                    title="ハッカソン経験者"
                    description="複数回参加または受賞経験がある学生"
                    type="target"
                  />
                  <GridItem
                    title="インターン経験者"
                    description="企業での実務経験を持つ学生"
                    type="target"
                  />
                  <GridItem
                    title="プロダクトリリース経験"
                    description="実際にユーザーが使うサービスを作った学生"
                    type="target"
                  />
                  <GridItem
                    title="技術カンファレンス登壇"
                    description="勉強会やカンファレンスで発表経験がある学生"
                    type="target"
                  />
                  <GridItem
                    title="チームリーダー経験"
                    description="技術力でチームを牽引できる学生"
                    type="target"
                  />
                </div>
              </section>
              
              <section className="about-section">
                <h2>// EVENT DETAILS</h2>
                <div className="details-grid">
                  <GridItem
                    title="開催日程"
                    description="2025年9月20日(土) - 23日(火・祝)"
                    type="detail"
                  />
                  <GridItem
                    title="開催形式"
                    description="大阪会場"
                    type="detail"
                  />
                  <GridItem
                    title="参加人数"
                    description="60-80名"
                    type="detail"
                  />
                  <GridItem
                    title="チーム編成"
                    description="最大10名 / チーム"
                    type="detail"
                  />
                  <GridItem
                    title="コードフリーズ"
                    description="9月22日(月) 18:00"
                    type="detail"
                  />
                  <GridItem
                    title="賞金総額"
                    description="40万円"
                    type="detail"
                  />
                </div>
              </section>
              
              <section className="about-section">
                <h2>// PRIZES</h2>
                <div className="prizes">
                  <PrizeItem
                    rank="1st"
                    amount={300000}
                    iconSrc="/kin.svg"
                    type="first"
                  />
                  <PrizeItem
                    rank="2nd"
                    amount={100000}
                    iconSrc="/gin.svg"
                    type="second"
                  />
                </div>
              </section>
              
              <section className="about-section">
                <h2>// PAST WINNERS</h2>
                <div className="winners">
                  <WinnerItem
                    year="2024"
                    award="最優秀賞"
                    title="ALL IN"
                    description="全てのチャットアプリの通知を統合するサービス。Slack、Discord、Teams等の通知を一元管理し、AIが重要度を判定して最適なタイミングで通知。"
                  />
                  <WinnerItem
                    year="2024"
                    award="優秀賞"
                    title="CallJourney"
                    description="飲食店の電話予約を完全自動化するサービス。音声認識と自然言語処理により、人間と遜色ない自然な会話で予約対応を実現。"
                  />
                </div>
              </section>
            </div>
            
            <div className="hero-code">
              <Logo size="large" showYear={false} />
            </div>
            
          </div>
        </div>
      </section>
      
      <section className="news-preview section">
        <div className="container">
          <SectionTitle>// LATEST NEWS</SectionTitle>
          
          <div className="news-grid">
            <NewsCard
              date="2025.01.15"
              tag="ANNOUNCEMENT"
              title="Tech.SummerCamp 2025 開催決定"
              excerpt="2025年度のTech.SummerCampの開催が正式に決定しました。今年も最高峰の学生エンジニア体験をお届けします。"
              tagType="announcement"
            />
            
            <NewsCard
              date="2025.01.15"
              tag="WEBSITE"
              title="公式サイトオープン"
              excerpt="Tech.SummerCamp 2025の公式サイトがオープンしました。最新情報をチェックして、エントリーに備えましょう。"
              tagType="website"
            />
          </div>
          
          <div className="news-more">
            <Link to="/2025/news" className="news-more-btn">
              VIEW ALL NEWS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;