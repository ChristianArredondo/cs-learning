function reverseString(string) {
  if (typeof string !== 'string') return;

  let reversed = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }

  return reversed;
}

console.log(reverseString('soccer'));
console.log(reverseString('roflcopter'));