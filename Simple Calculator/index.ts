#! /usr/bin/env node

import inquirer from "inquirer";

let answer = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "FirstNumber" },
  { message: "Enter Second Number", type: "number", name: "SecondNumber" },
  {
    message: "Choose the Operator",
    type: "list",
    name: "Operator",
    choices: [
      "Addition",
      "Subtraction",
      "Multiplication",
      "Division",
      "Exponential",
      "Modulus",
      "bmi",
    ],
  },
]);

if (answer.Operator === "Addition"){
    console.log(`The Addition of ${answer.FirstNumber} and ${answer.SecondNumber} is =`, answer.FirstNumber + answer.SecondNumber);
}else if (answer.Operator === "Subtraction"){
    console.log(`The Subtraction of ${answer.FirstNumber} and ${answer.SecondNumber} is =`, answer.FirstNumber - answer.SecondNumber);
}else if (answer.Operator === "Multiplication"){
    console.log(`The Multiplication of ${answer.FirstNumber} and ${answer.SecondNumber} is =`, answer.FirstNumber * answer.SecondNumber);
}else if (answer.Operator === "Division"){
    console.log(`The Division of ${answer.FirstNumber} and ${answer.SecondNumber} is =`, answer.FirstNumber / answer.SecondNumber);
}else if (answer.Operator === "Exponential"){
    console.log(`The Exponential of ${answer.FirstNumber} and ${answer.SecondNumber} is =`, answer.FirstNumber ** answer.SecondNumber);
}else if (answer.Operator === "Modulus"){
    console.log(`The Modulus of ${answer.FirstNumber} and ${answer.SecondNumber} is =`, answer.FirstNumber % answer.SecondNumber);
}else if (answer.Operator === "bmi"){
    console.log(`The bmi of ${answer.FirstNumber} and ${answer.SecondNumber} is =`, answer.FirstNumber / (answer.SecondNumber * answer.SecondNumber));
}else {
    console.log("Choose the Correct Operator");
    
}