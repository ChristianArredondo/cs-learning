/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxArea = 0;

  if (!height || !height.length) return maxArea;

  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const currLength = right - left;
    const currHeight = Math.min(height[left], height[right]);
    const currArea = currLength * currHeight;
    maxArea = Math.max(maxArea, currArea);
    if (height[left] <= height[right]) left++;
    else right--;
  }

  return maxArea;
};

console.log('\n');
console.log(maxArea([
  1, 8, 6, 2, 5, 4, 8, 3, 7
]));