/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function (points) {

  const pointsSet = new Set();
  for (const point of points) pointsSet.add(serializePoint(point));

  let minArea = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      // get point coords
      const [x1, y1] = points[i];
      const [x2, y2] = points[j];

      // if on the same line, continue
      if (x1 === x2 || y1 === y2) continue;

      // ensure other 2 points needed to make rectangle are in set
      if (!pointsSet.has(serializePoint([x1, y2])) || !pointsSet.has(serializePoint([x2, y1]))) continue;

      // compute area and compare with min
      const area = Math.abs(y2 - y1) * Math.abs(x2 - x1);
      minArea = Math.min(minArea, area);
    }
  }

  return minArea === Number.MAX_SAFE_INTEGER ? 0 : minArea;
};

const serializePoint = ([x, y]) => `${x}_${y}`;

console.log('\n');
console.log(minAreaRect([[1, 1], [1, 3], [3, 1], [3, 3], [2, 2]]));
console.log(minAreaRect([[1, 1], [1, 3], [3, 1], [3, 3], [4, 1], [4, 3]]));
console.log(minAreaRect([[0, 1], [1, 3], [3, 3], [4, 4], [1, 4], [2, 3], [1, 0], [3, 4]]));