// Challenge:
// Array.diff


// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]


// PREP
// Parameters:
// two arrays


// Results:
// number


// Examples:
// [1, 2], [2] --> 1
// [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1], [2] --> [1, 3, 4, 5, 6, 5, 4, 3, 1]
// [1, 3], [1] --> 3


// Solution with Psuedo: 

function arrayDiff(a, b) {
    return a.filter(i => !b.includes(i));
}