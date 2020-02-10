
const findJudge = (N, trusts) => {
  const counts = Array.from({ length: N + 1, }).fill(0);
  for (const [truster, trustee] of trusts) {
    counts[trustee]++;
    counts[truster]--;
  }

  for (let i = 1; i <= N; i++) {
    if (counts[i] === N - 1) return i;
  }

  return -1;
};

console.log('\n', findJudge(3, [[1, 3], [2, 3]]));