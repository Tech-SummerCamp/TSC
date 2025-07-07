interface SponsorInfo {
  name: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
  logo?: string;
  url?: string;
}

interface SponsorsProps {
  sponsors: SponsorInfo[];
}

const Sponsors = ({ sponsors }: SponsorsProps) => {
  const sponsorsByTier = {
    platinum: sponsors.filter(s => s.tier === 'platinum'),
    gold: sponsors.filter(s => s.tier === 'gold'),
    silver: sponsors.filter(s => s.tier === 'silver'),
    bronze: sponsors.filter(s => s.tier === 'bronze')
  };

  const tierConfig = {
    platinum: {
      label: 'PLATINUM SPONSORS',
      size: 'h-24 md:h-28 lg:h-32',
      gridCols: 'grid-cols-1 md:grid-cols-2'
    },
    gold: {
      label: 'GOLD SPONSORS',
      size: 'h-20 md:h-24 lg:h-28',
      gridCols: 'grid-cols-2 md:grid-cols-3'
    },
    silver: {
      label: 'SILVER SPONSORS',
      size: 'h-16 md:h-20 lg:h-24',
      gridCols: 'grid-cols-2 md:grid-cols-4'
    },
    bronze: {
      label: 'BRONZE SPONSORS',
      size: 'h-14 md:h-16 lg:h-20',
      gridCols: 'grid-cols-3 md:grid-cols-5'
    }
  };

  return (
    <section className="w-full pb-16 md:pb-20 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-mono text-xl md:text-2xl lg:text-[2.2rem] mb-12 md:mb-16 text-terminal-green text-center relative inline-block w-full">
          <span className="relative z-10 px-8 bg-black inline-block">
            <span className="opacity-60 mr-2">//</span>
            <span className="font-bold tracking-[0.2em] drop-shadow-[0_0_20px_rgba(0,255,65,0.5)] text-shadow-[0_0_30px_rgba(0,255,65,0.8)]" style={{ textShadow: '0 0 30px rgba(0,255,65,0.8)' }}>SPONSORS</span>
          </span>
          <span className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-terminal-green/30 to-transparent -translate-y-1/2"></span>
        </h2>

        <div className="space-y-12 md:space-y-16">
          {Object.entries(sponsorsByTier).map(([tier, tierSponsors]) => {
            if (tierSponsors.length === 0) return null;
            const config = tierConfig[tier as keyof typeof tierConfig];

            return (
              <div key={tier} className="text-center">
                <h3 className="font-mono text-lg md:text-xl mb-6 md:mb-8 text-white/80 tracking-[0.2em]">
                  {config.label}
                </h3>
                <div className={`grid ${config.gridCols} gap-6 md:gap-8 items-center justify-items-center max-w-6xl mx-auto`}>
                  {tierSponsors.map((sponsor, index) => (
                    <div
                      key={index}
                      className="relative block w-full"
                    >
                      <div className={`${config.size} border-2 border-white/20 rounded-lg p-4 md:p-6 flex flex-col items-center justify-center bg-white/5 gap-4`}>
                        {sponsor.logo ? (
                          <>
                            <img 
                              src={sponsor.logo} 
                              alt={sponsor.name} 
                              className="max-w-full max-h-[60%] object-contain filter brightness-0 invert opacity-80"
                            />
                            <span className="font-mono text-white/80 text-xs md:text-sm font-bold tracking-wider">
                              {sponsor.name}
                            </span>
                          </>
                        ) : (
                          <span className="font-mono text-white/80 text-sm md:text-base lg:text-lg font-bold tracking-wider">
                            {sponsor.name}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 md:mt-20 text-center">
          <p className="text-white/60 font-mono text-sm md:text-base mb-6">
            協賛企業募集中
          </p>
          <a 
            href="mailto:sponsor@techsummercamp.jp" 
            className="relative inline-flex items-center justify-center py-4 px-8 text-base font-bold font-mono uppercase tracking-[0.15em] bg-transparent text-white border-2 border-white overflow-hidden transition-all duration-300 cursor-pointer no-underline shadow-none hover:-translate-y-[3px] hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)] hover:text-black hover:border-white active:-translate-y-[1px] active:scale-[1.02] before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-white before:transition-[left] before:duration-[400ms] before:z-[-1] hover:before:left-0"
          >
            <span className="flex items-center gap-3 z-[1]">
              <span className="drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]">BECOME A SPONSOR</span>
              <span className="text-xl animate-[arrow-move_1.5s_ease-in-out_infinite]">→</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;