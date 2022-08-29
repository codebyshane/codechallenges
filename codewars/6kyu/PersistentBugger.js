// Challenge:
// Persistent Bugger.


// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)



// PREP
// Parameters:
// number


// Results:
// number


// Examples:
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)


// Solution with Psuedo: 

function persistence(num) {
    // declare a counter
    let i = 0;

    // as long as num is not single-digit
    while (num.toString().length !== 1) {
        // change num to an array of strings
        // then use reduce to multiply the values of the array
        num = num.toString().split("").reduce((a,b)=>a*b);
        // increase the count by one
        i++;
    }

    // return the count
    return i;
}

console.log(persistence(39))