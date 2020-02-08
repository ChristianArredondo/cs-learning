
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
  const mergeNodes = (node1, node2) => {
    if (!node1 && !node2) {
      return null;
    }

    if (!node2) {
      return node1;
    } else if (!node1) {
      return node2;
    }

    const newNode = new TreeNode(node1.val + node2.val);
    newNode.left = mergeNodes(node1.left, node2.left);
    newNode.right = mergeNodes(node1.right, node2.right);
    return newNode;
  };

  return mergeNodes(t1, t2);
};

const testNode1 = {
  val: 1,
  left: {
    val: 3,
    left: {
      val: 5,
      left: null,
      right: null
    },
    right: null
  },
  right: {
    val: 2,
    left: null,
    right: null
  }
};

const testNode2 = {
  val: 2,
  left: {
    val: 1,
    left: null,
    right: {
      val: 4,
      left: null,
      right: null
    }
  },
  right: {
    val: 3,
    left: null,
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
};

console.log(mergeTrees(testNode1, testNode2));
