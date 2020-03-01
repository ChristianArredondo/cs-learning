
const quickSort = nums => {
  if (nums.length <= 1) return nums;
  if (nums.length === 2) return nums[0] <= nums[1] ? nums : [nums[1], nums[0]];

  let pivotIndex = nums.length - 1;
  const left = [];
  const right = [];
  const same = [nums[pivotIndex]];
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[pivotIndex]) left.push(nums[i]);
    else if (nums[i] > nums[pivotIndex]) right.push(nums[i]);
    else same.push(nums[i]);
  }

  return [
    ...quickSort(left),
    ...same,
    ...quickSort(right)
  ];
};

const quickSortInPlace = nums => {
  if (nums.length <= 1) return nums;
  if (nums.length === 2) return nums[0] <= nums[1] ? nums : [nums[1], nums[0]];

  let pivotIndex = nums.length - 1;
  const initPivotNum = nums[pivotIndex];

  let iter = 0;
  while (iter < pivotIndex) {
    const curr = nums[iter];
    if (curr > initPivotNum) {
      nums.push(nums.splice(iter, 1)[0]);
      pivotIndex--;
      continue;
    }
    iter++;
  }

  return [
    ...quickSortInPlace(nums.slice(0, pivotIndex)),
    initPivotNum,
    ...quickSortInPlace(nums.slice(pivotIndex + 1))
  ];
};

console.log('\n');
console.log(quickSort([3, 1, 5, 6, -1, 2, 9, 2]));
console.log(quickSortInPlace([3, 1, 5, 6, -1, 2, 9, 2]));