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
// 递归：后序遍历
var postorderTraversal = function (root) {
    const nums = [];
    if (!root) {
        return nums;
    }

    postorder(root, nums);
    return nums;
};

var postorder = function (node, nums) {
    if (!node) {
        return;
    }

    if (node.left)
        postorder(node.left, nums);
    if (node.right)
        postorder(node.right, nums);
    nums.push(node.val);
}