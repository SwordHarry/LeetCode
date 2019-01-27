/**
 * 反转一个单链表。

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？ 
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// my algorithm
// 快慢指针 实现反转
var reverseList = function (head) {
    if (!head) return null;
    let qp = head;
    let sp = head;
    let length = 0;
    while (qp.next) {
        length++;
        qp = qp.next;
    }
    const newHead = qp;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            sp = sp.next;
        }
        qp.next = new ListNode(sp.val);
        sp = head;
        qp = qp.next;

    }

    return newHead;

};

// Iteration algorithm
// 迭代版：三指针 实现 边遍历边反转
var reverseList_iteration = function (head) {
    let curp = head,
        pre = null,
        currenthp;
    while (curp) {
        currenthp = curp.next;
        curp.next = pre;
        pre = curp;
        curp = currenthp;
    }
    return pre;
};

// Recursive algorithm
// 递归版，采用闭包将最后的头结点取得
var reverseList_recursion = function (head) {
    let node;
    const _reverse = (head) => {
        if (!head) {
            return null;
        }
        const reverseHead = _reverse(head.next);
        if (reverseHead) {
            reverseHead.next = head;
            head.next = null;
        } else {
            node = head;
        }
        return head;
    };
    _reverse(head);
    return node;
};