
const selectionSort = nums => {
  for (let i = 0; i < nums.length - 1; i++) {
    const numAtCurr = nums[i];
    const minIndex = nums.slice(i + 1).reduce((minIndex, jNum, jIndex) => {
      if (jNum < nums[minIndex]) minIndex = jIndex + i + 1;
      return minIndex;
    }, i);
    nums[i] = nums[minIndex];
    nums[minIndex] = numAtCurr;
  }
  return nums;
};

console.log('\n');
console.log(selectionSort([3, 1, 5, 6, -1, 2, 9, 2]));