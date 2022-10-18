/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

 

Constraints:

    1 <= intervals.length <= 104
    intervals[i].length == 2
    0 <= starti <= endi <= 104

*/

const merge = function (intervals) {
    // sort the array lowest to highest by the 0-index of the interval
    intervals.sort((a, b) => a[0] - b[0]);
  
    const output = [];
    let current = intervals[0];
  
    for (let i = 1; i < intervals.length; i++) {
      if (intervals[i][0] <= curr[1]) {
        // If there is overlap, update current interval to span the overlapping intervals
        current[0] = Math.min(current[0], intervals[i][0]);
        current[1] = Math.max(current[1], intervals[i][1]);
      } else {
        // If no overlap then add current interval to the result and update current interval to the just checked interval
        output.push(current);
        current = intervals[i];
      }
    }
    output.push(current);
  
    return output;
  };