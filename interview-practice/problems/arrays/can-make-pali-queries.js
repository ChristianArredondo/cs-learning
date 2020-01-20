var canMakePaliQueries = function (s, queries) {
  let results = [];

  for (let query of queries) {
    let [left, right, k] = query;

    if (query[2] >= 13) {
      results.push(true);
      continue;
    }

    k *= 2;

    let counts = new Array(26).fill(0);

    for (let iii = left; iii <= right; iii++) {
      counts[s.charCodeAt(iii) - 'a'.charCodeAt(0)]++;
    }

    for (let elem of counts) {
      if (elem % 2 == 1) {
        k--;
      }
    }

    if ((right - left + 1) % 2 == 1) {
      k++;
    }

    if (k < 0) {
      results.push(false);
    } else {
      results.push(true);
    }
  }

  return results;
};

console.log(canMakePaliQueries('abad', [[0, 3, 1]]));