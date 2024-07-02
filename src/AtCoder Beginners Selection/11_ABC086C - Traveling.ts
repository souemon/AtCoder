import * as fs from "fs";
import { stringify } from "querystring";

// argsに入力データ全体が入る
function Main(args: string): void {
  const [N, ...dataList] = args.split("\n");
  const numberN: number = parseInt(N, 10);
  const dataListNum: number[][] = dataList.map((data) =>
    data.split(" ").map(Number)
  );
  let t: number = 0;
  let x: number = 0;
  let y: number = 0;
  let xAndY: number = 0;
  let result: string = "No";
  for (let i: number = 0; i < numberN; i++) {
    const diffT: number = Math.abs(t - dataListNum[i][0]);
    const diff: number = dataListNum[i][1] + dataListNum[i][2];
    t = dataListNum[i][0];
    if (diffT % 2 == 0) {
      if (
        diffT >=
          Math.abs(Math.abs(dataListNum[i][1]) - Math.abs(x)) +
            Math.abs(Math.abs(dataListNum[i][2]) - Math.abs(y)) &&
        (diff / diffT == 1 || diff == 0)
      ) {
        result = "Yes";
      } else {
        result = "No";
        break;
      }
    } else {
      let flag: boolean = false;
      for (let j: number = diffT; j > 0; j = j - 2) {
        if (Math.abs(xAndY - diff) == Math.abs(j)) {
          flag = true;
          result = "Yes";
          break;
        }
      }
      xAndY = dataListNum[i][1] + dataListNum[i][2];
      if (!flag) {
        result = "No";
        break;
      }
    }
    x = dataListNum[i][1];
    y = dataListNum[i][2];
  }
  console.log(result);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(fs.readFileSync(process.stdin.fd, "utf8"));
