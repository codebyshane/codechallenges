// Challenge:
// Pillars


// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).


// PREP
// Parameters:
// 3 numbers

// Results:
// number

// Examples:
// (2, 30, 50) --> 3000
// (5, 10, 10) --> 5030
// (10, 10, 10) --> 9080


// Solution with Psuedo: 

function pillars(num_pill, dist, width) {
    // calculate the distance between first and last pillars in meters without the width of each pillar. 
    // Since we start with the first pillar, we will subtract 1 from total number of pillars
    let distBetween = (num_pill - 1) * dist;
    // calculate total pillar width of all pillars except the first and last pillar.
    // We will subtract 2 from the total number of pillars to negate the first and last
    let totalPillarWidth = (width * (num_pill - 2));
    // if there is one pillar
    if (num_pill == 1) {
        // the distance between is just the dist provided but converted to centimeters
        return distBetween * 100;
        // for 2 pillars
    } else if (num_pill == 2) {
        // return the distance provided converted to centimeters
        return dist * 100;
        // for more than 2 pillars
    } else {
        // we convert the distBetween to centimeters from meters by *100 and add all of the pillar widths in between the first and last pillars
        return ((distBetween * 100) + totalPillarWidth);
    }
  }

pillars(1, 10, 10)