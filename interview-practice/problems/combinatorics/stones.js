
const PLAYER_1 = 1;
const PLAYER_2 = -1;
function stones(n) {
  if (n === 0) return false;
  return (n % 3) !== 0;
}
const run = n => {
  console.log(`${n} stones. Player 1 wins: ${stones(n)}`);
};

Array.from({ length: 100 }).forEach((_, i) => run(i));