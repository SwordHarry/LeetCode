/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
/**
 * 思路：
 *      快指针比慢指针多走 n 步就可以实现定位到 倒数第 n 个
 *      不过要处理 删除头指针 的特殊情况
 * 
 * 
*/
#include <iostream>
using namespace std;

struct ListNode {
     int val;
     ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};
class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        
        ListNode *slow = head;
        ListNode *fast = head;
        ListNode *pre = head;
        
        while(n != 0) {
            fast = fast->next;
            n--;
        }
        
        while(fast) {
            pre = slow;
            fast = fast->next;
            slow = slow->next;
        }
        
        // 处理 删除 头结点 的情况
        if(pre != slow) {
            pre->next = slow->next;
        } else {
            head = head->next;
        }
        
        
        return head;
    }
};