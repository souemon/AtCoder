import * as fs from 'fs';

// argsに入力データ全体が入る
const Main = (args: any): void => {
  const input = parseInt(args.trim().split(' ')[0]);
  let N = Number(input);
  const primeFactorsList: number[] = [];
  for (let i = 2; i <= Math.sqrt(N); i++) {
    while (N % i === 0) {
      primeFactorsList.push(i);
      N /= i;
    }
  }

  if (N > 1) {
    primeFactorsList.push(N);
  }

  console.log(primeFactorsList.join(' '));
};

Main(fs.readFileSync('/dev/stdin', 'utf8'));
