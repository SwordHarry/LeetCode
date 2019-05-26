#include <stack>
using namespace std;

class MyQueue {
public:
    /** Initialize your data structure here. */
    MyQueue() {
        
    }
    
    /** Push element x to the back of queue. */
    void push(int x) {
        inStack.push(x);
    }
    
    /** Removes the element from in front of queue and returns that element. */
    int pop() {
        if(empty()) {
            return -1;
        } else {
            if(outStack.empty()) {
                inToOut();
            }
            
            int result = outStack.top();
            outStack.pop();
            return result;
        }
    }
    
    /** Get the front element. */
    int peek() {
        if(empty()) {
            return -1;
        } else {
            if(outStack.empty()) {
                inToOut();
            }
            return outStack.top();

        }
    }
    
    /** Returns whether the queue is empty. */
    bool empty() {
        return inStack.empty() && outStack.empty();
    }
    
    void inToOut() {
        while(!inStack.empty()) {
            outStack.push(inStack.top());
            inStack.pop();
        }
    }
private:
    stack<int> inStack;
    stack<int> outStack;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue* obj = new MyQueue();
 * obj->push(x);
 * int param_2 = obj->pop();
 * int param_3 = obj->peek();
 * bool param_4 = obj->empty();
 */