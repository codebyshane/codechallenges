// Challenge:
// Sum of the first nth term of Series


// Task:

// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:

// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)

// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"


// PREP
// Parameters:
// number


// Results:
// string


// Examples:
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"


// Solution with Psuedo: 

function SeriesSum(n){
    let result = 0;
    let reverage = 1;
    for (let i = 0; i < n; i += 1) {
        if (i === 0) {
            result = 1;
        } else {
            reverage += 3;
            result = result + (1 / reverage);
        }
    }
    return result.toFixed(2);
}

console.log(SeriesSum(5))