import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ year }) => {
  const navItems = year === '2025' 
    ? [
        { path: '', label: 'HOME' },
        { path: 'about', label: 'ABOUT' },
        { path: 'schedule', label: 'SCHEDULE' },
        { path: 'entry', label: 'ENTRY' },
        { path: 'news', label: 'NEWS' },
        { path: 'faq', label: 'FAQ' },
      ]
    : [
        { path: '', label: 'RESULTS' },
        { path: 'gallery', label: 'GALLERY' },
      ];

  return (
    <nav className="navigation">
      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.path} className="nav-item">
            <NavLink 
              to={`/${year}/${item.path}`}
              className={({ isActive }) => 
                `nav-link ${isActive ? 'active' : ''}`
              }
              end={item.path === ''}
            >
              <span className="nav-prefix">{'>'}</span>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;