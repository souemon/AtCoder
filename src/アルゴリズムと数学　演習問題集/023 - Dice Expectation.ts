import * as fs from 'fs';

// argsに入力データ全体が入る
const Main = (args: any): void => {
  const input = args.trim().split('\n');
  const N = Number(input[0]);
  const B = input[1].split(' ').map(Number);
  const R = input[2].split(' ').map(Number);

  let sumB = 0;
  let sumR = 0;

  for (let i = 0; i < N; i++) {
    sumB += B[i];
    sumR += R[i];
  }

  const expectedValue = sumB / N + sumR / N;

  // 誤差対策
  console.log(expectedValue.toFixed(12));
};

Main(fs.readFileSync('/dev/stdin', 'utf8'));

// import * as fs from 'fs';

// const expectation = (N: number, B: number[], R: number[]): number => {
//     return B.reduce((pre, curr) => pre + curr, 0) / N + R.reduce((pre, curr) => pre + curr, 0) / N;
// }

// const Main = (input: string): void => {
//     const lines = input.trim().split('\n');
//     const N = Number(lines[0]);
//     const B = lines[1].split(' ').map(Number);
//     const R = lines[2].split(' ').map(Number);
//     console.log( expectation(N, B, R) );
// }

// Main(fs.readFileSync('/dev/stdin', 'utf-8'));
