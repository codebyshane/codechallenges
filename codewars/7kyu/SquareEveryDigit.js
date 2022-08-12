// Challenge:
// Square Every Digit


// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer


// PREP
// Parameters:
// integer


// Results:
// integer


// Examples:
// 9119 --> 811181
// 7127 --> 491449
// 2847 -> 4641649


// Solution with Psuedo: 

function squareDigits(num){
    //split num into array of single digit integers
    let digits = num.toString().split('');
    let numArray = [];

    //square each value of the array
    digits.map(n => {
        numArray.push(n**2)
    })

    // join array into number
    return Number(numArray.join(''));
  }

console.log(squareDigits(9119))