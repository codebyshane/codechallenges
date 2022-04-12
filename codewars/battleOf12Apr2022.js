//Challenge:
//Fake Binary

//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string



//PREP
//Parameters:
//string

//Results:
//string

//Examples:
//"0123456789" --> "0000011111"
//"0249642" --> "0001100"
//"1526374809" --> "0101010101"

//Solution with Psuedo:

function fakeBin(numStr){
    //we want use (/[1234]/g) to target all instances of the characters 1, 2, 3, 4 and replace them with '0'.
    //we want to use (/[56789]/g) to target all instances of the characters 5, 6, 7, 8, 9 and replace them with '1'.
    //we will exclude 0 because there is no need to program 0 to turn to 0.
    return numStr.replace(/[1234]/g, '0').replace(/[56789]/g, '1');
  }

fakeBin("1021620896597")