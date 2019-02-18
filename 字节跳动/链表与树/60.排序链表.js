/**
 * 在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。

示例 1:

输入: 4->2->1->3
输出: 1->2->3->4
示例 2:

输入: -1->5->3->4->0
输出: -1->0->3->4->5
 */
/**
 * 思路：
 *      题目要求了 时间复杂度 为 O(nlogn) 和 O(1) 空间复杂度
 *      O(nlogn)一般是快速排序的时间复杂度
 *      符合要求只有快速排序，归并排序，堆排序
 *      在这里使用归并排序
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    if (head === null || head.next === null) {
        return head;
    }

    let slow = head,
        fast = head;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    const mid = slow.next;
    slow.next = null;

    return merge(sortList(head), sortList(mid));
};

var merge = function (l1, l2) {
    let head = new ListNode(0);
    let cur = head;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }

    if (l1) {
        cur.next = l1;
    }
    if (l2) {
        cur.next = l2;
    }

    return head.next;
};