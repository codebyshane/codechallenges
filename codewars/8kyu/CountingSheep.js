// Challenge:
// Counting sheep...


// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined


// PREP
// Parameters:
// array of boolean


// Results:
// number


// Examples:
// [true, true, true, false, false, false, true] ==> 4
// [true, true, true, false] ==> 3
// [true, true, true, false, true, true, false, true, false, true] ==> 7


// Solution with Psuedo: 

function countSheeps(arrayOfSheep) {
    let numberOfSheep = 0
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] == true) {
            numberOfSheep++
        }
    }
    return numberOfSheep;
  }

console.log(countSheeps([true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true]))