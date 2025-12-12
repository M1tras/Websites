export default class Card {
 
    constructor() {
        this.number;
        this.suit;
    }
    giveCardSuit() {
        const availableSuits = ['club', 'diamond', 'spade', 'heart'];
        const cardSuit = availableSuits[Math.floor(Math.random() * availableSuits.length)];
        this.suit = cardSuit;
        return this.suit;
    }
    giveCardNumber() {
        const availableNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        const cardNumber = availableNumbers[Math.floor(Math.random() * availableNumbers.length)];
        this.number = cardNumber
        return this.number;
    }
    changeNumberToMark() {
        const marks = {11: 'J', 12: 'Q', 13: 'K', 14: 'A'}
        const num = this.giveCardNumber();
        return marks[num] || num;
    }
}
