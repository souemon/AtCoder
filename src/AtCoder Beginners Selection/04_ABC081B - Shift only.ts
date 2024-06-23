import * as fs from "fs";

// argsに入力データ全体が入る
function Main(args: any): void {
  const numbers: number[] = args
    .split("\n")[1]
    .split(" ")
    .map((num: string): number => +num);
  let i: number = 0;
  type conditionFunction = (i: number) => boolean;
  const condition: conditionFunction = (i: number): boolean => {
    return numbers.every((num: number) => num % 2 ** i === 0);
  };
  do {
    i++;
  } while (condition(i));
  console.log(i - 1);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(fs.readFileSync(process.stdin.fd, "utf8"));
