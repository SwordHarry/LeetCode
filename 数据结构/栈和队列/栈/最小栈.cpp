#include <stack>
#include <limits.h>
using namespace std;

class MinStack {
public:
    /** initialize your data structure here. */
    MinStack() {
        min = INT_MAX; // 定义 在 标准头文件 limits.h 中
    }
    
    void push(int x) {
        s.push(min);
        s.push(x);
        if(x < min) {
            min = x;
        }
    }
    
    void pop() {
        s.pop();
        min = s.top();
        s.pop();
    }
    
    int top() {
        return s.top();
    }
    
    int getMin() {
        return min;
    }
private:
    stack<int> s;
    int min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack* obj = new MinStack();
 * obj->push(x);
 * obj->pop();
 * int param_3 = obj->top();
 * int param_4 = obj->getMin();
 */