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
 *  
 *  前序遍历：递归版本  根 - 左 - 右
 * 
 */
var preorderTraversal = function (root) {
    const nums = [];

    preorder(root, nums);

    return nums;
};

var preorder = function (node, nums) {
    if (!node) {
        return;
    }
    nums.push(node.val);
    if (node.left) {
        preorder(node.left, nums);
    }
    if (node.right) {
        preorder(node.right, nums);
    }
};
