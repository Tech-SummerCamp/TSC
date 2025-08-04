import { useState, useEffect } from 'react';
import TSCHorizontalSVG from "/TSC/tsc-horizontal.svg";

interface SponsorInfo {
  name: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
  logo?: string;
}

interface LogoProps {
  size?: 'large' | 'header';
  showYear?: boolean;
  sponsors?: SponsorInfo[];
}

const Logo = ({ size = 'large', sponsors = [] }: LogoProps) => {
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
      ''
    ];

    // Add sponsor information if available
    if (sponsors.length > 0) {
      lines.push('// Powered by:');
      const sponsorsByTier = {
        platinum: sponsors.filter(s => s.tier === 'platinum'),
        gold: sponsors.filter(s => s.tier === 'gold'),
        silver: sponsors.filter(s => s.tier === 'silver'),
        bronze: sponsors.filter(s => s.tier === 'bronze')
      };
      
      Object.entries(sponsorsByTier).forEach(([tier, tierSponsors]) => {
        if (tierSponsors.length > 0) {
          lines.push(`// ${tier.charAt(0).toUpperCase() + tier.slice(1)} Sponsors:`);
          tierSponsors.forEach(sponsor => {
            lines.push(`//   - ${sponsor.name}`);
          });
        }
      });
      lines.push('');
    }
    
    lines.push('> Status: Ready for deployment');

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
      <div className="font-mono text-center relative flex justify-start items-center">
        <img 
          src={TSCHorizontalSVG} 
          alt="Tech Summer Camp" 
          className="h-20 md:h-24 lg:h-28 w-auto transition-all duration-200 brightness-100 hover:brightness-[1.2] hover:scale-105"
        />
      </div>
    );
  }

  return (
    <div className={`font-mono text-center relative ${size === 'large' ? 'text-[clamp(1.2rem,2.5vw,1.5rem)]' : ''}`}>
      <div className="bg-gray-900 border border-gray-700 rounded-lg w-full max-w-[700px] mx-auto shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        <div className="bg-white/10 px-4 py-3 flex items-center justify-between border-b border-white/20 rounded-t-[7px]">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full block bg-[#ff5f57]"></span>
            <span className="w-3 h-3 rounded-full block bg-[#ffbd2e]"></span>
            <span className="w-3 h-3 rounded-full block bg-[#28ca42]"></span>
          </div>
          <div className="text-sm text-white/80">tech-summer-camp.js</div>
        </div>
        <div className={`p-8 md:p-4 ${sponsors.length > 0 ? 'h-[450px]' : 'h-[350px]'} md:h-auto md:min-h-[200px] max-[480px]:p-3 max-[480px]:min-h-[180px] overflow-hidden`}>
          <div className="mb-4 text-sm">
            <span className="text-[#00FF41] mr-2">$</span>
            <span className="text-white/90">node tech-summer-camp.js</span>
          </div>
          <pre className="font-mono text-white leading-[1.6] m-0 whitespace-pre text-[clamp(0.9rem,2vw,1.1rem)] md:text-[0.8rem] md:leading-[1.4] max-[480px]:text-[0.7rem] max-[480px]:leading-[1.3] overflow-hidden">
            {typedText}
            {showCursor && <span className="bg-[#00FF41] text-[#00FF41] animate-blink">|</span>}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Logo;