/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    class Queue {
        constructor() {
            this.value = []
        }
        push(x) {
            this.value.push(x);
        }
        peek() {
            return this.value.shift();
        }
        size() {
            return this.value.length
        }
        empty() {
            return !this.value.length
        }
    }

    this.input = new Queue();
    this.output = new Queue();
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.input.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    while(this.input.size > 1){
        this.output.push(this.input.peek());
    }
    let pop = this.input.peek();
    let temp = this.output;
    this.input = this.output;
    this.output = temp;
    return pop;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    while(this.input.size > 1){
        this.output.push(this.input.peek());
    }
    let top = this.input.value[1];
    let temp = this.output.push(this.input.peek());
    this.input = this.output;
    this.output = temp;
    return top;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.input.empty() && this.output.empty()
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

