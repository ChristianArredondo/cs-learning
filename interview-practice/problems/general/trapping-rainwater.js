/**
 * @param {number[]} height
 * @return {number}
 */
var trap2 = function (height) {
  const openBlocks = [];
  let totalTrapped = 0;

  if (!height || !height.length) return totalTrapped;

  /**
   * - "lookback and close"
   *    - iterate through open blocks <= current num and close off (add total and remove)
   * - "open current"
   *    - if next block is lower
   *      - add current num to open table
   */
  for (let i = 0; i < height.length; i++) {
    const currBlock = height[i];
    // lookback
    for (openBlock of openBlocks) {
      if (currBlock < openBlock) {
        // increment higher blocks
        openBlocks[openBlock]++;
      } else if (currBlock >= openBlock) {
        //close open blocks less than or equal to current
        totalTrapped += openBlocks[openBlock];
        delete openBlocks[openBlock];
      }
    }
    // open current block if next is lesser
    if (i !== height.length - 1) {
      const nextBlock = height[i + 1];
      if (currBlock > nextBlock) {
        for (let i = nextBlock + 1; i <= currBlock; i++) {
          openBlocks[i] = 0;
        }
      }
    }
  }

  return totalTrapped;
};

var trap = function (height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let trappedWater = 0;
  while (left < right) {
    leftMax = Math.max(height[left], leftMax);
    if (leftMax > height[left]) {
      trappedWater += (leftMax - height[left]);
    }
    rightMax = Math.max(height[right], rightMax);
    if (rightMax > height[right]) {
      trappedWater += (rightMax - height[right]);
    }
    height[left] < height[right] ? left++ : right--;
  }
  return trappedWater;
};
console.log('\n');
console.log(trap([0, 1, 0, 0]));
// console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
// console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 3, 1]));
// console.log(trap([2, 0, 2]));