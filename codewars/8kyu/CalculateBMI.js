// Challenge:
// Calculate BMI


// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"


// PREP
// Parameters:
// two numbers

// Results:
// string

// Examples:
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"



// Solution with Psuedo: 

function bmi(weight, height) {
    if (weight/Math.pow(height, 2) <= 18.5) {
        return "Underweight"
    } else if (weight/Math.pow(height, 2) <= 25.0) {
        return "Normal"
    } else if (weight/Math.pow(height, 2) <= 30.0) {
        return "Overweight"
    } else {
        return "Obese"
    }
  }