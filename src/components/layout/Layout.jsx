import { Outlet, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Logo from '../common/Logo';
import './Layout.css';

const Layout = ({ year }) => {
  const [showNoise, setShowNoise] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowNoise(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="layout">
      {showNoise && <div className="noise" />}
      
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Link to={`/${year}`} className="header-logo-link">
              <Logo size="header" showYear={false} />
            </Link>
            
            <Navigation year={year} />
          </div>
        </div>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;