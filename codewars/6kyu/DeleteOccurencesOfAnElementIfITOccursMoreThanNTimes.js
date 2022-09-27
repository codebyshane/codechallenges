// Challenge:
// Delete occurrences of an element if it occurs more than n times


// Enough is enough!

// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
// He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task

// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].


// PREP
// Parameters:
// array
// integer


// Results:
// array


// Examples:
// ([20,37,20,21], 1) --> [20,37,21]
// ([1,1,3,3,7,2,2,2,2], 3) --> [1, 1, 3, 3, 7, 2, 2, 2]


// Solution with Psuedo: 

function deleteNth(arr, x) {
    // Create an empty object to store how many times each object exists
    var cache = {};
    // Call the filter function, the delegate is called once for each item
    // in the array and you return true or false depending on if it should
    // be kept or not
    return arr.filter(function(n) {
      // Use the item as key and store the number of times the item has appeared.
      // (cache[n]||0) fetches the current value of cache[n] or zero if it doesn't
      // exist. Then add one to it and store it.
      cache[n] =(cache[n]||0) + 1;
      // If the number of times it has appeared in the array is less or equal to
      // the limit then return true so the filter function keeps it.
      return cache[n] <= x;
    });
  }

console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3))