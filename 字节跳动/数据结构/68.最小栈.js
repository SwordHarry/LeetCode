/**
 * 设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。

push(x) -- 将元素 x 推入栈中。
pop() -- 删除栈顶的元素。
top() -- 获取栈顶元素。
getMin() -- 检索栈中的最小元素。
示例:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
 * 
 */

 /**
  * 思路：
  *     设置一个栈，其 top 方法直接返回栈顶元素
  *     设置一个最小值，初值为最大数值
  *     push 方法中，如果push 进来的值比最小值小或相等，则先将最小值入栈，再将当前值入栈
  *     pop 方法中，如果pop出来的值和最小值相等，则将最小值设置为 再一次pop出来的值
  * 
  *     
  */
 /**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.minStack = [];
    this.minVal = Number.MAX_VALUE;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    // 此处为小于等于 即 考虑 0 1 0 的情况
    if(x <= this.minVal) {
        this.minStack.push(this.minVal);
        this.minVal = x;
    }
    this.minStack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.minStack.pop() === this.minVal) {
        this.minVal = this.minStack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.minStack[this.minStack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minVal;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */