// const suits and const ranks represent the two elements of each playing card.
const suits = ["Spades", "Clubs", "Hearts", "Diamonds"];
const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

// The class Deck uses the newDeck function construct a Deck object. This class also comes with a shuffle method to randomize the 52 Card objects within.
class Deck {
    constructor(cards = newDeck()) {
        this.cards = cards;
    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const k = this.cards[j];
            this.cards[j] = this.cards[i];
            this.cards[i] = k;
        }
    }
}

// The class Card establishes the templete of a Card object.
class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }
}

// The newDeck function takes the suits and ranks variables and returns 52 new instances of the Card class.
function newDeck() {
    return suits.flatMap(suit => {
        return ranks.map(rank => {
            return new Card (suit, rank)
        });
    });
}

// The class Player establishes the player's name and provides each instance of player with an empty hand to fill.
class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }
}

// Below is two instances of Player. playerOne is named after my daughter. playerTwo was a baby name my wife and I chose if we had a son.
const playerOne = new Player("Avacyn");
const playerTwo = new Player("Lincoln");

// The startGame function creates an instance of a Deck called gameDeck and then shuffles the deck using the method provided in the class code.
// Then a new variable called halfDeck is created and it is equeal to the halfway point of the gameDeck.
// Next, playerOne's and playerTwo's empty hand's are populated using the slice method on the gameDeck array.
// Finally, the function, gameRounds, that represents the next aspect of the game is called.
function startGame() {
    const gameDeck = new Deck();
    gameDeck.shuffle();

    const halfDeck = Math.ceil(gameDeck.cards.length / 2);
    playerOne.hand = gameDeck.cards.slice(0, halfDeck);
    playerTwo.hand = gameDeck.cards.slice(halfDeck, gameDeck.cards.length);

    gameRounds(playerOne.hand, playerTwo.hand);
}

// The function gameRounds takes in the hands of playerOne and playerTwo as arguments.
// The score for both players are established as variables p1Score and p2Score.
// A for loop is set up to iterate through both player's hands.
// The first two if statements check to see if either playerOne's or playerTwo's card is a face card.
    // If it is, then the original value of "A, K, Q, or J" is replaced by its respective value in the faceCardValue function.
// The if/else if/ else statement checks to see whether a player won each round or if there was a draw. 
    // If a player won a round, then their score is increased and the text is logged to the console. 
    // If it is a draw, neither player receives points. The text in the else statement is logged to the console.
// Lastly, when the for loop finishes, the declareWinner function is called and the scores for both players is passed as arguments.
function gameRounds(playerOne, playerTwo) {
    let p1Score = 0;
    let p2Score = 0;
    for(let i = 0; i < 26; i++) {
        if(isNaN(playerOne[i].rank)) {
            let newFaceValue = faceCardValue(playerOne[i].rank);
            playerOne[i].rank = newFaceValue;
        } 
        
        if(isNaN(playerTwo[i].rank)) {
            let newFaceValue = faceCardValue(playerTwo[i].rank);
            playerTwo[i].rank = newFaceValue;
        }

        if(playerOne[i].rank > playerTwo[i].rank) {
            p1Score++;
            console.log(`Round ${i + 1}
            Avacyn's card: ${playerOne[i].rank} - Lincoln's card: ${playerTwo[i].rank}
            Avacyn wins the round.
            Avacyn's score: ${p1Score} - Lincoln's score: ${p2Score}`);
        } else if(playerOne[i].rank < playerTwo[i].rank) {
            p2Score++;
            console.log(`Round ${i + 1}
            Avacyn's card: ${playerOne[i].rank} - Lincoln's card: ${playerTwo[i].rank}
            Lincoln wins the round.
            Avacyn's score: ${p1Score} - Lincoln's score: ${p2Score}`);
        } else {
            console.log(`Round ${i + 1}
            Avacyn's card: ${playerOne[i].rank} - Lincoln's card: ${playerTwo[i].rank}
            This round is a draw.
            Avacyn's score: ${p1Score} - Lincoln's score: ${p2Score}`);
        }
    }

    declareWinner(p1Score, p2Score)
}

// This function takes in an argument from the previous function and replaces a face card's string value with a number value.
function faceCardValue(cardRank) {
    switch(cardRank) {
        case "A":
            return 14;
        case "K":
            return 13;
        case "Q":
            return 12;
        case "J":
            return 11;
    }
}

// This function takes in the final score at the end of the gameRounds function and runs it through an if/ else if/ else statement. 
    // Either it will declare one player or the other the winner and by how much. Or it will state there was a draw.
function declareWinner(p1Score, p2Score) {
    if(p1Score > p2Score) {
        console.log(`Avacyn wins by a margin of ${p1Score - p2Score} point(s)!`);
    } else if(p1Score < p2Score) {
        console.log(`Lincoln wins by a margin of ${p2Score - p1Score} point(s)!`);
    } else {
        console.log(`This game was a draw.`);
    }
}

// This calls the function that starts the game.
startGame();