import { Link } from 'react-router-dom';

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
    <div className="pt-8">
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-mono font-bold text-center mb-12 md:mb-16">
            <span className="glitch" data-text="GALLERY 2024">GALLERY 2024</span>
          </h1>
          
          <div className="max-w-2xl mx-auto mb-16 text-center text-lg terminal-box">
            <p className="text-green-400 mb-2">{'> '} Tech.SummerCamp 2024 Memories</p>
            <p className="text-green-400">{'> '} 48時間の軌跡</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {galleryImages.map((image) => (
              <div key={image.id} className="bg-gray-900 border border-gray-700 overflow-hidden transition-all duration-300 hover:border-green-400 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,255,65,0.2)]">
                <div className="aspect-video bg-gradient-to-br from-gray-900 to-black flex items-center justify-center relative overflow-hidden before:absolute before:inset-0 before:bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.05)_10px,rgba(255,255,255,0.05)_20px)]">
                  <div className="text-center z-10 relative">
                    <div className="text-5xl mb-4 opacity-30">📸</div>
                    <div className="font-mono text-lg text-green-400 opacity-50">IMAGE</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg mb-2">{image.title}</h3>
                  <p className="text-sm leading-relaxed mb-4 opacity-90">{image.description}</p>
                  <span className="font-mono text-xs text-green-400 uppercase px-2 py-1 border border-green-400 bg-green-400/10">[{image.category}]</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mb-20">
            <h2 className="font-mono text-3xl mb-12 text-green-400 text-center">// HIGHLIGHTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-4 p-6 bg-gray-900 border border-gray-700 transition-all duration-300 hover:border-green-400 hover:translate-x-2">
                  <span className="font-mono text-3xl font-bold text-green-400 opacity-30">{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-lg font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-20">
            <div className="text-center p-8 bg-gray-900 border border-gray-700 transition-all duration-300 hover:border-green-400 hover:scale-105">
              <div className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold text-green-400 mb-2">2,500+</div>
              <div className="text-base opacity-90">写真撮影</div>
            </div>
            <div className="text-center p-8 bg-gray-900 border border-gray-700 transition-all duration-300 hover:border-green-400 hover:scale-105">
              <div className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold text-green-400 mb-2">48</div>
              <div className="text-base opacity-90">開発時間</div>
            </div>
            <div className="text-center p-8 bg-gray-900 border border-gray-700 transition-all duration-300 hover:border-green-400 hover:scale-105">
              <div className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold text-green-400 mb-2">11</div>
              <div className="text-base opacity-90">チーム</div>
            </div>
            <div className="text-center p-8 bg-gray-900 border border-gray-700 transition-all duration-300 hover:border-green-400 hover:scale-105">
              <div className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold text-green-400 mb-2">∞</div>
              <div className="text-base opacity-90">思い出</div>
            </div>
          </div>
          
          <div className="mb-20">
            <h2 className="font-mono text-3xl mb-12 text-green-400 text-center">// TESTIMONIALS</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-gray-900 border-l-4 border-l-green-400 relative">
                <span className="absolute top-4 left-4 text-5xl text-green-400 opacity-30 font-serif">“</span>
                <blockquote className="text-base leading-relaxed mb-4 pl-8 italic opacity-90">
                  「48時間という短い時間でここまでのものが作れるとは思いませんでした。
                  全国から集まった仲間と一緒に開発できて、本当に貴重な経験でした。」
                </blockquote>
                <cite className="font-mono text-sm text-green-400 not-italic">- 参加者 A</cite>
              </div>
              
              <div className="p-8 bg-gray-900 border-l-4 border-l-green-400 relative">
                <span className="absolute top-4 left-4 text-5xl text-green-400 opacity-30 font-serif">“</span>
                <blockquote className="text-base leading-relaxed mb-4 pl-8 italic opacity-90">
                  「技術的なレベルの高さに驚きました。他のチームの作品を見て、
                  もっと頑張らなければと強く感じました。来年も絶対参加したいです。」
                </blockquote>
                <cite className="font-mono text-sm text-green-400 not-italic">- 参加者 B</cite>
              </div>
              
              <div className="p-8 bg-gray-900 border-l-4 border-l-green-400 relative">
                <span className="absolute top-4 left-4 text-5xl text-green-400 opacity-30 font-serif">“</span>
                <blockquote className="text-base leading-relaxed mb-4 pl-8 italic opacity-90">
                  「チームメンバーとの協力の大切さを学びました。
                  一人では絶対に作れなかったものを、みんなで作り上げることができました。」
                </blockquote>
                <cite className="font-mono text-sm text-green-400 not-italic">- 参加者 C</cite>
              </div>
            </div>
          </div>
          
          <div className="text-center flex justify-center gap-12 flex-wrap">
            <Link to="/2024/results" className="font-mono text-lg px-8 py-4 border border-gray-600 transition-all duration-300 inline-block hover:border-green-400 hover:bg-green-400/10 hover:-translate-y-0.5">
              {'> '} View Results
            </Link>
            <Link to="/2025" className="font-mono text-lg px-8 py-4 bg-green-400 text-black border border-green-400 transition-all duration-300 inline-block hover:bg-white hover:text-black">
              {'> '} Join 2025
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;