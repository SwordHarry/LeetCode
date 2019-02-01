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
var levelOrder = function(root) {
    const result = [];
    if(!root) {
        return result;
    }
    let node;
    const queue = []; // 用来存储每一层的所有节点
    let itemArr = []; // 用来存储队列中每个项的 val
    queue.push(root);
    while(queue.length) {
        for(let item of queue) {
            itemArr.push(item.val);
        }
        result.push(itemArr);
        const len = queue.length;
        for(let i = 0;i < len;i++) {
            node = queue.shift();
            if(node.left)
                queue.push(node.left);
            if(node.right)
                queue.push(node.right);
        }
        itemArr = [];
    }
    return result;
};

