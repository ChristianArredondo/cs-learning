// Split integers in half until only multiplying single digits
// and pad with zeroes to account for each split
const multiply = (int1, int2, int1Pad = 0, int2Pad = 0) => {
  if (!int1 || !int2) return 0;
  if (int1 < 10 && int2 < 10) return (int1 * Math.pow(10, int1Pad)) * (int2 * Math.pow(10, int2Pad));

  if (int1 < 10) {
    const [int2Left, int2LeftPad, int2Right] = splitInt(int2);
    return multiply(int1, int2Left, int1Pad, int2LeftPad + int2Pad)
      + multiply(int1, int2Right, int1Pad, 0 + int2Pad);
  }

  if (int2 < 10) {
    const [int1Left, int1LeftPad, int1Right] = splitInt(int1);
    return multiply(int2, int1Left, int2Pad, int1LeftPad + int1Pad)
      + multiply(int2, int1Right, int2Pad, 0 + int1Pad);
  }

  const [int1Left, int1LeftPad, int1Right] = splitInt(int1);
  const [int2Left, int2LeftPad, int2Right] = splitInt(int2);
  return multiply(int1Left, int2Left, int1LeftPad + int1Pad, int2LeftPad + int2Pad) +
    multiply(int1Left, int2Right, int1LeftPad + int1Pad, 0 + int2Pad) +
    multiply(int1Right, int2Left, 0 + int1Pad, int2LeftPad + int2Pad) +
    multiply(int1Right, int2Right, 0 + int1Pad, 0 + int2Pad);
};

const splitInt = int => {
  if (!int) return [0, 0, 0];
  if (int < 10) return [0, 0, int];

  const intPower = Math.floor(Math.log10(int));
  const split10Power = Math.ceil(intPower / 2);
  const split10Value = Math.pow(10, split10Power);
  const int1Left = Math.floor(int / split10Value);
  const int1Right = int % (int1Left * split10Value);
  return [int1Left, split10Power, int1Right];
};

const run = (num1, num2) => {
  const val = multiply(num1, num2);
  console.log('\n');
  console.log(`${num1} x ${num2} = ${val}`);
};

run(3, 5);
run(9, 9);
run(10, 1);
run(11, 11);
run(10, 100);
run(999, 999);