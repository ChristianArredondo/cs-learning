/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {

  // Time: O(order.length) ==> O(n)
  const alienDictionaryTable = [...order].reduce((memo, char, i) => {
    memo[char] = i;
    return memo;
  }, {});


  // Time: O(words.length - 1) ==> O(n)
  for (let i = 0; i < words.length - 1; i++) {
    const curr = words[i];
    const next = words[i + 1];
    if (curr.startsWith(next) && curr.length > next.length) return false;

    // Time: O(word.length) ===> O(n)
    for (let j = 0; j < curr.length; j++) {
      const currChar = curr[j];
      const nextChar = next[j];
      if (alienDictionaryTable[currChar] < alienDictionaryTable[nextChar]) break;
      if (alienDictionaryTable[currChar] > alienDictionaryTable[nextChar]) return false;
      if (alienDictionaryTable[currChar] === alienDictionaryTable[nextChar]) continue;
    }
  }

  return true;
};