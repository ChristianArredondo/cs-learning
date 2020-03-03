/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let min = '';
  const countsMap = [...t].reduce((memo, char) => {
    memo[char] = memo[char] + 1 || 1;
    return memo;
  }, {});
  let counts = Object.keys(countsMap).length;

  let left = 0;
  let right = 0;
  while (right <= s.length) {
    if (counts === 0) {
      const sub = s.slice(left, right);
      if (!min) min = sub;
      else if (sub.length < min.length) min = sub;

      // leaving a char that we need
      const leftChar = s[left];
      if (leftChar in countsMap) {
        // inc count
        countsMap[leftChar]++;
        // if count went from 0 to 1, increment counts
        if (countsMap[leftChar] === 1) counts++;
      }
      left++;
    } else {
      const char = s[right];
      // have char that we need
      if (char in countsMap) {
        // decrement count
        countsMap[char]--;
        // if new count = 0, we can decrement all counts
        if (countsMap[char] === 0) counts--;
      }
      right++;
    }
  }

  return min;
};

console.log('\n');
console.log(minWindow('ADOBECODEBANC', 'ABC'));
console.log(minWindow('ab', 'a'));
console.log(minWindow('abc', 'ac'));