import Card from './Card.js';

let playerHand = 0;
let dealerTotal = 0;

let dealerCardTwoHidden = true;

const dealerCardOne = new Card();
const dealerCardTwo = new Card();

const dealerMarkOne = dealerCardOne.changeNumberToMark();
const dealerMarkTwo = dealerCardTwo.changeNumberToMark();


function calculatedHand(cardOneValue, cardTwoValue) {
    return cardOneValue + cardTwoValue;
}

function checkForMark(mark) {
    if(mark === 'J' || 'Q' || 'K') {
        return 10;
    }
    else if(mark === 'A') {
        if(dealerTotal > 10) {
            return 1;
        }
        else {
            return 11;
        }
    }
    else {
        return Number(mark);
    }
}

let gameOver = false;

while(gameOver === false) {
    
}