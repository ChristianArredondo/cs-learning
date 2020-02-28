/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number[]}
 */
var assignBikes = function (workers, bikes) {
  if (!workers || !workers.length || !bikes || !bikes.length) return [];

  const assignedBikes = new Set();
  const assignedWorkers = new Set();
  const distancesTable = {};
  const assignments = [];

  for (let workerIndex = 0; workerIndex < workers.length; workerIndex++) {
    for (let bikeIndex = 0; bikeIndex < bikes.length; bikeIndex++) {
      const distance = getManhattanDistance(workers[workerIndex], bikes[bikeIndex]);
      if (!distancesTable[distance]) {
        distancesTable[distance] = [[workerIndex, bikeIndex]];
      } else {
        distancesTable[distance].push([workerIndex, bikeIndex]);
      }
    }
  }

  Object.keys(distancesTable)
    .sort((a, b) => parseInt(a, 10) < parseInt(b, 10) ? -1 : 1)
    .forEach(distance => {
      distancesTable[distance].forEach(([wIndex, bIndex]) => {
        if (assignedWorkers.has(wIndex) || assignedBikes.has(bIndex)) return;
        assignments[wIndex] = bIndex;
        assignedWorkers.add(wIndex);
        assignedBikes.add(bIndex);
      });
    });


  return assignments;
};

const getManhattanDistance = ([wX, wY], [bX, bY]) => {
  return Math.abs(wX - bX) + Math.abs(wY - bY);
};

// console.log(assignBikes(
//   [[0, 0], [2, 1]],
//   [[1, 2], [3, 3]]
// ));
// console.log(assignBikes(
//   [[0, 0], [1, 1], [2, 0]],
//   [[1, 0], [2, 2], [2, 1]]
// ));
console.log(assignBikes(
  [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0]],
  [[0, 999], [1, 999], [2, 999], [3, 999], [4, 999], [5, 999], [6, 999], [7, 999]]
));