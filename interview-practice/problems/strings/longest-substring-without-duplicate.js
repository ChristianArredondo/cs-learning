/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  const totalUnique = (new Set(s)).size;

  if (!s) return maxLength;

  for (let i = 0; i < s.length; i++) {
    const sub = getNonDuplicates(s.slice(i));
    maxLength = Math.max(maxLength, sub.length);
    if (maxLength === totalUnique) return maxLength;
  }

  return maxLength;
};

const getNonDuplicates = str => {
  const chars = new Set();
  let nonDupeString = '';

  for (const char of str) {
    if (!chars.has(char)) {
      chars.add(char);
      nonDupeString += char;
    } else {
      return nonDupeString;
    }
  }

  return nonDupeString;
};

console.log('\n');
console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring(''));