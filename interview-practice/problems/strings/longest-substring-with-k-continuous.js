/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  if (!s || !s.length || s.length < k) return 0;

  const charCounts = [1];

  let charNum = 0;
  let char = s[0];

  for (let i = 1; i < s.length; i++) {
    if (s[i] === char) {
      charCounts[charNum]++;
    } else {
      charNum++;
      char = s[i];
      charCounts[charNum] = 1;
    }
  }

  let maxSub = 0;
  let continuousMax = 0;
  for (let i = 0; i < charCounts.length; i++) {
    if (charCounts[i] >= k) {
      continuousMax += charCounts[i];
      maxSub = Math.max(maxSub, continuousMax);
    } else {
      continuousMax = 0;
    }
  }

  return maxSub;
};

console.log('\n');
console.log(longestSubstring('aaabb', 3));
console.log(longestSubstring('ababb', 2));