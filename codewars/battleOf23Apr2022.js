// Challenge:
// Multiplication table for number

// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// For example, a multiplication table (string) for number == 5 looks like below:

// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50
// P. S. You can use \n in string to jump to the next line.

// Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.



// PREP
// Parameters:
// integer

// Results:
// string

// Examples:
// (5) -->  1 * 5 = 5
//          2 * 5 = 10
//          3 * 5 = 15
//          4 * 5 = 20
//          5 * 5 = 25
//          6 * 5 = 30
//          7 * 5 = 35
//          8 * 5 = 40
//          9 * 5 = 45
//          10 * 5 = 50

// (2) -->  1 * 2 = 2
//          2 * 2 = 4
//          3 * 2 = 6
//          4 * 2 = 8
//          5 * 2 = 10
//          6 * 2 = 12
//          7 * 2 = 14
//          8 * 2 = 16
//          9 * 2 = 18
//          10 * 2 = 20

// (42) --> 1 * 42 = 42
//          2 * 42 = 84
//          3 * 42 = 126
//          4 * 42 = 168
//          5 * 42 = 210
//          6 * 42 = 252
//          7 * 42 = 294
//          8 * 42 = 336
//          9 * 42 = 378
//          10 * 42 = 420

// Solution with Psuedo: 

function multiTable(number){
    // we assign an empty string to a new variable before the loop so we can push the loop output into it
   let table = '';

   // use a for loop to iterate for each instance of i.
   for(let i = 1; i <= 10; i++){
       // store the output in the new variable and put \n at the end to start a new line after each iteration
       table += `${i} * ${number} = ${i * number}\n`
   }
   // return the table variable storing the loop output, then slice off the last \n from the last iteration.
   return table.slice(0, -1)
}

multiTable(4)