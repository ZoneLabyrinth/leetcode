var MyQueue = function() {
  // class Stack {
  //     constructor() {
  //         this.value = [];
  //         return this.value
  //     }
  //     push(x){
  //         this.value.push(x);
  //         return this.value
  //     }
  //     peek(){
  //         this.value.pop();
  //         return this.value
  //     }
  //     size() {
  //         return this.value.length
  //     }
  //     empty() {
  //         return !this.value.length
  //     }
  // }
  function Stack (){
    let items = []
    
    this.push = function(element){
        items.push(element)
    }
    this.pop = function(){
       return items.pop()
    }
    this.peek = function(){
        return items[items.length - 1]
    }
    this.empty = function(){
        return items.length === 0
    }
    this.size = function(){
        return items.length
    }
    this.clear = function(){
        items = []
    }
    this.print = function(){
        console.log(items.toString())
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
  
  console.log(this.queue2.empty())
  if(this.queue2.empty()){
      while(!this.queue1.empty()){
        
        console.log(this.queue1)
          this.queue2.push(this.queue1.peek());
      }
  }
  console.log(this.queue2)
  return this.queue2[this.queue2.size-1]
};

/**
* Returns whether the queue is empty.
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
  return this.queue2.length && this.queue1.length;
};


let queue = new MyQueue();
queue.push(1);
console.log(queue)

console.log(queue.peek());