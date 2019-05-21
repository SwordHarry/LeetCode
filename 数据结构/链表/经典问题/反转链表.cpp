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
    ListNode* reverseList(ListNode* head) {
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