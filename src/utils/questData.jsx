//クエスト周回ベースのAP設定（倍率:1.0）
const stageData = {
    '駆け出し': {
        ap: 20 , point: 40,
    },
    '熟練': {
        ap: 30 , point: 80,
    },
    '精鋭':{
        ap: 40 , point: 170,
    },
    '天上':{
        ap: 55 , point: 350,
    },
    '修羅':{
        ap: 65 , point: 600,
    }
}

//イベントバナーの設定
const bnrImgPath = `${window.location.origin}/images/bnr.png`

//報酬のタイプ
const rewardType = {
    'J':'鍵「熟練度クエスト」',
    'GR':'ゴールドリミミンキング',
    'A':'鍵「図鑑アバター解放」',
    'Y':'冥き精霊の魔影晶',
    'K':'鍵「超強化素材クエスト」',
    'EK':'エーテルの雫の欠片',
    'S': 'スキルリミミンキング',
    'MK':'目覚めのオーブの欠片',
    'SS': 'SSハンマー',
    'GK': 'かけらGEM',
    'KS': 'カナデのスランプ',
    'C': '鍵「超進化素材クエスト」',
    'EXP': 'EXPリミミンキング',
    'E': 'エンチャントジュエル',
    'T': '転生の大宝珠',
    'TS': 'ティアのスタンプ',
    'RS': 'ルバートのスタンプ',
    'RO': 'ラブリーなオーラ',
    'SH': '召喚書「[欲張り君主]ハートの女王」',
    'N35': '[35]目覚めのニノーユ',
    'M': '目覚めのオーブ（期限付き）',
    'SR': '召喚書「[照れ隠し]ルバート」',
    'JS': '熟練の書',
    'ES': 'エーテルの雫（期限付き）',
    'SSS': 'SSシルバー銅',
    'TK31': 'コスト31以上SSRモンスター確定ガチャチケット',
    'SSP': 'SSプラチナ銅',
    'H': '秘伝の書',
    'G': 'GEM',
    'N41': '[41]目覚めのニノーユ'
}

//イベントの報酬
const rewardList = {
    50: { type: 'J' , amount: 1},
    100: { type: 'GR' , amount: 5},
    150: { type: 'A' , amount: 1},
    200: { type: 'Y' , amount: 2},
    250: { type: 'K' , amount: 1},
    300: { type: 'EK' , amount: 1},
    400: { type: 'S' , amount: 5},
    500: { type: 'MK' , amount: 1},
    600: { type: 'SS' , amount: 20},
    700: { type: 'GK' , amount: 20},
    800: { type: 'Y' , amount: 2},
    900: { type: 'S' , amount: 5},
    1000: { type: 'KS' , amount: 1},
    1200: { type: 'GK' , amount: 20},
    1400: { type: 'J' , amount: 1},
    1600: { type: 'C' , amount: 1},
    1800: { type: 'GK' , amount: 20},
    2000: { type: 'EXP' , amount: 5},
    2500: { type: 'E' , amount: 2},
    3000: { type: 'Y' , amount: 2},
    3500: { type: 'ES' , amount: 1},
    4000: { type: 'GK' , amount: 20},
    4500: { type: 'T', amount: 1},
    5000: { type: 'TS' , amount: 1},
    6000: { type: 'K' , amount: 1},
    7000: { type: 'SS' , amount: 20},
    8000: { type: 'RS' , amount: 1},
    9000: { type: 'J' , amount: 1},
    10000: { type: 'RO' , amount: 1},
    12000: { type: 'SH' , amount: 1},
    14000: { type: 'N35' , amount: 1},
    16000: { type: 'GK' , amount: 20},
    18000: { type: 'M' , amount: 1},
    20000: { type: 'SR' , amount: 1},
    22000: { type: 'C' , amount: 1},
    24000: { type: 'Y' , amount: 2},
    26000: { type: 'T' , amount: 1},
    28000: { type: 'GK' , amount: 20},
    30000: { type: 'JS' , amount: 1},
    35000: { type: 'S' , amount: 10},
    40000: { type: 'K' , amount: 1},
    45000: { type: 'ES' , amount: 1},
    50000: { type: 'SSS' , amount: 1},
    55000: { type: 'EXP' , amount: 10},
    60000: { type: 'GK' , amount: 20},
    65000: { type: 'Y' , amount: 2},
    70000: { type: 'M' , amount: 1},
    75000: { type: 'SS' , amount: 20},
    80000: { type: 'TK31' , amount: 1},
    85000: { type: 'J' , amount: 3},
    90000: { type: 'SS' , amount: 20},
    95000: { type: 'GK' , amount: 50},
    100000: { type: 'SSP' , amount: 1},
    110000: { type: 'Y' , amount: 2},
    120000: { type: 'TK31' , amount: 1},
    130000: { type: 'GK' , amount: 50},
    140000: { type: 'H' , amount: 1},
    150000: { type: 'ES' , amount: 1},
    160000: { type: 'G' , amount: 1},
    170000: { type: 'G' , amount: 1},
    180000: { type: 'G' , amount: 1},
    190000: { type: 'M' , amount: 1},
    200000: { type: 'N41' , amount: 1},
    250000: { type: 'G' , amount: 1},
    300000: { type: 'G' , amount: 1},
    350000: { type: 'G' , amount: 1},
    400000: { type: 'G' , amount: 3},
    450000: { type: 'G' , amount: 3},
    500000: { type: 'G' , amount: 5}
}


module.exports = {
    stageData,
    bnrImgPath,
    rewardList,
    rewardType
}