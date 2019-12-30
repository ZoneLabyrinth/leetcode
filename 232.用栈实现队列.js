/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    class Stack {
        constructor() {
            this.value = [];
        }
        push(x){
            this.value.push(x);
        }
        peek(){
            return this.value.pop();
        }
        size() {
            return this.value.length
        }
        empty() {
            return !this.value.length
        }
    }
    this.queue1 = new Stack();
    this.queue2 = new Stack();

};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.queue1.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.queue2.empty()){
        while(!this.queue1.empty()){
            this.queue2.push(this.queue1.peek());
        }
    }
    return this.queue2.peek();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(this.queue2.empty()){
        while(!this.queue1.empty()){
            this.queue2.push(this.queue1.peek());
        }
    }
    return this.queue2.value[this.queue2.size()-1]
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.queue2.empty() && this.queue1.empty();
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

