import * as fs from 'fs';

// argsに入力データ全体が入る
function Main(args: string): void {
  const inputData = args.split('\n');
  const dList: number[] = inputData
    .slice(1, inputData.length - 1)
    .map((input) => parseInt(input));
  const result: number[] = Array.from(new Set(dList));
  console.log(result.length);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(fs.readFileSync(process.stdin.fd, 'utf8'));
