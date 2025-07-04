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
      
      <header className="fixed top-0 left-0 right-0 bg-black/[0.98] backdrop-blur-[10px] z-[9999] py-2 md:py-3 lg:py-4 h-auto overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center overflow-hidden h-12 md:h-14 lg:h-16">
            <Link 
              to={`/${year}`} 
              className="flex items-center transition-opacity duration-200 relative z-0 flex-shrink-0 overflow-hidden h-full hover:opacity-80"
            >
              <Logo size="header" showYear={false} />
            </Link>
            
            <Navigation year={year} />
          </div>
        </div>
      </header>

      <main className="flex-1 mt-20 md:mt-[5rem] lg:mt-24 relative">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;