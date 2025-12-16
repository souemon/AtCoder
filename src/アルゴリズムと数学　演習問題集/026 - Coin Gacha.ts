import * as fs from 'fs';

// argsに入力データ全体が入る
const Main = (args: any): void => {
  const input = args.trim().split('\n');
  const N = Number(input[0]);

  const computeExpectance = (i: number): number => {
    return 1 / (1 - i / N);
  };

  let expectationResult = 0;

  for (let i = 0; i < N; i++) {
    expectationResult += computeExpectance(i);
  }

  console.log(expectationResult);
};

Main(fs.readFileSync('/dev/stdin', 'utf8'));
