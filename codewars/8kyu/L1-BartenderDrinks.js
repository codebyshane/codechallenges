// Challenge:
// L1: Bartender, drinks!

// Complete the function that receives as input a string, and produces outputs according to the following table:

//    Input	                    Output
// "Jabroni"	            "Patron Tequila"
// "School Counselor"	    "Anything with Alcohol"
// "Programmer"	            "Hipster Craft Beer"
// "Bike Gang Member"	    "Moonshine"
// "Politician"	            "Your tax dollars"
// "Rapper"	                "Cristal"
// anything else	        "Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".



// PREP
// Parameters:
// string

// Results:
// string

// Examples:
// see above

// Solution with Psuedo: 

function getDrinkByProfession(param){
    // let's convert param to lower-case to make the function case-insensitive
    // we will store the converted string in a local variable so we don't have to keep typing out param.toLowerCase() for each conditional
    let job = param.toLowerCase();
    // then we will use an if statement
    if (job === "jabroni") {
        return "Patron Tequila"
    } else if (job === "school counselor") {
        return "Anything with Alcohol"
    } else if (job === "programmer") {
        return "Hipster Craft Beer"
    } else if (job === "bike gang member") {
        return "Moonshine"
    } else if (job === "politician") {
        return "Your tax dollars"
    } else if (job === "rapper") {
        return "Cristal"
    } else {
        return "Beer"
    }
}

getDrinkByProfession("programmer")