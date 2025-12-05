import * as fs from 'fs';

// argsに入力データ全体が入る
function Main(args: any): void {
  const input = parseInt(args.trim().split(' ')[0]);
  const N = Number(input);
  //   const divisorList: number = [];
  for (let i = 1; i < Math.sqrt(N); i++) {
    const isDivisor: boolean = N % i === 0;
    if (isDivisor) {
      console.log(i);
      console.log(N / i);
    }
  }
}
Main(fs.readFileSync('/dev/stdin', 'utf8'));
