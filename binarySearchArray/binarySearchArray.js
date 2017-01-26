/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
 * Example usage:
 *
 * 
 * console.log(index); // 4
 */

 var binarySearch = function (array, target) {
 	if (array.length%2===0){
 		var mid = array.length/2
 	}else{
 		var mid = Math.floor(array.length/2)
 	}

 	if(array[mid] === target){
 		return mid;
 	}
 	if(array[mid] > target){
 		var narray= array.slice(array[0],array[mid]) 
 		return binarySearch(narray,target)
 	}
 	if(array[mid] < target){
 		var narray = array.slice(array[mid],array.length+1)
 		return binarySearch(narray,target)

 	}
 };

