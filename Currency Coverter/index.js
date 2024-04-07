#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    Euro: 0.92,
    British_Pound: 0.79,
    Indian_Rupee: 83.29,
    Australian_Dollar: 1.52,
    Canadian_Dollar: 1.35,
    Singapore_Dollar: 1.34,
    Swiss_Franc: 0.9,
    Malaysian_Ringgit: 4.74,
    Japanese_Yen: 151.63,
    Chinese_Yuan: 7.23,
    Pakintani_Rupee: 280.74,
};
const user_fromAmount = await inquirer.prompt({
    message: "Select the Currency you want to convert From",
    type: "list",
    name: "From",
    choices: [
        "USD",
        "Euro",
        "British_Pound",
        "Indian_Rupee",
        "Japanese_Yen",
        "Chinese_Yuan",
        "Pakintani_Rupee"
    ],
});
const user_toAmount = await inquirer.prompt({
    message: "Select the Currency You want to convert To",
    type: "list",
    name: "To",
    choices: [
        "USD",
        "Euro",
        "British_Pound",
        "Indian_Rupee",
        "Japanese_Yen",
        "Chinese_Yuan",
        "Pakintani_Rupee"
    ],
});
const amount = await inquirer.prompt({
    message: "Enter the Amount you want to Convert:", type: "number", name: "amount"
});
let fromAmount = currency[user_fromAmount.From];
let toAmount = currency[user_toAmount.To];
let Amount = amount.amount;
let referenceAmount = Amount / fromAmount;
let convertedAmount = referenceAmount * toAmount;
console.log(Math.round(convertedAmount));
