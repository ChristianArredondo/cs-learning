/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  const num1N = num1.length;
  const num1Mid = Math.floor(num1N / 2);
  const a = Number(num1.slice(0, num1Mid));
  const b = Number(num1.slice(num1Mid));

  const num2N = num2.length;
  const num2Mid = Math.floor(num2N / 2);
  const c = Number(num2.slice(0, num2Mid));
  const d = Number(num2.slice(num2Mid));

  const step1 = a * c;
  const step2 = b * d;
  const step3 = (a + b) * (c + d);
  const step4 = step3 - step2 - step1;

  return (step1 * Math.pow(10, num1N)) + step2 + (step4 * Math.pow(10, num1N / 2));
};

const run = (n1, n2) => {
  console.log('\n');
  console.log(`${n1} * ${n2} = ${multiply(n1, n2)}`);
};

run('1234', '5678');
run('1234', '10');