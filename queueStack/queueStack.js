/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
 var Stack = function() {
  this.stack=[];

};
   // add an item to the top of the stack
   Stack.prototype.push = function(value){
    this.stack.unshift(value)
   };

   // remove an item from the top of the stack
   Stack.prototype.pop = function(){
    this.stack.shift()
   };

   // return the number of items in the stack
   Stack.prototype.size = function(){
    return this.stack.length
   };


 /**
   * Queue Class
   */
 var Queue = function() {
   // Use two `stack` instances to implement your `queue` Class
   var inbox = new Stack();
   var outbox = new Stack();

   // called to add an item to the `queue`
   this.enqueue = function(value){
     if(inbox.length === 0){
      inbox.push(value)
    }
     outbox.unshift(value)
  };

   // called to remove an item from the `queue`
   this.dequeue = function(){
    inbox.pop()
    if(outbox.length){
      inbox.unshift(outbox[outbox.length-1])
    };
   };

   // should return the number of items in the queue
   this.size = function(){
    return inbox.concat(outbox).length
   };
 };

 //Time-complexity @ Constant time