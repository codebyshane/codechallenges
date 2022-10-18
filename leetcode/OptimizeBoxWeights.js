/*

If we sort the array, the subset A with maximal total weight is the shortest trailing subarray with sum greater than half of the total sum, e.g. for the example above,

sorted(arr) = [1, 2, 2, 3, 4, 5]
sum(arr) / 2 = 17 / 2 = 8.5
A = [4, 5]
sum(A) = 9

split array in two parts, constraints: A sum >= B sum
num of elements A <= B
A & B should be distinct.
return expected A

Approach :
1. calculate sum of total elements
2. target = sum/2
3. take MaxQueue PriorityQueue
4. while(localsum < target) add elements to result and localsum
5. return result in reverse
this solution passed all test cases except 1

*/

function minimalHeaviestSetB (arr) {
    // sort the array
    arr.sort((a, b) => a - b)

    // find sum of elements in array
    let sum = arr.reduce((a, b) => a + b, 0)
    console.log(sum);

    // the sum will be split into two boxes
    let target = sum / 2;
    console.log(target);

    // find max size of boxA
    let boxALength = 0;
    
    // find at what index of the original array does boxA start
    let boxAStart = -1;

    // to find how many elements can go in boxA and where to start pulling them from the arr:
    // iterate through array
    for (let i = 0; i < arr.length; i++) {
        // if the number of elements in boxA is less than half of total elements in arr
        if (boxALength < target) {
            // increase the max length of boxA
            boxALength += arr[i];
            boxAStart ++;
            console.log(boxAStart)
        }
    }

    // create boxA
    let boxA = new Array(arr.length - boxAStart)

    // populate the indexes identified into boxA
    for (let i = 0; i < arr.length - boxAStart; i++) {
        boxA[i] = arr[boxAStart + i];
    }

    return boxA;
};

console.log(minimalHeaviestSetB([1, 2, 2, 2, 3, 4]));

/*
function minimalHeaviestSetA(arr) {
let arraySum = 0
let arrLength = arr.length

for (let i=0; i<arrLength; i++) {
    arraySum += arr[i]
}

arr.sort((a, b) => a - b)
let max = 0
let idx = 0

while(idx < arrLength && max*2 < arraySum) {
    max += arr[idx]
    idx++
}

idx-- // idx now is the first element in box A

let res = new Array(arrLength - idx)

for (var i = 0; i < arrLength - idx; i++) {
    res[i] = arr[idx + i]
}

return res
*/



function minimalHeaviestSetA (arr) {
    // counter for sum of arr - start with 0
    let arraySum = 0
    // holder for number of items in arr
    let arrLength = arr.length
    
    // iterate through the arr:
    for (let i = 0; i < arrLength; i++) {
        // increase the arraySum by the value of the element
        arraySum += arr[i]
    }
    // sort arr from smalles to largest
    arr.sort((a, b) => a - b);

    // identify characteristics of boxA
    let max = 0
    let idx = 0
    
    console.log(arraySum);
    // to find the max number of elements in boxA:
    // loop through array
    // as long as each element 
    while(idx < arrLength && max * 2 < arraySum) {
        // increase the max by the sorted array's index
        max += arr[idx]
        // increase index by 1
        idx++
    }
    console.log(max)
    console.log(idx)
    idx-- // idx now is the first element in box A
    console.log(idx)
    // create new Array to hold the optimized box
    console.log(arrLength - idx)
    let boxA = new Array(arrLength - idx)

    // iterate through arr to find
    for (var i = 0; i < arrLength - idx; i++) {
        boxA[i] = arr[idx + i]
    }

    return boxA
    }

console.log(minimalHeaviestSetA( [1, 2, 2, 2, 3, 4]));