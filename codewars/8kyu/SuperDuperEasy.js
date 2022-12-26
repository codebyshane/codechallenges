// Challenge:
// Super Duper Easy


// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".


// PREP
// Parameters:
// string or number


// Results:
// string or number


// Examples:
// 
// 
// 


// Solution with Psuedo: 

function problem(x){
    if (typeof x === "string") {
        return "Error"
    } else {
        return ((x * 50) + 6)
    }
  }