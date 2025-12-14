import * as fs from 'fs';

// argsに入力データ全体が入る
const Main = (args: any): void => {
  const input = args.trim().split('\n');
  const N = Number(input[0]);
  const A = input[1].split(' ').map(Number);

  // 値の最大は 99999
  const MAX = 100000;
  const freq = new Array<number>(MAX).fill(0);

  // 出現回数を数える
  for (const a of A) {
    freq[a]++;
  }

  let count = 0;

  // x < 100000 - x の場合
  for (let x = 1; x < 50000; x++) {
    const y = 100000 - x;
    if (y < MAX) {
      count += freq[x] * freq[y];
    }
  }

  // x = y = 50000 の場合
  const c = freq[50000];
  count += (c * (c - 1)) / 2;
};

Main(fs.readFileSync('/dev/stdin', 'utf8'));
