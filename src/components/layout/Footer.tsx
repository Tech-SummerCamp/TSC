import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-300 pt-8 pb-4 md:pb-2 mt-8 md:mt-8">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 mb-8 md:mb-12">
          <div className="footer-section">
            <div className="flex items-center h-0 overflow-visible">
              <Link to="/2025">
                <img 
                  src="/tsc-horizontal.svg" 
                  alt="Tech Summer Camp - 学生エンジニアが得られる体験の最高峰" 
                  className="h-40 w-auto brightness-[0.8] transition-all duration-200 translate-y-10 cursor-pointer hover:brightness-100"
                />
              </Link>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="font-mono text-base mb-4 text-terminal-green">Related Links</h4>
            <ul className="list-none">
              <li className="mb-2">
                <a 
                  href="https://x.com/tech_summercamp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm opacity-80 transition-all duration-200 underline hover:opacity-100 hover:pl-2.5"
                >
                  Twitter
                </a>
              </li>
              <li className="mb-2">
                <a 
                  href="mailto:tech-summercamp@nxtend.or.jp"
                  className="text-sm opacity-80 transition-all duration-200 underline hover:opacity-100 hover:pl-2.5"
                >
                  Email
                </a>
              </li>
              <li className="mb-2">
                <span className="text-sm opacity-80 text-white cursor-pointer underline transition-all duration-200 hover:opacity-100 hover:pl-2.5">
                  プライバシーポリシー
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-white/10">
          <div className="font-mono text-[0.5rem] md:text-[0.7rem] text-gray-300 whitespace-pre leading-[1.2] opacity-50">
            {`
╔═══════════════════════════════════════════════════════════════════╗
║ © 2025 Tech.SummerCamp | All rights reserved | Build with <3      ║
╚═══════════════════════════════════════════════════════════════════╝
            `.trim()}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;