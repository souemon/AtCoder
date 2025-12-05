import * as fs from 'fs';

function isPrime(n: number): boolean {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// argsに入力データ全体が入る
function Main(args: any): void {
  const input = parseInt(args.trim().split(' ')[0]);
  const N = Number(input);
  const primes: number[] = [];
  for (let i = 2; i <= N; i++) {
    if (isPrime(i)) primes.push(i);
  }
}
Main(fs.readFileSync('/dev/stdin', 'utf8'));
