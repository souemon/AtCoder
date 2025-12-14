import * as fs from 'fs';

// argsに入力データ全体が入る
const Main = (args: any): void => {
  const input = args.trim().split('\n');
  const AList = input[1].split(' ').map(Number);

  // 値段ごとの個数を数える
  let c100 = 0;
  let c200 = 0;
  let c300 = 0;
  let c400 = 0;

  for (const A of AList) {
    if (A === 100) c100++;
    else if (A === 200) c200++;
    else if (A === 300) c300++;
    else if (A === 400) c400++;
  }

  // 結果
  const result = c100 * c400 + c200 * c300;
  console.log(result);
};

Main(fs.readFileSync('/dev/stdin', 'utf8'));
