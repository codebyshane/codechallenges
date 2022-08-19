// Challenge:
// Exes and Ohs


// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


// PREP
// Parameters:
// string


// Results:
// boolean


// Examples:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


// Solution with Psuedo: 

function XO(str) {
    // turn input string into an array
    let array = str.toLowerCase().split('');

    // counters for x and o
    let numOfX = 0;
    let numOfO = 0;

    // go through array and count x and o
    for (let i = 0; i < array.length; i++) {

        if (array[i] === 'x') {
            numOfX += 1
        } else if (array[i] === 'o') {
            numOfO += 1;
        }
    }

    // compare number of x and o
    if (numOfX === numOfO) {
        return true;
    } else {
        return false
    }
}

console.log(XO("ooxx"));