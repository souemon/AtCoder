import * as fs from 'fs';

// argsに入力データ全体が入る
function Main(args: any): void {
  const N: number = parseInt(args.trim().split(' ')[0]);
  let count: number = 1;
  for (let i = 1; i <= N; i++) count *= i;
  //出力
  console.log(count);
}
Main(fs.readFileSync('/dev/stdin', 'utf8'));
