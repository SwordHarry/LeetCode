/**
 * 编写一个程序，找到两个单链表相交的起始节点。
如下面的两个链表：
在节点 c1 开始相交。

示例 1：
输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
输出：Reference of the node with value = 8
输入解释：相交节点的值为 8 （注意，如果两个列表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
 
示例 2：
输入：intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
输出：Reference of the node with value = 2
输入解释：相交节点的值为 2 （注意，如果两个列表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为 [3,2,4]。在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。
 
示例 3：
输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
输出：null
输入解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。
解释：这两个链表不相交，因此返回 null。
 
注意：
如果两个链表没有交点，返回 null.
在返回结果后，两个链表仍须保持原有的结构。
可假定整个链表结构中没有循环。
程序尽量满足 O(n) 时间复杂度，且仅用 O(1) 内存。
 */

/**
 *     思路：
 *         如果两个链表存在相交，则其最后一个节点必定指向相同对象
 *         可以先分别遍历两个链表直到链表尾部，然后判断是否相同，不相同则可以返回 null 了
 *         如果相同，则存在相交
 *         可以利用两指针，一指针遍历链表，另一指针不动，并且在遍历过程中判断是否指向相同，
 *         不相同则另一指针后移，直到找出相同为止
 *         虽然满足 O(1) 内存，但是时间复杂度是 O(n^2)
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {

    while (headA) {
        let node = headB;
        while (node) {
            if (headA === node) {
                return headA;
            }
            node = node.next;
        }
        headA = headA.next;
    }

    return null;
};

/**
 * 答案解法1：
 *      思路：让长链表和短链表等长，或者让长链表指针先走n步，n为两链表长度差，
 *           然后两链表指针一起走，如果有相交则必定会相同
 *           如果没有相交则必定会同时null
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {

    let slow = headA;
    let fast = headB;


    const _getLen = function (node) {
        let count = 0;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }

    let countA = _getLen(headA);
    let countB = _getLen(headB);


    let count = 0;
    if (countA > countB) {
        count = countA - countB;
        fast = headA;
        slow = headB;
    } else {
        count = countB - countA;
        fast = headB;
        slow = headA;
    }

    for (let i = 0; i < count; i++) {
        fast = fast.next;
    }

    while (slow && fast) {
        if (slow === fast) {
            return slow;
        }
        slow = slow.next;
        fast = fast.next;
    }

    return null;
};
/**
 * 答案解法2：
 *          题目要求不允许改变两链表结构
 *          将一个链表的尾部连到另一个链表的头部，如果相交，则存在环，
 *          如果不相交，则还是一个单链表，则题目变成了求环的第一个结点
 *          画图之后用数学公式可以证明：a + c + b = b + a + c
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {

    let nodeA = headA;
    let nodeB = headB;

    while (nodeA !== nodeB) {
        nodeA = nodeA ? nodeA.next : headB;
        nodeB = nodeB ? nodeB.next : headA;
    }

    return nodeA;
};