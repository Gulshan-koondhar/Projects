import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";

const input = await inquirer.prompt({
  name: "userInput",
  type: "number",
  message: "Enter Seconds Which you Want to Count Down:",
  validate: (input) => {
    if (isNaN(input)) {
      return "Please Enter a Valid Number";
    } else if (input > 60) {
      return "The Number Should be Under or Equal to 60";
    } else {
      return true;
    }
  },
});

function countDown(seconds: number) {
  const initialTime = new Date().setSeconds(new Date().getSeconds() + seconds);
  const intervalTime = new Date(initialTime);
  setInterval(() => {
    const currTime = new Date();
    const diffInTime = differenceInSeconds(intervalTime, currTime);
    if (diffInTime <= 0) {
      console.log("Time has Expired!!!!");
      process.exit();
    }
    const minute = Math.floor((diffInTime % (3600 * 24)) / 3600);
    const second = Math.floor(diffInTime % 60);
    console.log(
      `${minute.toString().padStart(2, "0")}:${second
        .toString()
        .padStart(2, "0")}`
    );
  }, 1000);
}

countDown(input.userInput);
