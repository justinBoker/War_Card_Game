/* class Card {
    constructor(number, suite, value) {
        this.number = number;
        this.suite = suite;
        this.value = value;
    }
}

class Deck {
    constructor() {
        this.cards = []; 
    }

    shuffle() {
        // Deck randomizes all 52 cards.
    }

    deal() {
        // Cards leave the this.cards array from the top and are dealt to each player in alternating order.
    }
}

const twoSpade = new Card('2', 'spade', 2);
const twoHeart = new Card('2', 'heart', 2);
const twoDiamond = new Card('2', 'diamond', 2);
const twoClub = new Card('2', 'club', 2);
const threeSpade = new Card('3', 'spade', 3);
const threeHeart = new Card('3', 'heart', 3);
const threeDiamond = new Card('3', 'diamond', 3);
const threeClub = new Card('3', 'club', 3);
const fourSpade = new Card('4', 'spade', 4);
const fourHeart = new Card('4', 'heart', 4);
const fourDiamond = new Card('4', 'diamond', 4);
const fourClub = new Card('4', 'club', 4);
const fiveSpade = new Card('5', 'spade', 5);
const fiveHeart = new Card('5', 'heart', 5);
const fiveDiamond = new Card('5', 'diamond', 5);
const fiveClub = new Card('5', 'club', 5);
const sixSpade = new Card('6', 'spade', 6);
const sixHeart = new Card('6', 'heart', 6);
const sixDiamond = new Card('6', 'diamond', 6);
const sixClub = new Card('6', 'club', 6);
const sevenSpade = new Card('7', 'spade', 7);
const sevenHeart = new Card('7', 'heart', 7);
const sevenDiamond = new Card('7', 'diamond', 7);
const sevenClub = new Card('7', 'club', 7);
const eightSpade = new Card('8', 'spade', 8);
const eightHeart = new Card('8', 'heart', 8);
const eightDiamond = new Card('8', 'diamond', 8);
const eightClub = new Card('8', 'club', 8);
const nineSpade = new Card('9', 'spade', 9);
const nineHeart = new Card('9', 'heart', 9);
const nineDiamond = new Card('9', 'diamond', 9);
const nineClub = new Card('9', 'club', 9);
const tenSpade = new Card('10', 'spade', 10);
const tenHeart = new Card('10', 'heart', 10);
const tenDiamond = new Card('10', 'diamond', 10);
const tenClub = new Card('10', 'club', 10);
const jackSpade = new Card('jack', 'spade', 11);
const jackHeart = new Card('jack', 'heart', 11);
const jackDiamond = new Card('jack', 'diamond', 11);
const jackClub = new Card('jack', 'club', 11);
const queenSpade = new Card('queen', 'spade', 12);
const queenHeart = new Card('queen', 'heart', 12);
const queenDiamond = new Card('queen', 'diamond', 12);
const queenClub = new Card('queen', 'club', 12);
const kingSpade = new Card('king', 'spade', 13);
const kingHeart = new Card('king', 'heart', 13);
const kingDiamond = new Card('king', 'diamond', 13);
const kingClub = new Card('king', 'club', 13);
const aceSpade = new Card('ace', 'spade', 14);
const aceHeart = new Card('ace', 'heart', 14);
const aceDiamond = new Card('ace', 'diamond', 14);
const aceClub = new Card('ace', 'club', 14);

let gameDeck = new Deck();
gameDeck.cards.push(twoClub, twoDiamond, twoSpade, twoHeart);

console.log(gameDeck.cards); */

class Deck {
    constructor() {
        this.deck = [];
        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];

        for(let suit in suits) {
            for(let value in values) {
                this.deck.push(`${values[value]} of ${suits[suit]}`);
            }
        }
    }
}

let gameDeck = new Deck();
console.log(gameDeck);