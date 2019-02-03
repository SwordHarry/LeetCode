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
var preorderTraversal = function (root) {
    const nums = [];
    if (!root) {
        return nums;
    }

    const stack = [];
    let node = root;
    stack.push(node);
    while (stack.length) {
        node = stack.pop();
        // ***
        nums.push(node.val); // visit
        // ***
        if (node.right) {
            stack.push(node.right);
        }
        if (node.left) {
            stack.push(node.left);
        }
    }

    return nums;
};