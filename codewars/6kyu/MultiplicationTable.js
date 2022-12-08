// Challenge:
// Multiplication table


// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]


// PREP
// Parameters:
// number


// Results:
// array


// Examples:
// 3 --> [ [ 1, 2, 3 ], [ 2, 4, 6 ], [ 3, 6, 9 ] ]
// 4 --> [ [ 1, 2, 3, 4 ], [ 2, 4, 6, 8 ], [ 3, 6, 9, 12 ], [ 4, 8, 12, 16 ] ]
// 5 --> [ [ 1, 2, 3, 4, 5 ], [ 2, 4, 6, 8, 10 ], [ 3, 6, 9, 12, 15 ], [ 4, 8, 12, 16, 20 ], [ 5, 10, 15, 20, 25 ] ]


// Solution with Psuedo: 

multiplicationTable = function(size) {
    let output = []
    for (let i = 1; i <= size; i++) {
      let x = [];
      for (let j = 1; j <= size; j++) {
        x.push(i * j)
      }
      output.push(x)
    }
    return output
  }

console.log(multiplicationTable(5))