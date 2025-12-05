import * as fs from 'fs';

// argsに入力データ全体が入る
function Main(args: any): void {
  const input = parseInt(args.trim().split(' ')[0]);
  const N = Number(input);
  let isPrimeNumber = true;
  for (let i = 2; i < Math.sqrt(N); i++) {
    if (N % i == 0) {
      isPrimeNumber = false;
      break;
    }
  }
  console.log(isPrimeNumber ? 'Yes' : 'No');
}
Main(fs.readFileSync('/dev/stdin', 'utf8'));
