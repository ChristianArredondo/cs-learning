
function printLeastRiskyPath(sneakiness, start, end) {
  const distances = {};
  const startSerialized = serialize(start);
  const endSerialized = serialize(end);

  for (const row of sneakiness) {
    for (const col of sneakiness[0]) {
      const serialized = serialize([row, col]);
      distances[serialized] = Number.MAX_SAFE_INTEGER;
    }
  }

  distances[startSerialized] = 0;
  const queue = [start];

  while (queue.length) {
    const [currRow, currCol] = queue.pop;
    const currSneakyFactor = sneakiness[currRow][currCol];

    const nextRight = [currRow, currCol + 1];
    const nextRightSerialized = serialize(nextRight);
    const nextRightSuccess = (.9 / (2 ** currRow));
    const nextRightFail = (1 - nextRightSuccess) * ((100 - currSneakyFactor) / 100);
    // distances[nextRightSerialized] = Math.min();

    const nextDown = [currRow + 1, currCol];
    const nextDownSerialized = serialize(nextDown);
    const nextDownSuccess = (1 / (2 ** currRow));
    const nextDownFail = (1 - nextDownSuccess) * ((100 - currSneakyFactor) / 100);
  }
}

const memo = {};
const serialize = ([x, y]) => {
  const maybeMemo = memo[x] && memo[x][y];
  if (maybeMemo) return maybeMemo;
  const string = `${x}_${y}`;
  if (!memo[x]) memo[x] = {};
  memo[x][y] = string;
  return string;
};