#! /usr/bin/env/node
import inquirer from "inquirer";
let exchangeRate = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.37,
    "AUD": 1.65,
    "PKR": 278.50,
};
let userAns = await inquirer.prompt([
    {
        name: "fromCurrency",
        type: "list",
        message: "Select The Currency To Convert From: ",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"],
    },
    {
        name: "toCurrency",
        type: "list",
        message: "Select The Currency You Want To Convert In: ",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"],
    },
    {
        name: "amount",
        type: "input",
        message: "Enter The Amount To Convert",
    },
]);
// CONVERTING CURRENCY FORMULA 
let fromAmount = exchangeRate[userAns.fromCurrency];
let toAmount = exchangeRate[userAns.toCurrency];
let amountInput = userAns.amount;
let baseAmount = amountInput / fromAmount;
let convertedCurrency = baseAmount * toAmount;
console.log(`Converted Amount = ${convertedCurrency}`);
