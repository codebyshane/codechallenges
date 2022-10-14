// Challenge:
// Sort Numbers


// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []


// PREP
// Parameters:
// array


// Results:
// array


// Examples:
// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []


// Solution with Psuedo: 

function solution(nums){
    if(nums == null){
        return []
    } else {
        return nums.sort((a, b) => a - b)
    }
}