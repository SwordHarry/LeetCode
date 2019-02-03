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
// 中序遍历：递归
var inorderTraversal_recursion = function (root) {

    const nums = [];
    if (!root) {
        return nums;
    }
    inorder(root, nums);
    return nums;
};

var inorder = function (node, nums) {
    if (!node) {
        return;
    }

    inorder(node.left, nums);
    nums.push(node.val);
    inorder(node.right, nums);
}
