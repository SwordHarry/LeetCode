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
    private ListNode node;

    public ListNode reverseList(ListNode head) {
        _reverse(head);
        return node;
    }

    private ListNode _reverse(ListNode head) {
        if (head == null) {
            return null;
        }
        ListNode reverseHead = _reverse(head.next);
        if (reverseHead != null) {
            reverseHead.next = head;
            head.next = null;
        } else {
            // 这里的head是我们需要的真正的头指针
            node = head;
        }
        return head;
    }
}