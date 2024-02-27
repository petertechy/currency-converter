"use strict";
function convertCurrency() {
    const amountInput = document.getElementById("amount");
    const fromCurrencySelect = document.getElementById("fromCurrency");
    const toCurrencySelect = document.getElementById("toCurrency");
    // const displayResult = document.getElementById("result") as HTMLParagraphElement;
    const displayResult = document.getElementById("result");
    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
    console.log("I am here");
}
//enum
var Status;
(function (Status) {
    Status["approved"] = "approved";
    Status["rejected"] = "rejected";
})(Status || (Status = {}));
let employee = {
    name: "700",
    age: 5,
    maritalStatus: ""
};
let something = Status.approved;
let number = 900;
let seniorEm = {
    name: "Hello",
    age: 70,
    rank: "boss"
};
