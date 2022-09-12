const suits = ["Spades", "Clubs", "Hearts", "Diamonds"];
const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

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

class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }
}

function newDeck() {
    return suits.flatMap(suit => {
        return ranks.map(rank => {
            return new Card (suit, rank)
        });
    });
}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }
}

const playerOne = new Player("Avacyn");
const playerTwo = new Player("Lincoln");

function startGame() {
    const gameDeck = new Deck();
    gameDeck.shuffle();

    const halfDeck = Math.ceil(gameDeck.cards.length / 2);
    playerOne.hand = gameDeck.cards.slice(0, halfDeck);
    playerTwo.hand = gameDeck.cards.slice(halfDeck, gameDeck.cards.length);
    console.log(playerOne.hand);
}

function gameRounds(playerOne, playerTwo) {
    let p1Score = 0;
    let p2Score = 0;
    for(let i = 0; i < 26; i++) {
        // if(isNaN(playerOne[i].rank)) {
        //     switch(playerOne[i].rank) {
        //         case "A":
        //             return 14;
        //         case "K":
        //             return 13;
        //         case "Q":
        //             return 12;
        //         case "J":
        //             return 11;
        //     }
        // }
        if(playerOne[i].rank > playerTwo[i].rank) {
            p1Score++;
            console.log(`Round ${i + 1}
            Avacyn's card: ${playerOne[i].rank} - Lincoln's card: ${playerTwo[i].rank}
            Avacyn wins the round.
            Avacyn's score: ${p1Score} - Lincoln's score: ${p2Score}`)
        } else if(playerOne[i].rank < playerTwo[i].rank) {
            p2Score++;
            console.log(`Round ${i + 1}
            Avacyn's card: ${playerOne[i].rank} - Lincoln's card: ${playerTwo[i].rank}
            Lincoln wins the round.
            Avacyn's score: ${p1Score} - Lincoln's score: ${p2Score}`)
        } else {
            console.log(`Round ${i + 1}
            Avacyn's card: ${playerOne[i].rank} - Lincoln's card: ${playerTwo[i].rank}
            This round is a draw.
            Avacyn's score: ${p1Score} - Lincoln's score: ${p2Score}`)
        }
    }
}

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


startGame();
gameRounds(playerOne.hand, playerTwo.hand);