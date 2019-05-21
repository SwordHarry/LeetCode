/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
#include <iostream>
#include <vector>
using namespace std;

struct ListNode {
     int val;
     ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

class Solution {
public:
    ListNode* rotateRight(ListNode* head, int k) {
        if(!head || !(head->next) || k == 0) {
            return head;
        }
        
        
        ListNode *fast = head;
        ListNode *slow = head;
        int len = 0;
        while(fast && len < k) {
            fast = fast->next;
            len++;
        }
        
        if(!fast) {
            k = k % len;
            if(k == 0) return head;
            fast = head;
            for(int i = 0;i < k;i++) {
                fast = fast->next;
            }
        }
        
        while(fast->next) {
            slow = slow->next;
            fast = fast->next;
        }
        
        ListNode* newHead = slow->next;
        fast->next = head;
        
        slow->next = NULL;
        
        
        return newHead;
    }

    // answer algorithm 空间换时间
    ListNode* rotateRight_answer(ListNode* head, int k) {
        if(head==NULL || head->next==NULL)
            return head;
        vector<ListNode*> v;
        while(head!=NULL){
            v.push_back(head);
            head=head->next;
        }
        int len=v.size();
        k %= len;
        if(k==0)
            return v[0];
        v[len-1]->next = v[0];
        v[len-1-k]->next = NULL;
        return v[len-k];
    }
};