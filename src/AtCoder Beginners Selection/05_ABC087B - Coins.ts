import * as fs from "fs";

// argsに入力データ全体が入る
function Main(args: any): void {
  const [A, B, C, X] = args.split("\n").map(Number);
  let count: number = 0;
  for (let a = 0; a <= A; a++) {
    for (let b = 0; b <= B; b++) {
      for (let c = 0; c <= C; c++) {
        if (500 * a + 100 * b + 50 * c === X) {
          count++;
        }
      }
    }
  }
  console.log(count);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(fs.readFileSync(process.stdin.fd, "utf8"));
