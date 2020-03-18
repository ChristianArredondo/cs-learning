/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  if (!wordList || !wordList.length || !wordList.includes(endWord)) return 0;
  let transformLength = Number.MAX_SAFE_INTEGER;

  const traverse = (currWord, usedWordsSet, distance) => {
    if (distance + 1 > transformLength) return;

    for (const word of wordList) {
      if (usedWordsSet.has(word)) continue;
      const isChain = isOneLetterAway(currWord, word);
      if (isChain) {
        if (word === endWord) transformLength = Math.min(transformLength, distance + 1);
        else traverse(word, new Set([...usedWordsSet, word]), distance + 1);
      }
    }
  };
  traverse(beginWord, new Set(), 1);
  return transformLength === Number.MAX_SAFE_INTEGER ? 0 : transformLength;
};
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLengthBFS = function (beginWord, endWord, wordList) {
  if (!wordList || !wordList.length || !wordList.includes(endWord)) return 0;
  if (beginWord === endWord) return 1;

  let queue = [beginWord];
  let chainLength = 1;
  const visited = new Set(queue);

  while (queue.length) {
    const next = [];
    for (const queueWord of queue) {
      visited.add(queueWord);
      if (queueWord === endWord) return chainLength;
      for (const word of wordList) {
        if (visited.has(word)) continue;
        if (isOneLetterAway(queueWord, word)) {
          next.push(word);
        }
      }
    }

    chainLength++;
    queue = next;
  }

  return 0;
};

function isOneLetterAway(w1, w2) {
  if (w1.length !== w2.length) return false;

  let diff = 0;
  let l = 0;
  let r = w1.length - 1;

  // check outside into center (not inclusive of center)
  while (l < r) {
    if (w1[l] !== w2[l]) {
      if (diff) return false;
      diff++;
    }
    if (w1[r] !== w2[r]) {
      if (diff) return false;
      diff++;
    }
    l++;
    r--;
  }

  // check center
  if (w1.length % 2 !== 0) {
    if (w1[l] !== w2[r]) {
      if (diff) return false;
    }
  }

  return true;
}

console.log('\n');
console.log(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']));