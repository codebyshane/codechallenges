// Challenge:
// Will you make it?

// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! 
// You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. 
// Function should return true (1 in Prolog, NASM and COBOL) if it is possible and false (0 in Prolog, NASM and COBOL) if not. The input values are always positive.



// PREP
// Parameters:
// number
// number
// number


// Results:
// boolean

// Examples:
// (50, 25, 2) --> true
// (50, 24, 2) --> false
// ()


// Solution with Psuedo: 

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // mpg (or mi/g) * fuelLeft (or g) = distanceToPump (or mi)
  // if the distance is greater than the fuel you have, you won't make it period.
    if (mpg * fuelLeft < distanceToPump){
      return false;
    } else {
      return true;
    }
  };