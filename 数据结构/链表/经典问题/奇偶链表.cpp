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
    ListNode* oddEvenList(ListNode* head) {
        if(!head || !(head->next)) {
            return head;
        }
        
        
        ListNode *odd = head;
        ListNode *even = head->next;
        ListNode *evenHead = even;
        ListNode *oddTail = odd;
        
        while(odd && even) {
            odd->next = even->next;
            odd = odd->next;
            
            if(odd) {
                oddTail = odd;
                even->next = odd->next;
                even = even->next;
            } else {
                break;
            }
            
        }
        
        oddTail->next = evenHead;
        
        
        return head;
    }
};