/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParenthesesDFS = function (s) {
  if (!s) return [''];

  const result = new Set();

  const recurse = (i, lExtra, rExtra, string, openParentheses) => {
    // we've gone too far in removing or we have an extra closing
    // string will never be valid
    if (lExtra < 0 || rExtra < 0 || openParentheses < 0) return;

    // break case
    if (i === s.length) {
      if (lExtra === 0 && rExtra === 0 && openParentheses === 0) result.add(string);
      return;
    }

    // keep iterating
    const nextString = string + s[i];
    if (s[i] === '(') {
      recurse(i + 1, lExtra, rExtra, nextString, openParentheses + 1); // keep
      recurse(i + 1, lExtra - 1, rExtra, string, openParentheses); // remove
    } else if (s[i] === ')') {
      recurse(i + 1, lExtra, rExtra, nextString, openParentheses - 1); // keep
      recurse(i + 1, lExtra, rExtra - 1, string, openParentheses); // remove
    } else {
      recurse(i + 1, lExtra, rExtra, nextString, openParentheses);
    }
  };

  // pre-process
  let l = 0;
  let r = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === '(') l++;
    if (char === ')') {
      if (l > 0) l--;
      else r++;
    }
  }

  recurse(0, l, r, '', 0);
  return Array.from(result);
};

function removeInvalidParenthesesBFS(s) {
  if (!s) return [''];

  const queue = [s];
  const result = [];

  let isDone = false;
  while (queue.length) {
    const curr = queue.shift();
    if (isValid(curr)) {
      isDone = true;
      result.push(curr);
    }

    if (!isDone) {
      for (let i = 0; i < curr.length; i++) {
        const char = curr[i];
        if (char !== '(' && char !== ')') continue;

        const sub = curr.substring(0, i) + curr.substring(i + 1);
        if (!queue.includes(sub)) queue.push(sub);
      }
    }
  }

  return result;
}

function isValid(s) {
  let openCount = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === '(') openCount++;
    else if (char === ')') {
      if (!openCount) return false;
      openCount--;
    }
  }

  return openCount === 0;
}

const run = s => {
  console.log('\n');
  console.log(removeInvalidParenthesesDFS(s));
  console.log(removeInvalidParenthesesBFS(s));
};

run('(a)())()');
run('()())()');
run('))(((((()())(()');
run('n');
run('');
run(')()m)(((()((()((((');