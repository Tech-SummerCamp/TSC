import './Schedule.css';

const Schedule = () => {

  return (
    <div className="schedule">
      <section className="section">
        <div className="container">
          <h1 className="page-title">
            <span className="glitch" data-text="SCHEDULE">SCHEDULE</span>
          </h1>
          
          
          <div className="schedule-details">
            
            <div className="day-schedule">
              <h3>9月20日（土）開発Day1 - 対面</h3>
              <div className="terminal-box">
                <p>{'> '} 10:00 受付開始</p>
                <p>{'> '} 10:30 オープニング</p>
                <p>{'> '} 11:00〜21:00 開発作業</p>
                <p>{'> '} 21:00 会場クローズ</p>
              </div>
            </div>
            
            <div className="day-schedule">
              <h3>9月21日（日）開発Day2 - 対面</h3>
              <div className="terminal-box">
                <p>{'> '} 09:00〜21:00 開発作業</p>
                <p>{'> '} メンター相談可能</p>
                <p>{'> '} 21:00 会場クローズ</p>
              </div>
            </div>
            
            <div className="day-schedule">
              <h3>9月22日（月）開発Day3 - オンライン</h3>
              <div className="terminal-box">
                <p>{'> '} 09:00〜18:00 最終調整（リモート）</p>
                <p>{'> '} 18:00 🚫 コードフリーズ</p>
                <p>{'> '} 18:00〜 審査開始</p>
              </div>
            </div>
            
            <div className="day-schedule">
              <h3>9月23日（火・祝）最終発表会 - 対面</h3>
              <div className="schedule-section">
                <h4>午前</h4>
                <div className="terminal-box">
                  <p>{'> '} 10:45 開場・受付</p>
                  <p>{'> '} 11:30〜13:00 昼食・準備時間</p>
                </div>
              </div>
              <div className="schedule-section">
                <h4>午後</h4>
                <div className="terminal-box">
                  <p>{'> '} 13:15〜14:30 開会式・スポンサーLT</p>
                  <p>{'> '} 14:30〜15:50 成果発表</p>
                  <p>{'> '} 15:50〜17:30 表彰式・懇親会</p>
                  <p>{'> '} 18:00 完全終了</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="schedule-points">
            <h2>⚡ ポイント</h2>
            <div className="points-list">
              <div className="point-item">
                <span className="point-label">開発期間</span>
                <span className="point-value">実質48時間＋オンライン調整</span>
              </div>
              <div className="point-item">
                <span className="point-label">発表</span>
                <span className="point-value">1チーム5分（質疑なし）</span>
              </div>
              <div className="point-item">
                <span className="point-label">コードフリーズ</span>
                <span className="point-value">9/22 18:00厳守</span>
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