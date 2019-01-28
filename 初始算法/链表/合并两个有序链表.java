/**
 * Definition for singly-linked list. public class ListNode { int val; ListNode
 * next; ListNode(int x) { val = x; } }
 */
class ListNode {
    int val;
    ListNode next;

    ListNode(int x) {
        val = x;
    }
}

class Solution {
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        ListNode pre1 = new ListNode(0);
        pre1.next = l1;
        ListNode next2 = (l2 != null) ? l2.next : null;
        ListNode head = pre1;

        while (l1 != null && l2 != null) {
            while (l1 != null && l1.val < l2.val) {
                pre1 = l1;
                l1 = l1.next;
            }
            pre1.next = l2;
            l2.next = l1;
            pre1 = pre1.next;
            l2 = next2;
            next2 = (l2 != null) ? l2.next : null;
        }

        if (l2 != null) {
            pre1.next = l2;
        }

        return head.next;
    }
}