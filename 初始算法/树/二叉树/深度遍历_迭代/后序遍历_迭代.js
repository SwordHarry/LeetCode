/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

/**
 * 主要思想：首先遍历root根节点的所有左节点，并依次入栈。
 *         对出栈的元素，如果没有右儿子或者虽然有右儿子但右儿子已完成遍历，即可完成出栈；
 *         否则，再次入栈，并把右儿子入栈，遍历右儿子的所有左儿子。
 */
var postorderTraversal = function(root) {
  const nums = [];
  if (!root) {
    return nums;
  }

  const stack = [];
  let node = root;
  let top,
    visitNode = null;

  while (node || stack.length) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      top = stack[stack.length - 1];
      if (!top.right || visitNode === top.right) {
        visitNode = stack.pop();
        nums.push(visitNode.val);
      } else {
        node = top.right;
      }
    }
  }

  return nums;
};
