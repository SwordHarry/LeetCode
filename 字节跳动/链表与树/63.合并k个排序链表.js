/**
 * 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

示例:

输入:
[
  1->4->5,
  1->3->4,
  2->6
]
输出: 1->1->2->3->4->4->5->6s
 * 
 */
/**
 * 思路：
 *      一、合并k个排序链表相当于执行(k - 1)次的合并两个链表
 *      二、题目没有说不允许改变原有结构
 *      
 * 注意：
 *      注意数组中的空链表的情况
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    const len = lists.length;
    if (!len) {
        return null;
    }
    if (len < 2) {
        return lists[0];
    }

    let index = 0;
    // 防止出现前面空链表
    while (index < len && !lists[index]) {
        index++;
    }

    for (let i = index + 1; i < len; i++) {

        if (!lists[i]) {
            continue;
        }
        lists[index] = mergeList(lists[index], lists[i]);
    }

    return lists[index] || null;
};

var mergeList = function (l1, l2) {
    const dummy = new ListNode(0);
    let cur = dummy;
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

    return dummy.next;
}

/**
 *  答案解法：
 *          上面的解法虽然可行，但是效率太低，
 *          0 和 1 2 3 4 ... 合并，总共要合并 n - 1 次
 *          
 *          答案解法使用 分治法 解题
 *          0 和 n/2 + 1 合并 1 和 n/2 + 2 合并...
 *          以此类推，得到新数组，在重复上述步骤，直到合并成一条链表
 *          总共要合并 n/2 + n/4 + n/8 ...
 */
var mergeKLists_answer = function(lists) {
    const len = lists.length;
    if(!len) {
        return null;
    }
    
    let n = len;
    while(n > 1) {
        let k = ~~((n + 1)/2);
        const index = ~~(n/2);
        for(let i = 0;i < index;i++) {
            lists[i] = mergeList(lists[i], lists[i + k]);
        }
        n = k;
    }
    
    return lists[0];
};