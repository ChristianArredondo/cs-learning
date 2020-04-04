import { WeightedUnionFind } from "../weighted-union-find";

const weightedUnion = new WeightedUnionFind(10);
const draw = () => {
  weightedUnion.printIds();
  weightedUnion.printSizes();
  console.log("\n");
};
draw();

weightedUnion.union(2, 3);
draw();

weightedUnion.union(1, 3);
draw();

weightedUnion.union(2, 5);
draw();

weightedUnion.union(8, 7);
draw();

weightedUnion.union(9, 7);
draw();
