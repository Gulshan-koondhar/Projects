#! /usr/bin/env node
import inquirer from "inquirer";
let start = await inquirer.prompt({
    name: "start",
    type: "list",
    message: "Are you Want to Start Adding Itenms in To-Do list",
    choices: ["Yes", "No"],
});
if (start.start == "Yes") {
    let toDo = [];
    let condition = true;
    while (condition) {
        let todoQuestion = await inquirer.prompt([
            {
                name: "todo",
                type: "input",
                message: "What do you want to Add in your To-Do List?",
            },
            {
                name: "choice",
                type: "list",
                message: "Choose From the Following: ",
                choices: ["Show List", "Remove", "Update", "Add", "Exit"],
            },
        ]);
        toDo.push(todoQuestion.todo);
        if (todoQuestion.choice == "Show List") {
            condition = false;
        }
        else if (todoQuestion.choice == "Remove") {
            console.log(toDo.pop());
            condition = false;
        }
        else if (todoQuestion.choice == "Update") {
            let updateindex = await inquirer.prompt([
                {
                    name: "start",
                    type: "number",
                    message: "Enter the index number which you want to update:",
                },
                {
                    name: "newValue",
                    type: "input",
                    message: "Enter New To-DO Task Which you want to Update with Previous",
                },
            ]);
            toDo.splice(updateindex.start, 1, updateindex.newValue);
            condition = false;
        }
        else if (todoQuestion.choice == "Add") {
            condition = true;
        }
        else {
            condition = false;
        }
    }
    console.log(toDo);
    condition = false;
}
