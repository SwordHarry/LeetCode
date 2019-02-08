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
示例:

给定二叉树，

     1
   /  \
  2    3
 / \    \
4   5    7
调用你的函数后，该二叉树变为：

     1 -> NULL
   /  \
  2 -> 3 -> NULL
 / \    \
4-> 5 -> 7 -> NULL
 */
/**
 * 思路：
 *      只能用额外常数空间，但是可以使用递归
 *      既有迭代和递归两种解法，且不允许使用层次遍历    
 */
/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */
// 递归解法：自顶向下，平行遍历同层的next结点并且连接
/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function (root) {
  if (!root) {
    return;
  }

  let node = root.next;

  while (node) {
    if (node.left) {
      node = node.left;
      break;
    }
    if (node.right) {
      node = node.right;
      break;
    }
    node = node.next;
  }

  if (root.right) {
    root.right.next = node;
  }
  if (root.left) {
    root.left.next = root.right ? root.right : node;
  }

  connect(root.right);
  connect(root.left);
};