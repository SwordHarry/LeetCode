/**
 * 给定一个二叉树，检查它是否是镜像对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3
但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3
说明:

如果你可以运用递归和迭代两种方法解决这个问题，会很加分。
 */
/**
 * 思路：
 *      层次遍历：
 *      将每一层次转换成数组
 *      判断数组第一个和数组最后一个是否相等
 *      第二个和倒数第二个
 *      以此类推
 *      需要注意 null 的情况
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
// 迭代：使用层次遍历，将每一层次都转换成数组，然后遍历数组是否是回文数组
var isSymmetric = function (root) {

    if (!root) {
        return true;
    }

    const queue = [];
    queue.push(root);
    let node, len;
    while (queue.length) {
        len = queue.length;
        for (let i = 0; i < ~~(len / 2); i++) {
            if (queue[i] && queue[len - i - 1]) {
                if (queue[i].val !== queue[len - i - 1].val) {
                    return false;
                }
            } else {
                if (queue[i] !== queue[len - i - 1]) {
                    return false;
                }
            }

        }
        for (let i = 0; i < len; i++) {
            node = queue.shift();
            if (node) {
                queue.push(node.left ? node.left : null);
                queue.push(node.right ? node.right : null);
            }
        }
    }

    return true;
};


// 较优解：使用递归
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric_answer = function(root) {
    if(!root) {
        return true;
    }
    return isMirror(root.left,root.right);
};

var isMirror = function (node1,node2) {
    if(!node1 && !node2) {
        return true;
    }
    if(!node1 || !node2) {
        return false;
    }
    return node1.val === node2.val && arguments.callee(node1.left,node2.right) && arguments.callee(node1.right,node2.left);
};