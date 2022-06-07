// Challenge:
// String repeat


// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.


// PREP
// Parameters:


// Results:


// Examples:
// 6, "I" ==> "IIIIII"
// 5, "Hello" ==> "HelloHelloHelloHelloHello"
// 9, "AnotherOne" ==> "AnotherOneAnotherOneAnotherOneAnotherOneAnotherOneAnotherOneAnotherOneAnotherOneAnotherOne"


// Solution with Psuedo: 

function repeatStr (n, s) {
    return s.repeat(n)
}

console.log(repeatStr(6, "I"))
console.log(repeatStr(5, "Hello"))