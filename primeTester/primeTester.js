/**
 * A prime number is an integer number that cannot be divided by any number 
 * except itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */
<<<<<<< HEAD
 var primeTester = function(n) {
 	var result =true;
 	if(n===1){
 		return false;
 	}
 	for (var i = 2; i < n; i++) {
 		if (n%i === 0){
 			result = false
 		}

 	}
 	return result;
 }
 	
=======
var primeTester = function(n) {

}
>>>>>>> ec1197ded368e7aad2cc2c29d5059a3905f42645

 /* Extra credit: Write a function that generates a list of all prime numbers
  * in a user-specified range (inclusive). If you're not quite sure where to start,
  * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
  * saucy, check out the Sieve of Atkin.)
  */

<<<<<<< HEAD
  var primeFinder = function (n){
  	var array = []
  	for (var i = 0; i < n ; i++) {
  		if(primeTester(i)){
  			array.push(i)
  		}
  	}
  	return array.join()
  }
=======
  
>>>>>>> ec1197ded368e7aad2cc2c29d5059a3905f42645