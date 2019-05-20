#include <iostream>
using namespace std;

class Node {
public:
    int val;
    Node *next;
    Node(int _val,Node *_next = NULL) {
        val = _val;
        next = _next;
    }
};


class MyLinkedList {
public:
    /** Initialize your data structure here. */
    MyLinkedList():head(-1,NULL) {
        
        length = 0;
    }
    
    /** Get the value of the index-th node in the linked list. If the index is invalid, return -1. */
    int get(int index) {
        Node node = *head.next;
        int i = 0;
        while(&node != NULL) {
            
            if(i == index) {
                return node.val;
            }
            node = *node.next;
            i++;
        }
        
        return -1;
    }
    
    /** Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. */
    void addAtHead(int val) {
        
        Node curNode(val);
        if(length != 0) {
            Node node = *head.next;
            curNode.next = &node;
        }

        head.next = &curNode;
        length++;
    }
    
    /** Append a node of value val to the last element of the linked list. */
    void addAtTail(int val) {
        Node preNode = head;
        Node node = *head.next;
        while(&node != NULL) {
            preNode = node;
            node = *node.next;
        }
        Node tailNode(val,NULL);
        preNode.next = &tailNode;
        length++;
    }
    
    /** Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. */
    void addAtIndex(int index, int val) {
        if(index < 0) {
            return;
        }
        if(index > length) {
            return;
        }
        
        Node preNode = head;
        Node nextNode = *head.next;
        
        int i = 0;
        while(i < index) {
            
            preNode = nextNode;
            nextNode = *nextNode.next;
            
            i++;
        }
        
        Node node(val, &nextNode);
        preNode.next = &node;
    }
    
    /** Delete the index-th node in the linked list, if the index is valid. */
    void deleteAtIndex(int index) {
        if(index < 0) {
            return;
        }
        if(index >= length) {
            return;
        }
        
        Node preNode = head;
        Node *curNode = head.next;
        
        int i = 0;
        while(i < index) {
            preNode = *curNode;
            curNode = curNode->next;
            
            i++;
        }
        
        preNode.next = curNode->next;
        curNode = NULL;
        length--;
    }
    
private:
    Node head;
    int length;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * MyLinkedList* obj = new MyLinkedList();
 * int param_1 = obj->get(index);
 * obj->addAtHead(val);
 * obj->addAtTail(val);
 * obj->addAtIndex(index,val);
 * obj->deleteAtIndex(index);
 */

int main(void) {
    MyLinkedList *linkedList = new MyLinkedList();
    linkedList->addAtHead(1);
    linkedList->addAtTail(3);
    linkedList->addAtIndex(1,2);   //链表变为1-> 2-> 3
    linkedList->get(1);            //返回2
    linkedList->deleteAtIndex(1);  //现在链表是1-> 3
    linkedList->get(1);            //返回3

    int i = 0;
    int temp = linkedList->get(i);
    while(temp != -1) {
        cout << temp << endl;
        i++;
        temp = linkedList->get(i);
    }

    return 0;
}