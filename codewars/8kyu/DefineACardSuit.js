// Challenge:
// Define a card suit

// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'


// PREP
// Parameters:
// string

// Results:
// string

// Examples:
// see above

// Solution with Psuedo: 

function defineSuit(card) {
    // we could use an if conditional statement, but let's use switch() to save some keystrokes
    let suit = card.substr(-1);
    switch (suit){
        case '♣' : return "clubs"
        case '♦' : return "diamonds"
        case '♥' : return "hearts"
        default : return "spades"
    }
  }

defineSuit('3♦')