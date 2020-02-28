/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minKnightMoves = function (x, y) {

  const moveOptions = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [2, 1],
    [2, -1],
    [1, 2],
    [1, -2]
  ];

  let potentialHits = [[0, 0]];
  const visited = new Set();
  let moves = 0;

  while (potentialHits.length) {
    let nextQueue = [];
    while (potentialHits.length) {
      const [maybeX, maybeY] = potentialHits.shift();
      if (maybeX === x && maybeY === y) return moves;
      for (const [deltaX, deltaY] of moveOptions) {
        const nextX = maybeX + deltaX;
        const nextY = maybeY + deltaY;
        const serialized = serialize(nextX, nextY);
        if (!visited.has(serialized)) {
          nextQueue.push([nextX, nextY]);
          visited.add(serialized);
        }
      }
    }
    moves++;
    potentialHits = nextQueue;
  }

  return moves;
};

const serialize = (x, y) => `${x}_${y}`;

console.log('\n');
console.log(minKnightMoves(2, 1));
console.log(minKnightMoves(5, 5));
console.log(minKnightMoves(270, -21));
console.log(minKnightMoves(130, -86));