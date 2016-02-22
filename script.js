var values = [2, 3, 4, 5, 6 ,7 ,8 , 9, 10, "J", "Q", "K", "A"];
var suits = ["Clubs", "Diamonds", "Hearts", "Spades"];

var game = {
  // players:[],
  deck:[],
  // playerWins:[],
  // winCounter: function () {
  //
  // },
  buildDeck: function () {
    values.forEach(function (cardValue) {
      var cardWorth = values.indexOf(cardValue);
      suits.forEach(function (cardSuit) {
        var newCard = {
          value: cardValue,
          suit: cardSuit,
          worth: cardWorth
        }
        game.deck.push(newCard);
      });
    });
  }//add comma back here when uncommenting below this
  // shuffleDeck: function () {
  //
  // }
}
game.buildDeck();
