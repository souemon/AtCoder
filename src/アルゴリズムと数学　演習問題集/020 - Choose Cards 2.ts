import * as fs from 'fs';

const invalidSum = (sum: number): boolean => {
  return sum > 1000;
};

// argsに入力データ全体が入る
const Main = (args: any): void => {
  const input = args.trim().split('\n');
  const N = Number(input[0]);
  const A = input[1].split(' ').map(Number);

  // 昇順ソート（枝刈りに必須）
  A.sort((a: number, b: number) => a - b);

  let count = 0;

  for (let i = 0; i < N; i++) {
    if (A[i] > 1000) break;

    for (let j = i + 1; j < N; j++) {
      const s2 = A[i] + A[j];
      if (s2 > 1000) break;

      for (let k = j + 1; k < N; k++) {
        const s3 = s2 + A[k];
        if (s3 > 1000) break;

        for (let l = k + 1; l < N; l++) {
          const s4 = s3 + A[l];
          if (s4 > 1000) break;

          for (let m = l + 1; m < N; m++) {
            const sum = s4 + A[m];
            if (sum > 1000) break;
            if (sum === 1000) count++;
          }
        }
      }
    }
  }

  console.log(count);
};

Main(fs.readFileSync('/dev/stdin', 'utf8'));
