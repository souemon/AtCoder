import * as fs from 'fs';

const combinationCalculation = (colorCount: number): number => {
  return (colorCount * (colorCount - 1)) / 2;
};

// argsに入力データ全体が入る
const Main = (args: any): void => {
  const input = args.trim().split('\n');
  const AList = input[1].split(' ').map(Number);

  // 値段ごとの個数を数える
  let redCount = 0;
  let yellowCount = 0;
  let blueCount = 0;

  for (const A of AList) {
    if (A === 1) redCount++;
    else if (A === 2) yellowCount++;
    else if (A === 3) blueCount++;
  }

  // 結果
  const result =
    combinationCalculation(redCount) +
    combinationCalculation(yellowCount) +
    combinationCalculation(blueCount);
  console.log(result);
};

Main(fs.readFileSync('/dev/stdin', 'utf8'));
