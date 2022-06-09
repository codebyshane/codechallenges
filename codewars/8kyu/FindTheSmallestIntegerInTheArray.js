// Challenge:
// Find the smallest integer in the array


// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.


// PREP
// Parameters:
// array

// Results:
// number

// Examples:
// [34, 15, 88, 2] ==> 2
// [34, -345, -1, 100] ==> -345
// [34, -1, 0, 100] ==> -1


// Solution with Psuedo: 
class SmallestIntegerFinder {
    findSmallestInt(args) {
        args.sort((a, b) => a - b);
        return args[0];
    };
};