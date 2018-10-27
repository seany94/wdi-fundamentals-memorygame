var cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "../images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamond",
        cardImage: "../images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "../images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "../images/king-of-diamonds.png"
    }
];
var cardsInPlay = [];
var score = document.getElementById("score").innerHTML = 0; //variable to store score
var checkForMatch = function (){
    if(cardsInPlay[0] === cardsInPlay[1]){
        alert("You found a match!");
        score +=1; //score increment for every correct pair
        document.getElementById("score").innerHTML = score; //added score onto html
    }
    else{
        alert("Sorry, try again.");
    }
}
var flipCard = function (){
    var cardId = this.getAttribute('data-id');
    console.log("User flipped " + cards[cardId].rank);
    cardsInPlay.push(cards[cardId].rank);
    console.log(cards[cardId].suit);
    console.log(cards[cardId].cardImage);
    this.setAttribute('src', cards[cardId].cardImage);
    if(cardsInPlay.length === 2){
        checkForMatch();
    }
}

var createBoard = function(){
    for(i = 0; i < cards.length; i++){
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', "../images/back.png");
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement);
    }
    /*document.getElementsByTagName('div').innerHTML = null; //not working as intended cant clear cards*/
}

createBoard();

var resetGame = function(){
    cardsInPlay = [];
    createBoard();
}

document.getElementById('reset').addEventListener('click', resetGame);


//var score = document.getElementById('score').innerHTML = "Score: <score>";

/*var resetGame = function(){
        for (i = 0; i < cards.length; i++) {
        document.getElementById('game-board')[0].remove();
      }
    window.location.reload(); //this was the best i can do by just refreshing page
}*/
