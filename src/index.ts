// 手元の実行　npx ts-node index.ts
// 入力 同ディレクトリ　test.txt
// jestによるテスト　npm test

import { Console } from 'console';
import { DEFAULT_MIN_VERSION } from 'tls';
import * as fs from 'fs';

// 手元時"l"、提出時"u"、テスト時"t"
const onlineOrNot: string = 'u';

//resolve
const program = (args: any) => {
  answer = 'hoge';

  return answer;
};

const io = (input: string) => {
  // 入力を受け取り、行ごとに分割　本番と手元で挙動が少し違う
  let args;
  if (onlineOrNot === 'on') {
    args = input.split('\n');
  } else {
    args = input.split('\r\n');
  }

  console.log(program(args));
};

//jest用
module.exports = program;

if (onlineOrNot === 'u') {
  io(fs.readFileSync(process.stdin.fd, 'utf8'));
}
if (onlineOrNot === 'l') {
  io(fs.readFileSync('local.txt', 'utf8'));
}
