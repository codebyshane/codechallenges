// Challenge:
// Small enough? - Beginner


// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.


// PREP
// Parameters:
// array and number


// Results:
// boolean


// Examples:
// [66, 101], 200 --> true
// [78, 117, 110, 99, 104, 117, 107, 115], 100 --> false
// [101, 45, 75, 105, 99, 107], 107 --> true


// Solution with Psuedo: 

function smallEnough(a, limit){
    for (let i = 0; i < a.length; i++) {
        while (a[i] > limit) {
            return false;
        }
    }

    return true;
}

console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100 ))