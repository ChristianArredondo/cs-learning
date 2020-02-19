/**
 * @param {string} s
 * @return {number}
 */
const hashTable = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};
var romanToInt = function (s) {
  let total = 0;
  let previousChar = s[0];
  total += hashTable[previousChar];

  for (let i = 1; i < s.length; i++) {
    const currentChar = s[i];
    const currentVal = hashTable[currentChar];
    if (currentVal > hashTable[previousChar]) {
      total = total + currentVal - (hashTable[previousChar] * 2);
    } else {
      total += currentVal;
    }
    previousChar = currentChar;
  }

  return total;
};

console.log(romanToInt('XXIV'));