// Challenge:
// Basic Mathematical Operations

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.



// PREP
// Parameters:
// string
// number
// number

// Results:
// number

// Examples:
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7


// Solution with Psuedo: 

function basicOp(operation, value1, value2){
    // A simple if statement will allow us to return the math from the operator string
    if (operation == '+'){
        return value1 + value2;
    }
    if (operation == '-'){
        return value1 - value2;
    }
    if (operation == '/'){
        return value1 / value2;
    }
    if (operation == '*'){
        return value1 * value2;
    };
}

basicOp('+', 4, 7)