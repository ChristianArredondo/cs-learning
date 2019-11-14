/**
 * Union-find with specific canonical element. Add a method 𝚏𝚒𝚗𝚍() to the
 * union-find data type so that 𝚏𝚒𝚗𝚍(𝚒) returns the largest element in the
 * connected component containing i. The operations, 𝚞𝚗𝚒𝚘𝚗(), 𝚌𝚘𝚗𝚗𝚎𝚌𝚝𝚎𝚍(),
 * and 𝚏𝚒𝚗𝚍() should all take logarithmic time or better.
 *
 * For example, if one of the connected components is \{1, 2, 6, 9\}{1,2,6,9},
 * then the 𝚏𝚒𝚗𝚍() method should return 9 for each of the four elements in
 * the connected components.
 */

interface Tree {
  size: number;
  max: number;
}

export class WeightedUnionMaxFind {
  private ids: number[];
  private trees: { [n: number]: Tree };

  constructor(n: number) {
    this.ids = [];
    this.trees = {};

    for (let i = 0; i < n; i++) {
      this.ids[i] = i;
      this.trees[i] = { size: 1, max: i };
    }
  }

  getRoot(n: number): number {
    let nId: number = this.ids[n];
    while (nId !== this.ids[nId]) {
      nId = this.ids[nId];
    }
    return nId;
  }

  find(n: number): number {
    const rootN = this.getRoot(n);
    return this.trees[rootN].size;
  }

  union(p: number, q: number) {
    const rootP = this.getRoot(p);
    const sizeRootP = this.trees[p].size;
    const maxRootP = this.trees[p].max;
    const rootQ = this.getRoot(q);
    const sizeRootQ = this.trees[q].size;
    const maxRootQ = this.trees[q].max;

    if (rootP === rootQ) {
      return;
    }

    if (sizeRootP <= sizeRootQ) {
      this.ids[rootP] = rootQ;
      this.trees[rootQ].size += sizeRootP;
      if (maxRootP > maxRootQ) {
        this.trees[q].max = maxRootP;
      }
    } else {
      this.ids[rootQ] = rootP;
      this.trees[p].size += sizeRootQ;
      if (maxRootQ > maxRootP) {
        this.trees[p].max = maxRootQ;
      }
    }
  }

  printIds(): void {
    console.log(this.ids);
  }

  printTrees(): void {
    console.log(this.trees);
  }
}
