/*
There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

A province is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

Return the total number of provinces.

 

Example 1:

Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
Output: 2

Example 2:

Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3

 

Constraints:

    1 <= n <= 200
    n == isConnected.length
    n == isConnected[i].length
    isConnected[i][j] is 1 or 0.
    isConnected[i][i] == 1
    isConnected[i][j] == isConnected[j][i]
*/

var findCircleNum = function(isConnected) {
    // create class for group of cities
    const province = new Set();
    //create counter to keep track of the number of provinces
    let numOfProv = 0;

    // Iterate thru matrix
    for (let i = 0; i < isConnected.length; i++) {
        // if province does not already have the city
        if (!province.has(i)) {
            // start dfs for this city
            dfs(i);
            // increase number of province count
            numOfProv++;
        }
    }

    return numOfProv;

    // Helper function for Depth First Search
    function dfs(i) {
        // iterate through city group's cities
        for (let j = 0; j < isConnected.length; j++) {
            // check if the two cities are directly connected AND city is not already in province
            if (isConnected[i][j] === 1 && !province.has(j)) {
                // add city to province
                province.add(j);
                // start dfs for connected city
                dfs(j);
            }
        }
    }
};

console.log(findCircleNum([[1,0,0],[0,1,0],[0,0,1]]))


// function minimalHeaviestSetA(arr) {
//     // Assuming arr is not always sorted:
//     // Sort arr in order of largets to smallest
//     const weights = arr.sort((a, b) => (b - a));
    
//     //create containers for BoxA and BoxB
//     var boxA = [];
//     var boxB = [];
    
//     // first check if arr has less than three items:
//     if(arr.length > 3) {
//         //push whole arr to boxA
//         boxA.push(arr);
//     // if arr has three or more items:
//     } else {
//         // remove the first two values of the sorted arr and push to boxA
//         boxA.push(weights[0]);
//         console.log(boxA)
//         // remove those values from the weights array
//     }
    
    
    
//     return boxA;
// }

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const arrCount = parseInt(readLine().trim(), 10);

//     let arr = [];

//     for (let i = 0; i < arrCount; i++) {
//         const arrItem = parseInt(readLine().trim(), 10);
//         arr.push(arrItem);
//     }

//     const result = minimalHeaviestSetA(arr);

//     ws.write(result.join('\n') + '\n');

//     ws.end();
// }

// console.log(minimalHeaviestSetA([4, 2, 5, 1, 6]));