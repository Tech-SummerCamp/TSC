import { Link } from 'react-router-dom';
import TSCHorizontalSVG from "/tsc-horizontal.svg";

const Footer = () => {
  return (
    <footer className="bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.03)_2px,rgba(255,255,255,0.03)_4px)] border-t border-gray-300 md:pt-8 md:pb-2">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] mb-8 md:mb-12">
          <div className="footer-section md:mb-0">
            <div className="flex items-center md:h-0 md:overflow-visible">
              <Link to="/TSC">
                <img 
                  src={TSCHorizontalSVG} 
                  alt="Tech Summer Camp - 学生エンジニアが得られる体験の最高峰" 
                  className="h-32 md:h-40 w-auto brightness-[0.8] transition-all duration-200 md:translate-y-10 cursor-pointer hover:brightness-100"
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
                  X
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
                <a 
                  href="https://www.nxtend.or.jp/privacy-policy/"
                  target="_blank" 
                  className="text-sm opacity-80 transition-all duration-200 underline hover:opacity-100 hover:pl-2.5"
                >
                  プライバシーポリシー
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;