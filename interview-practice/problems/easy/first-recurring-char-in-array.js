/**
 * Return first int that occurs twice
 * @param {Number[]} arr
 * 
 * @example
 * [2, 5, 1, 2, 4, 3]
 * return 2
 */
function firstRecurringChar(arr) {
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) return arr[i];
    set.add(arr[i]);
  }
}

console.log(firstRecurringChar([2, 5, 1, 2, 4, 3]));