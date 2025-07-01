import { useState, useEffect } from 'react';
import './Logo.css';

const Logo = ({ size = 'large', showYear = true }) => {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (size === 'header') {
      // Header version shows immediately
      setTypedText('Tech.SummerCamp 2025');
      setShowCursor(false);
      return;
    }

    const lines = [
      'const hackathon = {',
      '  name: "Tech.SummerCamp",',
      '  year: 2025,',
      '  status: "loading...",',
      '  participants: 80,',
      '  prize: "¥400,000"',
      '};',
      '',
      '> Status: Ready for deployment'
    ];

    let lineIndex = 0;
    let charIndex = 0;
    let currentText = '';
    
    const typeWriter = () => {
      if (lineIndex < lines.length) {
        if (charIndex < lines[lineIndex].length) {
          currentText += lines[lineIndex][charIndex];
          setTypedText(currentText);
          charIndex++;
          setTimeout(typeWriter, 50 + Math.random() * 50); // Variable speed for realism
        } else {
          currentText += '\n';
          setTypedText(currentText);
          lineIndex++;
          charIndex = 0;
          setTimeout(typeWriter, 200); // Pause between lines
        }
      } else {
        // Typing complete, hide cursor after a delay
        setTimeout(() => setShowCursor(false), 1000);
      }
    };

    const timer = setTimeout(typeWriter, 500); // Initial delay
    return () => clearTimeout(timer);
  }, [size]);

  if (size === 'header') {
    return (
      <div className={`logo-component ${size}`}>
        <div className="logo-header-text">
          <span className="logo-tech">Tech</span>
          <span className="logo-dot">.</span>
          <span className="logo-summer">Summer</span>
          <span className="logo-camp">Camp</span>
          <span className="logo-year-inline">2025</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`logo-component ${size}`}>
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="btn-close"></span>
            <span className="btn-minimize"></span>
            <span className="btn-maximize"></span>
          </div>
          <div className="terminal-title">tech-summer-camp.js</div>
        </div>
        <div className="terminal-body">
          <div className="terminal-prompt">
            <span className="prompt-symbol">$</span>
            <span className="prompt-command">node tech-summer-camp.js</span>
          </div>
          <pre className="code-block">
            {typedText}
            {showCursor && <span className="terminal-cursor">|</span>}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Logo;