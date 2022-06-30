// Challenge:
// How good are you really?


// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:

// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!


// PREP
// Parameters:
// array

// Results:
// boolean

// Examples:
// [2, 3], 5 --> true
// [100, 40, 34, 57, 29, 72, 57, 88], 75 --> true
// [12, 23, 34, 45, 56, 67, 78, 89, 90], 9 --> false


// Solution with Psuedo: 

function betterThanAverage(classPoints, yourPoints) {
    let totalScores = classPoints.length + 1;
    let sumScores = (classPoints.reduce((a, b) => a + b, 0)) + yourPoints;
    if (yourPoints > sumScores/totalScores) {
        return true
    } else {
        return false
    }
  }