import * as fs from "fs";

// argsに入力データ全体が入る
function Main(args: any): void {
  const [N, A, B] = args.split(" ").map(Number);
  let count: number = 0;
  for (let i = 1; i <= N; i++) {
    const sum = i
      .toString()
      .split("")
      .map(Number)
      .reduce((a, b) => a + b, 0);
    if (A <= sum && sum <= B) {
      count += i;
    }
  }

  console.log(count);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(fs.readFileSync(process.stdin.fd, "utf8"));
