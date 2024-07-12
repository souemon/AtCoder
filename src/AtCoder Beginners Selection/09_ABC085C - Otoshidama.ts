import * as fs from 'fs';

// argsに入力データ全体が入る
function Main(args: string): void {
  const inputData: number[] = args.split(' ').map(Number);
  const N: number = inputData[0];
  const Y: number = inputData[1];
  let result: boolean = false;
  for (let a = N; a >= 0; a--) {
    for (let b = N - a; b >= 0; b--) {
      if (10000 * a + 5000 * b + 1000 * (N - a - b) == Y) {
        console.log(`${a} ${b} ${N - a - b}`);
        result = true;
        return;
      }
    }
  }
  if (!result) {
    console.log('-1 -1 -1');
  }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(fs.readFileSync(process.stdin.fd, 'utf8'));
