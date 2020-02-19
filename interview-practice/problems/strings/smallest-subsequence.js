
var smallestSubsequence = function (text) {
  const totalUnique = (new Set(text)).size;
  const subsequences = [];

  function getSmallestSubsequence(str, set) {
    if (set.size === totalUnique) return [...set].join('');

    for (let i = 0; i < str.length; i++) {
      const head = str[i];
      if (set.has(head)) continue;
      const nextStr = str.slice(i + 1);
      const sub = getSmallestSubsequence(nextStr, new Set([...set, head]));
      if (sub) {
        subsequences.push(sub);
      }
    }

    return null;
  }

  getSmallestSubsequence(text, new Set());
  subsequences.sort();
  return subsequences[0];
};

console.log('\n');
console.log(smallestSubsequence('ecbacba'));
// console.log(smallestSubsequence('bdfecedcbfcfeaaffdbaeeabadbbbddddcafdfeeeebfcdabcfaadecddccdefcabedbebbdcbdfefeffcbbeaefaeefeeceadea'));