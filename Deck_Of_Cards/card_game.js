"use strict";
const suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
const stringValues = ["Joker", "Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen"];

class Card {
    constructor(suit, numericalValue) {
        var _suit = suit;
        var _numericalValue = numericalValue;
        this.getSuit = function() { return _suit; }
        this.getNumericalValue = function() { return _numericalValue; }
    }
    toString() {
        return stringValues[this.getNumericalValue()] + " of " + this.getSuit();
    }
    getStringValue() {
        return stringValues[this.getNumericalValue];
    }
}

class Deck {
    constructor() {
        this.reset()
    }

    reset() {
        this.deck = [];
        for (let suit of suits) {
            for (var numericalValue = 1; numericalValue <= 13; numericalValue++) {
                let newCard = new Card(suit, numericalValue);
                this.deck.push(newCard);
            }
        }
        return this;
    }
    deal() {
        return this.deck.pop()
    }
    shuffle() {
        let unshuffledIndex = this.deck.length,
            temp,
            randomIndex;
        while (unshuffledIndex) {
            randomIndex = Math.floor(Math.random() * unshuffledIndex--);
            temp = this.deck[unshuffledIndex];
            this.deck[unshuffledIndex] = this.deck[randomIndex];
            this.deck[randomIndex] = temp;
        }
        return this;
    }
    peek(draws) {
        if (draws === undefined || draws > this.deck.length) {
            draws = this.deck.length;
        }
        for (var i = 0; i < draws; i++ ) {
            console.log(this.deck[i].toString());
        }
        return this;
    }
    addCard(card) {
        if (card instanceof Card) {
            this.deck.push(card);
        }
        return this;
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.reset();
    }
    takeCard(deck) {
        if (deck instanceof Deck) {
            this.hand.push(deck.deal());
        }
        return this;
    }
    discard(suit, value) {
        var cardIndex;
        for (let j = 0; j < this.hand; j++) {
            if (this.hand[j].getSuit() === suit && (this.hand[j].getNumericalValue() == value || this.hand[j].getStringValue() == value)) {

            }
        }
        this.hand.splice(this.hand.indexOf(card), 1);
        return this;
    }
    showHand() {
        for (let i = 0; i < this.hand.length; i++) {
            console.log(this.hand[i].toString());
        }
        return this;
    }
    reset() {
        this.hand = [];
    }
}

// let bicycle = new Deck();
// let player1 = new Player("Tyrion");
// bicycle.shuffle();
//
// for (var i = 0; i < 25; i++) {
//     player1.takeCard(bicycle);
// }
//
// player1.showHand();
// console.log("***************")
// bicycle.peek();
