/*
You are lost in Amman and need directions. You talk to a few strangers
and get these directions: go "NORTH", then "SOUTH", then "WEST", then "EAST", then "EAST".

Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. 
Going to one direction and coming back the opposite direction is a needless effort.

Your task is to look at the directions and eliminate all unnecessary moves.
In this case, you will just go EAST.

Another example:

plan = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].

You can immediatly see that going "NORTH" and then "SOUTH" is not reasonable, 
better stay where you are. So the task is to find a simplified version of the plan. 

A better plan in this case is simply: 
plan = ["WEST"]

You have to write a function dirReduc which will take an array of strings 
and returns an array of strings with the needless directions removed.

More examples:

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) => ["WEST"]
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]) => [] //don't need to move at all
*/

var dirReduc = function(directions){
<<<<<<< HEAD

	if(directions.includes('NORTH') &&  directions.includes('SOUTH')){
		directions.splice(directions.indexOf('NORTH'),1)
		directions.splice(directions.indexOf('SOUTH'),1)
	}
	else if(directions.includes("EAST") && directions.includes("WEST")){
		directions.splice(directions.indexOf('WEST'),1)
		directions.splice(directions.indexOf('EAST'),1)
	}
	else {
		return directions;
	}
	
	return dirReduc(directions);
};

//time-complexity : exponential
=======
	
	return directions;
};

>>>>>>> d2130e14cb0ab2ec81404accbb5aee359f2349a4
