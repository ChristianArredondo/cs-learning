
const longestPalindromicSubstring = s => {
  if (!s || s.length === 1) {
    return s;
  }

  const table = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!table[char]) table[char] = [];
    table[char].push(i);
  }

  let globalMaxLength = 0;
  let globalMaxPalindrome = '';
  Object.keys(table).forEach(key => {
    const duplicatesArr = table[key];
    if (!duplicatesArr || !duplicatesArr.length) return;
    const { length, palindrome } = checkPalindromes(s, duplicatesArr);
    if (length > globalMaxLength) {
      globalMaxLength = length;
      globalMaxPalindrome = palindrome;
    }
  });

  return globalMaxPalindrome || s[0];
};

function checkPalindromes(s, arr) {
  let length = 0;
  let palindrome = '';
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j > i; j--) {
      if (arr[j] + 1 - arr[i] <= length) continue;
      const substring = s.slice(arr[i], arr[j] + 1);
      if (isPalindrome(substring)) {
        length = substring.length;
        palindrome = substring;
      }
    }
  }

  return { length, palindrome };
}

function isPalindrome(s) {
  const reversed = s
    .split('')
    .reverse()
    .join('');
  return s === reversed;
}

console.log(longestPalindromicSubstring('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabcaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'));