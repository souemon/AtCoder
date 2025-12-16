import * as fs from 'fs';

const expectationA = (A: number): number => {
  return (1 / 3) * A;
};

const expectationB = (B: number): number => {
  return (2 / 3) * B;
};

// argsに入力データ全体が入る
const Main = (args: any): void => {
  const input = args.trim().split('\n');
  const N = Number(input[0]);
  const AList = input[1].split(' ').map(Number);
  const BList = input[2].split(' ').map(Number);

  let expectationResult = 0;

  for (let i = 0; i < N; i++) {
    expectationResult += expectationA(AList[i]);
    expectationResult += expectationB(BList[i]);
  }

  console.log(expectationResult);
};

Main(fs.readFileSync('/dev/stdin', 'utf8'));
