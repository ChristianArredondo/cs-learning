const openChars = new Set(['(', '{', '[']);
const closedChars = new Set([')', '}', ']']);
const closeToOpenTable = {
  ')': '(',
  ']': '[',
  '}': '{'
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const openCharsStack = [];

  for (const char of s) {
    // open char
    if (openChars.has(char)) {
      openCharsStack.push(char);
      continue;
    }

    // close char
    if (closedChars.has(char)) {
      if (!openCharsStack.length) {
        return false;
      }

      if (closeToOpenTable[char] !== openCharsStack.pop()) {
        return false;
      }
    }
  }

  return openCharsStack.length === 0;
};

console.log(isValid('[]'));
console.log(isValid('[()]'));
console.log(isValid('[(])'));
console.log(isValid(')('));