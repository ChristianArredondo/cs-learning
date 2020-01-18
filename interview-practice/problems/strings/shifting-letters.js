
const shiftingLetters = (S, shifts) => {
  const aCode = 'a'.charCodeAt(0);
  const zCode = 'z'.charCodeAt(0);
  const alphSize = zCode - aCode + 1;

  let shiftedString = '';
  let backSum = 0;

  for (let i = S.length - 1; i >= 0; i--) {
    const charCode = S[i].charCodeAt(0);
    const shiftBy = shifts[i] + backSum;
    const newCode = aCode + ((charCode - aCode + shiftBy) % alphSize);

    shiftedString = String.fromCharCode(newCode) + shiftedString;
    backSum += shifts[i];
  }

  return shiftedString;
};

console.log(shiftingLetters('abc', [3, 5, 9]));