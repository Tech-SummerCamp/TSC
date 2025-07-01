import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4 className="footer-title">Tech.SummerCamp</h4>
            <p className="footer-tagline">学生エンジニアが得られる体験の最高峰</p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Archive</h4>
            <ul className="footer-links">
              <li><Link to="/2025">2025</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Contact</h4>
            <p className="footer-contact">info@tech-summercamp.jp</p>
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