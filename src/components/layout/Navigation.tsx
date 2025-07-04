import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Navigation – ヘッダー内の PC / Mobile 共用ナビゲーション
 * -----------------------------------------------------------
 * - PC: 横並びメニュー
 * - Mobile: ハンバーガー → スライドイン・ドロワー
 *
 * Tailwind CSS で完結。外部 CSS / JS 依存なし。
 */
interface NavigationProps {
  year: string;
}

interface NavItem {
  path: string;
  label: string;
}

const Navigation = ({ year }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // 年度ごとにナビ項目を切り替え
  const navItems: NavItem[] =
    year === '2025'
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

  // Body スクロールロック
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  return (
    <nav className="font-mono relative z-[10000]">
      {/* ─────────── ハンバーガー ─────────── */}
      <button
        type="button"
        aria-label="Toggle navigation menu"
        onClick={toggle}
        className="flex md:hidden flex-col justify-center items-center w-10 h-10 gap-1.5 relative z-[10001]"
      >
        {/* 3 本線 → × 変形 */}
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>

      {/* ─────────── PC メニュー ─────────── */}
      <ul className="hidden md:flex items-center gap-6 lg:gap-8">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={`/${year}/${item.path}`}
              end={item.path === ''}
              className={({ isActive }) =>
                `relative text-xs lg:text-sm font-medium tracking-wider uppercase transition-colors duration-200
                 ${isActive ? 'text-white' : 'text-white/60 hover:text-white'}
                 after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
                 after:w-full after:h-px after:bg-white after:origin-left after:scale-x-0 after:transition-transform after:duration-300
                 ${isActive ? 'after:scale-x-100' : 'hover:after:scale-x-100'}`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* ─────────── Overlay ─────────── */}
      <div
        className={`fixed inset-0 bg-black/60 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={close}
      />

      {/* ─────────── Mobile ドロワー ─────────── */}
      <aside
        role="dialog"
        aria-modal="true"
        className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-black pt-20 px-6 transition-transform duration-300 md:hidden z-[10000]
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <ul className="flex flex-col gap-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={`/${year}/${item.path}`}
                end={item.path === ''}
                onClick={close}
                className={({ isActive }) =>
                  `block text-base font-medium tracking-wider uppercase transition-colors duration-200
                   ${isActive ? 'text-white' : 'text-white/90 hover:text-white'}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>
    </nav>
  );
};

export default Navigation;
