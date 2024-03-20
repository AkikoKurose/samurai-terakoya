const holidays = ['正月','成人の日','建国記念日','天皇誕生日','春分の日','昭和の日','憲法記念日','みどりの日','こどもの日','海の日','山の日','敬老の日','秋分の日','スポーツの日','文化の日','勤労感謝の日'];

// 配列内の インデックス番号 を参照することで、配列の中のデータを取り出す
// iをループのインデックスとして使用し、holidays.lengthを終了条件として設定
// 各ループで holidays[i]を表示

for (let i = 0; i <=holidays.length; i++){
  console.log(holidays[i]);
}

// i++でiをカウント
let i=0;
while (i < holidays.length){
  console.log(holidays[i]);
  i++;
}