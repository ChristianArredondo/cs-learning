/**
 * - return largest word in the string
 * - only a-z characters count
 * - for equal length words, return the first one
 */
function longestWord(sen) {
  return sen
    .split(' ')
    .map(word => word.match(/[a-zA-Z]*/)[0])
    .filter(word => !!word)
    .reduce((memo, word) => word.length > memo.length ? word : memo, '');
}

console.log(longestWord('fun&!! time')); // time
console.log(longestWord('I love dogs')); // love