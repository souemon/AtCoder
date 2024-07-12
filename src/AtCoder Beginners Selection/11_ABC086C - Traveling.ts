import * as fs from 'fs';

// argsに入力データ全体が入る
function Main(args: string): void {
  const [N, ...dataList] = args.trim().split('\n');
  const numberN: number = parseInt(N, 10);
  const dataListNum: number[][] = dataList.map((data) =>
    data.split(' ').map(Number),
  );

  let t = 0,
    x = 0,
    y = 0;
  let result = 'Yes';

  for (let i = 0; i < numberN; i++) {
    const [nextT, nextX, nextY] = dataListNum[i];
    const diffT = nextT - t;
    const diffX = Math.abs(nextX - x);
    const diffY = Math.abs(nextY - y);
    const distance = diffX + diffY;

    // 移動可能かどうかの判定
    if (diffT < distance || (diffT - distance) % 2 !== 0) {
      result = 'No';
      break;
    }

    // 次の地点に更新
    t = nextT;
    x = nextX;
    y = nextY;
  }

  console.log(result);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(fs.readFileSync(process.stdin.fd, 'utf8'));
