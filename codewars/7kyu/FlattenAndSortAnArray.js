// Challenge:
// Flatten and sort an array


// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Addendum:

// Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

// http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well


// PREP
// Parameters:
//


// Results:
//


// Examples:
// 
// 
// 


// Solution with Psuedo: 

"use strict";

function flattenAndSort(array) {
  let result = []

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        result.push(array[i][j])
    }
  }

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = i + 1; j < result.length; j++) {
        if (result[i] > result[j]) {
            [result[i], result[j]] = [result[j], result[i]]
        }
    }
  }
  return result
}