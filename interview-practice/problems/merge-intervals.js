const intervals = [[2, 3], [4, 7], [9, 10]];
const toInsert = [2, 5];

const insertMerge = (intervals, toInsert) => {
  if (!intervals.length) return [toInsert];

  let minIndex = intervals.length;
  let maxIndex = 0;
  let minVal = Infinity;
  let maxVal = -Infinity;
  intervals.forEach((interval, i) => {
    if (overlap(interval, toInsert)) {
      minIndex = Math.min(minIndex, i);
      minVal = Math.min(minVal, Math.min(interval[0], toInsert[0]));
      maxIndex = Math.max(maxIndex, i);
      maxVal = Math.max(maxVal, Math.max(interval[1], toInsert[1]));
    }
  });

  // toInsert is either at start or end
  if (maxIndex === 0 && minIndex === intervals.length) {
    if (toInsert[1] < intervals[0][0]) {
      return [toInsert, ...intervals];
    }
    return [...intervals, toInsert];
  }

  return intervals
    .slice(0, minIndex)
    .concat([[minVal, maxVal]])
    .concat(intervals.slice(maxIndex + 1));
};

function overlap(arr1, arr2) {
  const set1 = new Set();
  for (let i = arr1[0]; i <= arr1[1]; i++) {
    set1.add(i);
  }
  for (let i = arr2[0]; i <= arr2[1]; i++) {
    if (set1.has(i)) return true;
  }
  return false;
}

// console.log(insertMerge(intervals, toInsert));

function stones(n) {
  if (n <= 2) return true;
  if (n === 3) return false;
  if (n === 4 || n === 5) return true;
  return (n - 2) % 5 === 0 ||
    (n - 3) % 5 === 0 ||
    (n - 2) % 4 === 0 ||
    (n - 3) % 4 === 0;
}
console.log();
console.log(stones(9));