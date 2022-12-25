// Challenge:
// Form The Minimum


// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Notes:

// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
// Input >> Output Examples

// minValue ({1, 3, 1})  ==> return (13)
// Explanation:

// (13) is the minimum number could be formed from {1, 3, 1} , Without duplications

// minValue({5, 7, 5, 9, 7})  ==> return (579)
// Explanation:

// (579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

// minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
// Explanation:

// (134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications

// Playing with Numbers Series

// Playing With Lists/Arrays Series

// Bizarre Sorting-katas

// For More Enjoyable Katas


// PREP
// Parameters:
// array


// Results:
// number


// Examples:
// [1, 3, 1] --> 13
// [4, 7, 5, 7] --> 457
// [5, 6, 9, 9, 7, 6, 4] --> 45679


// Solution with Psuedo: 

function minValue(values){
    let output = []
    let sortedValues = values.sort((a, b) => a - b)

    for (let i = 0; i < sortedValues.length; i++) {
        if (output.includes(sortedValues[i])) {
            continue
        } else {
            output.push(sortedValues[i])
        }
    }

    return parseInt(output.join(''))
  }

console.log(minValue([1, 3, 1]))