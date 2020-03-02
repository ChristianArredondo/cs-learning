/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length <= 1) return intervals;
  intervals.sort((a, b) => a[0] - b[0]);
  let pointer = 0;
  while (pointer < intervals.length) {
    const curr = intervals[pointer];
    const next = intervals[pointer + 1];
    if (!next || curr[1] < next[0]) pointer++;
    else intervals.splice(pointer, 0, mergeTwo(...intervals.splice(pointer, 2)));
  }
  return intervals;
};

const mergeTwo = (interval1, interval2) => [
  Math.min(interval1[0], interval2[0]),
  Math.max(interval1[1], interval2[1])
];

console.log('\n');
console.log(merge([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18]
]));
console.log(merge([
  [1, 4],
  [1, 5],
]));
console.log(merge([
  [1, 4],
  [2, 3],
]));
console.log(merge([
  [1, 4],
  [0, 2],
  [3, 5]
]));
console.log(merge([[5, 5], [1, 3], [3, 5], [4, 6], [1, 1], [3, 3], [5, 6], [3, 3], [2, 4], [0, 0]]));