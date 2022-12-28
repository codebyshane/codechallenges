// Challenge:
// Maximum subarray sum


// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.


// PREP
// Parameters:
// array


// Results:
// number


// Examples:
// [-2, 1, -3, 4, -1, 2, 1, -5, 4] --> 6
// [] -->
// [] -->


// Solution with Psuedo: 

var maxSequence = function(arr){
        let maxSeq = 0;
        let currSeq = 0;
        for (const x of arr) {
          currSeq = Math.max(0, currSeq + x);
          maxSeq = Math.max(currSeq, maxSeq);
        }
        return maxSeq;
  }