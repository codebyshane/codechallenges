/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3

Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

 

Constraints:

    n == nums.length
    1 <= n <= 5 * 104
    -109 <= nums[i] <= 109

 
Follow-up: Could you solve the problem in linear time and in O(1) space?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  //use the Boyer-Moore Majority Voting Algorithm:
  // set the first candidate as the majority - this will also catch inputs wth only one index
  let majority = nums[0];
  // begin a counter for the number of votes for the majority
  let count = 1;
  // loop through the votes
  for (let i = 1; i < nums.length; i++) {
    // if the votes - startng at index 1 - match the majority
    if (nums[i] === majority) {
        //increase the count by 1
        count++;
    //if the votes do not match the majority (i.e. a vote against)
    } else {
        // decrease the count by 1
        count--;
    }

    // when the count reaches 0, set the majority to the new candidate
    if (count === 0) {
        majority = nums[i];
        count = 1;
    }
  }
  // after runnng through the array, return the majority candidate
  return majority;
};