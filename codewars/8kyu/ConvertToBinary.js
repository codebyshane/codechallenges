// Challenge:
// Convert to Binary


// Task Overview

// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.


// PREP
// Parameters:
// number

// Results:
// number

// Examples:
// (1) --> 1
// (5) --> 101
// (11) --> 1011


// Solution with Psuedo: 

function toBinary(n){
    let num = n;
    let binary = (num % 2).toString();
    for (; num > 1; ) {
        num = parseInt(num / 2);
        binary = (num % 2) + (binary);
    }
    return Number(binary);
  }

toBinary(1)