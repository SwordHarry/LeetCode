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
var levelOrder = function (root) {
    const nums = [];
    let temp = [];
    if (!root) {
        return nums;
    }

    const queue = [];
    let len, node = root;
    queue.push(root);
    while (queue.length) {
        temp = [];
        len = queue.length;
        for (let i = 0; i < len; i++) {
            node = queue.shift();
            // ***
            temp.push(node.val); // visit
            // ***

            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        nums.push(temp);
    }

    return nums;
};