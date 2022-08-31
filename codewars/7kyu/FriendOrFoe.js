// Challenge:
// Friend or Foe?


// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.



// PREP
// Parameters:
// array


// Results:
// array


// Examples:
// ["Ryan", "Kieran", "Jason", "Yous"] --> ["Ryan", "Yous"]
// ["Paul", "John", "George", "Ringo"] --> ["Paul", "John"]
// ["Peter", "Lois", "Meg", "Chris", "Stewie", "Brian"] --> ["Lois"] 


// Solution with Psuedo: 

function friend(friends){
    let output = [];

    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length == 4) {
            output.push(friends[i])
        }
    }

    return output;
}

console.log(friend(["Paul", "John", "George", "Ringo"]))