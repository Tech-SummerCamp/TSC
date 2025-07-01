import { Link } from 'react-router-dom';
import './Results.css';

const Results = () => {
  const winners = [
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

  const allProjects = [
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

  const stats = [
    { label: '参加者数', value: '48名' },
    { label: 'チーム数', value: '11チーム' },
    { label: '開発時間', value: '48時間' },
    { label: '提出作品', value: '11作品' }
  ];

  return (
    <div className="results">
      <section className="section">
        <div className="container">
          <h1 className="page-title">
            <span className="glitch" data-text="RESULTS 2024">RESULTS 2024</span>
          </h1>
          
          <div className="results-intro terminal-box">
            <p>{'> '} Tech.SummerCamp 2024 Results</p>
            <p>{'> '} 2024年9月21日-24日開催</p>
          </div>
          
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="winners-section">
            <h2>// WINNERS</h2>
            
            {winners.map((winner, index) => (
              <div key={index} className={`winner-card rank-${winner.rank}`}>
                <div className="winner-header">
                  <div className="winner-rank">
                    {winner.rank === 1 ? '🥇' : '🥈'} 
                    {winner.rank === 1 ? 'WINNER' : '2ND PLACE'}
                  </div>
                  <div className="winner-prize">{winner.prize}</div>
                </div>
                
                <h3 className="winner-title">「{winner.title}」</h3>
                <div className="winner-team">by {winner.team}</div>
                
                <p className="winner-description">{winner.description}</p>
                
                <div className="winner-tech">
                  <span className="tech-label">Tech Stack:</span>
                  <div className="tech-tags">
                    {winner.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="all-projects-section">
            <h2>// ALL PROJECTS</h2>
            
            <div className="projects-grid">
              {allProjects.map((project, index) => (
                <div key={index} className="project-card">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-team">{project.team}</div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag small">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="navigation-section">
            <Link to="/2024/gallery" className="nav-link">
              {'> '} View Gallery
            </Link>
            <Link to="/2025" className="nav-link primary">
              {'> '} Tech.SummerCamp 2025
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Results;