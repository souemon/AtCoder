import * as fs from 'fs';

const gcd = (a: number, b: number): number => {
  while (b !== 0) {
    const r = a % b;
    a = b;
    b = r;
  }
  return a;
};

const lcm = (a: number, b: number): number => {
  return (a / gcd(a, b)) * b;
};

// argsに入力データ全体が入る
const Main = (args: any): void => {
  const input = args.trim().split('\n');
  const N = Number(input[0]);
  const AList = input[1].split(' ').map(Number);
  let answer = AList[0];
  for (let i = 1; i < N; i++) {
    const a = Number(AList[i]);
    answer = lcm(answer, a);
  }
  console.log(answer);
};

Main(fs.readFileSync('/dev/stdin', 'utf8'));
