import { Link } from 'react-router-dom';
import './Gallery.css';

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      title: 'オープニングセレモニー',
      description: '48時間の開発がスタート',
      category: 'event'
    },
    {
      id: 2,
      title: '開発風景',
      description: '集中して開発に取り組む参加者たち',
      category: 'development'
    },
    {
      id: 3,
      title: 'チームミーティング',
      description: '戦略を練るチームメンバー',
      category: 'team'
    },
    {
      id: 4,
      title: '深夜の開発',
      description: '夜を徹して開発を続ける',
      category: 'development'
    },
    {
      id: 5,
      title: '最終発表会',
      description: '48時間の成果を発表',
      category: 'presentation'
    },
    {
      id: 6,
      title: '表彰式',
      description: '優秀な作品が表彰される',
      category: 'award'
    }
  ];

  const highlights = [
    '48時間連続開発',
    '11チームが参加',
    '革新的なアイデア',
    '技術の可能性',
    '仲間との絆',
    '忘れられない体験'
  ];

  return (
    <div className="gallery">
      <section className="section">
        <div className="container">
          <h1 className="page-title">
            <span className="glitch" data-text="GALLERY 2024">GALLERY 2024</span>
          </h1>
          
          <div className="gallery-intro terminal-box">
            <p>{'> '} Tech.SummerCamp 2024 Memories</p>
            <p>{'> '} 48時間の軌跡</p>
          </div>
          
          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <div key={image.id} className="gallery-item">
                <div className="image-placeholder">
                  <div className="placeholder-content">
                    <div className="placeholder-icon">📸</div>
                    <div className="placeholder-text">IMAGE</div>
                  </div>
                </div>
                <div className="image-info">
                  <h3 className="image-title">{image.title}</h3>
                  <p className="image-description">{image.description}</p>
                  <span className="image-category">[{image.category}]</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="highlights-section">
            <h2>// HIGHLIGHTS</h2>
            <div className="highlights-grid">
              {highlights.map((highlight, index) => (
                <div key={index} className="highlight-item">
                  <span className="highlight-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="highlight-text">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="gallery-stats">
            <div className="stat-item">
              <div className="stat-value">2,500+</div>
              <div className="stat-label">写真撮影</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">48</div>
              <div className="stat-label">開発時間</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">11</div>
              <div className="stat-label">チーム</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">∞</div>
              <div className="stat-label">思い出</div>
            </div>
          </div>
          
          <div className="testimonials">
            <h2>// TESTIMONIALS</h2>
            <div className="testimonial-grid">
              <div className="testimonial-item">
                <blockquote>
                  「48時間という短い時間でここまでのものが作れるとは思いませんでした。
                  全国から集まった仲間と一緒に開発できて、本当に貴重な経験でした。」
                </blockquote>
                <cite>- 参加者 A</cite>
              </div>
              
              <div className="testimonial-item">
                <blockquote>
                  「技術的なレベルの高さに驚きました。他のチームの作品を見て、
                  もっと頑張らなければと強く感じました。来年も絶対参加したいです。」
                </blockquote>
                <cite>- 参加者 B</cite>
              </div>
              
              <div className="testimonial-item">
                <blockquote>
                  「チームメンバーとの協力の大切さを学びました。
                  一人では絶対に作れなかったものを、みんなで作り上げることができました。」
                </blockquote>
                <cite>- 参加者 C</cite>
              </div>
            </div>
          </div>
          
          <div className="navigation-section">
            <Link to="/2024/results" className="nav-link">
              {'> '} View Results
            </Link>
            <Link to="/2025" className="nav-link primary">
              {'> '} Join 2025
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;