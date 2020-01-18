/**
 * translate all elements in array
 * to the right by `k` places
 * 
 * @example
 * `translate([1, 2, 3, 4, 5, 6, 7], 3)`
 * return `[5,6,7,1,2,3,4]`
 */
function translate(arr, k) {
  const hashTable = {};
  const translated = [];

  arr.forEach((int, i) => {
    const translatedIndex = i + k;
    if (translatedIndex < arr.length) {
      hashTable[translatedIndex] = int;
    } else {
      hashTable[translatedIndex - arr.length] = int;
    }
  });

  for (let i = 0; i < arr.length; i++) {
    translated[i] = hashTable[i];
  }

  return translated;
}

console.log(translate([1, 2, 3, 4, 5, 6, 7], 3));