function convertCurrency(){
    const amountInput = document.getElementById("amount") as HTMLInputElement;
const fromCurrencySelect = document.getElementById(
  "fromCurrency"
) as HTMLSelectElement;
const toCurrencySelect = document.getElementById("toCurrency") as HTMLSelectElement;
// const displayResult = document.getElementById("result") as HTMLParagraphElement;
const displayResult = document.getElementById("result") as HTMLParagraphElement;

const amount = parseFloat(amountInput.value);
const fromCurrency = fromCurrencySelect.value;
const toCurrency = toCurrencySelect.value;

console.log("I am here")
}


//enum


enum Status{
    approved = "approved", 
    rejected = "rejected"
}

interface Employee{
    name: string,
    age: number,
    height?: number,
    maritalStatus?: string
}
let employee:Employee = {
    name: "700",
    age: 5,
  
    maritalStatus:""
}

let something: string= Status.approved

let number: number = 900

let seniorEm: Employee & {rank :string} ={
    name: "Hello",
    age: 70,
    rank: "boss"
}