// Challenge:
// No Loops 2 - You only need one

// You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.



// PREP
// Parameters:
// array of numbers or strings
// number or string

// Results:
// boolean

// Examples:
// (["grape", "banana", "strawberry"], "a") --> true
// ([1, 2, 3, 4, 5, 6, 7, 8], 1) --> true
// (["grape", "banana", "strawberry"], 1) --> false

// Solution with Psuedo: 

function check(a,x){
    // since it wants a boolean as output, we will just tell the function to return array includes x
    return a.includes(x);
}

check(["grape", "banana", "strawberry"], "grape")