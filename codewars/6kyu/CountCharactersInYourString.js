// Challenge:
// Count characters in your string


// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


// PREP
// Parameters:
// string   


// Results:
// object


// Examples:
// "aba" --> {'a': 2, 'b': 2}
// 
// 


// Solution with Psuedo: 

function count (string) {  
    const returnObject = {};

    // loop over input string
    for (let i = 0; i < string.length; i++) {
      // check if character has been seen before
      if (returnObject.hasOwnProperty(string[i])) {
        // increase its count by 1
        returnObject[string[i]] += 1;
      } else {
        // add it to the object with a count of 1
        returnObject[string[i]] = 1;
      }
    }
  
    return returnObject;
  }

console.log(count("aba"))