### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.

```js
// Testing task 2 code:

// Carry out dynamic testing on the code below.
// Correct the errors below that you spotted in task 1.

var Card = require('./card');

class CardGame{

  checkforAce(card){
    // checkForAce (looks better and keeps naming convention)
    if(card = 1){
      // card.? === 1 (card doesn't have a .value and = is assignment)
      return true;
    }else{
      return false;
    }
  }

  highestCard(card1 card2){
    // (card1, card2) missing coma
    if(card1.value > card2.value){
      return card.name
      // return card.name makes no sense as there's no .name property
      // in the code so it should be return card1.value
    }
    else{
      card2
      // return card2.value
    }
   }
  }
  // above is an extra bracket which is putting cardsTotal out of whole class scope

  static.cardsTotal(cards){
    // what is static? it shouldn't be here
    return total;
    // return here will end function immediately
    // not declared let total = 0; to set the counter
    for(let card of cards){
      total += card.value;
      return "You have a total of " + total;
    }
    // return "You have a total of " + total; (return in this place)
  }
}

// no module.exports = name; here



```
