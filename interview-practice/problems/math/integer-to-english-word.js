const singles = {
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine'
};
const tens = {
  1: 'Ten',
  2: 'Twenty',
  3: 'Thirty',
  4: 'Forty',
  5: 'Fifty',
  6: 'Sixty',
  7: 'Seventy',
  8: 'Eighty',
  9: 'Ninety'
};
const tenSingles = {
  10: 'Ten',
  11: 'Eleven',
  12: 'Twelve',
  13: 'Thirteen',
  14: 'Fourteen',
  15: 'Fifteen',
  16: 'Sixteen',
  17: 'Seventeen',
  18: 'Eighteen',
  19: 'Nineteen'
};
const powers = {
  3: 'Thousand',
  6: 'Million',
  9: 'Billion'
};

/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
  if (!num) return 'Zero';

  // build array of tens powers, where the index is the power i.e. 1002 => [2, <empty>, <empty>, 1]
  let total = num;
  const tensArr = [];
  while (total) {
    const highestPower = Math.floor(Math.log10(total));
    const highestPowerVal = Math.floor(total / Math.pow(10, highestPower));
    tensArr[highestPower] = highestPowerVal;
    total -= (highestPowerVal * Math.pow(10, highestPower));
  }

  // iterate tens powers in reverse
  const numWords = [];
  for (let i = tensArr.length - 1; i >= 0; i--) {
    const val = tensArr[i] || 0;
    const power = i;
    if (power % 3 === 2 || power === 2) {
      // hundreds place: only add if val > 0
      if (val > 0) numWords.push(singles[val], 'Hundred');
    } else if (power % 3 === 1 || power === 1) {
      // tens place: if val is 1, check for 11, 12, etc, otherwise if > 0 add tens, i.e. twenty, thirty, etc
      if (val === 1) numWords.push(tenSingles[10 + (tensArr[i - 1] || 0)]);
      else if (val !== 0) numWords.push(tens[val]);
    } else if (power % 3 === 0) {
      // singles place: add single if tens place !== 1 (i.e. if we added 'eleven' dont add 1 again)
      if (tensArr[power + 1] !== 1 && val !== 0) numWords.push(singles[val]);
      // if power is in thousands or greater: add the power word if there's a val > 0 within that power
      if (power > 2 && val + (tensArr[power + 1] || 0) + (tensArr[power + 2] || 0) > 0) numWords.push(powers[power]);
    }
  };

  // join words
  return numWords.join(' ');
};

const run = num => {
  console.log('\n');
  console.log('Num:', num);
  console.log(numberToWords(num));
};

run(12345);
run(1234567);
run(1234567891);
run(11);
run(1000011);
run(0);
run(10000);