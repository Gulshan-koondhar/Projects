#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([{
        name: "sentence",
        type: "input",
        message: "Enter a sentence to count the words:"
    }]);
const words = answers.sentence.trim().split(' ');
console.log(words);
console.log(`the sentence word count is ${words.length}`);
