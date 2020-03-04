/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const res = [];
  explore(0, []);
  return res;

  function explore(row, colPositions) {
    if (row === n) res.push([...colPositions]);
    else {
      for (let col = 0; col < n; col++) {
        colPositions.push(col);
        if (canPlaceQueen(colPositions)) explore(row + 1, colPositions);
        colPositions.pop();
      }
    }
  }

  function canPlaceQueen(colPositions) {
    const currRow = colPositions.length - 1;
    const currCol = colPositions[currRow];
    for (let row = 0; row < currRow; row++) {
      const col = colPositions[row];
      if (currCol === col) return false;
      if (Math.abs(currRow - row) === Math.abs(currCol - col)) return false;
    }

    return true;
  }

};

console.log(solveNQueens(4));