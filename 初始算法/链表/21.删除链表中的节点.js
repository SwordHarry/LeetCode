/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};

/**
 * 解释：这条题的题意是在外部存在一个链表，
 *      然后将该链表中的某个节点输入，
 *      能删除该节点，并且改变外部的链表
 * 难点：没有前驱节点和整个链表的情况
 *  */ 