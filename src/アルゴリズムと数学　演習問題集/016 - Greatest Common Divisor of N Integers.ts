import * as fs from 'fs';

// argsに入力データ全体が入る
const greatestCommonDivisor = (A: bigint, B: bigint) => {
  let a = A;
  let b = B;
  while (a > 1 && b > 1) {
    if (a >= b) {
      a = a % b;
    } else {
      b = b % a;
    }
  }
  return a > 1 ? a : b;
};

// argsに入力データ全体が入る
const Main = (args: any): void => {
  const input = args.trim().split('\n');
  const AList = input[1].split(' ').map((a: string) => BigInt(a));
  const result = AList.reduce((accumulator: bigint, currentValue: bigint) =>
    greatestCommonDivisor(accumulator, currentValue),
  );
  console.log(result.toString());
};

Main(fs.readFileSync('/dev/stdin', 'utf8'));
