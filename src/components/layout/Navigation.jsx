import { useState } from 'react';
import { NavLink } from 'react-router-dom';

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
    <nav className="font-mono relative z-[100] flex-shrink-0 ml-auto">
      <button 
        className="hidden md:hidden flex-col gap-1 bg-transparent border-none cursor-pointer p-2 relative z-[101] 
                   max-[768px]:flex"
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation menu"
      >
        <span className="w-6 h-0.5 bg-white transition-all duration-300 origin-center hover:bg-terminal-green"></span>
        <span className="w-6 h-0.5 bg-white transition-all duration-300 origin-center hover:bg-terminal-green"></span>
        <span className="w-6 h-0.5 bg-white transition-all duration-300 origin-center hover:bg-terminal-green"></span>
      </button>

      <ul className={`flex gap-2 lg:gap-4 list-none justify-end
                      max-[768px]:fixed max-[768px]:top-0 max-[768px]:h-screen max-[768px]:w-[70vw] max-[768px]:max-w-[300px]
                      max-[768px]:bg-gradient-to-br max-[768px]:from-black max-[768px]:to-gray-900
                      max-[768px]:flex-col max-[768px]:justify-center max-[768px]:items-center
                      max-[768px]:gap-6 lg:max-[768px]:gap-10 max-[768px]:transition-all max-[768px]:duration-300
                      max-[768px]:border-l max-[768px]:border-terminal-green/20 max-[768px]:backdrop-blur-[10px]
                      max-[480px]:w-screen max-[480px]:gap-8
                      ${isMobileMenuOpen 
                        ? 'max-[768px]:right-0' 
                        : 'max-[768px]:-right-full max-[480px]:-right-[100vw]'
                      }`}>
        {navItems.map((item) => (
          <li key={item.path} className="list-none">
            <NavLink 
              to={`/${year}/${item.path}`}
              className={({ isActive }) => 
                `flex items-center gap-2 px-2 py-1 lg:px-3 lg:py-1.5 
                 text-[0.75rem] lg:text-[0.85rem] tracking-wider
                 transition-all duration-200 relative text-white font-medium
                 hover:text-terminal-green
                 max-[768px]:text-base lg:max-[768px]:text-xl max-[768px]:px-6 lg:max-[768px]:px-10
                 max-[768px]:py-3 lg:max-[768px]:py-5 max-[768px]:w-[90%] max-[768px]:justify-center
                 max-[768px]:border-b max-[768px]:border-white/10 max-[768px]:transition-all
                 max-[768px]:duration-300 max-[768px]:rounded max-[768px]:mx-1
                 max-[768px]:hover:bg-terminal-green/15 max-[768px]:hover:translate-x-1
                 max-[768px]:hover:border-terminal-green/30
                 max-[480px]:text-[1.1rem] max-[480px]:px-8 max-[480px]:py-4 max-[480px]:w-[85%]
                 max-[480px]:rounded-md
                 ${isActive ? 'text-terminal-green' : ''}`
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