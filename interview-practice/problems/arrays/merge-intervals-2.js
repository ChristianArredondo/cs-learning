
const insertMerge = (intervals, toInsert) => {
  const length = intervals.length;
  if (toInsert[1] < intervals[0][0]) return [toInsert, ...intervals];
  if (toInsert[0] > intervals[length - 1][1]) return [...intervals, toInsert];

  const merged = [];
  let i = 0;

  // lesser than toInsert
  while (i < length && intervals[i][1] < toInsert[0]) {
    merged.push(intervals[i]);
    i++;
  }

  // overlap with toInsert
  while (i < length && toInsert[1] >= intervals[i][0]) {
    toInsert[0] = Math.min(toInsert[0], intervals[i][0]);
    toInsert[1] = Math.max(toInsert[1], intervals[i][1]);
    i++;
  }
  merged.push(toInsert);

  // greater than toInsert
  while (i < length) {
    merged.push(intervals[i]);
    i++;
  }

  return merged;
};

console.log(insertMerge([[2, 3], [4, 7], [9, 10]], [-1, 0]));
console.log(insertMerge([[2, 3], [4, 7], [9, 10]], [5, 6]));
console.log(insertMerge([[2, 3], [4, 7], [9, 10]], [13, 14]));