/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (!s || !s.length) return '';

  let maxLengthPali = '';

  for (let i = 0; i < s.length; i++) {
    const paliAtCenterI = getLongestPali(s, i, i);
    const palyAroundCenterI = getLongestPali(s, i, i + 1);
    if (paliAtCenterI.length > maxLengthPali.length) maxLengthPali = paliAtCenterI;
    if (palyAroundCenterI.length > maxLengthPali.length) maxLengthPali = palyAroundCenterI;
  }

  return maxLengthPali;
};

function getLongestPali(string, left, right) {
  let pali = '';
  const isInBounds = () => left >= 0 && right < string.length;

  while (string[left] === string[right] && isInBounds()) {
    if (left === right) {
      pali = string[left];
    } else {
      pali = string[left] + pali + string[right];
    }
    left--;
    right++;
  }

  return pali;
}

console.log('\n');
console.log(longestPalindrome('ba'));
console.log(longestPalindrome('racecar'));