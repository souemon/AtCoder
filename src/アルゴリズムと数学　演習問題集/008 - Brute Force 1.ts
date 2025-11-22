import * as fs from 'fs';

// argsに入力データ全体が入る
function Main(args: any): void {
  let input = args.trim().split(' ');
  const N: number = parseInt(input[0]);
  if (N < 1 || 1000 < N) return;
  const S: number = parseInt(input[1]);
  if (S < 1 || 2000 < S) return;

  let count: number = 0;
  for (let i = 1; i <= N; i++) {
    for (let r = 1; r <= N; r++) {
      if (i + r <= S) {
        count++;
      }
    }
  }

  //出力
  console.log(count);
}
Main(fs.readFileSync('/dev/stdin', 'utf8'));
