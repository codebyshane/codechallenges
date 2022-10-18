//Challenge:
//Create a function with two arguments that will return an array of the first (n) multiples of (x).

//Assume both the given number and the number of times to count will be positive numbers greater than 0.

//Return the results as an array (or list in Python, Haskell or Elixir).



//PREP
//Parameters:
// numbers greater than 0

//Results:
// return an array

//Examples:
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]
// countBy(5,10) === [5,10,15,20,25,30,35,40,45,50]

//Solution w/ Psuedo:

//create a function with two parameters
function countBy(x, n) {
    //declare the output variable as an empty array that we will push to
    let z = [];
    //create a loop so we don't have to code the math for each n
    for (let i = 1; i <= n; i++){
    //push each mulitple to the variable that we set up as an empty array
        z.push(x * i)};
    //return the results as an array
    return z;
}
  
countBy(5,10)