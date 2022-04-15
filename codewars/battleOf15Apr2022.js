//Challenge:
//You only need one - Beginner

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.


//PREP
//Parameters:
// array
// value

//Results:
// boolean

//Examples:
// ([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 6) --> true
// ([10, 20, 30, 40, 50, 60], 15) --> false
// (["yes", "no", "maybe so"], "no") --> true

//Solution with Psuedo:

function check(a, x) {
    // we are going to use the built-in javascript object .includes() to check if a value exists within a variable
    return a.includes(x);
}

check(["yes", "no", "maybe so"], "no")