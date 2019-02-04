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
 * 中序遍历：
 *      非递归，使用栈
 * 
 */
var inorderTraversal_iteration = function (root) {
    const nums = [];
    if (!root) {
        return nums;
    }
    const stack = [];
    let node = root;
    while (node || stack.length) {
        while (node) {
            stack.push(node);
            node = node.left;
        }

        node = stack.pop();
        // ***
        nums.push(node.val); // visit
        // ***
        node = node.right;
    }
    return nums;
};