/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (!matrix || !matrix.length || !matrix[0].length) return false;

  let row = matrix.length - 1;
  let col = 0;

  while (row >= 0 && col < matrix[0].length) {
    const el = matrix[row][col];
    if (el === target) return true;
    else if (el > target) row--;
    else col++;
  }

  return false;
};

console.log(searchMatrix(
  [
    [1, 3, 5, 7, 9],
    [2, 4, 6, 8, 10],
    [11, 13, 15, 17, 19],
    [12, 14, 16, 18, 20],
    [21, 22, 23, 24, 25]
  ],
  9
));