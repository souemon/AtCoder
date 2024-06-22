import * as fs from "fs";

// argsに入力データ全体が入る
function Main(args: any): void {
  const input = args.split(" ");
  //文字列から10進数に変換するときはparseIntを使います
  const a = parseInt(input[0], 10);
  const b = parseInt(input[1], 10);
  // 計算結果を判定する
  if ((a * b) % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(fs.readFileSync("/dev/stdin", "utf8"));
