/*
 * Write a function that accepts a 2-dimensional array (array of arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Example:
    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);
    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

<<<<<<< HEAD
 var spiralTraversal = function(matrix){

 	var result=[];

 		for (var i = 0; i < matrix.length; i++) {
 			for(var j = 0; j >=matrix[i].length; j++){
 					result.push(matrix[i][j])
 					result.splice(3,0,matrix[i][2])
 			}

 		}

 	return result;

 };
 //time complexity: quadratic
=======
var spiralTraversal = function(matrix){

};
>>>>>>> 812640f2ad169de84a70e736efcb0f6864aaf56e
