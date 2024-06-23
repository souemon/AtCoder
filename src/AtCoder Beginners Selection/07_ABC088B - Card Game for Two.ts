import * as fs from "fs";

// argsに入力データ全体が入る
function Main(args: any): void {
  const input: string[] = args.split("\n");
  const N: number = parseInt(input[0], 10);
  const numbers: number[] = input[1].split(" ").map(Number);
  const sortNumbers: number[] = numbers.sort((a: number, b: number) => b - a);
  let sumAlice: number = 0;
  let sumBob: number = 0;
  for (let i = 0; i < N; i++) {
    if (i % 2 === 0) {
      sumAlice += sortNumbers[i];
    } else {
      sumBob += sortNumbers[i];
    }
  }

  console.log(sumAlice - sumBob);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(fs.readFileSync(process.stdin.fd, "utf8"));
