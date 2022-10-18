//Challenge:
//Grasshopper Order of Operations

// You are running the calculation 2 + 2 * 2 + 2 * 2 and expect to get the answer 32 but instead the function keeps returning 10.
// Fix the function to make it return 32 without changing the number or the operators.
// function orderOperations(){
//    return 2 + 2 * 2 + 2 * 2
// }




//Issue:
//PEMDAS,  which defines the order of operations, is being used on the expression 2 + 2 * 2 + 2 * 2
// With no PARENTHESIS or EXPONENTS, the first operation to be calculated will be MULTIPLICATION
//         Therefore: 2 + 4 + 4 = 10

//Solution with Psuedo: 

// using PEMDAS to fix the calculation to return 32 instead of 10.
// expressions in PARENTHESIS will calculate first 
//          Therefore we add PARENTHESIS to the original expression to manipulate the order of operations:
//          2 + 2 * 2 + 2 * 2 becomes ===> (2 + 2) * (2 + 2) * 2
//          we need to put the new expression in PARENTHESIS because it will be in the return() command, so it will look like:
//          ((2 + 2) * (2 + 2) * 2)
//          which breaks down to: 
//          (4) * (4) * 2
//          which breaks down to:
//          16 * 2 = 32


function orderOperations(){
    return (2 + 2) * (2 + 2) * 2
  }

orderOperations()