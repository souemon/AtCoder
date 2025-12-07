import * as fs from 'fs';

// argsに入力データ全体が入る
const Main = (args: any): void => {
  const input = args.trim().split(' ');
  let A = Number(input[0]);
  let B = Number(input[1]);
  while (A !== 0 && B !== 0) {
    if (A >= B) {
      A = A % B;
    } else {
      B = B % A;
    }
  }
  console.log(A !== 0 ? A : B);
};

Main(fs.readFileSync('/dev/stdin', 'utf8'));
