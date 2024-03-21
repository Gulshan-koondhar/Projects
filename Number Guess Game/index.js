import inquirer from "inquirer";
let computerNumber = Math.floor(Math.random() * 10);
let answer = await inquirer.prompt([{
        message: "Guess a number", type: "number", name: "guessnumber"
    }]);
if (answer.guessnumber === computerNumber) {
    console.log("Congrats, You guess the Right Number");
}
else {
    console.log("Please, Try again.");
}
