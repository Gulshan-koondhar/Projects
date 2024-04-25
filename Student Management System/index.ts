#! /usr/bin/env node

import inquirer from "inquirer";
let start = await inquirer.prompt({
  name: "start",
  type: "list",
  message: "Are you Want to Open Student Management System",
  choices: ["Yes", "No"],
});
if (start.start == "Yes") {
  let Student_Management_System = [];
  let condition = true;
  while (condition) {
    let Record = await inquirer.prompt([
      {
        name: "choice",
        type: "list",
        message: "Choose From the Following: ",
        choices: [
          "Show Students Record",
          "Remove Student",
          "Update Student Record",
          "Add New Student",
          "Exit",
        ],
      },
    ]);
    if (Record.choice == "Show Students Record") {
      condition = false;
    } else if (Record.choice == "Remove Student") {
      Student_Management_System.pop();
      condition = true;
    } else if (Record.choice == "Update Student Record") {
      let updateindex = await inquirer.prompt([
        {
          name: "start",
          type: "number",
          message: "Enter the index number which you want to update:",
        },
        { name: "name", type: "input", message: "Enter Student Name" },
        { name: "ID", type: "number", message: "Enter Student ID" },
        {
          name: "course",
          type: "list",
          message: "Choose Course",
          choices: ["JavaScript", "HTML", "CSS"],
        },
        { name: "fees", type: "input", message: "Fees Status" },
      ]);
      let updateValue = {
        name: updateindex.name,
        ID: updateindex.ID,
        course: updateindex.course,
        Fees: updateindex.fees,
      };
      Student_Management_System.splice(updateindex.start, 1, updateValue);
      condition = true;
    } else if (Record.choice == "Add New Student") {
      let student = await inquirer.prompt([
        { name: "name", type: "input", message: "Enter Student Name" },
        { name: "ID", type: "number", message: "Enter Student ID" },
        {
          name: "course",
          type: "list",
          message: "Choose Course",
          choices: ["JavaScript", "HTML", "CSS"],
        },
        { name: "fees", type: "input", message: "Fees Status" },
      ]);
      Student_Management_System.push({
        name: student.name,
        ID: student.ID,
        course: student.course,
        Fees: student.fees,
      });
      condition = true;
    } else {
      condition = false;
    }
  }
  condition = false;
  console.log(Student_Management_System);
}
