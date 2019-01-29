/**
 * 给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

示例：
给定二叉树 [3,9,20,null,null,15,7]，

    3
   / \
  9  20
    /  \
   15   7
返回它的最大深度 3 。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 思路：
 *      递归 
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) {
        return 0;
    }
    let leftDeepth = arguments.callee(root.left);
    let rightDeepth = arguments.callee(root.right);
    const deepth = leftDeepth > rightDeepth ? leftDeepth : rightDeepth;

    return deepth + 1;

};

// 最精简的二叉树最大深度
var maxDepth_answer = function(root) {
    return root ? 1 + Math.max(arguments.callee(root.left), arguments.callee(root.right)) : 0;
}