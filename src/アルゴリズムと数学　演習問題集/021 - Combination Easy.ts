import * as fs from 'fs';

// const computeFactorial = (num: number): number => {
//   if (num <= 1) {
//     return 1
//   }
//   return num * factorial(num - 1)
// };

const computeFactorial = (n: number): number => {
  let nFactorial = 1;
  for (let i = n; i > 0; i--) {
    nFactorial *= i;
  }
  return nFactorial;
};

// argsに入力データ全体が入る
const Main = (args: any): void => {
  const input = args.trim().split(/\s+/);
  const n = Number(input[0]);
  const r = Number(input[1]);
  const nFactorial = computeFactorial(n);
  const nMinusRFactorial = computeFactorial(n - r);
  const rFactorial = computeFactorial(r);

  const result = nFactorial / (rFactorial * nMinusRFactorial);

  console.log(result);
};

Main(fs.readFileSync('/dev/stdin', 'utf8'));
