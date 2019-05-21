/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
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
    bool isPalindrome(ListNode* head) {
        
        ListNode *slow = head;
        ListNode *fast = head;
        
        while(fast && fast->next) {
            slow = slow->next;
            fast = fast->next->next;
        }
        
        slow = reverseList(slow);
        
        while(head && slow) {
            if(head->val != slow->val) {
                return false;
            }
            
            head = head->next;
            slow = slow->next;
        }
        
        return true;
    }
    
    ListNode* reverseList(ListNode *head) {
        if(!head || !(head->next)) {
            return head;
        }
        
        ListNode *pre = NULL;
        ListNode *cur = head;
        ListNode *next = head->next;
        
        while(cur) {
            cur->next = pre;
            pre = cur;
            cur = next;
            if(next) {
                next = next->next;
            }
        }
        
        
        return pre;
    }
};