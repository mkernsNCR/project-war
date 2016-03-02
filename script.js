// mms: can these move to just where the deck is built?
var values = [2, 3, 4, 5, 6 ,7 ,8 , 9, 10, "J", "Q", "K", "A"];
var suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
// var cardWorth = values.indexOf(cardValue);

// mms: nice breakdown into parmeters and methods of `game`
var game = {
  // mms: looks like you started to support more players.
  //    I didn't see this in your user stories.  :)
  //   I recommend you start something like this in a new branch.
  //players:[],
  deck:[],
  // mms: I see multiple pieces of information about a player, should they be grouped into a player1 object?
  playerOneHand:[],
  playerTwoHand: [],
  playerOneCount: 0,
  playerTwoCount: 0,
  ties: 0,
  // worth: values.indexOf();

  /*getMorePlayers: function(){
    while(true){
      /*var userInput = prompt(game.players.length + " player(s) so far. Enter a player name, or click 'cancel' to play.");
      if(userInput === null){
        break;
      }else{
        game.players.push({
          name: userInput,
          hand: []
        });
      }
    }
  },*/

  buildDeck: function () {
    alert('Building Deck...');
    values.forEach(function (cardValue) {
      var cardWorth = values.indexOf(cardValue);
      suits.forEach(function (cardSuit) {
        // mms: good job grouping card data and behavior together
        var newCard = {
          value: cardValue,
          suit: cardSuit,
          worth: cardWorth,
          face: function(){
            return this.value + " " + this.suit;
          }
        };
        game.deck.push(newCard);
      });
      // mms: recommend putting a label in each console.log, so you can find this entry in the log
      //   `console.log("deck", game.deck)`
      console.log(game.deck);
    });
    game.shuffleDeck();
  },

  shuffleDeck: function () {
    // alert('Shuffling...');
    game.deck.sort(function() {
      var randomCard = Math.random();
      if(randomCard > 0.5){
        return 1;
      }else {
        return -1;
      }
    });
    //mms: console.log("shuffled deck", game.deck)
    console.log(game.deck);
    game.distribute();
  },

  distribute: function(){

    for(var i = 0; game.deck.length; i++){
      var first = game.deck.pop();
      game.playerOneHand.push(first);

      var second = game.deck.pop();
      game.playerTwoHand.push(second);

      console.log(game.deck);
      console.log(game.deck.length);
    }

    console.log(game.playerOneHand);
    console.log(game.playerTwoHand);
    console.log(game.deck);

    game.playGame();

  },

  // mms: lots of commented code

  // deal: function(){
  //   alert("Dealing...");
  //   game.players.forEach(function(player){
  //     // player = {
  //     //   name: ,
  //     //   hand: ["7","A","K"]
  //   }),
  //
  //     var card = game.deck.pop();
  //     card.player = player.name;
  //     alert(card.player + " has been dealt the " + card.value + " of " + card.suit + "!");
  //     player.hand.push(card);
  //   });
  //   console.dir(game)
  // },
  //
  // findHighestCard: function(){
  //   game.playerOneHand.sort(function(cardOne, cardTwo){
  //     if(cardOne.worth > cardTwo.worth){
  //       return 1;
  //     }else{
  //       return -1;
  //     }
  //     console.log(cardOne);
  //   });
  // },

  playGame: function () {
    // mms: nice and simply init script
    alert("Welcome to WAR!");

    var nextCardButton = document.getElementById("nextCard");
    nextCardButton.addEventListener("click", function(){
      game.playStage();
    });

    // for(var i = 0; i < 26; i ++){
    this.playStage();

  },
  playStage: function() {
    var playerFirst = game.playerOneHand.shift();
    var playerSecond = game.playerTwoHand.shift();

    console.log("1st:", playerFirst);
    console.log("2nd:", playerSecond);

    var message = "";
    if(playerFirst.worth > playerSecond.worth) {
      game.playerOneCount+=2;
      message = "Player One wins!";
      // alert('Player One wins! p1 score = ' + game.playerOneCount + ', p2 score = ' + game.playerTwoCount + '');
    }
    if(playerFirst.worth < playerSecond.worth) {
      game.playerTwoCount+=2;
      message = "Player Two wins!";
      // alert('Player Two wins! p1 score = ' + game.playerOneCount + ', p2 score = ' + game.playerTwoCount + '');
    }
    if(playerFirst.worth == playerSecond.worth) {
      message = "Tie";
      // alert("Tie!")
      game.ties++;
    }

    var messageElement = document.getElementById("message");
    // mms: feeling some duplication here.  Do we need to get this each time we playStage?
    var playerOneCardElement = document.getElementById("playerOneCard");
    var playerTwoCardElement = document.getElementById("playerTwoCard");
    var playerOneScoreElement = document.getElementById("playerOneScore");
    var playerTwoScoreElement = document.getElementById("playerTwoScore");

    messageElement.innerText = message;
    playerOneCardElement.innerText = playerFirst.face();
    playerTwoCardElement.innerText = playerSecond.face();
    playerOneScoreElement.innerText = game.playerOneCount;
    playerTwoScoreElement.innerText = game.playerTwoCount;

  }
};

window.onload = function() {
  game.buildDeck();
  console.dir(game);
};
