// ============================================================
// app.js  —  レンダリングロジック
// ============================================================

const D = window.trainingData;

// ── ユーティリティ ─────────────────────────────────────────

function todayStr() {
  const t = new Date();
  return [
    t.getFullYear(),
    String(t.getMonth() + 1).padStart(2, '0'),
    String(t.getDate()).padStart(2, '0')
  ].join('-');
}

function formatJpDate(d) {
  const DAY = ['日','月','火','水','木','金','土'];
  return `${d.getMonth() + 1}/${d.getDate()}（${DAY[d.getDay()]}）`;
}

function daysUntil(dateStr) {
  const today = new Date(); today.setHours(0,0,0,0);
  const target = new Date(dateStr); target.setHours(0,0,0,0);
  return Math.round((target - today) / 86400000);
}

function raceDate(dateStr) {
  const d = new Date(dateStr);
  const DAY = ['日','月','火','水','木','金','土'];
  return `${d.getFullYear()}/${d.getMonth()+1}/${d.getDate()}（${DAY[d.getDay()]}）`;
}

function esc(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}

// ── タブ切り替え ───────────────────────────────────────────

function switchTab(id, btn) {
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  btn.classList.add('active');
}

// ── 今日タブ ──────────────────────────────────────────────

function renderToday() {
  const today = new Date();
  const ts    = todayStr();
  const m     = D.todayMenu;
  const stale = m.date !== ts
    ? '<p class="stale-notice">⚠️ メニューはまだ更新されていません</p>' : '';

  const subHtml = m.sub
    ? `<div class="menu-sub">${esc(m.sub).replace(/\n/g,'<br>')}</div>` : '';

  const trainingHtml = (m.training && m.training.length)
    ? `<div class="card-label" style="margin-top:12px">💪 筋トレメニュー</div>
       <ul class="training-list">${m.training.map(t => `<li>${esc(t)}</li>`).join('')}</ul>` : '';

  document.getElementById('tab-today').innerHTML = `
    <div class="page-header">
      <h1>今日 <span class="date-label">${formatJpDate(today)}</span></h1>
    </div>

    <div class="card">
      <div class="card-label">今日のメニュー</div>
      <div class="menu-main">${esc(m.menu)}</div>
      ${subHtml}
      ${trainingHtml}
      ${stale}
    </div>

    ${runCard(D.runningLog[0],   '🏃 前回のランニング')}
    ${badCard(D.badmintonLog[0], '🏸 前回のバドミントン')}
  `;
}

// ── ランニングカード ───────────────────────────────────────

function runCard(r, title) {
  if (!r) return '';

  // メインスタット：計測/レースは大きなタイム、通常走は距離・ペース
  let main = '';
  if (r.result && !r.distance) {
    // 純粋な計測系（3km計測など）
    main = `
      <div class="result-row">
        <span class="stat-label">記録</span>
        <span class="result-big">${esc(r.result)}</span>
      </div>`;
  } else if (r.result && r.distance) {
    // レース（距離＋タイムどちらも有り）
    main = `
      <div class="result-row">
        <span class="stat-label">記録</span>
        <span class="result-big">${esc(r.result)}</span>
      </div>
      <div class="stat-row">
        <span class="stat-label">距離</span><span class="stat-value">${esc(r.distance)}</span>
      </div>
      <div class="stat-row">
        <span class="stat-label">ペース</span><span class="stat-value">${esc(r.pace)}/km</span>
      </div>`;
  } else {
    main = `
      <div class="stat-row">
        <span class="stat-label">距離</span><span class="stat-value">${esc(r.distance)}</span>
      </div>
      <div class="stat-row">
        <span class="stat-label">ペース</span><span class="stat-value">${esc(r.pace)}/km</span>
      </div>`;
  }

  const rows = [
    row('心拍 平均/最大', r.heartRate),
    r.pitch    ? row('ピッチ 平均/最高', r.pitch) : '',
    (r.aerobic != null) ? row('有酸素/無酸素', `${r.aerobic}/${r.anaerobic}`) : '',
    row('運動負荷', r.load)
  ].filter(Boolean).join('');

  const memo = r.memo
    ? `<div class="memo">${esc(r.memo).replace(/\n/g,'<br>')}</div>` : '';

  return `
    <div class="card">
      <div class="card-label">${title}</div>
      <div class="record-title">${esc(r.date)}　${esc(r.type)}</div>
      ${main}
      ${rows}
      ${memo}
    </div>`;
}

function row(label, val) {
  if (val == null || val === '') return '';
  return `<div class="stat-row">
    <span class="stat-label">${label}</span>
    <span class="stat-value">${esc(String(val))}</span>
  </div>`;
}

// ── バドミントンカード ─────────────────────────────────────

function badCard(b, title) {
  if (!b) return '';

  const isLecture = b.duration === '講習会';

  const rows = [
    row('時間', b.duration),
    b.heartRate ? row('心拍 平均/最大', b.heartRate) : '',
    (b.aerobic != null) ? row('有酸素/無酸素', `${b.aerobic}/${b.anaerobic}`) : '',
    (b.load != null) ? row('運動負荷', b.load) : ''
  ].filter(Boolean).join('');

  const memo = b.memo
    ? `<div class="memo">${esc(b.memo).replace(/\n/g,'<br>')}</div>` : '';

  return `
    <div class="card">
      <div class="card-label">${title}</div>
      <div class="record-title">${esc(b.date)}　バドミントン</div>
      ${rows}
      ${memo}
    </div>`;
}

// ── 今週/来週タブ ─────────────────────────────────────────

function renderWeek() {
  const ts      = todayStr();
  const thisW   = D.weekSchedule.slice(0, 7);
  const nextW   = D.weekSchedule.slice(7, 14);

  function weekRange(arr) {
    return `${arr[0].date}（月）〜 ${arr[6].date}（日）`;
  }

  function dayRow(d) {
    const isToday = d.fullDate === ts;
    const cls = ['day-row', isToday ? 'today' : '', d.done ? 'done' : ''].filter(Boolean).join(' ');

    let badges = '';
    if (d.done)         badges += '<span class="badge badge-done">✅</span>';
    if (isToday)        badges += '<span class="badge badge-today">今日</span>';
    if (d.note === '仕事') badges += '<span class="badge badge-warn">⚠️ 仕事</span>';
    if (d.note === '旅行') badges += '<span class="badge badge-trip">✈️ 旅行</span>';

    const actual = d.actual
      ? `<div class="day-actual">${esc(d.actual)}</div>` : '';

    return `
      <div class="${cls}">
        <div class="day-header">
          <span class="day-date">${esc(d.date)}（${esc(d.day)}）</span>
          ${badges}
        </div>
        <div class="day-menu">${esc(d.menu)}</div>
        ${actual}
      </div>`;
  }

  document.getElementById('tab-week').innerHTML = `
    <div class="page-header"><h1>スケジュール</h1></div>

    <div class="week-section">
      <div class="week-title">今週　${weekRange(thisW)}</div>
      ${thisW.map(dayRow).join('')}
    </div>

    <div class="week-section">
      <div class="week-title">来週　${weekRange(nextW)}</div>
      ${nextW.map(dayRow).join('')}
    </div>
  `;
}

// ── 記録タブ ──────────────────────────────────────────────

let recTab = 'run';

function renderRecords() {
  document.getElementById('tab-records').innerHTML = `
    <div class="page-header"><h1>記録</h1></div>
    <div class="subtab-bar">
      <button class="subtab-btn ${recTab === 'run' ? 'active' : ''}"
              onclick="switchRec('run')">🏃 ランニング</button>
      <button class="subtab-btn ${recTab === 'bad' ? 'active' : ''}"
              onclick="switchRec('bad')">🏸 バドミントン</button>
    </div>
    <div id="rec-content">
      ${recTab === 'run'
        ? D.runningLog.map(r => runCard(r, r.type)).join('')
        : D.badmintonLog.map(b => badCard(b, 'バドミントン')).join('')
      }
    </div>
  `;
}

function switchRec(tab) {
  recTab = tab;
  renderRecords();
}

// ── レースタブ ────────────────────────────────────────────

function renderRace() {
  const cards = D.races.map(r => {
    const past = !r.tbd && daysUntil(r.date) < 0;

    const mainBadge = r.isMain
      ? '<span class="race-main-badge">🎯 メインレース</span>' : '';

    const cls = ['card','race-card', r.isMain ? 'race-main' : '', past ? 'race-past' : '']
      .filter(Boolean).join(' ');

    let countdown;
    if (r.tbd) {
      countdown = `<div class="race-ended">日程未定</div>`;
    } else if (past) {
      countdown = `<div class="race-ended">終了</div>`;
    } else {
      const days = daysUntil(r.date);
      countdown = `<div class="race-countdown">
           <span class="days-num">${days}</span>
           <span class="days-label">日後</span>
         </div>`;
    }

    const dateLabel = r.tbd
      ? `<div class="race-date">日程未定</div>`
      : `<div class="race-date">${raceDate(r.date)}</div>`;

    const result = r.result
      ? `<div class="race-result">記録：${esc(r.result)}</div>` : '';

    return `
      <div class="${cls}">
        ${mainBadge}
        <div class="race-name">${esc(r.name)}</div>
        <span class="race-distance-badge">${esc(r.distance)}</span>
        ${dateLabel}
        <div class="race-type">${esc(r.type)}</div>
        ${countdown}
        ${result}
      </div>`;
  });

  document.getElementById('tab-race').innerHTML = `
    <div class="page-header"><h1>レース</h1></div>
    ${cards.join('')}
  `;
}

// ── 初期レンダリング ──────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  renderToday();
  renderWeek();
  renderRecords();
  renderRace();
});
