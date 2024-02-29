let exchangeRatesCache: Record<string, number> | null = null;

async function getExchangeRates(): Promise<Record<string, number>> {
  if (exchangeRatesCache) {
    return exchangeRatesCache;
  }

  const apiKey = "fe774662efe27ae56cab269e";
  const req_url =
    "https://v6.exchangerate-api.com/v6/fe774662efe27ae56cab269e/latest/USD";

  const response = await fetch(req_url, {
    headers: {
      Authorization: apiKey,
    },
  });
  const exchangeRateData = await response.json();

  if (exchangeRateData.result === "success") {
    exchangeRatesCache = exchangeRateData.conversion_rates;
    return exchangeRatesCache!;
  } else {
    throw new Error("Error fetching exchange rates. Please try again later.");
  }
}

async function displayCurrencyOptions() {
  try {
    const exchangeRates = await getExchangeRates();

    const fromCurrencySelect = document.getElementById(
      "fromCurrency"
    ) as HTMLSelectElement;
    const toCurrencySelect = document.getElementById(
      "toCurrency"
    ) as HTMLSelectElement;

    // Check if the exchange rates are available
    if (!exchangeRates) {
      throw new Error("Exchange rates not available.");
    }

    // Update the fromCurrency dropdown options
    let fromCurrencyOptions = "";
    const currencies = Object.keys(exchangeRates);

    for (let i = 0; i < currencies.length; i++) {
      const currency = currencies[i];
      fromCurrencyOptions += `<option value="${currency}">${currency}</option>`;
    }

    fromCurrencySelect.innerHTML = fromCurrencyOptions;

    // Update the toCurrency dropdown options
    let toCurrencyOptions = "";
    for (const currency of Object.keys(exchangeRates)) {
      toCurrencyOptions += `<option value="${currency}">${currency}</option>`;
    }
    toCurrencySelect.innerHTML = toCurrencyOptions;
  } catch (error) {
    console.error((error as Error).message);
  }
}

async function convertCurrency() {
  try {
    const exchangeRates = await getExchangeRates();

    const amountInput = document.getElementById("amount") as HTMLInputElement;
    const fromCurrencySelect = document.getElementById(
      "fromCurrency"
    ) as HTMLSelectElement;
    const toCurrencySelect = document.getElementById(
      "toCurrency"
    ) as HTMLSelectElement;
    const displayResult = document.getElementById(
      "result"
    ) as HTMLParagraphElement;

    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    // Check if the exchange rates are available
    if (!exchangeRates) {
      throw new Error("Exchange rates not available.");
    }

    const rateFrom = exchangeRates[fromCurrency];
    const rateTo = exchangeRates[toCurrency];

    // Perform the conversion
    const convertedAmount = (amount / rateFrom) * rateTo;

    // Display the result
    displayResult.innerText = `${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}`;
  } catch (error) {
    console.error((error as Error).message);
  }
}

// Call displayCurrencyOptions to initialize dropdown options
displayCurrencyOptions();


  
  // Call the convertCurrency function when needed, for example, when a button is clicked
  // const convertButton = document.getElementById("convertButton");
  // convertButton.addEventListener("click", convertCurrency);
  
//enum

enum Status {
  approved = "approved",
  rejected = "rejected",
}

interface Employee {
  name: string;
  age: number;
  height?: number;
  maritalStatus?: string;
}
let employee: Employee = {
  name: "700",
  age: 5,

  maritalStatus: "",
};

let something: string = Status.approved;

let number: number = 900;

let seniorEm: Employee & { rank: string } = {
  name: "Hello",
  age: 70,
  rank: "boss",
};
