/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const charCount = [];
  [...s].forEach((char) => {
    const charCode = char.charCodeAt(0);
    if (!charCount[charCode]) charCount[charCode] = 0;
    charCount[charCode]++;
  });
  return [...t].every((char) => {
    const charCode = char.charCodeAt(0);
    return --charCount[charCode] >= 0;
  });
};

console.log('\n');
console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));