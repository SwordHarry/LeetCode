/**
 * 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。

说明: 叶子节点是指没有子节点的节点。

示例: 
给定如下二叉树，以及目标和 sum = 22，

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。
 * 
 */
// my algorithm
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {

    if (!root) {
        return false;
    }
    const value = 0;
    return hasPath(root, sum, value);
};

var hasPath = function (node, sum, value) {

    if (node) {
        if (node.left || node.right) {
            value = value + node.val;
        } else {
            return sum === value + node.val;
        }
    } else {
        return false;
    }

    const flag1 = hasPath(node.left, sum, value);
    const flag2 = hasPath(node.right, sum, value);
    return flag1 || flag2;
};


// answer algorithm
var hasPathSum_answer = function (root, sum) {

    if (!root) {
        return false;
    }

    return (root.val === sum && !root.left && !root.right) ||
        hasPathSum_answer(root.left, sum - root.val) ||
        hasPathSum_answer(root.right, sum - root.val);
};