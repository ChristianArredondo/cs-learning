/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  const secretCountTable = [...secret].reduce((memo, char) => {
    memo[char] = memo[char] + 1 || 1;
    return memo;
  }, {});

  let bulls = 0;
  let cows = 0;
  const handledIndex = new Set();

  for (let i = 0; i < guess.length; i++) {
    const guessChar = guess[i];
    const secretChar = secret[i];
    if (guessChar === secretChar) {
      handledIndex.add(i);
      bulls++;
      secretCountTable[guessChar]--;
    }
  }
  for (let i = 0; i < guess.length; i++) {
    const guessChar = guess[i];
    if (!handledIndex.has(i) && secretCountTable[guessChar]) {
      cows++;
      secretCountTable[guessChar]--;
    }
  }

  return `${bulls}A${cows}B`;
};

console.log('\n');
// console.log(getHint('1807', '7810'));
// console.log(getHint('1123', '0111'));
console.log(getHint('1122', '1222'));