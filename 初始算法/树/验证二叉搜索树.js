/**
 * 给定一个二叉树，判断其是否是一个有效的二叉搜索树。

假设一个二叉搜索树具有如下特征：

节点的左子树只包含小于当前节点的数。
节点的右子树只包含大于当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。
示例 1:

输入:
    2
   / \
  1   3
输出: true
示例 2:

输入:
    5
   / \
  1   4
     / \
    3   6
输出: false
解释: 输入为: [5,1,4,null,null,3,6]。
     根节点的值为 5 ，但是其右子节点值为 4 。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
/**
 * 左 < 根 < 右 
 * 思路： 递归，中序遍历树，按 左 中 右 的形式遍历，将结点从非线性转化为线性
 */
var isValidBST_recursion = function (root) {
    if (!root) {
        return true;
    }
    const list = [];
    checkBST(root, list);

    const len = list.length;
    for (let i = 0; i < len - 1; i++) {
        if (list[i].val >= list[i + 1].val)
            return false;
    }
    return true;
};

var checkBST = function (node, list) {
    if (!node) {
        return;
    }

    checkBST(node.left, list);
    list.push(node);
    checkBST(node.right, list);
};


// 使用栈实现 中序遍历 ，在中序遍历的过程中可以判断 左 < 中 < 右
var isValidBST_iteration = function (root) {
    if (!root) {
        return true;
    }

    const stack = [];
    let node = root,
        pre = null;
    while (node || stack.length) {
        while (node) {
            stack.push(node);
            node = node.left;
        }

        node = stack.pop();
        if (pre && node.val <= pre.val)
            return false;
        pre = node;
        node = node.right;
    }
    return true;
};