
const bubbleSort = nums => {

  let swapsLastRun;
  const bubble = () => {
    swapsLastRun = 0;
    for (let i = 0; i < nums.length - 1; i++) {
      const curr = nums[i];
      const next = nums[i + 1];
      if (next < curr) {
        swapsLastRun++;
        const prevRef = curr;
        nums[i] = next;
        nums[i + 1] = prevRef;
      }
    }
  };

  do { bubble(); } while (swapsLastRun !== 0);

  return nums;
};

console.log('\n');
console.log(bubbleSort([3, 1, 5, 6, -1, 2, 9, 2]));