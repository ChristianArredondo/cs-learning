/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function (words, word1, word2) {
  const w1Indexes = [];
  const w2Indexes = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i] === word1) w1Indexes.push(i);
    if (words[i] === word2) w2Indexes.push(i);
  }

  return w1Indexes.reduce((min, w1Index) => {
    for (const w2Index of w2Indexes) {
      const distance = Math.abs(w1Index - w2Index);
      if (distance < min) {
        min = distance;
      }
    }
    return min;
  }, Infinity);
};

console.log('\n');

console.log(shortestDistance(
  ["practice", "makes", "perfect", "coding", "makes"],
  "coding",
  "practice"
));

console.log(shortestDistance(
  ["practice", "makes", "perfect", "coding", "makes"],
  "coding",
  "makes"
));