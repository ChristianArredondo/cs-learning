
const recursiveReverseString = s => {
  if (s.length === 1) {
    return s;
  }

  return recursiveReverseString(s.slice(1)) + s.slice(0, 1);
};

console.log('\n');
console.log(recursiveReverseString('word'));