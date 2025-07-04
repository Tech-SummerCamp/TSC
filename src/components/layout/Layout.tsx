import { Outlet, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Logo from '../common/Logo';

interface LayoutProps {
  year: string;
}

const Layout = ({ year }: LayoutProps) => {
  const [showNoise, setShowNoise] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowNoise(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      {showNoise && (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-[0.02] z-[1] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.03)_2px,rgba(255,255,255,0.03)_4px)] animate-[noise_0.2s_steps(2)_infinite]" />
      )}
      
      <header className="fixed top-0 inset-x-0 h-20 bg-neutral-900/90 backdrop-blur-md z-[9999] shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-4 md:px-6">
          {/* ロゴ */}
          <Link to={`/${year}`} className="flex items-center gap-2 group">
            <Logo size="header" showYear={false} />
          </Link>

          {/* ナビゲーション */}
          <Navigation year={year} />
        </div>
      </header>

      <main className="flex-1 mt-24 md:mt-28 lg:mt-32 relative">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;