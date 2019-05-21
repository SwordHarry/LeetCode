/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* prev;
    Node* next;
    Node* child;

    Node() {}

    Node(int _val, Node* _prev, Node* _next, Node* _child) {
        val = _val;
        prev = _prev;
        next = _next;
        child = _child;
    }
};
*/
#include <iostream>
using namespace std;

class Node {
public:
    int val;
    Node* prev;
    Node* next;
    Node* child;

    Node() {}

    Node(int _val, Node* _prev, Node* _next, Node* _child) {
        val = _val;
        prev = _prev;
        next = _next;
        child = _child;
    }
};


class Solution {
public:
    Node* flatten(Node* head) {
        if(!head) {
            return head;
        }
        
        Node *node = head;
        while(node) {
            if(node->child) {
                _handler(node,node->child,node->next);
            }
            
            node = node->next;
        }
        
        return head;
    }
    
    Node* _handler(Node* parentHead,Node* childHead,Node* parentTail) {
        Node* node = childHead;
        Node* childTail = node;
        while(node) {
            
            if(node->child) {
                Node *tail = node->next;
                Node *head = node;
                Node *child = node->child;
                // 递归
                Node* tailPrev = _handler(head,child,tail);
                head->next = child;
                child->prev = head;
                
                tailPrev->next = tail;
                if(tail) {
                    tail->prev = tailPrev;
                }
                
                node = tailPrev;
            }
            childTail = node;
            node = node->next;
        }

        return childTail;
    }
};