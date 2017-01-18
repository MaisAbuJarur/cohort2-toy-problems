/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
Calculate the sum of the digits of the number 2^1000?
Hint the answer is 1366.
*/

var powerOfTwo = function(num){
	var x = Math.pow(2,num)
	var re = /[.+ ]/g
	var re2 = /[e]/g
	var array = x.toString().replace(re,0).replace(re2,Math.pow(301) ).split("")


	console.log(array)
	var total= 0;
	for (var i = 0; i < array.length; i++) {
			total += parseInt(array[i]);
	}
	return total;

};

//time complexity: linear