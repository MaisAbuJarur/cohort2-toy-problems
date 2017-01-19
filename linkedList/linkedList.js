/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var LinkedList = function(){
  //fill me in!
this.head = {}
this.head.value = undefined;
this.head.next = this.tail;
this.tail ={}
this.tail.value = null;
this.tail.next = null;

};

LinkedList.prototype.addToTail = function(value){
	if(this.head.value === undefined){
		this.head.value = value
		this.head.next = this.tail.value
		this.tail.next = null;
	}
		this.tail.value =value

}

LinkedList.prototype.removeHead = function () {
	var head = this.head.value
	this.head.value = this.head.next
	this.head.next = this.tail.value
	return head;

}

LinkedList.prototype.contains = function (value) {
		for(var key in this.head){
			if(this.head[key] === value){
				return true
			}
		}
		for(var key in this.tail){
			if(this.tail[key] === value){
				return true
		} 	
	}
	return false;
}

//time complexity is constant for removeHead and addToTail, and quadratic for Contains
//write methods here