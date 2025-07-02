import { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const faqData = [
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
      answer: '宿泊施設の提供はありません。'
    },
    {
      id: 8,
      question: '作品の知的財産権はどうなりますか？',
      answer: '作品の知的財産権は制作者（チーム）に帰属します。ただし、Tech.SummerCampの広報目的での使用については同意していただきます。'
    }
  ];

  return (
    <div className="faq">
      <section className="section">
        <div className="container">
          <h1 className="page-title">
            <span className="glitch" data-text="FAQ">FAQ</span>
          </h1>
          
          <div className="faq-intro">
            <p className="faq-subtitle">
              Tech.SummerCamp 2025に関するよくある質問をまとめました。
              気になることがあればお気軽にご確認ください。
            </p>
          </div>
          
          <div className="faq-container">
            {faqData.map(item => (
              <div key={item.id} className="faq-item">
                <button 
                  className={`faq-question ${openItems[item.id] ? 'active' : ''}`}
                  onClick={() => toggleItem(item.id)}
                >
                  <span className="question-prefix">Q{item.id}.</span>
                  <span className="question-text">{item.question}</span>
                  <span className="question-icon">
                    {openItems[item.id] ? '−' : '+'}
                  </span>
                </button>
                
                <div className={`faq-answer ${openItems[item.id] ? 'open' : ''}`}>
                  <div className="answer-content">
                    <span className="answer-prefix">A.</span>
                    <p>{item.answer}</p>
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