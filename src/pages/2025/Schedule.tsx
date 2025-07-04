const Schedule = () => {

  return (
    <div className="pt-8">
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-mono font-bold text-center mb-12 md:mb-16">
            <span className="glitch" data-text="SCHEDULE">SCHEDULE</span>
          </h1>
          
          
          <div className="relative max-w-5xl mx-auto mb-16 before:absolute before:left-10 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-green-400 before:to-gray-600 before:rounded-full">
            
            <div className="relative mb-16 pl-24">
              <div className="absolute left-5 top-5 w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 border-2 border-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,255,65,0.3)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(0,255,65,0.5)]">
                <span className="font-mono text-lg font-bold text-black">1</span>
              </div>
              <div className="bg-gradient-to-br from-white/5 to-white/2 border border-white/10 border-l-4 border-l-green-400 rounded-lg p-8 transition-all duration-300 hover:border-green-400 hover:translate-x-2 hover:shadow-[0_10px_30px_rgba(0,255,65,0.1)] relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-gradient-to-r before:from-green-400 before:to-transparent before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300">
                <div className="flex items-center gap-4 mb-8 flex-wrap">
                  <h3 className="font-mono text-2xl font-bold text-white">9月20日（土）</h3>
                  <span className="font-mono text-base text-green-400 opacity-80">開発Day1 - 対面</span>
                  <span className="px-3 py-1 rounded-full font-mono text-xs font-semibold uppercase tracking-wider bg-green-400/20 text-green-400 border border-green-400">開発開始</span>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-6 p-4 bg-white/3 rounded-md border-l-2 border-l-green-500 transition-all duration-300 hover:bg-white/5 hover:translate-x-1">
                    <span className="font-mono text-sm font-semibold text-green-400 min-w-[120px]">10:00</span>
                    <span className="text-base text-white flex-1">受付開始</span>
                  </div>
                  <div className="flex items-center gap-6 p-4 bg-white/3 rounded-md border-l-2 border-l-blue-500 transition-all duration-300 hover:bg-white/5 hover:translate-x-1">
                    <span className="font-mono text-sm font-semibold text-green-400 min-w-[120px]">10:30</span>
                    <span className="text-base text-white flex-1">オープニング</span>
                  </div>
                  <div className="flex items-center gap-6 p-4 bg-white/3 rounded-md border-l-2 border-l-green-400 transition-all duration-300 hover:bg-white/5 hover:translate-x-1">
                    <span className="font-mono text-sm font-semibold text-green-400 min-w-[120px]">11:00〜21:00</span>
                    <span className="text-base text-white flex-1">開発作業</span>
                  </div>
                  <div className="flex items-center gap-6 p-4 bg-white/3 rounded-md border-l-2 border-l-amber-700 transition-all duration-300 hover:bg-white/5 hover:translate-x-1">
                    <span className="font-mono text-sm font-semibold text-green-400 min-w-[120px]">21:00</span>
                    <span className="text-base text-white flex-1">会場クローズ</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative mb-16 pl-24">
              <div className="absolute left-5 top-5 w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 border-2 border-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,255,65,0.3)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(0,255,65,0.5)]">
                <span className="font-mono text-lg font-bold text-black">2</span>
              </div>
              <div className="bg-gradient-to-br from-white/5 to-white/2 border border-white/10 border-l-4 border-l-green-400 rounded-lg p-8 transition-all duration-300 hover:border-green-400 hover:translate-x-2 hover:shadow-[0_10px_30px_rgba(0,255,65,0.1)] relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-gradient-to-r before:from-green-400 before:to-transparent before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300">
                <div className="flex items-center gap-4 mb-8 flex-wrap">
                  <h3 className="font-mono text-2xl font-bold text-white">9月21日（日）</h3>
                  <span className="font-mono text-base text-green-400 opacity-80">開発Day2 - 対面</span>
                  <span className="px-3 py-1 rounded-full font-mono text-xs font-semibold uppercase tracking-wider bg-green-400/20 text-green-400 border border-green-400">開発継続</span>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-6 p-4 bg-white/3 rounded-md border-l-2 border-l-green-400 transition-all duration-300 hover:bg-white/5 hover:translate-x-1">
                    <span className="font-mono text-sm font-semibold text-green-400 min-w-[120px]">09:00〜21:00</span>
                    <span className="text-base text-white flex-1">開発作業</span>
                  </div>
                  <div className="flex items-center gap-6 p-4 bg-white/3 rounded-md border-l-2 border-l-orange-500 transition-all duration-300 hover:bg-white/5 hover:translate-x-1">
                    <span className="font-mono text-sm font-semibold text-green-400 min-w-[120px]">終日</span>
                    <span className="text-base text-white flex-1">メンター相談可能</span>
                  </div>
                  <div className="flex items-center gap-6 p-4 bg-white/3 rounded-md border-l-2 border-l-amber-700 transition-all duration-300 hover:bg-white/5 hover:translate-x-1">
                    <span className="font-mono text-sm font-semibold text-green-400 min-w-[120px]">21:00</span>
                    <span className="text-base text-white flex-1">会場クローズ</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative mb-16 pl-24">
              <div className="absolute left-5 top-5 w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 border-2 border-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,255,65,0.3)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(0,255,65,0.5)]">
                <span className="font-mono text-lg font-bold text-black">3</span>
              </div>
              <div className="bg-gradient-to-br from-white/5 to-white/2 border border-white/10 border-l-4 border-l-green-400 rounded-lg p-8 transition-all duration-300 hover:border-green-400 hover:translate-x-2 hover:shadow-[0_10px_30px_rgba(0,255,65,0.1)] relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-gradient-to-r before:from-green-400 before:to-transparent before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300">
                <div className="flex items-center gap-4 mb-8 flex-wrap">
                  <h3 className="font-mono text-2xl font-bold text-white">9月22日（月）</h3>
                  <span className="font-mono text-base text-green-400 opacity-80">開発Day3 - オンライン</span>
                  <span className="px-3 py-1 rounded-full font-mono text-xs font-semibold uppercase tracking-wider bg-orange-500/20 text-orange-500 border border-orange-500">最終調整</span>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-6 p-4 bg-white/3 rounded-md border-l-2 border-l-green-400 transition-all duration-300 hover:bg-white/5 hover:translate-x-1">
                    <span className="font-mono text-sm font-semibold text-green-400 min-w-[120px]">09:00〜18:00</span>
                    <span className="text-base text-white flex-1">最終調整（リモート）</span>
                  </div>
                  <div className="flex items-center gap-6 p-4 bg-white/3 rounded-md border-l-2 border-l-red-500 transition-all duration-300 hover:bg-white/5 hover:translate-x-1">
                    <span className="font-mono text-sm font-semibold text-green-400 min-w-[120px]">18:00</span>
                    <span className="text-base text-red-500 font-semibold flex-1">🚫 コードフリーズ</span>
                  </div>
                  <div className="flex items-center gap-6 p-4 bg-white/3 rounded-md border-l-2 border-l-purple-600 transition-all duration-300 hover:bg-white/5 hover:translate-x-1">
                    <span className="font-mono text-sm font-semibold text-green-400 min-w-[120px]">18:00〜</span>
                    <span className="text-base text-white flex-1">審査開始</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative mb-16 pl-24">
              <div className="absolute left-5 top-5 w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 border-2 border-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,255,65,0.3)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(0,255,65,0.5)]">
                <span className="font-mono text-lg font-bold text-black">4</span>
              </div>
              <div className="bg-gradient-to-br from-white/5 to-white/2 border border-white/10 border-l-4 border-l-green-400 rounded-lg p-8 transition-all duration-300 hover:border-green-400 hover:translate-x-2 hover:shadow-[0_10px_30px_rgba(0,255,65,0.1)] relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-gradient-to-r before:from-green-400 before:to-transparent before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300">
                <div className="flex items-center gap-4 mb-8 flex-wrap">
                  <h3 className="font-mono text-2xl font-bold text-white">9月23日（火・祝）</h3>
                  <span className="font-mono text-base text-green-400 opacity-80">最終発表会 - 対面</span>
                  <span className="px-3 py-1 rounded-full font-mono text-xs font-semibold uppercase tracking-wider bg-white/20 text-white border border-white">発表</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white/2 rounded-lg p-6 border border-white/10">
                    <h4 className="font-mono text-lg text-green-400 mb-6 text-center pb-2 border-b border-green-400/30">午前</h4>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-6 p-4 bg-white/3 rounded-md border-l-2 border-l-green-500 transition-all duration-300 hover:bg-white/5 hover:translate-x-1">
                        <span className="font-mono text-sm font-semibold text-green-400 min-w-[120px]">10:45</span>
                        <span className="text-base text-white flex-1">開場・受付</span>
                      </div>
                      <div className="flex items-center gap-6 p-4 bg-white/3 rounded-md border-l-2 border-l-gray-600 transition-all duration-300 hover:bg-white/5 hover:translate-x-1">
                        <span className="font-mono text-sm font-semibold text-green-400 min-w-[120px]">11:30〜13:00</span>
                        <span className="text-base text-white flex-1">昼食・準備時間</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/2 rounded-lg p-6 border border-white/10">
                    <h4 className="font-mono text-lg text-green-400 mb-6 text-center pb-2 border-b border-green-400/30">午後</h4>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-6 p-4 bg-white/3 rounded-md border-l-2 border-l-blue-500 transition-all duration-300 hover:bg-white/5 hover:translate-x-1">
                        <span className="font-mono text-sm font-semibold text-green-400 min-w-[120px]">13:15〜14:30</span>
                        <span className="text-base text-white flex-1">開会式・スポンサーLT</span>
                      </div>
                      <div className="flex items-center gap-6 p-4 bg-white/3 rounded-md border-l-2 border-l-pink-600 transition-all duration-300 hover:bg-white/5 hover:translate-x-1">
                        <span className="font-mono text-sm font-semibold text-green-400 min-w-[120px]">14:30〜15:50</span>
                        <span className="text-base text-white flex-1">成果発表</span>
                      </div>
                      <div className="flex items-center gap-6 p-4 bg-white/3 rounded-md border-l-2 border-l-yellow-500 transition-all duration-300 hover:bg-white/5 hover:translate-x-1">
                        <span className="font-mono text-sm font-semibold text-green-400 min-w-[120px]">15:50〜17:30</span>
                        <span className="text-base text-white flex-1">表彰式・懇親会</span>
                      </div>
                      <div className="flex items-center gap-6 p-4 bg-white/3 rounded-md border-l-2 border-l-amber-700 transition-all duration-300 hover:bg-white/5 hover:translate-x-1">
                        <span className="font-mono text-sm font-semibold text-green-400 min-w-[120px]">18:00</span>
                        <span className="text-base text-white flex-1">完全終了</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Schedule;