const fs = require('fs');

function main(): void {
  const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ');
  const n: number = parseInt(input[0]);
  const x: number = parseInt(input[1]);
  const y: number = parseInt(input[2]);
  if (x < 1 || y < x || y > n || n > 10 ** 6) return;

  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (i % x == 0 || i % y == 0) {
      ++count;
    }
  }

  console.log(count);
}

main();
