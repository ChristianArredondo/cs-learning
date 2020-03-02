/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  if (!intervals.length) return [newInterval];

  if (newInterval[1] < intervals[0][0]) return [newInterval, ...intervals];
  if (newInterval[0] > intervals[intervals.length - 1][1]) return [...intervals, newInterval];

  let pointer = 0;
  while (pointer < intervals.length) {
    const curr = intervals[pointer];
    const next = intervals[pointer + 1];

    // no overlap, newInterval is simply in between
    const isInBetween = newInterval[0] > curr[1] && next && newInterval[1] < next[0];
    if (isInBetween) {
      intervals.splice(pointer + 1, 0, newInterval);
      break;
    }

    // has overlap
    // determine min/max of all overlapping intervals
    /**
     *   [2,    7]
     * [1, 3], [6, 20], insert 
     * min = 1
     * max = 6
     * 
     * [0, 3] 
     *   [1, 5]
     */
    const hasOverlap = (curr[0] >= newInterval[0] && curr[0] <= newInterval[1])
      || (newInterval[0] >= curr[0] && newInterval[0] <= curr[1]);
    if (hasOverlap) {
      let overlapPointer = pointer;
      let currOverlap = intervals[overlapPointer];
      let min = Math.min(currOverlap[0], newInterval[0]);
      let max = Math.max(currOverlap[1], newInterval[1]);
      while (
        overlapPointer < intervals.length &&
        intervals[overlapPointer + 1] &&
        newInterval[0] <= intervals[overlapPointer + 1][0] &&
        newInterval[1] >= intervals[overlapPointer + 1][0]
      ) {
        overlapPointer++;
      }
      min = Math.min(min, intervals[overlapPointer][0], newInterval[0]);
      max = Math.max(max, intervals[overlapPointer][1], newInterval[1]);
      intervals.splice(pointer, overlapPointer - pointer + 1, [min, max]);
      break;
    }

    pointer++;
  }

  return intervals;
};

console.log(insert(
  [[1, 3], [6, 9]],
  [2, 5]
));
// console.log(insert(
//   [[1, 3], [6, 9]],
//   [-1, 0]
// ));
// console.log(insert(
//   [[1, 3], [6, 9]],
//   [10, 11]
// ));
// console.log(insert(
//   [[1, 3], [6, 9]],
//   [1, 11]
// ));
// console.log(insert(
//   [[1, 3], [6, 9]],
//   [4, 5]
// ));
// console.log(insert(
//   [[1, 5]],
//   [0, 3]
// ));