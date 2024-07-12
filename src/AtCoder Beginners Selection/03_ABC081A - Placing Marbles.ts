import * as fs from 'fs';

// argsに入力データ全体が入る
function Main(args: any): void {
  const [a, b, c] = args.split('');
  //出力
  console.log(+a + +b + +c);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(fs.readFileSync(process.stdin.fd, 'utf8'));
