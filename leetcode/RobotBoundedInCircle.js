/*
ROBOT BOUNDED IN CIRCLE

On an infinite plane, a robot initially stands at (0, 0) and faces north. Note that:

The north direction is the positive direction of the y-axis.
The south direction is the negative direction of the y-axis.
The east direction is the positive direction of the x-axis.
The west direction is the negative direction of the x-axis.
The robot can receive one of three instructions:

"G": go straight 1 unit.
"L": turn 90 degrees to the left (i.e., anti-clockwise direction).
"R": turn 90 degrees to the right (i.e., clockwise direction).
The robot performs the instructions given in order, and repeats them forever.

Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.

 

Example 1:

Input: instructions = "GGLLGG"
Output: true
Explanation: The robot is initially at (0, 0) facing the north direction.
"G": move one step. Position: (0, 1). Direction: North.
"G": move one step. Position: (0, 2). Direction: North.
"L": turn 90 degrees anti-clockwise. Position: (0, 2). Direction: West.
"L": turn 90 degrees anti-clockwise. Position: (0, 2). Direction: South.
"G": move one step. Position: (0, 1). Direction: South.
"G": move one step. Position: (0, 0). Direction: South.
Repeating the instructions, the robot goes into the cycle: (0, 0) --> (0, 1) --> (0, 2) --> (0, 1) --> (0, 0).
Based on that, we return true.
Example 2:

Input: instructions = "GG"
Output: false
Explanation: The robot is initially at (0, 0) facing the north direction.
"G": move one step. Position: (0, 1). Direction: North.
"G": move one step. Position: (0, 2). Direction: North.
Repeating the instructions, keeps advancing in the north direction and does not go into cycles.
Based on that, we return false.
Example 3:

Input: instructions = "GL"
Output: true
Explanation: The robot is initially at (0, 0) facing the north direction.
"G": move one step. Position: (0, 1). Direction: North.
"L": turn 90 degrees anti-clockwise. Position: (0, 1). Direction: West.
"G": move one step. Position: (-1, 1). Direction: West.
"L": turn 90 degrees anti-clockwise. Position: (-1, 1). Direction: South.
"G": move one step. Position: (-1, 0). Direction: South.
"L": turn 90 degrees anti-clockwise. Position: (-1, 0). Direction: East.
"G": move one step. Position: (0, 0). Direction: East.
"L": turn 90 degrees anti-clockwise. Position: (0, 0). Direction: North.
Repeating the instructions, the robot goes into the cycle: (0, 0) --> (0, 1) --> (-1, 1) --> (-1, 0) --> (0, 0).
Based on that, we return true.
 

Constraints:

1 <= instructions.length <= 100
instructions[i] is 'G', 'L' or, 'R'.
*/

/**
 * @param {string} instructions
 * @return {boolean}
 */
 var isRobotBounded = function(instructions) {
    // create array of N,E,S,W directions
    const dirs = [[0,1],[1,0],[0,-1],[-1,0]];
    //create heading count that starts facing North
    // the heading is going to drive which index of the directions array we choose to increment it's coordinates by
    // 0 = N
    // 1 = E
    // 2 = S
    // 3 = W
    let head = 0;
    //create origin points
    let x = 0;
    let y = 0;

    for (const instruction of instructions) {
        // If the instruction says GO
        if (instruction === 'G') {
            // robot will move forward in the direction of the heading
            // x-coordinate becomes current plus 1 point in the direction the plane is heading
            x = x + dirs[head][0];
            // y-coordinate becomes current plus 1 point in the direction the plane is heading
            y = y + dirs[head][1];
            // If the instruction says LEFT
        } else if (instruction === 'L') {
            // adjust heading to index of NESW coordinate
            head = (4 + head - 1) % 4;
            // If the instruction says RIGHT
        } else {
            // adjust heading to index of NESW coordinate
            head = (4 + head + 1) % 4;
        }
    }
    // create check if plane is at origin
    const isAtOrigin = (x === 0 && y === 0);
    // create check if plane is facing same direction as the start
    const isHeadingNorth = head === 0
    // return true if plane returns to origin and is not facing same direction as start
    return isAtOrigin || (! isHeadingNorth);
 };

console.log(isRobotBounded("GRGR"))