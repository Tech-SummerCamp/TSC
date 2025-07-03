import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <Link to="/2025">
                <img 
                  src="/tsc-horizontal.svg" 
                  alt="Tech Summer Camp - 学生エンジニアが得られる体験の最高峰" 
                  className="footer-tsc-logo"
                />
              </Link>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Archive</h4>
            <ul className="footer-links">
              <li><Link to="/2025">2025</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Related Links</h4>
            <ul className="footer-links">
              <li><a href="https://x.com/tech_summercamp" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="mailto:tech-summercamp@nxtend.or.jp">Email</a></li>
              <li><span className="footer-link-disabled">プライバシーポリシー</span></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="ascii-art">
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