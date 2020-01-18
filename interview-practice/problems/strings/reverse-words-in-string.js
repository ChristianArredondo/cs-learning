
const reverseWords = s => {
  return s.trim()
    .split(' ')
    .reduce((memo, char) => {
      if (char.trim()) {
        memo.unshift(char.trim());
      }
      return memo;
    }, [])
    .join(' ');
};

console.log('\n', reverseWords('the sky is blue'));
console.log('\n', reverseWords('a good    example'));
console.log('\n', reverseWords('  hello world! '));