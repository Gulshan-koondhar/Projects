#! /usr/bin/env node
import inquirer from "inquirer";
console.log("*********************************************************************************");
console.log(`\t\t Welcome to the TypeScript Quiz `);
console.log("*********************************************************************************");
let score = 0;
let condition = true;
while (condition) {
    const answer1 = await inquirer.prompt([{
            name: "question1",
            type: "list",
            message: "What is TypeScript primarily used for?",
            choices: ["A. Memory Management", "B. Dynamic Typing", "C. Static Typing", "D. Asynchronous operations"]
        }]);
    if (answer1.question1 === "C. Static Typing") {
        score++;
        console.log(`\tYou Choose the Correct Answer`);
    }
    else {
        console.log(`You Choose the Wrong Answer`);
        const ans1 = await inquirer.prompt({
            name: "correctanswer1",
            type: "list",
            message: "Do you want to see Correct Answer?",
            choices: ["Yes", "No"]
        });
        if (ans1.correctanswer1 === "Yes") {
            console.log("\n\tThe Correct answer is 'Static Typing'");
            console.log("\tExplanation:");
            console.log("\tTypeScript is primarily used to add static typing to JavaScript, enabling developers to catch type-related errors during compile time.\n");
        }
    }
    const answer2 = await inquirer.prompt([{
            name: "question2",
            type: "list",
            message: "Which of the following is NOT a valid TypeScript data type?",
            choices: ["A. Void", "B. Any", "C. Dynamic", "D. Tuple"]
        }]);
    if (answer2.question2 === "C. Dynamic") {
        score++;
        console.log(`\tYou Choose the Correct Answer`);
    }
    else {
        console.log(`You Choose the Wrong Answer`);
        const ans2 = await inquirer.prompt({
            name: "correctanswer2",
            type: "list",
            message: "Do you want to see Correct Answer?",
            choices: ["Yes", "No"]
        });
        if (ans2.correctanswer2 === "Yes") {
            console.log("\n\tThe Correct answer is 'Dynamic'");
            console.log("\t Explanation:");
            console.log("\tTypeScript does not have a 'dynamic' type. It has the 'any' type which can represent any JavaScript value.\n");
        }
    }
    const answer3 = await inquirer.prompt([{
            name: "question3",
            type: "list",
            message: "How do you denote a variable as readonly in TypeScript?",
            choices: ["A. const", "B. static", "C. readonly", "D. fixed"]
        }]);
    if (answer3.question3 === "C. readonly") {
        score++;
        console.log(`\tYou Choose the Correct Answer`);
    }
    else {
        console.log(`You Choose the Wrong Answer`);
        const ans3 = await inquirer.prompt({
            name: "correctanswer3",
            type: "list",
            message: "Do you want to see Correct Answer?",
            choices: ["Yes", "No"]
        });
        if (ans3.correctanswer3 === "Yes") {
            console.log("\n\tThe Correct answer is 'readonly'");
            console.log("\tExplanation:");
            console.log("\tThe 'readonly' keyword in TypeScript ensures that a property cannot be re-assigned after its initial assignment.");
        }
    }
    const answer4 = await inquirer.prompt([{
            name: "question4",
            type: "list",
            message: "How do you specify that a function does not return anything in TypeScript?",
            choices: ["A. function myFunc(): undefined", "B. function myFunc(): void", "C. function myFunc(): null", "D. function myFunc(): None"]
        }]);
    if (answer4.question4 === "B. function myFunc(): void") {
        score++;
        console.log(`\tYou Choose the Correct Answer`);
    }
    else {
        console.log(`You Choose the Wrong Answer`);
        const ans4 = await inquirer.prompt({
            name: "correctanswer4",
            type: "list",
            message: "Do you want to see Correct Answer?",
            choices: ["Yes", "No"]
        });
        if (ans4.correctanswer4 === "Yes") {
            console.log("\n\t The Correct answer is 'function myFunc(): void'");
            console.log("\tExplanation:");
            console.log("\tIn TypeScript, a function that doesn't return anything should have its return type specified as 'void'.\n");
        }
    }
    const answer5 = await inquirer.prompt([{
            name: "question5",
            type: "list",
            message: "How do you define a custom type in TypeScript?",
            choices: ["A. interface", "B. typedof", "C. type", "D. Both A & C"]
        }]);
    if (answer5.question5 === "D. Both A & C") {
        score++;
        console.log(`\tYou Choose the Correct Answer`);
    }
    else {
        console.log(`You Choose the Wrong Answer`);
        const ans5 = await inquirer.prompt({
            name: "correctanswer5",
            type: "list",
            message: "Do you want to see Correct Answer?",
            choices: ["Yes", "No"]
        });
        if (ans5.correctanswer5 === "Yes") {
            console.log("\n\t The Correct answer is 'Both A & C'");
            console.log("\t Explanation:");
            console.log("\t In TypeScript, custom types can be defined using both 'interface' and 'type' keywords.\n");
        }
    }
    const answer6 = await inquirer.prompt([{
            name: "question6",
            type: "list",
            message: "What is the primary purpose of TypeScript interfaces?",
            choices: ["A. To create new classes", "B. To describe the shape of an object", "C. To generate HTML templates", "D. To manage asynchronous code"]
        }]);
    if (answer6.question6 === "B. To describe the shape of an object") {
        score++;
        console.log(`\tYou Choose the Correct Answer`);
    }
    else {
        console.log(`You Choose the Wrong Answer`);
        const ans6 = await inquirer.prompt({
            name: "correctanswer6",
            type: "list",
            message: "Do you want to see Correct Answer?",
            choices: ["Yes", "No"]
        });
        if (ans6.correctanswer6 === "Yes") {
            console.log("\n\tThe Coreect answer is 'To describe the shape of an object'");
            console.log("\tExplanation:");
            console.log("\tInterfaces in TypeScript are primarily used to describe the shape or structure of an object. They ensure that objects have the correct properties and methods as described by the interface.\n");
        }
    }
    const answer7 = await inquirer.prompt([{
            name: "question7",
            type: "list",
            message: "What is a union type in TypeScript?",
            choices: ["A. A type that can be any value", "B. A type that can be one of several types", "C. A type that can be both a string and a number simultaneously", "D. A type that can be an object"]
        }]);
    if (answer7.question7 === "B. A type that can be one of several types") {
        score++;
        console.log(`\tYou Choose the Correct Answer`);
    }
    else {
        console.log(`You Choose the Wrong Answer`);
        const ans7 = await inquirer.prompt({
            name: "correctanswer7",
            type: "list",
            message: "Do you want to see Correct Answer?",
            choices: ["Yes", "No"]
        });
        if (ans7.correctanswer7 === "Yes") {
            console.log("\n\tThe Corrrect answer is 'A type that can be one of several types'");
            console.log("\tExplanation:");
            console.log("\tA 'union' type describes a value that could be one of several different types.\n");
        }
    }
    const answer8 = await inquirer.prompt([{
            name: "question8",
            type: "list",
            message: "Which TypeScript feature allows for checking the type of a variable at runtime?",
            choices: ["A. Type guard", "B. Runtime type", "C. Dynamic type", "D. Typeof"]
        }]);
    if (answer8.question8 === "A. Type guard") {
        score++;
        console.log(`\tYou Choose the Correct Answer`);
    }
    else {
        console.log(`You Choose the Wrong Answer`);
        const ans8 = await inquirer.prompt({
            name: "correctanswer8",
            type: "list",
            message: "Do you want to see Correct Answer?",
            choices: ["Yes", "No"]
        });
        if (ans8.correctanswer8 === "Yes") {
            console.log("\n\t The Correct answer is 'Type guard'");
            console.log("\tExplanation:");
            console.log("\t'Type guards' allow you to narrow down the type of an object within a conditional block.\n");
        }
    }
    const answer9 = await inquirer.prompt([{
            name: "question9",
            type: "list",
            message: "What TypeScript compiler option ensures strict type checking?",
            choices: ["A. --strict", "B. --strictTypes", "C. --typeCheck", "D. --enforceTypes"]
        }]);
    if (answer9.question9 === "A. --strict") {
        score++;
        console.log(`\tYou Choose the Correct Answer`);
    }
    else {
        console.log(`You Choose the Wrong Answer`);
        const ans9 = await inquirer.prompt({
            name: "correctanswer9",
            type: "list",
            message: "Do you want to see Correct Answer?",
            choices: ["Yes", "No"]
        });
        if (ans9.correctanswer9 === "Yes") {
            console.log("\n\tThe Correct answer is '--strict'");
            console.log("\tExplanation:");
            console.log("\tThe '--strict' compiler option enables a wide range of type-checking behavior to ensure that type definitions are accurate.\n");
        }
    }
    const answer10 = await inquirer.prompt([{
            name: "question10",
            type: "list",
            message: "How do you define an optional parameter in the TypeScript function?",
            choices: ["A. function foo(param: string?)", "B. function foo(param?: string)", "C. function foo(param string=)", "D. function foo(param string?)"]
        }]);
    if (answer10.question10 === "B. function foo(param?: string)") {
        score++;
        console.log(`\tYou Choose the Correct Answer`);
    }
    else {
        console.log(`You Choose the Wrong Answer`);
        const ans10 = await inquirer.prompt({
            name: "correctanswer10",
            type: "list",
            message: "Do you want to see Correct Answer?",
            choices: ["Yes", "No"]
        });
        if (ans10.correctanswer10 === "Yes") {
            console.log("\n\tThe Correct answer is 'function foo(param?: string)'");
            console.log("\tExplanation:");
            console.log("\tIn TypeScript, you can define an optional parameter by appending a '?' to the parameter name.\n");
        }
    }
    const check = await inquirer.prompt({ name: "checkscore", type: "list", message: "Want to See your Score?", choices: ["Yes", "No"] });
    if (check.checkscore === "Yes") {
        console.log(score);
        const takeagain = await inquirer.prompt({ name: "check", type: "list", message: "Do you want to Play Again?", choices: ["Yes", "No"] });
        if (takeagain.check === "Yes") {
            condition = true;
        }
        else {
            condition = false;
        }
    }
}
condition = false;
