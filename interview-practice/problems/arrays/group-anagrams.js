
function groupAnagrams(arr) {

  // Space => O(arr.length)
  const anagramsArrTable = {};
  const used = new Set();

  // build hash table of anagram arrays
  // Time => O(arr.length * nlog(n))
  // where n = length of char
  for (let i = 0; i < arr.length; i++) {
    if (used.has(arr[i])) continue;
    used.add(arr[i]);
    const anagram = arr[i].split('').sort().join('');
    if (!anagramsArrTable[anagram]) anagramsArrTable[anagram] = [arr[i]];
    else anagramsArrTable[anagram].push(arr[i]);
  }

  // return array values
  return Object.values(anagramsArrTable);
}

console.log('\n');
console.log(groupAnagrams(['eat', 'ate', 'eat', 'tan', 'nat']));