import { WeightedUnionMaxFind } from "../bonus-exercises/find-largest-in-tree";

const weightedUnionMaxFind = new WeightedUnionMaxFind(10);
const draw = () => {
  weightedUnionMaxFind.printIds();
  weightedUnionMaxFind.printTrees();
  console.log("\n");
};

draw();

weightedUnionMaxFind.union(2, 3);
draw();

weightedUnionMaxFind.union(1, 3);
draw();

weightedUnionMaxFind.union(2, 5);
draw();

weightedUnionMaxFind.union(8, 7);
draw();

weightedUnionMaxFind.union(9, 7);
draw();
