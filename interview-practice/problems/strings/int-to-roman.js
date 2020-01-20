
const romans = [
  ['I', 1],
  ['V', 5],
  ['X', 10],
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000]
];

function intToRoman(num) {
  let i = romans.length - 1;
  let string = '';

  while (num > 0) {
    const [letter, rNum] = romans[i];
    if (num >= rNum) {
      num -= rNum;
      string += letter;
      continue;
    }

    const backCheck = Math.log10(rNum) === Math.floor(Math.log10(rNum))
      ? 2
      : 1;
    if (i > 0) {
      const [backLetter, backRNum] = romans[i - backCheck];
      const backTotal = rNum - backRNum;
      if (num >= backTotal) {
        num -= backTotal;
        string += `${backLetter}${letter}`;
        i -= backCheck;
        continue;
      }
    }
    i--;
  }

  return string;
}

const run = num => {
  console.log(`${num} ==> `, intToRoman(num));
};

console.log('\n');
run(1);
run(7);
run(9);
run(4);
run(94);
run(999);
run(3999);