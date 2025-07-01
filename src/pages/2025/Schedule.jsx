import './Schedule.css';

const Schedule = () => {
  const scheduleData = [
    {
      date: '2025.02',
      title: 'エントリー開始',
      description: 'エントリーフォームから応募開始。選考あり。',
      status: 'upcoming'
    },
    {
      date: '2025.03',
      title: '参加者選考',
      description: '書類選考により参加者を決定。',
      status: 'upcoming'
    },
    {
      date: '2025.07',
      title: 'チームビルディング',
      description: 'オンラインでチーム編成を実施。',
      status: 'upcoming'
    },
    {
      date: '2025.09.上旬',
      title: 'キックオフミーティング',
      description: 'ルール説明、技術講習会をオンラインで開催。',
      status: 'upcoming'
    },
    {
      date: '2025.09.20-22',
      title: '開発期間',
      description: '48時間の集中開発。会場またはオンラインで参加。',
      status: 'highlight'
    },
    {
      date: '2025.09.23',
      title: '最終発表会・表彰式',
      description: 'プレゼンテーション、審査、表彰、懇親会。',
      status: 'highlight'
    }
  ];

  return (
    <div className="schedule">
      <section className="section">
        <div className="container">
          <h1 className="page-title">
            <span className="glitch" data-text="SCHEDULE">SCHEDULE</span>
          </h1>
          
          <div className="timeline">
            {scheduleData.map((item, index) => (
              <div key={index} className={`timeline-item ${item.status}`}>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <time className="timeline-date">{item.date}</time>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="schedule-details">
            <h2>// DETAILED SCHEDULE</h2>
            
            <div className="day-schedule">
              <h3>Day 1: 2025.09.20 (Sat)</h3>
              <div className="terminal-box">
                <p>{'> '} 10:00 - 開場・受付開始</p>
                <p>{'> '} 11:00 - オープニング</p>
                <p>{'> '} 12:00 - 開発スタート</p>
                <p>{'> '} 18:00 - 夕食</p>
                <p>{'> '} 24:00 - 1日目終了</p>
              </div>
            </div>
            
            <div className="day-schedule">
              <h3>Day 2: 2025.09.21 (Sun)</h3>
              <div className="terminal-box">
                <p>{'> '} 00:00 - 深夜開発継続</p>
                <p>{'> '} 08:00 - 朝食</p>
                <p>{'> '} 12:00 - 昼食</p>
                <p>{'> '} 18:00 - 夕食</p>
                <p>{'> '} 24:00 - 2日目終了</p>
              </div>
            </div>
            
            <div className="day-schedule">
              <h3>Day 3: 2025.09.22 (Mon・祝)</h3>
              <div className="terminal-box">
                <p>{'> '} 00:00 - 深夜開発継続</p>
                <p>{'> '} 08:00 - 朝食</p>
                <p>{'> '} 12:00 - 開発終了・提出</p>
                <p>{'> '} 13:00 - プレゼン準備</p>
                <p>{'> '} 15:00 - 休憩・移動</p>
              </div>
            </div>
            
            <div className="day-schedule">
              <h3>Day 4: 2025.09.23 (Tue・祝)</h3>
              <div className="terminal-box">
                <p>{'> '} 10:00 - 最終発表会</p>
                <p>{'> '} 14:00 - 審査</p>
                <p>{'> '} 15:00 - 結果発表・表彰式</p>
                <p>{'> '} 16:00 - 懇親会</p>
                <p>{'> '} 18:00 - 閉会</p>
              </div>
            </div>
          </div>
          
          <div className="schedule-notes">
            <h2>// NOTES</h2>
            <ul>
              <li>開発は48時間連続で行われます（休憩・仮眠は自由）</li>
              <li>オンライン参加者も同じスケジュールで開発します</li>
              <li>食事は会場参加者に提供されます</li>
              <li>最終発表会はハイブリッド形式で実施</li>
              <li>スケジュールは変更になる可能性があります</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;