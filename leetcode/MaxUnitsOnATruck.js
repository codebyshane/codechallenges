/*
You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:

    numberOfBoxesi is the number of boxes of type i.
    numberOfUnitsPerBoxi is the number of units in each box of the type i.

You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed truckSize.

Return the maximum total number of units that can be put on the truck.

 

Example 1:

Input: boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4
Output: 8
Explanation: There are:
- 1 box of the first type that contains 3 units.
- 2 boxes of the second type that contain 2 units each.
- 3 boxes of the third type that contain 1 unit each.
You can take all the boxes of the first and second types, and one box of the third type.
The total number of units will be = (1 * 3) + (2 * 2) + (1 * 1) = 8.

Example 2:

Input: boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10
Output: 91

 

Constraints:

    1 <= boxTypes.length <= 1000
    1 <= numberOfBoxesi, numberOfUnitsPerBoxi <= 1000
    1 <= truckSize <= 106

*/

/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 var maximumUnits = function(boxTypes, truckSize) {
    //Sort the array of box types so the box types with the most units per box are first
    let queue = boxTypes.sort((a,b) => b[1] - a[1]);
    // Counter for maximum number of UNITS on a truck
    let maxUnits = 0;
    
    // Loop through the sorted array
    for (let i = 0; i < queue.length; i++) {
      let boxType = queue[i];
      
      //if truck is full, stop
      if (truckSize <= 0) {
        break
      };
      //if truck has room for the number of boxes per box type
      if (truckSize > boxType[0]) {
        // decrease available truck space by number of boxes in boxType
        truckSize -= boxType[0];
        // increase the count of units on truck
        maxUnits += boxType[0] * boxType[1];
        //if truck has room, but not enough for all of the boxes of a boxType
      } else {
        // increase the unit counter with as many units per box that can be added
        maxUnits += boxType[1] * truckSize
        // decrease the available truck space by number of boxes loaded to zero to trigger the break.
        truckSize -= truckSize
      }
    };
    // output the number of units on truck
    return maxUnits; 
  };

console.log(maximumUnits([[5,10],[2,5],[4,7],[3,9]], 10));

