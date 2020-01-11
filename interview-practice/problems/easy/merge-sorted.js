// merge sorted arrays and keep them sorted
// O(arr1.length + arr2.length)
function mergeSorted(arr1, arr2) {
  let i1 = 0;
  let i2 = 0;
  let merged = [];
  while (i1 < arr1.length || i2 < arr2.length) {
    const num1 = arr1[i1];
    const num2 = arr2[i2];
    if (num2 < num1 || i1 === arr1.length) {
      merged.push(num2);
      i2++;
    } else if (num1 < num2 || i2 === arr2.length) {
      merged.push(num1);
      i1++;
    } else {
      merged.push(num1, num2);
      i1++;
      i2++;
    }
  }
  return merged;
}

console.log(mergeSorted(
  [0, 3, 4, 30],
  [-4, 6, 30]
));