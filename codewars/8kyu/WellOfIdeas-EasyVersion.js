// Challenge:
// Well of Ideas - Easy Version

// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. 
// If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. 
// If there are no good ideas, as is often the case, return 'Fail!'.



// PREP
// Parameters:
// array

// Results:
// string

// Examples:
// ["good", "bad", "bad"] --> "Publish!"
// ["bad", "good", "bad", "bad", "good", "bad", "good"] --> "I smell a series!"
// ["bad", "bad", "bad", "bad"] --> "Fail!"

// Solution with Psuedo: 

function well(x){
    // create a variable to hold the number of good ideas in a provided array
    let numOfGoods = 0;
    
    // loop through every index of the array to count the number of good ideas
    for (const idea of x) {
        // for every good idea, increase the number of goods variable by 1.
        if (idea === "good"){
            numOfGoods += 1;
        }
    }

    // now we test the number of good ideas against the output criteria
    if (numOfGoods > 2){
        // more than 2 good ideas
        return "I smell a series!"
    } else if (numOfGoods === 0){
        // no good ideas
        return "Fail!"
    } else{
        // everything else: 1 or 2 good ideas.
        return "Publish!"
    }
}

well(["bad", "bad", "bad", "bad"])