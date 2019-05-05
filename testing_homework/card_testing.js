// Testing task 2 code:

// Carry out dynamic testing on the code below.
// Correct the errors below that you spotted in task 1.
var Card = require('./card');

class CardGame{

  checkForAce(card){
    // checkForAce (looks better and keeps naming convention)
    if(card.value === 1){
      // card.? === 1 (card doesn't have a .value and = is assignment)
      return true;
    }else{
      return false;
    }
  }

  highestCard(card1, card2){
    // (card1, card2) missing coma
    if(card1.value > card2.value){
      return `${card1.suit} ${card1.value} wins`;
      // return card.name makes no sense as there's no .name property
      // in the code so it should be return card1.value
    }
    else{
      return `${card2.suit} ${card2.value} wins`;
      // return card2.value
    }
   }

  // above is an extra bracket which is putting cardsTotal out of whole class scope

  cardsTotal(cards){
    // what is static? it shouldn't be here

    // return here will end function immediately
    let total = 0;
    for(let card of cards){
      total += card.value;

    }
    // return "You have a total of " + total; (return in this place)
    return "You have a total of " + total;
  }
}

// no module.exports = name; here
module.exports = CardGame;
