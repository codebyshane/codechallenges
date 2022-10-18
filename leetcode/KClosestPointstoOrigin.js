/*
Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

 

Example 1:

Input: points = [[1,3],[-2,2]], k = 1
Output: [[-2,2]]
Explanation:
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].

Example 2:

Input: points = [[3,3],[5,-1],[-2,4]], k = 2
Output: [[3,3],[-2,4]]
Explanation: The answer [[-2,4],[3,3]] would also be accepted.

 

Constraints:

    1 <= k <= points.length <= 104
    -104 < xi, yi < 104

*/

var kClosest = function(points, k) {
    //using a min heap approach:
    //create the heap in place
    let p = Math.floor((points.length - 2) / 2); //last parent
    //heapify down starting with the last parent
    for (let i = p; i >= 0; i--) {
        // our heap is the points array, our indx will be the last parent, our weightFunction will be the distance helper function
        heapifyDown(points, i, distance);
    }

    //remove the smallest points[0] k times
    let output = [];
    for (let i = 0; i < k; i++) {
        output.push(remove(points, distance));
    }

    return output;

    // read 0, replace 0 with last position, heapifyDown
    function remove(heap, weightFunction) {
        let val = heap[0];
        heap[0] = heap.pop();
        heapifyDown(heap, 0, weightFunction);
        return val;
    }

    //compare with children, swap with smallest, repeat
    function heapifyDown(heap, idx, weightFunction) {
        let left = 2 * idx + 1;
        let right = 2 * idx + 2;
        let smallest = left;

        if (left >= heap.length) return;

        if (right < heap.length && weightFunction(heap[left]) > weightFunction(heap[right])) {
            smallest = right;
        }

        if (weightFunction(heap[idx]) > weightFunction(heap[smallest])) {
            [heap[idx], heap[smallest]] = [heap[smallest], heap[idx]];
            heapifyDown(heap, smallest, weightFunction);
        }
    }

    //create helper function to calculate Euclidian distance
    function distance(point) {
        return point[0] * point[0] + point[1] * point[1];
    }
};

console.log(kClosest([[3,3],[5,-1],[-2,4]], 2));
