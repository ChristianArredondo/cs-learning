
const merge = (arr1, arr2) => {
  const merged = [];

  while (arr1.length || arr2.length) {
    if (!arr1.length) merged.push(arr2.shift());
    else if (!arr2.length) merged.push(arr1.shift());
    else if (arr1[0] < arr2[0]) merged.push(arr1.shift());
    else merged.push(arr2.shift());
  }

  return merged;
};
const mergeSort = nums => {
  if (nums.length === 1) return [nums[0]];
  if (nums.length === 2) return nums[0] <= nums[1] ? [nums[0], nums[1]] : [nums[1], nums[0]];

  const mid = Math.floor(nums.length / 2);
  return merge(
    mergeSort(nums.slice(0, mid)),
    mergeSort(nums.slice(mid))
  );
};

console.log('\n');
console.log(mergeSort([3, 1, 5, 6, -1, 2, 9, 2]));