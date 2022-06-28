// Challenge:
// Reversed sequence


// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]


// PREP
// Parameters:
// number

// Results:
// array

// Examples:
// n=5 --> [5,4,3,2,1]
// n=4 --> [4,3,2,1]
// n=8 --> [8,7,6,5,4,3,2,1]


// Solution with Psuedo: 

const reverseSeq = n => {
    let result = []
    while (n > 0) {
        result.push(n);
        n--;
    }
    return result;
  };