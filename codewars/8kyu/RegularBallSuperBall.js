// Challenge:
// Regular Ball Super Ball


// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

// ball1 = new Ball();
// ball2 = new Ball("super");

// ball1.ballType     //=> "regular"
// ball2.ballType     //=> "super"


// PREP
// Parameters:
// 


// Results:
//


// Examples:
// 
// 
// 


// Solution with Psuedo: 

var Ball = function(ballType) {
    if (ballType === undefined) {
        this.ballType = "regular"
    } else if (ballType === "super") {
        this.ballType = "super"
    }
  };