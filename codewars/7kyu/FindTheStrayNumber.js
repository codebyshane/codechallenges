// Challenge:
// Find the stray number


// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples

// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3


// PREP
// Parameters:
// array


// Results:
// number


// Examples:
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3


// Solution with Psuedo: 

function stray(numbers) {
    let arr = numbers.sort();
    if (arr[0] !== arr[1]) {
      return arr[0];
    } else {
      return arr[arr.length - 1];
    }
  }