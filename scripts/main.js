/*
  Create a function that multiplies two numbers
  passed in as argument. Return the product.
 */

function multiply(x, y) {
 	return (x * y);
 }


/*
  Create a function that divides two numbers
  passed in as argument. Return the quotient.
 */

function divide(x, y) {
 	return (x / y);
 }


/*
  Create a variable to hold the return value of the
  3-argument function. 

  e.g. var result = myFunction(0, 0, func)
 */

function result(x, y, func){
 	return func(x, y);
 }


/*
  Log the result
 */

 console.log(result(10, 3, multiply));
