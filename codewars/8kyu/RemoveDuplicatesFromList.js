// Challenge:
// Remove duplicates from list


// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.


// PREP
// Parameters:
// array


// Results:
// array


// Examples:
// [1] --> [1]
// [1, 2] --> [1, 2]
// [1, 1, 2] --> [1, 2]


// Solution with Psuedo: 

function distinct(a) {
    let output = [];

    if (a.length <= 1) {
        return a
    } else {
        for (let i = 0; i < a.length; i++) {
            if (output.includes(a[i])) {
                continue
            } else {
                output.push(a[i])
            }
        }
    }
    return output
  }