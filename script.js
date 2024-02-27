"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let exchangeRatesCache = null;
function getExchangeRates() {
    return __awaiter(this, void 0, void 0, function* () {
        if (exchangeRatesCache) {
            return exchangeRatesCache;
        }
        const apiKey = "fe774662efe27ae56cab269e";
        const req_url = "https://v6.exchangerate-api.com/v6/fe774662efe27ae56cab269e/latest/USD";
        const response = yield fetch(req_url, {
            headers: {
                Authorization: apiKey,
            },
        });
        const exchangeRateData = yield response.json();
        if (exchangeRateData.result === "success") {
            exchangeRatesCache = exchangeRateData.conversion_rates;
            return exchangeRatesCache;
        }
        else {
            throw new Error("Error fetching exchange rates. Please try again later.");
        }
    });
}
function convertCurrency() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const exchangeRates = yield getExchangeRates();
            const amountInput = document.getElementById("amount");
            const fromCurrencySelect = document.getElementById("fromCurrency");
            const toCurrencySelect = document.getElementById("toCurrency");
            const displayResult = document.getElementById("result");
            const amount = parseFloat(amountInput.value);
            const fromCurrency = fromCurrencySelect.value;
            const toCurrency = toCurrencySelect.value;
            // Check if the exchange rates are available
            if (!exchangeRates) {
                throw new Error("Exchange rates not available.");
            }
            // Update the fromCurrency dropdown options
            let fromCurrencyOptions = "";
            for (const currency of Object.keys(exchangeRates)) {
                fromCurrencyOptions += `<option value="${currency}">${currency}</option>`;
            }
            fromCurrencySelect.innerHTML = fromCurrencyOptions;
            // Update the toCurrency dropdown options
            let toCurrencyOptions = "";
            for (const currency of Object.keys(exchangeRates)) {
                toCurrencyOptions += `<option value="${currency}">${currency}</option>`;
            }
            toCurrencySelect.innerHTML = toCurrencyOptions;
            const rateFrom = exchangeRates[fromCurrency];
            const rateTo = exchangeRates[toCurrency];
            // Perform the conversion
            const convertedAmount = (amount / rateFrom) * rateTo;
            // Display the result
            displayResult.innerText = `${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}`;
        }
        catch (error) {
            // Handle error
            console.error(error.message);
        }
    });
}
// Call convertCurrency function when needed
convertCurrency();
// Call the convertCurrency function when needed, for example, when a button is clicked
// const convertButton = document.getElementById("convertButton");
// convertButton.addEventListener("click", convertCurrency);
//enum
var Status;
(function (Status) {
    Status["approved"] = "approved";
    Status["rejected"] = "rejected";
})(Status || (Status = {}));
let employee = {
    name: "700",
    age: 5,
    maritalStatus: "",
};
let something = Status.approved;
let number = 900;
let seniorEm = {
    name: "Hello",
    age: 70,
    rank: "boss",
};
