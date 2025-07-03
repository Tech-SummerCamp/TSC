import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ year }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = year === '2025' 
    ? [
        { path: '', label: 'HOME' },
        { path: 'schedule', label: 'SCHEDULE' },
        { path: 'news', label: 'NEWS' },
        { path: 'faq', label: 'FAQ' },
      ]
    : [
        { path: '', label: 'RESULTS' },
        { path: 'gallery', label: 'GALLERY' },
      ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navigation">
      <button 
        className="mobile-menu-toggle"
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      <ul className={`nav-list ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        {navItems.map((item) => (
          <li key={item.path} className="nav-item">
            <NavLink 
              to={`/${year}/${item.path}`}
              className={({ isActive }) => 
                `nav-link ${isActive ? 'active' : ''}`
              }
              end={item.path === ''}
              onClick={closeMobileMenu}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;