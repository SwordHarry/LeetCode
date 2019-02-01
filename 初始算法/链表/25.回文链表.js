/**
 * 请判断一个链表是否为回文链表。

示例 1:

输入: 1->2
输出: false
示例 2:

输入: 1->2->2->1
输出: true
进阶：
你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
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
 * @return {boolean}
 */
// O(n) 时间复杂度，但是不是O(1)空间复杂度
var isPalindrome = function (head) {
    let p = head,
        length = 0;
    const map = {};
    while (p) {
        length++;
        map[length] = p.val;
        p = p.next;
    }

    for (let i = 0; i <= ~~(length / 2); i++) {
        if (map[i + 1] !== map[length - i]) {
            return false;
        }
    }

    return true;
};


/**
 * O(n)时间复杂度，O(1)空间复杂度
 * 思路：
 *      双指针解法+反转链表：
 *      快指针走两步，慢指针遍历，快指针到结尾，慢指针到中央
 *      将慢指针之后的链表反转，再从头和从慢指针处同步遍历，
 *      遇到不同的返回false，遇到相同的继续遍历直到结尾
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
 * @param {ListNode} head
 * @return {boolean}
 */
// O(n) 时间复杂度，但是不是O(1)空间复杂度
var isPalindrome_answer = function(head) {
    if(!head)
        return true;
    let sp = head,
        qp = head;
    
    // 1.依靠快指针，将慢指针 拨到 链表 中央
    while(sp.next && qp.next && qp.next.next) {
        sp = sp.next;
        qp = qp.next.next;
    }
    
    // 2.将链表分为两半
    let right = sp.next;
    sp.next = null;
    
    // 3.反转右边的链表
    let prep = right;
    right = right?right.next:null;
    let nextp = right?right.next:null;
    
    if(prep)
        prep.next = null;
    while(right) {
        right.next = prep;
        prep = right;
        right = nextp;
        nextp = right?right.next:null;
    }

    // 4.将两个链表同步遍历
    let head2 = prep;
    while(head && head2) {
        if(head.val !== head2.val) {
            return false;
        }
        head = head.next;
        head2 = head2.next;
    }
    
    return true;
    
    
};