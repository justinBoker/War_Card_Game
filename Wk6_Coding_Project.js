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
        this.points = 0;
    }
}

const playerOne = new Player("Avacyn");
const playerTwo = new Player("Elias");


function startGame() {
    const gameDeck = new Deck();
    gameDeck.shuffle();

    const halfDeck = Math.ceil(gameDeck.cards.length / 2);
    playerOne.hand = gameDeck.cards.slice(0, halfDeck);
    playerTwo.hand = gameDeck.cards.slice(halfDeck, gameDeck.cards.length);
}

function gameRounds() {
    playerOne.hand.forEach((handOne, index) => {
        const handTwo = playerTwo.hand[index];   
    });


    switch(handOne.rank) { // This is me trying to get the non-numbered cards to be worth a number value.
        case "A":
            return 14;
        case "K":
            return 13;
        case "Q":
            return 12;
        case "J":
            return 11;
        default:
            return ranks;
    }

}


startGame();
gameRounds();