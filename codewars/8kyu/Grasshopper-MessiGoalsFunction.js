// Challenge:
// Grasshopper - Messi goals function


// Messi goals function

// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:

// 5, 10, 2  -->  17


// PREP
// Parameters:
// numbers

// Results:
// number

// Examples:
// 5, 10, 2  -->  17
// 0, 0, 0 --> 0
// 2, 4, 6 --> 12


// Solution with Psuedo: 

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  }