
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {

  const table = [...s].reduce((memo, char) => {
    memo[char] = memo[char] + 1 || 1;
    return memo;
  }, {});

  for (const char in table) {
    const val = table[char];
    if (val < k) {
      const subWords = s.split(char);
      let longest = 0;
      for (const subWord of subWords) {
        const maybeLongest = longestSubstring(subWord, k);
        longest = Math.max(longest, maybeLongest);
      }
      return longest;
    }
  }

  return s.length;
};

console.log('\n');
console.log(longestSubstringBetter('ababbc', 2));