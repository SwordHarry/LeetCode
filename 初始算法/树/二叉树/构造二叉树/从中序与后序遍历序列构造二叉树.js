/**
 * 
 * 根据一棵树的中序遍历与后序遍历构造二叉树。

注意:
你可以假设树中没有重复的元素。

例如，给出

中序遍历 inorder = [9,3,15,20,7]
后序遍历 postorder = [9,15,7,20,3]
返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7
 */
/**
 * 
 * 思路：中序遍历： 左 根 右
 *      后序遍历： 左 右 根
 *      故后序遍历数组的最后一项必定是树或子树的根
 *      根据后序遍历在 postorder 中确定根，再用根在 inorder 中确定 左 右子树的两个子数组
 *      左右子树的子数组又可以看成是两个不同的树，如此递归，直到子数组的长度为零，返回null
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    const postArrLen = postorder.length;
    const inArrLen = inorder.length;
    if (!postArrLen) {
        return null;
    }

    const rootVal = postorder[postArrLen - 1];
    const root = new TreeNode(rootVal);
    const rootIndex = inorder.indexOf(rootVal);
    const inLeftArr = inorder.slice(0, rootIndex);
    const inRightArr = inorder.slice(rootIndex + 1, inArrLen);

    const postLeftArr = postorder.slice(0, inLeftArr.length);
    const postRightArr = postorder.slice(postArrLen - inRightArr.length - 1, postArrLen - 1);


    root.left = createTree(inLeftArr, postLeftArr);
    root.right = createTree(inRightArr, postRightArr);

    return root;
};

// 创建子树
var createTree = function (inorder, postorder) {
    if (inorder.length) {
        return buildTree(inorder, postorder);
    } else {
        return null;
    }
};


// answer algorithm
/**
 * 更简略的递归闭包代码
 */
var buildTree_answer = function (inorder, postorder) {

    function dfs(leftIndex, rightIndex) {
        if (leftIndex > rightIndex) return null;

        let rootVal = postorder.pop();
        let rootNode = new TreeNode(rootVal);

        let rootIndex = inorder.indexOf(rootVal);

        rootNode.right = dfs(rootIndex + 1, rightIndex);
        rootNode.left = dfs(leftIndex, rootIndex - 1);

        return rootNode;
    }

    return dfs(0, inorder.length - 1);
};