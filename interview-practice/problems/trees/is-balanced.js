const isNullNode = node => !node || node.val === null;
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = root => {
  if (!root || root.val === null) {
    return true;
  }
  return getHeight(root) !== -1;
};

const getHeight = node => {
  if (!node) {
    return 0;
  }
  const hLeft = getHeight(node.left);
  const hRight = getHeight(node.right);
  if (hLeft === -1 || hRight === -1 || Math.abs(hLeft - hRight) > 1) {
    return -1;
  }
  return Math.max(hLeft, hRight) + 1;
};

const nodeUnbalanced = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: {
        val: 4,
        left: null,
        right: null
      },
      right: {
        val: 4,
        left: null,
        right: null
      }
    },
    right: {
      val: 3,
      left: null,
      right: null
    }
  },
  right: {
    val: 2,
    left: null,
    right: null
  }
};
const nodeBalanced = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: {
        val: 4,
        left: null,
        right: null
      },
      right: {
        val: 4,
        left: null,
        right: null
      }
    },
    right: {
      val: 3,
      left: null,
      right: null
    }
  },
  right: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: null
  }
};

const testNode = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: null,
    right: 3
  }
};

console.log('\nunbalanced', isBalanced(nodeUnbalanced) === false);
console.log('balanced', isBalanced(nodeBalanced) === true);
console.log('unbalanced', isBalanced(testNode) === false);