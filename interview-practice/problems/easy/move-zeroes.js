
function moveZeroesBruteForce(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      shiftLeftSetZeroAtEnd(arr, i);
    }
  }

  return arr;
}

function shiftLeftSetZeroAtEnd(arr, zeroIndex) {
  for (let i = zeroIndex; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = 0;
}

function moveZeroesLinear(arr) {
  const hashTable = {};
  let currentIndex = 0;

  arr.forEach(int => {
    if (int !== 0) {
      hashTable[currentIndex] = int;
      currentIndex++;
    }
  });

  for (let i = 0; i < arr.length; i++) {
    if (hashTable[i]) {
      arr[i] = hashTable[i];
    } else {
      arr[i] = 0;
    }
  }

  return arr;
}

console.log('brute', moveZeroesBruteForce([0, 1, 0, 3, 12]));
console.log('linear', moveZeroesLinear([0, 1, 0, 3, 12]));