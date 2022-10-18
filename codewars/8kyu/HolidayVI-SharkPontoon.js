// Challenge:
// Holiday VI - Shark Pontoon

// Your friend invites you out to a cool floating pontoon around 1km off the beach. 
// Among other things, the pontoon has a huge slide that drops you out right into the ocean, a small way from a set of stairs used to climb out.

// As you plunge out of the slide into the water, you see a shark hovering in the darkness under the pontoon... Crap!

// You need to work out if the shark will get to you before you can get to the pontoon. 
// To make it easier... as you do the mental calculations in the water you either freeze when you realise you are dead, or swim when you realise you can make it!

// You are given 5 variables;

// sharkDistance = distance from the shark to the pontoon. The shark will eat you if it reaches you before you escape to the pontoon.

// sharkSpeed = how fast it can move in metres/second.

// pontoonDistance = how far you need to swim to safety in metres.

// youSpeed = how fast you can swim in metres/second.

// dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.

// The pontoon, you, and the shark are all aligned in one dimension.

// If you make it, return "Alive!", if not, return "Shark Bait!".



// PREP
// Parameters:
// integer
// boolean

// Results:
// string

// Examples:
// (12, 50, 4, 8, true) --> "Alive!"
// (7, 55, 4, 16, true) --> "Alive!"
// (24, 0, 4, 8, true) --> "Shark Bait!"

// Solution with Psuedo: 

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    // let's variables to hold some math for us. 
    // We will figure out the time it takes to cover a distance at a speed. Time = distance / speed
    // enter calculation for your time:
    let yourTime = pontoonDistance / youSpeed;

    // let's declare an empty variable for the shark's time - it's empty because the sharks time is dependent on the sharks speed which is also dependent on the presence of a dolphin
    let sharkTime;
    // enter calculation of shark's time if a dolphin is no present
    let sharkTimeNoDolphin = sharkDistance / sharkSpeed;
    // enter calculation of shark's time if a dolphin is present
    let sharkTimeWithDolphin = sharkDistance/(sharkSpeed/2);
    
    // let's create an if conditional statement to determine the shark's speed dependent on the presence of a dolphin
    // if a dolphin is present:
    if (dolphin === true){
        // we will push the equation for shark time with a dolphin to the empty sharkTime variable we declared
        sharkTime = sharkTimeWithDolphin
        // if a dolphin is not present
    } else {
        // we will push the equation for shark time with no dolphin to the empty sharkTime variable we declared
        sharkTime = sharkTimeNoDolphin
    };

    // Now, since sharkTime will change dependent on if dolphin is true, we can make a simple conditional
    // if your time to get to the pontoon is less than the time it takes the shark to reach the pontoon:
    if (yourTime < sharkTime) {
        // You made it!
        return "Alive!"
    }
    // if your time to get to the pontoon is more than the time it takes the shark to reach the pontoon:
    else {
        // You die
        return "Shark Bait!"
    };
}

shark(20, 20, 4, 8, true)