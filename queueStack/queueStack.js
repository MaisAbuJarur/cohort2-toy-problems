/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
 var Stack = function() {
  this.stack=[];

<<<<<<< HEAD
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

=======
   // add an item to the top of the stack
   this.push = function(value){
   };

   // remove an item from the top of the stack
   this.pop = function(){
   };

   // return the number of items in the stack
   this.size = function(){
   };
 };
>>>>>>> f1996fc46a552df71db210c9733275ae9f4788cf

 /**
   * Queue Class
   */
 var Queue = function() {
   // Use two `stack` instances to implement your `queue` Class
   var inbox = new Stack();
   var outbox = new Stack();

   // called to add an item to the `queue`
   this.enqueue = function(value){
<<<<<<< HEAD
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
=======
     
     }
   };

   // called to remove an item from the `queue`
   this.dequeue = function(){
    }
>>>>>>> f1996fc46a552df71db210c9733275ae9f4788cf
   };

   // should return the number of items in the queue
   this.size = function(){
<<<<<<< HEAD
    return inbox.concat(outbox).length
   };
 };

 //Time-complexity @ Constant time
=======
   };
 };
>>>>>>> f1996fc46a552df71db210c9733275ae9f4788cf
