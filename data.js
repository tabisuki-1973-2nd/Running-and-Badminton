// ============================================================
// data.js  —  更新日：2026-04-30
// Claude AIに「アプリ更新してください」と依頼するとこのファイルが更新されます
// ============================================================
window.trainingData = {

  lastUpdated: "2026-04-30",

  // ─────────────────────────────────────────
  // 今日タブ：当日メニュー（毎日更新）
  // ─────────────────────────────────────────
  todayMenu: {
    date:   "2026-04-30",
    menu:   "🏸 バドミントン",
    sub:    "✅ 完了：1時間　心拍118/144　負荷54"
  },
  // ─────────────────────────────────────────
  // 今週・来週スケジュール（月曜始まり 14日分）
  // done:true で ✅ 表示、actual に実績を記入
  // note: "仕事" | "旅行" でバッジ表示
  // ─────────────────────────────────────────
  weekSchedule: [
    // ── 今週 4/27(月) 〜 5/3(日) ──
    { date:"4/27", fullDate:"2026-04-27", day:"月", done:true,  menu:"🏸 バドミントン講習会",                          actual:"1時間50分　心拍98/151　負荷37" },
    { date:"4/28", fullDate:"2026-04-28", day:"火", done:true,  menu:"ジョグ＋🏸 バドミントン",                        actual:"ジョグ3.73km　ペース6:56　負荷39　／　バドミントン1時間15分　心拍128/164　負荷99" },
    { date:"4/29", fullDate:"2026-04-29", day:"水", done:true,  menu:"ジョグ＋流し",                                  actual:"8.72km　ペース6:57　心拍121/129　負荷71" },
    { date:"4/30", fullDate:"2026-04-30", day:"木", done:true,  menu:"🏸 バドミントン",                               actual:"1時間　心拍118/144　負荷54" },
    { date:"5/1",  fullDate:"2026-05-01", day:"金", done:false, menu:"テンポ走7km（5:30〜6:00/km）",                  actual:"",
      points:   ["キロ5:30〜6:00のペースを維持", "心拍140〜155を目安に", "ペース変動を最小限に抑える"],
      training: ["プランク　30秒 × ２セット", "バードドッグ（左右）　各10回 × ２セット"] },
    { date:"5/2",  fullDate:"2026-05-02", day:"土", done:false, menu:"ジョグ7km",                                    actual:"" },
    { date:"5/3",  fullDate:"2026-05-03", day:"日", done:false, menu:"休養 or ジョグ",                               actual:"" },
    // ── 来週 5/4(月) 〜 5/10(日) ──
    { date:"5/4",  fullDate:"2026-05-04", day:"月", done:false, menu:"✈️ 旅行・練習困難",                             actual:"", note:"旅行" },
    { date:"5/5",  fullDate:"2026-05-05", day:"火", done:false, menu:"✈️ 旅行・ジョグできれば",                        actual:"", note:"旅行" },
    { date:"5/6",  fullDate:"2026-05-06", day:"水", done:false, menu:"✈️ 旅行・ジョグできれば",                        actual:"", note:"旅行" },
    { date:"5/7",  fullDate:"2026-05-07", day:"木", done:false, menu:"🏸 バドミントン",                               actual:"" },
    { date:"5/8",  fullDate:"2026-05-08", day:"金", done:false, menu:"テンポ走7km（5:30〜6:00/km）",                  actual:"" },
    { date:"5/9",  fullDate:"2026-05-09", day:"土", done:false, menu:"ロング走10〜12km",                              actual:"" },
    { date:"5/10", fullDate:"2026-05-10", day:"日", done:false, menu:"休養",                                         actual:"" }
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
      tbd:      true,
      type:     "ファンラン"
    },
    {
      name:     "新潟シティマラソン",
      distance: "フル",
      date:     "2026-10-11",
      type:     "🎯 メイン・サブ4.5",
      isMain:   true
    },
    {
      name:     "金沢マラソン",
      distance: "フル",
      date:     "2026-10-25",
      type:     "サブ4.5チャレンジ"
    },
    {
      name:     "NAHAマラソン",
      distance: "フル",
      tbd:      true,
      type:     "ファンラン"
    },
    {
      name:     "ふくい桜マラソン",
      distance: "フル",
      tbd:      true,
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
      date:       "4/29",
      type:       "イージーラン",
      distance:   "8.72km",
      pace:       "6:57",
      heartRate:  "121/129",
      pitch:      "166/175",
      load:       71,
      memo:       "昨日の疲れは少ない。心拍・股関節・腕・ピッチ・ペース一定を意識。6km過ぎからお尻〜ハムに張り感→折り返し。流しは実施せず"
    },
    {
      date:       "4/28",
      type:       "イージーラン",
      distance:   "3.73km",
      pace:       "6:56",
      heartRate:  "118/128",
      pitch:      "164/171",
      aerobic:    2.3,
      anaerobic:  0,
      load:       39,
      memo:       "バドミントン前の隙間ジョグ。心拍は低く抑えられたが、ピッチ164は力みのない走りというより緊張感のない走りだったかも。腕を自然に振るのは案外難しい"
    },
    {
      date:       "4/26",
      type:       "イージーラン",
      distance:   "5km",
      pace:       "6:53",
      heartRate:  "130/144",
      pitch:      "169/176",
      aerobic:    2.7,
      anaerobic:  0,
      load:       61,
      memo:       "股関節から脚を動かす意識＋ピッチアップを実践。ピッチ169達成。\n序盤から心拍130に上昇（連続ラン疲労の影響か）。4km手前で1分停止→心拍120以下に回復して完走"
    },
    {
      date:       "4/25",
      type:       "イージーラン",
      distance:   "8.5km",
      pace:       "6:58",
      heartRate:  "122/128",
      pitch:      "159/173",
      aerobic:    2.9,
      anaerobic:  0,
      load:       68,
      memo:       "筋肉痛ほぼ回復。股関節から足を動かすことを意識。\nピッチ159はペース抑制でベタ足になっていた可能性あり"
    },
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
      date:      "4/30",
      duration:  "60分",
      heartRate: "118/144",
      aerobic:   2.1,
      anaerobic: 1.8,
      load:      54,
      memo:      "体勢が整ってからのクリアは奥まで返せた。無理な体勢・落下点に入れない時は浅い・空振り。ネット際の返球は慌てがち→形を作ってネットと同じ高さで返す練習をした"
    },
    {
      date:      "4/28",
      duration:  "75分",
      heartRate: "128/164",
      aerobic:   3.0,
      anaerobic: 2.1,
      load:      99,
      memo:      "昨日の講習会の成果が活かせず。内旋・外旋を忘れてガチガチグリップ、右腕右足の伸び不足、体の前でシャトルを捉えられず、ステップで下がれず\n課題：試合中も講習会で指摘された点を意識し続けること"
    },
    {
      date:      "4/27",
      duration:  "講習会",
      heartRate: "98/151",
      aerobic:   1.7,
      anaerobic: 1.5,
      load:      37,
      memo:      "指摘：内旋・外旋ができていない／握りと握りすぎ／ラケット面がシャトルに真っ直ぐ当たっていない／ステップができず下がれない・戻れない\n次の優先課題：内旋・外旋の習得とフットワーク（ステップ）"
    },
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
  ],

  // ─────────────────────────────────────────
  // 筋トレログ（新しい順）
  // ─────────────────────────────────────────
  strengthLog: [
    {
      date:  "4/26",
      items: ["プランク　30秒 × ２セット", "バードドッグ（左右）　各10回 × ２セット", "腕立て伏せ　10〜15回 × ２セット", "カーフレイズ　20回 × ２セット"],
      memo:  "程よい〜少し負荷のかかる強度"
    },
    {
      date:  "4/24",
      items: ["スクワット　20回 × ２セット", "ランジ（左右）　各10回 × ２セット", "カーフレイズ　20回 × ２セット"],
      memo:  "3km計測後の筋肉痛が残っていたため軽めに実施"
    }
  ]
};
