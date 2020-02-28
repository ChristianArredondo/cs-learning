/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */
var shortestWay = function (source, target) {
  let t = 0;
  const subs = [];

  while (t < target.length) {
    let sub = '';
    for (const char of source) {
      if (char === target[t]) {
        sub += char;
        t++;
      };
    }
    if (!sub) return -1;
    else subs.push(sub);
  }

  return subs.length;
};

console.log('\n');
console.log(shortestWay('abc', 'abc'));
console.log(shortestWay('abc', 'abcbc'));
console.log(shortestWay('abc', 'acdbc'));
console.log(shortestWay('xyz', 'xzyxz'));
console.log(shortestWay(
  'adbsc',
  'addddddddddddsbc'
));