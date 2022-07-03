// Challenge:
// If you can't sleep, just count sheep!!


// If you can't sleep, just count sheep!!

// Task:

// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.


// PREP
// Parameters:
//number

// Results:
// string

// Examples:
// 1 --> "1 sheep..."
// 2 --> "1 sheep...2 sheep...""
// 3 --> "1 sheep...2 sheep...3 sheep..."


// Solution with Psuedo: 

var countSheep = function (num){
    let result = "";
    for (let i = 1; i <= num; i++) {
        result += i.toString() + ' sheep...';
    }
    return result;
  }

