import { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleItem = (id: number) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: 'エントリーに必要な条件は何ですか？',
      answer: '大学生・大学院生・高専生・専門学校生で、かつ以下のいずれかを満たす方が対象です：エンジニア歴2年以上、ハッカソン参加・受賞経験、インターン経験、プロダクトリリース経験、技術カンファレンス登壇経験、またはチームを技術面で牽引できる自信がある方。'
    },
    {
      id: 2,
      question: 'オンライン参加は可能ですか？',
      answer: '原則オフライン参加のみです。'
    },
    {
      id: 3,
      question: '参加費用はかかりますか？',
      answer: '参加費は無料です。ただし、会場までの交通費・宿泊費は自己負担となります。'
    },
    {
      id: 4,
      question: 'チーム編成はどのように行われますか？',
      answer: '個人で申し込みされた方は運営でチーム編成をランダムで行います。また、チームで申し込まれた方は最大10名まで参加できます。'
    },
    {
      id: 5,
      question: '開発環境の制約はありますか？',
      answer: '特定の技術スタックの制約はありません。Web、モバイル、AI、IoT、ゲームなど、あらゆる分野での開発が可能です。'
    },
    {
      id: 6,
      question: '審査基準はどのようなものですか？',
      answer: '技術的な完成度、アイデアの独創性、実用性、プレゼンテーション力などを総合的に評価します。完全に動作する必要はありませんが、コンセプトが明確で技術的な工夫が見られる作品が評価されます。'
    },
    {
      id: 7,
      question: '宿泊場所は提供されますか？',
      answer: '宿泊場所の提供は現在予定しておりません。変更等がございましたら、Connpassや当ホームページ、SNS等で告知いたします。'
    },
    {
      id: 8,
      question: '作品の知的財産権はどうなりますか？',
      answer: '作品の知的財産権は制作者（チーム）に帰属します。ただし、Tech.SummerCampの広報目的での使用については同意していただきます。'
    }
  ];

  return (
    <div className="pt-8">
      <section className="">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-mono font-bold text-center mb-12 md:mb-16">
            <span className="glitch" data-text="FAQ">FAQ</span>
          </h1>
          
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <p className="text-lg leading-relaxed text-white/80">
              Tech.SummerCamp 2025に関するよくある質問をまとめました。
              気になることがあればお気軽にご確認ください。
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-16 grid gap-6">
            {faqData.map(item => (
              <div key={item.id} className="border border-white/10 rounded-lg bg-white/2 overflow-hidden transition-all duration-300 hover:border-green-400 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,255,65,0.15)] relative before:absolute before:top-0 before:left-0 before:w-full before:h-0.5 before:bg-gradient-to-r before:from-green-400 before:to-transparent before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300">
                <button 
                  className={`w-full flex items-center gap-4 p-8 bg-transparent border-0 text-white font-sans text-lg text-left cursor-pointer transition-all duration-200 font-medium ${openItems[item.id] ? 'bg-green-400/5' : 'hover:bg-green-400/5'}`}
                  onClick={() => toggleItem(item.id)}
                >
                  <span className="font-mono text-green-400 font-bold min-w-[45px] text-base bg-green-400/10 px-2 py-1 rounded border border-green-400/30">Q{item.id}.</span>
                  <span className="flex-1 leading-relaxed">{item.question}</span>
                  <span className={`font-mono text-xl text-green-400 font-bold min-w-[35px] text-center transition-all duration-200 bg-green-400/10 rounded-full w-9 h-9 flex items-center justify-center border border-green-400/30 ${openItems[item.id] ? 'rotate-180 bg-green-400 text-black' : ''}`}>
                    {openItems[item.id] ? '−' : '+'}
                  </span>
                </button>
                
                <div className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${openItems[item.id] ? 'max-h-[500px]' : 'max-h-0'}`}>
                  <div className="px-8 pb-8 flex gap-4 items-start bg-green-400/2 border-t border-green-400/10">
                    <span className="font-mono text-green-400 font-bold min-w-[45px] pt-1 text-base bg-green-400/10 px-2 py-1 rounded border border-green-400/30 mt-2">A.</span>
                    <p className="text-base leading-relaxed text-white/90 m-0 pt-2">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;