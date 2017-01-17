/*
For this exercise you will create a flatten function. 
The function takes in any number of arguments and flattens them into a single array. 
If any of the arguments passed in are an array then the individual objects within the array
will be flattened so that they exist at the same level as the other arguments. 
Any nested arrays, no matter how deep, should be flattened into the single array result.

The following are examples of how this function would be used and what the expected results would be:

flatten(1, [2, 3], 4, 5, [6, [7]]) // returns [1, 2, 3, 4, 5, 6, 7]
flatten('a', ['b', 2], 3, null, [[4], ['c']]) // returns ['a', 'b', 2, 3, null, 4, 'c']

*/

function flatten(){
	var result = [];
	var element = Array.prototype.slice.call(arguments) 

	for (var i = 0; i < element.length; i++) {
		if(Array.isArray(element)[i]){
			for (var j = 0; j < element[i].length; j++) {
					if(!Array.isArray(element[i])){
					result = result.concat(flatten(element[i][j]))
				}
				result.push(element[i][j])
			}
		
		}
		result.push(element[i]);
	}
	return result;
}

//time complexity exponential