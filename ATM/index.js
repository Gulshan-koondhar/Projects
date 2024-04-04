#! /usr/bin/env node
import inquirer from "inquirer";
const userPin = 1234;
let randAmount = Math.floor(Math.random() * 100000);
console.log("Balance " + randAmount);
const answer = await inquirer.prompt([
    { message: "Enter your Pin", type: "number", name: "userPass" }
]);
if (answer.userPass === userPin) {
    const type = await inquirer.prompt([
        { message: "Choose Account type:", type: "list", name: "choices", choices: ["saving", "current", "other"] }
    ]);
    if (type.choices === "current") {
        const purpose = await inquirer.prompt([
            { message: "Select One of the Options:", type: "list", name: "purpose", choices: ["Withdrawal Money", "Check Balance Amount"] }
        ]);
        if (purpose.purpose === "Withdrawal Money") {
            const amount = await inquirer.prompt([
                { message: "Enter the Amount", type: "number", name: "Amount" }
            ]);
            if (amount.Amount <= randAmount) {
                console.log("Your transaction has been done Successfully.");
                console.log("Your new Balance is: ", randAmount - amount.Amount);
            }
            else {
                console.log("Your Account have not enough money.");
            }
        }
        else if (purpose.purpose === "Check Balance Amount") {
            console.log(randAmount);
        }
        else {
            console.log("Select one of the choices.");
        }
    }
    else {
        console.log("No account Found!");
    }
}
else {
    console.log("Incorrect UserName and Pin");
}
