/**
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

示例：

给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
说明：

给定的 n 保证是有效的。

进阶：

你能尝试使用一趟扫描实现吗？
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    // 引入新头结点，解决头结点无前驱问题
    let newHead = new ListNode(0);
    newHead.next = head;
    let currentNode = newHead;
    let length = 0;
    while (currentNode.next) {
        length++;
        currentNode = currentNode.next;
    }
    currentNode = newHead;
    for (let i = 0; i < length - n; i++) {
        currentNode = currentNode.next;
    }
    // 做删除节点操作
    currentNode.next = currentNode.next.next;
    head = newHead.next;
    return head;
};


/**
 * 进阶：只遍历一次
 * 双指针解法：采用快指针和慢指针的思想，
 *          用快指针引领慢指针到达目的地
 */
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
var removeNthFromEnd_answer = function (head, n) {
    // 进阶：双指针解法
    let newHead = new ListNode(0);
    newHead.next = head;
    let qp = newHead;
    let sp = newHead;
    while (n--) {
        qp = qp.next;
    }

    while (qp.next) {
        qp = qp.next;
        sp = sp.next;
    }
    sp.next = sp.next.next;

    return newHead.next;
};