import './Schedule.css';

const Schedule = () => {

  return (
    <div className="schedule">
      <section className="section">
        <div className="container">
          <h1 className="page-title">
            <span className="glitch" data-text="SCHEDULE">SCHEDULE</span>
          </h1>
          
          
          <div className="schedule-timeline">
            
            <div className="timeline-item day-1">
              <div className="timeline-marker">
                <span className="day-number">1</span>
              </div>
              <div className="timeline-content">
                <div className="day-header">
                  <h3 className="day-title">9月20日（土）</h3>
                  <span className="day-subtitle">開発Day1 - 対面</span>
                  <span className="day-badge development">開発開始</span>
                </div>
                <div className="schedule-items">
                  <div className="schedule-item reception">
                    <span className="time">10:00</span>
                    <span className="event">受付開始</span>
                  </div>
                  <div className="schedule-item opening">
                    <span className="time">10:30</span>
                    <span className="event">オープニング</span>
                  </div>
                  <div className="schedule-item development">
                    <span className="time">11:00〜21:00</span>
                    <span className="event">開発作業</span>
                  </div>
                  <div className="schedule-item close">
                    <span className="time">21:00</span>
                    <span className="event">会場クローズ</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="timeline-item day-2">
              <div className="timeline-marker">
                <span className="day-number">2</span>
              </div>
              <div className="timeline-content">
                <div className="day-header">
                  <h3 className="day-title">9月21日（日）</h3>
                  <span className="day-subtitle">開発Day2 - 対面</span>
                  <span className="day-badge development">開発継続</span>
                </div>
                <div className="schedule-items">
                  <div className="schedule-item development">
                    <span className="time">09:00〜21:00</span>
                    <span className="event">開発作業</span>
                  </div>
                  <div className="schedule-item support">
                    <span className="time">終日</span>
                    <span className="event">メンター相談可能</span>
                  </div>
                  <div className="schedule-item close">
                    <span className="time">21:00</span>
                    <span className="event">会場クローズ</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="timeline-item day-3">
              <div className="timeline-marker">
                <span className="day-number">3</span>
              </div>
              <div className="timeline-content">
                <div className="day-header">
                  <h3 className="day-title">9月22日（月）</h3>
                  <span className="day-subtitle">開発Day3 - オンライン</span>
                  <span className="day-badge final">最終調整</span>
                </div>
                <div className="schedule-items">
                  <div className="schedule-item development">
                    <span className="time">09:00〜18:00</span>
                    <span className="event">最終調整（リモート）</span>
                  </div>
                  <div className="schedule-item freeze">
                    <span className="time">18:00</span>
                    <span className="event">🚫 コードフリーズ</span>
                  </div>
                  <div className="schedule-item review">
                    <span className="time">18:00〜</span>
                    <span className="event">審査開始</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="timeline-item day-4">
              <div className="timeline-marker">
                <span className="day-number">4</span>
              </div>
              <div className="timeline-content">
                <div className="day-header">
                  <h3 className="day-title">9月23日（火・祝）</h3>
                  <span className="day-subtitle">最終発表会 - 対面</span>
                  <span className="day-badge presentation">発表</span>
                </div>
                <div className="schedule-sessions">
                  <div className="session morning">
                    <h4 className="session-title">午前</h4>
                    <div className="schedule-items">
                      <div className="schedule-item reception">
                        <span className="time">10:45</span>
                        <span className="event">開場・受付</span>
                      </div>
                      <div className="schedule-item break">
                        <span className="time">11:30〜13:00</span>
                        <span className="event">昼食・準備時間</span>
                      </div>
                    </div>
                  </div>
                  <div className="session afternoon">
                    <h4 className="session-title">午後</h4>
                    <div className="schedule-items">
                      <div className="schedule-item opening">
                        <span className="time">13:15〜14:30</span>
                        <span className="event">開会式・スポンサーLT</span>
                      </div>
                      <div className="schedule-item presentation">
                        <span className="time">14:30〜15:50</span>
                        <span className="event">成果発表</span>
                      </div>
                      <div className="schedule-item award">
                        <span className="time">15:50〜17:30</span>
                        <span className="event">表彰式・懇親会</span>
                      </div>
                      <div className="schedule-item close">
                        <span className="time">18:00</span>
                        <span className="event">完全終了</span>
                      </div>
                    </div>
                  </div>
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
          
        </div>
      </section>
    </div>
  );
};

export default Schedule;