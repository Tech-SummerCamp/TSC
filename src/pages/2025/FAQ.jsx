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
      answer: 'はい、可能です。Tech.SummerCamp 2025はハイブリッド開催のため、全国どこからでもオンラインで参加いただけます。オンライン参加者も会場参加者と同じ条件で開発・発表を行います。'
    },
    {
      id: 3,
      question: '参加費用はかかりますか？',
      answer: '参加費は無料です。会場参加者には食事も提供されます。ただし、会場までの交通費・宿泊費は自己負担となります。'
    },
    {
      id: 4,
      question: 'チーム編成はどのように行われますか？',
      answer: 'チーム編成は事前のオンラインイベントで行います。参加者の技術スタック、興味のある分野、作りたいものなどを考慮して、4-5名のチームを編成します。'
    },
    {
      id: 5,
      question: '開発環境の制約はありますか？',
      answer: '特定の技術スタックの制約はありません。Web、モバイル、AI、IoT、ゲームなど、あらゆる分野での開発が可能です。ただし、48時間で動作するプロダクトを作成していただく必要があります。'
    },
    {
      id: 6,
      question: '審査基準はどのようなものですか？',
      answer: '技術的な完成度、アイデアの独創性、実用性、プレゼンテーション力などを総合的に評価します。完全に動作する必要はありませんが、コンセプトが明確で技術的な工夫が見られる作品が評価されます。'
    },
    {
      id: 7,
      question: '宿泊場所は提供されますか？',
      answer: '会場では48時間開発が可能ですが、宿泊施設の提供はありません。近隣のホテル情報については参加者決定後にご案内いたします。'
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
          
          <div className="faq-intro terminal-box">
            <p>{'> '} Frequently Asked Questions</p>
            <p>{'> '} よくある質問と回答</p>
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
          
          <div className="faq-contact">
            <h2>// OTHER QUESTIONS</h2>
            <p>その他ご質問がございましたら、以下のメールアドレスまでお気軽にお問い合わせください。</p>
            <div className="contact-info terminal-box">
              <p>{'> '} Email: info@tech-summercamp.jp</p>
              <p>{'> '} Response Time: 2-3 business days</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;