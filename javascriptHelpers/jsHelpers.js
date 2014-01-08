/*
This is a file containing
frequantly used js helper functions & objects
*/

// This is to check if an object is an array 
function isArray(obj){
	return Object.prototype.toString.call(obj) === '[object Array]';
}

//This is to check if given argument is a number
function isNumber(n){
	return !isNAN(parseFloat(n)) && isFinite(n);
}

//This will transform arguments object to an array
function getArgumentsArray(){
	return Array.prototype.slice.call(arguments);
}