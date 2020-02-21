/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第K大元素
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.queue = new PriorityQueue();
  this.k = k;
  for (let i = 0; i < nums.length; i++) {
    this.queue.enqueue(nums[i], nums[i]);
    if (this.queue.items.length <= k) {
    } else {
      this.queue.dequeue();
    }
  }
  return this.queue.front().element;
};

class QElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority
  }
}


class PriorityQueue {
  constructor() {
    this.items = [];
  }


  dequeue() {
    if (this.empty()) {
      return 'is empty'
    }
    return this.items.shift();
  }

  enqueue(el, priority) {

    let ele = new QElement(el, priority);

    let end = false;

    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > ele.priority) {
        this.items.splice(i, 0, ele);
        end = true;
        break;
      }
    }

    if (!end) {
      this.items.push(ele)
    }
  }

  empty() {
    return this.items.length === 0
  }

  front() {
    if (this.empty()) {
      return 'is empty'
    }
    return this.items[0];
  }
}

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  if (this.queue.items.length < this.k) {
    this.queue.enqueue(val, val);
    return this.queue.front().element;
  }

  if (val > this.queue.front().priority) {
    this.queue.dequeue();
    this.queue.enqueue(val, val);
  }
  return this.queue.front().element;
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end

