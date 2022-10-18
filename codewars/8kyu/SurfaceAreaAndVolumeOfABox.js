// Challenge:
// Surface Area and Volume of a Box


// Write a function that returns the total surface area and volume of a box as an array: [area, volume]


// PREP
// Parameters:
// 3 numbers

// Results:
// array [area, volume]

// Examples:
// (2, 2, 2) --> [4, 8]
// (3, 3, 3) --> [9, 27]
// (10, 10, 10) --> [100, 1000]


// Solution with Psuedo: 

function getSize(width, height, depth) {
    // create an empty array variable
    let areaVolume = [];
    // calculate area for each side of box and push to empty array
    let area = areaVolume.push((2 * (width * height) + 2 * (width * depth) + 2 * (height * depth)));
    // caluclate volume of box and push to array after area
    let volume = areaVolume.push(width * height * depth);
    // return the array output
    return areaVolume;    
}

getSize(10, 10, 10)