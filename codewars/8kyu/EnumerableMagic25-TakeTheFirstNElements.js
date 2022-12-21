// Challenge:
// Enumerable Magic #25 - Take the First N Elements


// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

// If you need help, here's a reference:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice


// PREP
// Parameters:
// array and number


// Results:
// array


// Examples:
// [0, 1, 2, 3, 4, 5, 6, 7, 8], 3 --> [0, 1, 2]
// 
// 


// Solution with Psuedo: 

function take(arr, n) {
    let output = []

    if (arr.length == 0) {
        return output;
    } else if (arr.length < n) {
        return arr
    }

    for (let i = 0; i < n; i++) {
        output.push(arr[i])
    }

    return output
  }