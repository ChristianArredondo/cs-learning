// how many pairs of matching ints in ar array
// O(ar.length)
function sockMerchant(n, ar) {
  const sockSet = new Set();
  let totalPairs = 0;

  ar.forEach(sock => {
    if (sockSet.has(sock)) {
      sockSet.delete(sock);
      totalPairs++;
    } else {
      sockSet.add(sock);
    }
  });

  return totalPairs;
}