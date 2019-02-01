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
/**
 * 思路：分主链表和子链表，将子链表按题目要求插入到主链表中，
 *      这样就需要主链表l1指针的前驱，子链表l2指针的后继 
 */
var mergeTwoLists = function (l1, l2) {

    let pre1 = new ListNode(0);
    pre1.next = l1;
    let next2 = l2 ? l2.next : null;
    const head = pre1;
    while (l1 && l2) {

        while (l1 && l1.val < l2.val) {
            pre1 = l1;
            l1 = l1.next;
        }
        pre1.next = l2;
        l2.next = l1;
        l2 = next2;
        next2 = l2 ? l2.next : null;
        pre1 = pre1.next;
    }

    // 判断l2子链表是否还有结点，有则全部拼接到l1
    if (l2) {
        pre1.next = l2;
    }

    return head.next;
};