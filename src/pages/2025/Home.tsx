import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/common/Logo';
import NewsCard from '../../components/common/NewsCard';
import SectionTitle from '../../components/common/SectionTitle';
import GridItem from '../../components/home/GridItem';
import PrizeItem from '../../components/home/PrizeItem';
import WinnerItem from '../../components/home/WinnerItem';

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
    <div className="w-full overflow-x-hidden">
      <section className="min-h-[75vh] md:min-h-[80vh] flex items-center relative overflow-hidden py-6 md:py-8 w-full max-w-[100vw]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full box-border">
          <div className="relative z-[2]">
            <div className="flex justify-center items-center mb-8 md:mb-12 lg:mb-16 mt-4 md:mt-8 text-center py-4 md:py-6 lg:py-8">
              <img src="/techsummercamp_logo.png" alt="Tech.SummerCamp Logo" className="max-w-[320px] md:max-w-[400px] lg:max-w-[600px] h-auto block" />
            </div>
            <div className="mb-6 md:mb-8 lg:mb-12 text-center w-full overflow-visible flex justify-center px-2 md:px-4">
              <h1 className="text-[clamp(0.9rem,4.5vw,3.8rem)] md:text-[clamp(1.1rem,4.5vw,1.8rem)] lg:text-[clamp(1.2rem,5vw,3.8rem)] font-[800] text-white font-mono tracking-[0.02em] relative whitespace-normal text-center min-h-0 md:min-h-[2.8em] inline-block w-full">
                <span className="inline max-w-full box-border text-center">
                  {typedText || '\u00A0'}
                </span>
                <span className="text-terminal-green font-normal animate-blink ml-[2px] inline align-baseline" style={{ visibility: showCursor ? 'visible' : 'hidden' }}>|</span>
              </h1>
            </div>
            
            
            <div className="max-w-[1000px] mx-auto mb-12">
              <section className="mb-16 text-center py-12 max-w-[800px] mx-auto">
                <p className="text-base md:text-lg lg:text-[1.4rem] leading-[1.8] md:leading-[2] lg:leading-[2.2] mb-6 md:mb-8 font-semibold tracking-[0.08em] text-center text-white">
                  Tech.SummerCampは、全国から選ばれた中・上級者の学生エンジニアが集まる、<br />
                  日本最高峰の学生ハッカソンです。
                </p>
                <p className="text-base md:text-lg lg:text-[1.4rem] leading-[1.8] md:leading-[2] lg:leading-[2.2] mb-6 md:mb-8 font-medium tracking-[0.08em] text-center text-white/90">
                  48時間という限られた時間の中で、技術力の限界に挑戦し、<br />
                  イノベーティブなプロダクトを生み出す。<br />
                  それがTech.SummerCampです。
                </p>
                <div className="flex gap-8 flex-wrap justify-center mb-4 md:mb-8 lg:mb-12 mt-8 md:mt-12">
                  <Link to="/2025/entry" className="relative inline-flex items-center justify-center py-6 px-12 md:py-6 md:px-12 lg:py-8 lg:px-20 text-xl md:text-xl lg:text-[2rem] font-[900] font-mono uppercase tracking-[0.2em] bg-transparent text-white border-[3px] border-white overflow-hidden transition-all duration-300 cursor-pointer min-w-[280px] md:min-w-[280px] lg:min-w-[400px] no-underline shadow-none hover:-translate-y-[5px] hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)] hover:text-black hover:border-white active:-translate-y-[2px] active:scale-[1.02] before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-white before:transition-[left] before:duration-[400ms] before:z-[-1] hover:before:left-0">
                    <span className="absolute -top-[2px] -left-[2px] -right-[2px] -bottom-[2px] bg-transparent z-[-1] opacity-0"></span>
                    <span className="flex items-center gap-4 z-[1]">
                      <span className="text-xl md:text-xl lg:text-[2rem] drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]">ENTRY NOW</span>
                      <span className="text-2xl md:text-2xl lg:text-[2.5rem] animate-[arrow-move_1.5s_ease-in-out_infinite]">→</span>
                    </span>
                  </Link>
                </div>
              </section>
              
              <section className="mb-16">
                <h2 className="font-mono text-xl md:text-2xl lg:text-[2rem] mb-4 md:mb-6 lg:mb-8 text-terminal-green text-center">// TARGET</h2>
                <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3 md:gap-6 lg:gap-8">
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
              
              <section className="mb-16">
                <h2 className="font-mono text-xl md:text-2xl lg:text-[2rem] mb-4 md:mb-6 lg:mb-8 text-terminal-green text-center">// EVENT DETAILS</h2>
                <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3 md:gap-6 lg:gap-8">
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
              
              <section className="mb-16">
                <h2 className="font-mono text-xl md:text-2xl lg:text-[2rem] mb-4 md:mb-6 lg:mb-8 text-terminal-green text-center">// PRIZES</h2>
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 justify-center items-center md:items-start flex-wrap px-2 md:px-0">
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
              
              <section className="mb-16">
                <h2 className="font-mono text-xl md:text-2xl lg:text-[2rem] mb-4 md:mb-6 lg:mb-8 text-terminal-green text-center">// PAST WINNERS</h2>
                <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 px-2 md:px-0">
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
            
            <div className="my-4 md:my-8 lg:my-12 flex justify-center px-2 md:px-4">
              <Logo size="large" />
            </div>
            
          </div>
        </div>
      </section>
      
      <section className="bg-[#1a1a1a] pb-0">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full box-border py-10 md:py-12 lg:py-16">
          <SectionTitle>// LATEST NEWS</SectionTitle>
          
          <div className="grid grid-cols-1 lg:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8 lg:mb-12 px-2 md:px-0">
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
          
          <div className="text-center">
            <Link to="/2025/news" className="inline-flex items-center gap-[0.3rem] py-3 px-6 font-mono text-[0.85rem] font-semibold tracking-[0.05em] text-white border-2 border-white no-underline transition-all duration-300 bg-transparent relative overflow-hidden hover:bg-white hover:border-white hover:text-black hover:-translate-y-[2px]">
              VIEW ALL NEWS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;