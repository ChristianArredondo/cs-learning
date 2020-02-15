function getArea(x1, y1, x2, y2) {
  if (x1 >= x2 || y1 >= y2) return 0;
  return Math.abs(x2 - x1) * Math.abs(y2 - y1);
}

function computeArea(A, B, C, D, E, F, G, H ) {
  const xOverlapMin = Math.max(A, E);
  const xOverlapMax = Math.min(C, G);
  const yOverlapMin = Math.max(B, F);
  const yOverlapMax = Math.min(D, H);

  return getArea(A, B, C, D) +
    getArea(E, F, G, H) -
    getArea(xOverlapMin, yOverlapMin, xOverlapMax, yOverlapMax);
}

// console.log(computeArea(-3, 0, 3, 4, 0, -1, 9, 2));
console.log(computeArea(-2, -2, 2, 2, 3, 3, 4, 4));