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
    ListNode* removeElements(ListNode* head, int val) {
        if(!head) {
            return NULL;
        }
        
        ListNode *node = new ListNode(-1);
        node->next = head;
        
        ListNode *pre = node;
        while(head) {
            if(head->val == val) {
                pre->next = head->next;
                head = head->next;
            } else {
                pre = head;
                head = head->next;
            }
        }
        
        return node->next;
    }
};