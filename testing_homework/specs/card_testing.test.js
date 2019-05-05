const Card = require('../card.js');
const CardGame = require('../card_testing.js');

describe('testing', () => {

  let cards;
  let game;

  let ace;
  let _3spades;
  let _6hearts;
  let _9clubs;

  beforeEach(() => {

    cards = [ace, _3spades, _6hearts, _9clubs];
    game = new CardGame;

    ace = new Card('ace', 1);
    _3spades = new Card('spades', 3);
    _6hearts = new Card('hearts', 6);
    _9clubs = new Card('clubs', 9);

  })

  test('can check for ace', () => {
    expect(game.checkForAce(ace)).toBe(true);
  })

  test ('can check for the heighest card', () => {
    expect(game.highestCard(_9clubs, _6hearts)).toBe('clubs 9 wins');
  })

  test ('can get total value of cards', () => {
    expect(game.cardsTotal(cards)).toBe('You have a total of 19');
  })


})
