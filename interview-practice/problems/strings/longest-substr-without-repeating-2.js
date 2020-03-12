/**
 * @param {string} s
 * @return {number}
 * 'abcabcbb'
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let maxSub = '';

  let left = 0;
  let right = 0;
  while (left < s.length && right < s.length) {
    const sub = s.slice(left, right + 1);
    if ((new Set(sub)).size === sub.length) {
      if (sub.length > max) {
        max = sub.length;
        maxSub = sub;
      }
      right++;
    } else {
      left++;
    }
  }

  return maxSub.length;
};

console.log('\n');
console.log(lengthOfLongestSubstring('pwwkew'));