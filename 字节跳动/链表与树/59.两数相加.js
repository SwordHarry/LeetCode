/**
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
 * 
 */
/**
 * 思路：
 *      设置两个指针遍历两个链表，由于结果是返回一个链表，所以可以new的话题目就简单一些
 *      需要注意的是 l1 和 l2 不一样长的情况
 * 
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
// my algorithm 判断太多，还可以继续优化
var addTwoNumbers = function (l1, l2) {
    const result = new ListNode(0);
    let cur = result;
    let val1, val2;
    let carry = 0;
    while (l1 || l2) {
        val1 = l1 ? l1.val : 0;
        val2 = l2 ? l2.val : 0;

        cur.val = val1 + val2 + carry;
        carry = cur.val > 9 ? 1 : 0;
        cur.val = cur.val % 10;

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        if (l1 || l2) {
            cur.next = new ListNode(0);
            cur = cur.next;
        }
    }

    if (carry) {
        cur.next = new ListNode(1);
    }

    return result;
};

// answer algorithm 采用 头结点减少判断，提高速度，代码更加简洁明了
var addTwoNumbers_answer = function (l1, l2) {
    const result = new ListNode(0);
    let cur = result;
    let carry = 0;
    while (l1 || l2 || carry) {
        let sum = carry;

        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }

        carry = sum > 9 ? 1 : 0;

        cur.next = new ListNode(sum % 10);
        cur = cur.next;
    }

    return result.next;
};