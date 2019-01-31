/**
 * 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

示例:

给定有序数组: [-10,-3,0,5,9],

一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

      0
     / \
   -3   9
   /   /
 -10  5
 */
/**
 * 思路：
 *    将数组对半分，取数组长度一半的元素作为根节点
 *    再将另一半数组对半分，取数组长度一半的元素作为子树根节点
 *    root.left = 左半边的数组的根节点
 *    root.right = 右半边的数组的根节点
 *    以此类推
 *    递归了
 *    直到数组所有元素组成节点
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const len = nums.length;
  if (!len) {
    return null;
  }
  if (len === 1) {
    return new TreeNode(nums[0]);
  }
  const halfLen = ~~(len / 2);

  const root = new TreeNode(nums[halfLen]);
  const nums1 = nums.slice(0, halfLen);
  const nums2 = nums.slice(halfLen + 1, len);

  root.left = arguments.callee(nums1);
  root.right = arguments.callee(nums2);

  return root;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}