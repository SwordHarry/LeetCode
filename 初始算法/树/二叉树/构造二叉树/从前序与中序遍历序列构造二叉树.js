/**
 * 
根据一棵树的前序遍历与中序遍历构造二叉树。

注意:
你可以假设树中没有重复的元素。

例如，给出

前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7
 */
/**
 * 
 *  思路：原理和 从中序与后序序列构造二叉树类似，不过要注意构造子树的顺序和下标之间的关系
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {

    const _build = function (leftIndex, rightIndex) {
        if (leftIndex > rightIndex) {
            return null;
        }

        const rootVal = preorder.shift();
        const rootIndex = inorder.indexOf(rootVal);
        const root = new TreeNode(rootVal);

        root.left = _build(leftIndex, rootIndex - 1);
        root.right = _build(rootIndex + 1, rightIndex);

        return root;
    };

    return _build(0, preorder.length - 1);
};