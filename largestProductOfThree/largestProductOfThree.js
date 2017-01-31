/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function(array) {
	
	var result = 1;
	var arr = array.sort()
	for (var i = array.length-4; i < array.length; i++) {
		result = result * array[i];
	}
		
	return result;
};

//time complexity linear 




