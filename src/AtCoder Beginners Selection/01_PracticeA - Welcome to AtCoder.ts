import * as fs from "fs";

// argsに入力データ全体が入る
function Main(args: any): void {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  let input = args.split("\n");
  const tmp = input[1].split(" ");
  //文字列から10進数に変換するときはparseIntを使います
  let a = parseInt(input[0], 10);
  let b = parseInt(tmp[0], 10);
  let c = parseInt(tmp[1], 10);
  let s = input[2];
  //出力
  console.log("%d %s", a + b + c, s);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(fs.readFileSync("/dev/stdin", "utf8"));
