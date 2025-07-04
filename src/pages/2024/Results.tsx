import { Link } from 'react-router-dom';

interface Winner {
  rank: number;
  title: string;
  team: string;
  description: string;
  tech: string[];
  prize: string;
}

interface Project {
  team: string;
  title: string;
  description: string;
  tech: string[];
}

interface Stat {
  label: string;
  value: string;
}

const Results = () => {
  const winners: Winner[] = [
    {
      rank: 1,
      title: 'ALL IN',
      team: 'Team Alpha',
      description: '全てのチャットアプリの通知を統合するサービス。Slack、Discord、Teams等の通知を一元管理し、AIが重要度を判定して最適なタイミングで通知。',
      tech: ['React', 'Node.js', 'AI/ML', 'WebSocket'],
      prize: '¥300,000'
    },
    {
      rank: 2,
      title: 'CallJourney',
      team: 'Team Beta',
      description: '飲食店の電話予約を完全自動化するサービス。音声認識と自然言語処理により、人間と遜色ない自然な会話で予約対応を実現。',
      tech: ['Python', 'Speech API', 'NLP', 'FastAPI'],
      prize: '¥100,000'
    }
  ];

  const allProjects: Project[] = [
    {
      team: 'Team Gamma',
      title: 'EcoTracker',
      description: 'IoTセンサーとAIを活用した家庭用省エネシステム',
      tech: ['IoT', 'Python', 'TensorFlow', 'React']
    },
    {
      team: 'Team Delta',
      title: 'StudyBuddy',
      description: 'AR技術を使った革新的な学習支援アプリケーション',
      tech: ['Unity', 'AR Foundation', 'C#', 'Firebase']
    },
    {
      team: 'Team Epsilon',
      title: 'HealthSync',
      description: 'ウェアラブルデバイス連携による健康管理プラットフォーム',
      tech: ['Flutter', 'Dart', 'GraphQL', 'PostgreSQL']
    }
  ];

  const stats: Stat[] = [
    { label: '参加者数', value: '48名' },
    { label: 'チーム数', value: '11チーム' },
    { label: '開発時間', value: '48時間' },
    { label: '提出作品', value: '11作品' }
  ];

  return (
    <div className="pt-8">
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-mono font-bold text-center mb-12 md:mb-16">
            <span className="glitch" data-text="RESULTS 2024">RESULTS 2024</span>
          </h1>
          
          <div className="max-w-2xl mx-auto mb-16 text-center text-lg terminal-box">
            <p className="text-green-400 mb-2">{'> '} Tech.SummerCamp 2024 Results</p>
            <p className="text-green-400">{'> '} 2024年9月21日-24日開催</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-8 border border-gray-600 bg-white/2 transition-all duration-300 hover:border-green-400 hover:-translate-y-1 hover:bg-green-400/5">
                <div className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold text-green-400 mb-2">{stat.value}</div>
                <div className="text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="mb-20">
            <h2 className="font-mono text-3xl mb-12 text-green-400 text-center">// WINNERS</h2>
            
            {winners.map((winner, index) => (
              <div key={index} className="mb-12 p-12 bg-gray-900 border-2 border-gray-700 relative overflow-hidden transition-all duration-300 hover:border-green-400 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,255,65,0.2)] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-green-400 before:to-white before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300">
                <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
                  <div className="font-mono text-lg font-bold text-green-400">
                    {winner.rank === 1 ? '🥇' : '🥈'} 
                    {winner.rank === 1 ? 'WINNER' : '2ND PLACE'}
                  </div>
                  <div className="font-mono text-2xl font-bold text-white">{winner.prize}</div>
                </div>
                
                <h3 className="text-3xl md:text-4xl mb-2">「{winner.title}」</h3>
                <div className="font-mono text-green-400 mb-8 text-lg">by {winner.team}</div>
                
                <p className="text-lg leading-relaxed mb-8 opacity-90">{winner.description}</p>
                
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="font-mono text-green-400 text-sm">Tech Stack:</span>
                  <div className="flex gap-2 flex-wrap">
                    {winner.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="font-mono text-xs px-3 py-1 bg-white/10 border border-gray-600 rounded transition-all duration-200 hover:border-green-400 hover:bg-green-400/10">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mb-20">
            <h2 className="font-mono text-3xl mb-12 text-green-400 text-center">// ALL PROJECTS</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProjects.map((project, index) => (
                <div key={index} className="p-8 bg-gray-900 border border-gray-700 transition-all duration-300 hover:border-green-400 hover:-translate-y-1">
                  <h3 className="text-xl mb-2">{project.title}</h3>
                  <div className="font-mono text-green-400 text-sm mb-4">{project.team}</div>
                  <p className="text-sm leading-relaxed mb-6 opacity-90">{project.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="font-mono text-xs px-2 py-1 bg-white/10 border border-gray-600 rounded transition-all duration-200 hover:border-green-400 hover:bg-green-400/10">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center flex justify-center gap-12 flex-wrap">
            <Link to="/2024/gallery" className="font-mono text-lg px-8 py-4 border border-gray-600 transition-all duration-300 inline-block hover:border-green-400 hover:bg-green-400/10 hover:-translate-y-0.5">
              {'> '} View Gallery
            </Link>
            <Link to="/2025" className="font-mono text-lg px-8 py-4 bg-green-400 text-black border border-green-400 transition-all duration-300 inline-block hover:bg-white hover:text-black">
              {'> '} Tech.SummerCamp 2025
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Results;