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
var postorderTraversal = function (root) {
    const nums = [];
    if (!root) {
        return nums;
    }

    const stack = [];
    let node = root;
    let top, visitNode = null;

    while (node || stack.length) {
        if (node) {
            stack.push(node);
            node = node.left
        } else {
            top = stack[stack.length - 1];
            if (top.right && visitNode !== top.right) {
                node = top.right;
            } else {
                visitNode = stack.pop();
                nums.push(visitNode.val);
            }
        }
    }

    return nums;
};