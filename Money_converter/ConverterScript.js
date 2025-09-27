class Currency {
    firstMoney = 0;
    firstGivenCurrencyType = "euro";
    secondGivenCurrencyType = "euro";

    constructor(firstMoney, firstGivenCurrencyType, secondGivenCurrencyType) {
        this.firstMoney = Number(firstMoney);
        this.firstGivenCurrencyType = firstGivenCurrencyType;
        this.secondGivenCurrencyType = secondGivenCurrencyType;
    }
    isValid() {
        return typeof this.firstMoney === "number" && !isNaN(this.firstMoney);
    }
    convertFirstToEuro() {
        let firstMoneyEuro;
        if(this.firstGivenCurrencyType == "usd") {
            firstMoneyEuro = this.firstMoney * 0.85;
            return firstMoneyEuro;
        }
        else if(this.firstGivenCurrencyType == "gbp") {
            firstMoneyEuro = this.firstMoney * 1.15;
            return firstMoneyEuro;
        }
        else if(this.firstGivenCurrencyType == "ruble") {
            firstMoneyEuro = this.firstMoney * 0.01;
            return firstMoneyEuro;
        }
        else if(this.firstGivenCurrencyType == "yen") {
            firstMoneyEuro = this.firstMoney * 0.005;
            return firstMoneyEuro;
        }
        else{
            return this.firstMoney;
        }
    }
    convertedFinalNumber(firstNumber) {
        let finalNumberConverted;
        if(this.secondGivenCurrencyType == "usd") {
            finalNumberConverted = firstNumber * 1.15;
            return finalNumberConverted.toFixed(2);
        }
        else if(this.secondGivenCurrencyType == "gbp") {
            finalNumberConverted = firstNumber * 0.85;
            return finalNumberConverted.toFixed(2);
        }
        else if(this.secondGivenCurrencyType == "ruble") {
            finalNumberConverted = firstNumber * 100;
            return finalNumberConverted.toFixed(2);
        }
        else if(this.secondGivenCurrencyType == "yen") {
            finalNumberConverted = firstNumber * 175;
            return finalNumberConverted.toFixed(2);
        }
        else {
            return firstNumber;
        }
    }
}

document.getElementById("convertButton").onclick = function() {
    const firstCurrencyNumber = document.getElementById("firstCurrency").value;
    const firstCurrencyType = document.getElementById("firstChoosenCurrency").value;
    const secondCurrencyType = document.getElementById("secondChoosenCurrency").value;
    const converter = new Currency(firstCurrencyNumber, firstCurrencyType, secondCurrencyType);
    const numberControll = converter.isValid();
    const trueFinalNumber = converter.convertedFinalNumber(converter.convertFirstToEuro());
    let finalNumber;

    if(numberControll == false) {
        finalNumber = "Error: You have to put in a number";
    }
    else {
        finalNumber = trueFinalNumber;
    }


    document.getElementById("result").textContent = finalNumber;
}