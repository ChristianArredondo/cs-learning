/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';

  const products = [];
  const m = (s1, s1Power, s2, s2Power) => {
    // base
    if (s1.length === 1 && s2.length === 1) {
      const powerPlace = s1Power + s2Power;
      const productAtPlace = s1 * s2;
      products[powerPlace] = (products[powerPlace] || 0) + productAtPlace;
      return;
    }

    // s2 is already one digit long, only split s1
    if (s2.length === 1) {
      const [s1Left, s1LeftPower, s1Right, s1RightPower] = split(s1, s1Power);
      return m(s1Left, s1LeftPower, s2, s2Power) +
        m(s1Right, s1RightPower, s2, s2Power);
    }

    // s1 is already one digit long, only split s2
    if (s1.length === 1) {
      const [s2Left, s2LeftPower, s2Right, s2RightPower] = split(s2, s2Power);
      return m(s2Left, s2LeftPower, s1, s1Power) +
        m(s2Right, s2RightPower, s1, s1Power);
    }

    // both need to be split
    const [s1Left, s1LeftPower, s1Right, s1RightPower] = split(s1, s1Power);
    const [s2Left, s2LeftPower, s2Right, s2RightPower] = split(s2, s2Power);
    return m(s1Left, s1LeftPower, s2Left, s2LeftPower) +
      m(s1Left, s1LeftPower, s2Right, s2RightPower) +
      m(s1Right, s1RightPower, s2Left, s2LeftPower) +
      m(s1Right, s1RightPower, s2Right, s2RightPower);
  };

  // init
  m(num1, 0, num2, 0);

  // reduce to string
  let carryOver = 0;
  const final = products.map((product, i) => {
    const total = product + carryOver;
    if (total < 10) {
      carryOver = 0;
      return total;
    }

    const newCarryOver = Math.floor(total / 10);
    const remainder = total - (newCarryOver * 10);
    carryOver = newCarryOver;
    return remainder;
  });

  if (carryOver) final.push(carryOver);
  return final.reverse.join('');
};

const split = (str, strPower) => {
  const s1Midpoint = Math.floor(str.length / 2);
  const s1Left = str.slice(0, s1Midpoint);
  const s1LeftPower = str.length - s1Midpoint + strPower;
  const s1Right = str.slice(s1Midpoint);
  const s1RightPower = strPower;
  return [s1Left, s1LeftPower, s1Right, s1RightPower];
};

const run = (s1, s2) => {
  console.log('\n');
  console.log(`${s1} x ${s2} = ${multiply(s1, s2)}`);
};

run('9', '3');
run('0', '311');
run('1000', '100');
run('123456789', '987654321');
run(
  '3141592653589793238462643383279502884197169399375105820974944592',
  '2718281828459045235360287471352662497757247093699959574966967627'
);