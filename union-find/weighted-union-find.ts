export class WeightedUnionFind {
  private ids: number[];
  private sizes: number[];

  constructor(n: number) {
    this.ids = [];
    this.sizes = [];

    for (let i = 0; i < n; i++) {
      this.ids[i] = i;
      this.sizes[i] = 1;
    }
  }

  getRoot(n): number {
    let nId = this.ids[n];
    while (nId !== this.ids[nId]) {
      nId = this.ids[nId];
    }
    return nId;
  }

  union(p: number, q: number): void {
    const rootP = this.getRoot(p);
    const rootQ = this.getRoot(q);
    const sizeRootP = this.sizes[rootP];
    const sizeRootQ = this.sizes[rootQ];

    // nodes are part of same tree
    if (rootP === rootQ) {
      return;
    }

    // join smaller root to larger root
    // increment larger root by size of smaller root
    if (sizeRootP <= sizeRootQ) {
      this.ids[p] = rootQ;
      this.sizes[rootQ] += sizeRootP;
    } else {
      this.ids[q] = rootP;
      this.sizes[rootP] += sizeRootQ;
    }
  }

  printIds(): void {
    console.log("ids:", this.ids);
  }

  printSizes(): void {
    console.log("sizes:", this.sizes);
  }
}
