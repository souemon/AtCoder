import * as fs from "fs";

// argsに入力データ全体が入る
function Main(args: string): void {
  let S: string = args.trim();
  const targetWords: string[] = ["dreamer", "eraser", "dream", "erase"];
  while (S.length > 0) {
    if (S.indexOf(targetWords[0]) === 0) {
      S = S.slice(0, targetWords[0].length);
    } else if (S.indexOf(targetWords[1]) === 0) {
      S = S.slice(0, targetWords[1].length);
    } else if (S.indexOf(targetWords[2]) === 0) {
      S = S.slice(0, targetWords[2].length);
    } else if (S.indexOf(targetWords[3]) === 0) {
      S = S.slice(0, targetWords[3].length);
    } else {
      console.log("NO");
      return;
    }
  }
  console.log("YES");
  return;
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(fs.readFileSync(process.stdin.fd, "utf8"));
