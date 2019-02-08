/**
 * 给定一个二叉树

struct TreeLinkNode {
  TreeLinkNode *left;
  TreeLinkNode *right;
  TreeLinkNode *next;
}
填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。

初始状态下，所有 next 指针都被设置为 NULL。

说明:

你只能使用额外常数空间。
使用递归解题也符合要求，本题中递归程序占用的栈空间不算做额外的空间复杂度。
你可以假设它是一个完美二叉树（即所有叶子节点都在同一层，每个父节点都有两个子节点）。
示例:

给定完美二叉树，

     1
   /  \
  2    3
 / \  / \
4  5  6  7
调用你的函数后，该完美二叉树变为：

     1 -> NULL
   /  \
  2 -> 3 -> NULL
 / \  / \
4->5->6->7 -> NULL
 * 
 */
/**
 * 思路：
 *      完美二叉树，直接层次遍历，遍历每一层然后赋值next指针
 */
/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function (root) {
    if (!root) {
        return;
    }

    const queue = [];
    let node;
    queue.push(root);
    while (queue.length) {
        let len = queue.length;
        let count = 1;
        for (let i = 0; i < len; i++) {
            node = queue.shift();
            if (count !== len) {
                node.next = queue[0];
                count++;
            } else {
                node.next = null;
            }

            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }
};

/**
 *  将树当作桥梁，从当前层的最左节点往右直接连通，
 *  并且如果遇到null就直接跳过，因为初始化时就为null
 */
var connect_iteration = function (root) {
    if (!root) return;
    let curr = root;
    while (root) {
        while (curr) {
            if (curr.left) curr.left.next = curr.right;
            if (curr.right && curr.next) curr.right.next = curr.next.left;
            curr = curr.next; //  向右移动
        }

        root = root.left // 向左下移动，而且每次移动都是往下一层的最左边移动
        curr = root;
    }

};
/**
 * 递归法
 *      利用其完美二叉树的特性
 */
var connect_recursion = function (root) {
    if (!root) {
        return;
    }

    if (root.left) {
        root.left.next = root.right;
        if (root.next) {
            root.right.next = root.next.left;
        }
    }

    connect_recursion(root.left);
    connect_recursion(root.right);
}