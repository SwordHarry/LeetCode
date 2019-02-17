/**
 * 合并两个有序链表
将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

示例：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {

    const head = new ListNode(0);
    head.next = l1;

    let pre = head;
    let next = l2 ? l2.next : null;

    while (l1 && l2) {
        if (l2.val < l1.val) {
            pre.next = l2;
            l2.next = l1;
            l2 = next;
            next = l2 ? l2.next : null;
            pre = pre.next;
        } else {
            pre = l1;
            l1 = l1.next;
        }
    }

    if (l2) {
        pre.next = l2;
    }

    return head.next;
};