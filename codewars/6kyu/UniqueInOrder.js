// Challenge:
// Unique In Order


// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


// PREP
// Parameters:
// string or array


// Results:
// array


// Examples:
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


// Solution with Psuedo: 

var uniqueInOrder=function(iterable){
    let output = [];

    // turn strings into arrays
    if (typeof iterable === "string") {
        iterable = iterable.split("");
    }

    // loop through array
    for (let i = 0; i < iterable.length; i++){
        // if the current value is not repeated for the next value
        if (iterable[i] !== iterable[i+1]) {
            // add to output array
            output.push(iterable[i]);
        }
    }

    return output;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));