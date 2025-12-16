import * as fs from 'fs';

const expectation = (P: number, Q: number): number => {
  return Q / P;
};

// argsに入力データ全体が入る
const Main = (args: any): void => {
  const input = args.trim().split('\n');
  const N = Number(input[0]);

  let expectationResult = 0;

  for (let i = 1; i <= N; i++) {
    const [P, Q] = input[i].split(' ').map(Number);
    expectationResult += expectation(P, Q);
  }

  console.log(expectationResult);
};

Main(fs.readFileSync('/dev/stdin', 'utf8'));
