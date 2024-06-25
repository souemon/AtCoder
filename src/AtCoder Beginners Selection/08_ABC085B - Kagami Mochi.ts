import * as fs from "fs";

// argsに入力データ全体が入る
function Main(args: any): void {
  const [N, ...dList]: string[] = args.split("\n");
  const SortedD: number[] = Array.from(
    new Set(dList.map((number) => parseInt(number, 10)))
  );
  console.log(SortedD.length);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(fs.readFileSync(process.stdin.fd, "utf8"));
