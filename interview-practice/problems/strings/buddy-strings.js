
const buddyStrings = (A = '', B = '') => {
  if (A.length !== B.length) return false;
  
  const changesTable = {};
  let totalChanges = 0;
  for (let i = 0; i < A.length; i++) {
    const aChar = A[i];
    const bChar = B[i];
    if (aChar !== bChar) {
      totalChanges++;
      changesTable[aChar] = bChar;
    }
  }
  if (totalChanges === 1 || totalChanges > 2) return false;
  if (totalChanges === 0) return A.length > (new Set(A)).size;
  return Object.keys(changesTable).every(char => {
    return char === changesTable[changesTable[char]];
  });
}

console.log(buddyStrings('ab', 'ba') === true);
console.log(buddyStrings('ab', 'ab') === false);
console.log(buddyStrings('aa', 'aa') === true);
console.log(buddyStrings('aaaaaaabc', 'aaaaaaacb') === true);
console.log(buddyStrings('', 'aa') === false);