/**
 * 给定一个二叉树，返回其节点值的锯齿形层次遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

例如：
给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回锯齿形层次遍历如下：

[
  [3],
  [20,9],
  [15,7]
]
 * 
 */
/**
 * 思路：
 *      类似于层次遍历，
 *      但是要考虑 遍历的方向，
 *      可以使用 flag 标记进行遍历方向的选取
 * 注意：
 *      需要用到两个栈进行子树的记录
 *      还需要对子树的左右或者右左子树的压入进行判断
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    const result = [];
    if (!root) {
        return result;
    }

    // 遍历方向 标记
    let flag = true;

    const lStack = [];
    const rStack = [];
    let index = 0;
    lStack.push(root);
    while (lStack.length || rStack.length) {
        let len;
        let node;
        result[index] = [];
        if (flag) {
            len = lStack.length;
            for (let i = 0; i < len; i++) {
                node = lStack.pop();
                result[index].push(node.val);

                if (node.left) {
                    rStack.push(node.left);
                }
                if (node.right) {
                    rStack.push(node.right);
                }
            }
            flag = false;
        } else {
            len = rStack.length;
            for (let i = 0; i < len; i++) {
                node = rStack.pop();
                result[index].push(node.val);

                if (node.right) {
                    lStack.push(node.right);
                }
                if (node.left) {
                    lStack.push(node.left);
                }
            }

            flag = true;
        }

        index++;
    }

    return result;
};