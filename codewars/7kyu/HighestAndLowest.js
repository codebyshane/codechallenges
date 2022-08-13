// Challenge:
// Highest and Lowest


// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.


// PREP
// Parameters:
// string of space-separated integers


// Results:
// string of two integers


// Examples:
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"


// Solution with Psuedo: 

function highAndLow(numbers){
    
    // turn string into array
    let numbersArray = numbers.split(" ");

    // define highest and lowest numbers
    let highest = numbersArray[numbersArray.length - 1];
    let lowest = numbersArray[0];

    // loop through array
    for (let i = 0; i < numbersArray.length; i++){
        
        // to find the highest number
        if (Number(numbersArray[i]) > highest){
            highest = numbersArray[i];
        }

        // to find the lowest number
        if (Number(numbersArray[i]) < lowest){
            lowest  = numbersArray[i];
        }
    }

    // return output string
    return `${highest} ${lowest}`
  }

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));