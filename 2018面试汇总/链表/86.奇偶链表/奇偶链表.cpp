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
        if(head == NULL) {
            return NULL;
        }
        
        ListNode *head1 = head;
        ListNode *head2 = head->next;
        ListNode *secondHead = head2;
        ListNode *firstFail = head1;

        while(head1 != NULL || head2 != NULL) {
            ListNode *head1Next = NULL;
            ListNode *head2Next = NULL;
            if(head1 != NULL) {
                firstFail = head1;
            }
            if(head1->next != NULL) {
                head1Next = head1->next->next;
            }
            if(head2 != NULL && head2->next != NULL) {
                head2Next = head2->next->next;
            }
            
            if(head1 != NULL) {
                head1->next = head1Next;
            }
            if(head2 != NULL) {
                head2->next = head2Next;
            }
            
            if(head1 != NULL) {
                head1 = head1->next;
            }
            if(head2 != NULL) {
                head2 = head2->next;
            }
            
        }
        

        firstFail->next = secondHead;
        
        return head;
    }

    // answer algorithm
    ListNode* oddEvenList_answer(ListNode* head){
        if (head == NULL || head->next == NULL) {
            return head;
        }
        
        ListNode *odd = head;
        ListNode *even = head->next;
        ListNode *p = even;

        while(odd->next != NULL && p->next != NULL) {
            odd->next = p->next;
            odd = odd->next;

            p->next = odd->next;
            p = p->next;
        }

        odd->next = even;

        return head;
    }
};



