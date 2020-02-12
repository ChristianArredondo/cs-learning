/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) return null;

  // root node is to be deleted
  if (root.val === key) {
    // root has no children
    if (!root.left && !root.right) {
      return null;
    }

    // find greatest in left branch
    if (root.left) {
      // left node has no right branch, so it is the new replacement
      if (!root.left.right) {
        root.left.right = root.right;
        return root.left;
      }

      const [maxP, maxNode] = getExtremeInBranch(root.left, 'right');
      // clear max parent node
      maxP.right = null;

      // set maxNode branches to root branches
      maxNode.left = root.left;
      maxNode.right = root.right;
      return maxNode;
    } else {
      // right node has no left branch, so it is the replacement
      if (!root.right.left) {
        root.right.left = root.left;
        return root.right;
      }

      // find smallest in right branch
      const [minP, minNode] = getExtremeInBranch(root.right, 'left');

      // clear min parent node
      minP.left = null;

      // set minNode branches to root branches
      minNode.left = root.left;
      minNode.right = root.right;
      return minNode;
    }
  }

  const [tP, tNode, side] = findTargetAndParent(root, key);
  if (!tNode) return root;

  // target has no branches, so just clear itself from its parent
  if (!tNode.left && !tNode.right) {
    tP[side] = null;
    return root;
  }

  if (tNode.left) {

    // target node left node has no right branch
    // so the left node becomes the replacement
    if (!tNode.left.right) {
      tNode.left.right = tNode.right;
      tP[side] = tNode.left;
      return root;
    }

    const [gP, gNode] = getExtremeInBranch(tNode.left, 'right');

    // update gNode with tNode branches
    gP.right = gNode.left;
    gNode.left = tNode.left;
    gNode.right = tNode.right;

    // update tParent with replacement (gNode)
    tP[side] = gNode;
    return root;
  } else {

    // target node right node has no left branch
    // so right node becomes the replacement
    if (!tNode.right.left) {
      tNode.right.left = tNode.left;
      tP[side] = tNode.right;
      return root;
    }

    const [minP, minNode] = getExtremeInBranch(tNode.right, 'left');

    // update min with tNode branches
    minP.left = minNode.right;
    minNode.left = tNode.left;
    minNode.right = tNode.right;

    // update tParent with replacement (minNode)
    tP[side] = minNode;

    return root;
  }
};

function getExtremeInBranch(node, side) {
  let p = node;
  let c = node[side];
  if (!c) return [null, p];

  while (c[side]) {
    p = c;
    c = c[side];
  }
  return [p, c];
}

function findTargetAndParent(node, key) {
  let side = key < node.val ? 'left' : 'right';
  let p = node;
  let c = p[side];
  while (c) {
    if (c.val === key) return [p, c, side];
    side = key < c.val ? 'left' : 'right';
    p = c;
    c = c[side];
  }
  return [null, null, null];
}