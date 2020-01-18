
// return indices of the two numbers
// if they add up to target
function twoSum(arr, targetInt) {
  const hashTable = {};
  for (let i = 0; i < arr.length; i++) {
    const int = arr[i];
    const complement = targetInt - int;
    if (hashTable[complement]) {
      return [hashTable[complement], i];
    };
    hashTable[int] = i;
  }
}

console.log(twoSum([2, 7, 11, 14, 5, 5], 10));