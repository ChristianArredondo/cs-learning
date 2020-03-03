/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const str1 = trimAndReduce(version1);
  const str2 = trimAndReduce(version2);

  if (str1.length >= str2.length) {
    for (let i = 0; i < str1.length; i++) {
      const num1 = parseInt(str1[i], 10);
      const num2 = str2[i] ? parseInt(str2[i], 10) : 0;
      if (num1 > num2) return 1;
      if (num2 > num1) return -1;
    }
  } else {
    for (let i = 0; i < str2.length; i++) {
      const num2 = parseInt(str2[i], 10);
      const num1 = str1[i] ? parseInt(str1[i], 10) : 0;
      if (num2 > num1) return -1;
      if (num1 > num2) return 1;
    }

  }

  return 0;
};

const trimAndReduce = str => {
  return str.split('.').reduce((memo, char) => {
    const withoutZeroes = trimLeadingZeroes(char);
    if (withoutZeroes) memo.push(withoutZeroes);
    else memo.push('0');
    return memo;
  }, []);
};

// '0' => ''
// '010' => '10'
// '0001' => '1'
const trimLeadingZeroes = str => {
  let newStr = '';

  let hasNum = false;
  for (let i = 0; i < str.length; i++) {
    const curr = str[i];
    if (curr === '0' && !hasNum) continue;
    hasNum = true;
    newStr += curr;
  }

  return newStr;
};

console.log('\n');
console.log(compareVersion('0.1', '1.1'));
console.log(compareVersion('1.0.1', '1'));
console.log(compareVersion('1', '1.0.1'));
console.log(compareVersion('1.0', '1.0.0.0'));
console.log(compareVersion('1.1', '1.10'));