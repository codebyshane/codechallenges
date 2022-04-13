//Challenge:
//Even or Odd

//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.


//PREP
//Parameters:
//integer

//Results:
//string

//Examples:
// 13 --> "Odd"
// 100 --> "Even"
// 8675309 --> "Odd"

//Solution with Psuedo:

function evenOrOdd(number) {
    // easiest way is to creata an if loop
    // we'll use modulus to find if a number is even. All even numbers can be divided by two with 0 remaining.
    if (number % 2 === 0) {
        // if the number is divisible by 2 with 0 remainder, it's even - so we return "Even"
        return("Even")
    }else {
        // we don't need to add another conditional because anything that is not divisible by two with 0 remaining (even) is odd, so if it fails the first conditional it has to be odd.
    return("Odd")
    }
}

evenOrOdd(8675309)