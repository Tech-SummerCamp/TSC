import { useState } from 'react';
import './Entry.css';

const Entry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    university: '',
    github: '',
    experience: '',
    motivation: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('エントリーフォームは2025年2月に公開予定です。');
  };

  return (
    <div className="entry">
      <section className="section">
        <div className="container">
          <h1 className="page-title">
            <span className="glitch" data-text="ENTRY">ENTRY</span>
          </h1>
          
          <div className="entry-status terminal-box">
            <p>{'> '} Status: Entry Not Open</p>
            <p>{'> '} Open Date: 2025.02.01</p>
            <p>{'> '} Close Date: 2025.03.31</p>
          </div>
          
          <div className="entry-requirements">
            <h2>// REQUIREMENTS</h2>
            <p>Tech.SummerCamp 2025への参加には以下の条件を満たす必要があります：</p>
            
            <div className="requirement-list">
              <div className="requirement-item">
                <span className="requirement-icon">✓</span>
                <div>
                  <h3>学生であること</h3>
                  <p>大学生、大学院生、高専生、専門学校生が対象</p>
                </div>
              </div>
              
              <div className="requirement-item">
                <span className="requirement-icon">✓</span>
                <div>
                  <h3>以下のいずれかを満たすこと</h3>
                  <ul>
                    <li>エンジニア歴2年以上</li>
                    <li>ハッカソン参加経験が複数回</li>
                    <li>ハッカソン受賞経験が1回以上</li>
                    <li>インターン内定/参加経験あり</li>
                    <li>プロダクトのリリース経験あり</li>
                    <li>勉強会・カンファレンス登壇経験あり</li>
                    <li>技術力でチームを牽引できる自信がある</li>
                  </ul>
                </div>
              </div>
              
              <div className="requirement-item">
                <span className="requirement-icon">✓</span>
                <div>
                  <h3>全日程参加可能であること</h3>
                  <p>2025年9月20日〜23日の全日程に参加できること</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="entry-form-section">
            <h2>// ENTRY FORM (PREVIEW)</h2>
            <p className="form-note">※ 以下はエントリーフォームのプレビューです。実際のエントリーは2025年2月1日から開始されます。</p>
            
            <form className="entry-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">
                  <span className="label-prefix">$</span> Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="山田 太郎"
                  disabled
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">
                  <span className="label-prefix">$</span> Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@university.ac.jp"
                  disabled
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="university">
                  <span className="label-prefix">$</span> University
                </label>
                <input
                  type="text"
                  id="university"
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                  placeholder="〇〇大学"
                  disabled
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="github">
                  <span className="label-prefix">$</span> GitHub
                </label>
                <input
                  type="text"
                  id="github"
                  name="github"
                  value={formData.github}
                  onChange={handleChange}
                  placeholder="https://github.com/username"
                  disabled
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="experience">
                  <span className="label-prefix">$</span> Experience
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  rows="5"
                  placeholder="これまでの開発経験、使用技術、実績などを記入してください"
                  disabled
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="motivation">
                  <span className="label-prefix">$</span> Motivation
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  rows="5"
                  placeholder="参加動機、作りたいもの、チャレンジしたいことなどを記入してください"
                  disabled
                />
              </div>
              
              <button type="submit" className="submit-button" disabled>
                <span className="btn-prefix">[</span>
                COMING SOON
                <span className="btn-suffix">]</span>
              </button>
            </form>
          </div>
          
          <div className="entry-timeline">
            <h2>// SELECTION PROCESS</h2>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">01</div>
                <h3>エントリー</h3>
                <p>フォームから応募</p>
              </div>
              <div className="process-step">
                <div className="step-number">02</div>
                <h3>書類選考</h3>
                <p>経験・スキルを評価</p>
              </div>
              <div className="process-step">
                <div className="step-number">03</div>
                <h3>結果通知</h3>
                <p>4月中旬にメールで通知</p>
              </div>
              <div className="process-step">
                <div className="step-number">04</div>
                <h3>参加確定</h3>
                <p>参加意思確認</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Entry;