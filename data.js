// ============================================================
// data.js  —  更新日：2026-04-24
// Claude AIに「アプリ更新してください」と依頼するとこのファイルが更新されます
// ============================================================
window.trainingData = {

  lastUpdated: "2026-04-24",

  // ─────────────────────────────────────────
  // 今日タブ：当日メニュー（毎日更新）
  // ─────────────────────────────────────────
  todayMenu: {
    date:  "2026-04-24",
    menu:  "休養",
    sub:   "筋トレ推奨\n・スクワット　20回 × 3セット\n・ランジ　　　左右10回 × 3セット\n・カーフレイズ　20回 × 3セット"
  },

  // ─────────────────────────────────────────
  // 今週・来週スケジュール（月曜始まり 14日分）
  // done:true で ✅ 表示、actual に実績を記入
  // note: "仕事" | "旅行" でバッジ表示
  // ─────────────────────────────────────────
  weekSchedule: [
    // ── 今週 4/20(月) 〜 4/26(日) ──
    { date:"4/20", fullDate:"2026-04-20", day:"月", done:true,  menu:"休養",                                         actual:"" },
    { date:"4/21", fullDate:"2026-04-21", day:"火", done:true,  menu:"🏸 バドミントン",                               actual:"心拍100/148　運動負荷40" },
    { date:"4/22", fullDate:"2026-04-22", day:"水", done:true,  menu:"ジョグ5km＋流し3本",                            actual:"ペース6:49　運動負荷57" },
    { date:"4/23", fullDate:"2026-04-23", day:"木", done:true,  menu:"3km計測＋🏸バドミントン",                       actual:"計測13:13　／　心拍107/144　負荷37" },
    { date:"4/24", fullDate:"2026-04-24", day:"金", done:false, menu:"休養＋筋トレ",                                  actual:"" },
    { date:"4/25", fullDate:"2026-04-25", day:"土", done:false, menu:"軽いジョグ 30〜40分（キロ7分以上）",            actual:"" },
    { date:"4/26", fullDate:"2026-04-26", day:"日", done:false, menu:"休養 or 朝ジョグ30分",                          actual:"", note:"仕事" },
    // ── 来週 4/27(月) 〜 5/3(日) ──
    { date:"4/27", fullDate:"2026-04-27", day:"月", done:false, menu:"ジョグ7km（キロ7分）＋筋トレ",                  actual:"" },
    { date:"4/28", fullDate:"2026-04-28", day:"火", done:false, menu:"🏸 バドミントン",                               actual:"" },
    { date:"4/29", fullDate:"2026-04-29", day:"水", done:false, menu:"ジョグ7km＋流し100m×3本",                      actual:"" },
    { date:"4/30", fullDate:"2026-04-30", day:"木", done:false, menu:"🏸 バドミントン",                               actual:"" },
    { date:"5/1",  fullDate:"2026-05-01", day:"金", done:false, menu:"テンポ走7km（5:30〜6:00/km）",                  actual:"" },
    { date:"5/2",  fullDate:"2026-05-02", day:"土", done:false, menu:"ジョグ7km",                                    actual:"" },
    { date:"5/3",  fullDate:"2026-05-03", day:"日", done:false, menu:"旅行：練習困難",                                actual:"", note:"旅行" }
  ],

  // ─────────────────────────────────────────
  // レーススケジュール
  // ─────────────────────────────────────────
  races: [
    {
      name:     "ふくい桜マラソン",
      distance: "フル",
      date:     "2026-03-29",
      type:     "完走",
      result:   "4:45:25"
    },
    {
      name:     "加賀温泉郷寛平ナイトマラソン",
      distance: "32km",
      date:     "2026-09-13",
      type:     "ファンラン"
    },
    {
      name:     "新潟シティマラソン",
      distance: "フル",
      date:     "2026-10-12",
      type:     "🎯 メイン・サブ4.5",
      isMain:   true
    },
    {
      name:     "金沢マラソン",
      distance: "フル",
      date:     "2026-10-26",
      type:     "サブ4.5チャレンジ"
    },
    {
      name:     "NAHAマラソン",
      distance: "フル",
      date:     "2026-12-07",
      type:     "ファンラン"
    },
    {
      name:     "ふくい桜マラソン",
      distance: "フル",
      date:     "2027-03-23",
      type:     "リベンジ・サブ4.5"
    }
  ],

  // ─────────────────────────────────────────
  // ランニングログ（新しい順）
  // type: "計測"|"インターバル"|"ペース走"|"テンポ走"|"ジョグ"|"LSD"|"リカバリー"|"レース"
  // 計測・インターバルには result を、通常走には distance/pace を記載
  // ─────────────────────────────────────────
  runningLog: [
    {
      date:       "4/23",
      type:       "3km計測",
      result:     "13:13",
      heartRate:  "156/173",
      pitch:      "183/217",
      aerobic:    3.1,
      anaerobic:  3.0,
      load:       169,
      memo:       "1km目3:45で突っ込みすぎ → 以降4:30が精一杯\n目標13:00まであと13秒"
    },
    {
      date:       "4/22",
      type:       "ジョグ＋流し",
      distance:   "5km",
      pace:       "6:49",
      heartRate:  "121/149",
      pitch:      "160/190",
      aerobic:    2.6,
      anaerobic:  0,
      load:       57,
      memo:       "流し3本　4:39 / 4:42 / 4:28"
    },
    {
      date:       "4/19",
      type:       "3kmペース走",
      distance:   "5km",
      pace:       "5:47",
      heartRate:  "153/181",
      pitch:      "170/193",
      aerobic:    4.1,
      anaerobic:  3.0,
      load:       248,
      memo:       "ラップ 4:30 / 4:41 / 4:43\n呼吸が先に限界"
    },
    {
      date:       "4/18",
      type:       "リカバリーラン",
      distance:   "8.65km",
      pace:       "6:48",
      heartRate:  "136/144",
      pitch:      "161/174",
      load:       98,
      memo:       "6:30→ピッチ170、7:00→ピッチ160 を確認"
    },
    {
      date:       "4/17",
      type:       "インターバル1000m×3",
      distance:   "6.3km",
      pace:       "5:48（平均）",
      heartRate:  "145/172",
      pitch:      "169/202",
      load:       189,
      memo:       "4:23 / 4:31 / 4:40　残り250mで失速"
    },
    {
      date:       "4/12",
      type:       "テンポ走",
      distance:   "7km",
      pace:       "5:44",
      heartRate:  "143/157",
      pitch:      "174/184",
      load:       157,
      memo:       "テンポ走30分（5:30切り）＋ジョグ1.5km"
    },
    {
      date:       "4/11",
      type:       "ジョグ＋流し",
      distance:   "6km",
      pace:       "6:54",
      heartRate:  "126/156",
      pitch:      "162/195",
      load:       77,
      memo:       "流し3本　4:57 / 4:44 / 4:34"
    },
    {
      date:       "4/10",
      type:       "ジョグ＋流し",
      distance:   "5.5km",
      pace:       "6:52",
      heartRate:  "120/152",
      pitch:      "167/208",
      load:       69,
      memo:       "流し3本　4:24 / 4:18 / 4:28"
    },
    {
      date:       "4/8",
      type:       "イージーラン",
      distance:   "5.18km",
      pace:       "6:57",
      heartRate:  "92/116",
      pitch:      "169/177",
      load:       34,
      memo:       "体調回復確認・心拍非常に低い"
    },
    {
      date:       "4/6",
      type:       "イージーラン",
      distance:   "3.8km",
      pace:       "7:01",
      heartRate:  "107/126",
      pitch:      "162/176",
      load:       35,
      memo:       "喉に違和感・心拍抑えめ"
    },
    {
      date:       "4/1",
      type:       "イージーラン",
      distance:   "5km",
      pace:       "7:07",
      heartRate:  "123/130",
      pitch:      "164/176",
      load:       46,
      memo:       "マラソン後リカバリー・真下着地を試行錯誤"
    },
    {
      date:       "3/29",
      type:       "レース",
      result:     "4:45:25",
      distance:   "42.195km",
      pace:       "6:45",
      heartRate:  "152/175",
      pitch:      "164/248",
      aerobic:    5.0,
      anaerobic:  0.2,
      load:       512,
      memo:       "ふくい桜マラソン\n28kmで太もも売り切れ → 失速\nハーフ通過2:20"
    }
  ],

  // ─────────────────────────────────────────
  // バドミントンログ（新しい順）
  // ─────────────────────────────────────────
  badmintonLog: [
    {
      date:      "4/23",
      duration:  "60分",
      heartRate: "107/144",
      aerobic:   2.0,
      anaerobic: 0.8,
      load:      37,
      memo:      "スマッシュ対応が安定\n課題：右サイド握り変えのタイムラグ → 振らずに当てるだけと割り切る"
    },
    {
      date:      "4/21",
      duration:  "80分",
      heartRate: "100/148",
      aerobic:   1.0,
      anaerobic: 2.0,
      load:      40,
      memo:      "基本動作の定着が進み、次の課題が明確に"
    },
    {
      date:      "4/16",
      duration:  "68分",
      heartRate: "106/136",
      aerobic:   1.3,
      anaerobic: 1.0,
      load:      30,
      memo:      "腕と足をしっかり伸ばす動きが自然に出始めた ✅"
    },
    {
      date:      "4/14",
      duration:  "68分",
      heartRate: "123/160",
      load:      162,
      memo:      "講習の感覚を実戦投入\n疲労時の再現性が課題"
    },
    {
      date:      "4/13",
      duration:  "講習会",
      heartRate: "—",
      load:      null,
      memo:      "踏み込み・打点を体系的に強化"
    },
    {
      date:      "4/7",
      duration:  "90分",
      heartRate: "108/162",
      load:      66,
      memo:      "右足踏み込みが返球精度のカギと気づく"
    },
    {
      date:      "3/31",
      duration:  "80分",
      heartRate: "120/150",
      load:      99,
      memo:      "フル後初参加\n課題：落下点への移動"
    }
  ]
};
