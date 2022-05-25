// Challenge:
// Total amount of points


// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point

// Notes:
// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4


// PREP
// Parameters:
// array of strings

// Results:
// 

// Examples:
// 
// 
// 


// Solution with Psuedo: 

function points(games) {
    // create an empty variable to hold points as a counter
    let totalPoints = 0;

    for (const game of games) {
        // split each match into variables holding the x and y scores
        const [xScore, yScore] = game.split(':');
        // Using a ternary operator, we will calculate the points for each game
        const points = xScore > yScore ? 3 : xScore === yScore ? 1 : 0;
        // pass the points into the totalPoints calculator
        totalPoints += points;
    };
    // return the total number of points after all matches have been calculated
    return totalPoints;
  }