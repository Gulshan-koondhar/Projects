#!/usr/bin/env node
import inquirer from "inquirer";
let enemies = ["Skeleton", "Zombie", "Warrior", "Assassin"];
let maxenemyHealth = 75;
let enemyAttackDamage = 25;
let health = 100;
let attackDamage = 50;
let numHealthPotions = 3;
let healthPotionsHealAmount = 30;
let healthPotionsDropChance = 50; //Percentage
let running = true;
console.log("\n\t*****----------------------------------------------Welcome to the Dungeon----------------------------------------------*****");
GAME: while (running) {
    let enemyHealth = Math.floor(Math.random() * maxenemyHealth);
    let enemy = enemies[Math.floor(Math.random() * (enemies.length))];
    console.log(`\n\t# ${enemy} has Appeared! #`);
    while (enemyHealth > 0) {
        console.log(`\n\tYour Health: ${health}%`);
        console.log(`\n\t${enemy}'s Health: ${enemyHealth}%\n`);
        const choose = await inquirer.prompt({
            name: "choice",
            type: "list",
            message: " What would you like to do",
            choices: ["Attack", "Drink Health Potion", "Run"]
        });
        if (choose.choice == "Attack") {
            let damageDealt = Math.floor(Math.random() * attackDamage);
            let damageTaken = Math.floor(Math.random() * enemyAttackDamage);
            enemyHealth -= damageDealt;
            health -= damageTaken;
            console.log(`\n\t> You Strike the ${enemy} ${damageDealt}%, and Reduce its Health to ${enemyHealth}%.`);
            console.log(`\n\t> ${enemy} strike you ${damageTaken}%, and Reduce you Health to ${health}%.`);
            if (health < 1) {
                console.log(`\n\t You have Taken too much damage, you are too weak to Go On!`);
                break;
            }
        }
        else if (choose.choice == "Drink Health Potion") {
            if (numHealthPotions > 0) {
                health += healthPotionsHealAmount;
                numHealthPotions--;
                console.log(`\n\t> You drink a Health Potion, healing Yourself for ${healthPotionsHealAmount}. \n\t> You Now have ${health}% Health.
                You now have ${numHealthPotions} health Chances Left. \n`);
            }
            else {
                console.log(`\n\t> You have no Health Chances left! Defeat enemy for a chance to get one`);
            }
        }
        else if (choose.choice == "Run") {
            console.log(`\n\t You Run Away from the ${enemy}!`);
            continue GAME;
        }
        else {
            console.log(`\n\t Invalid Command!`);
        }
    }
    if (health < 1) {
        console.log(`\n\t You limp out of the Dungeon, weak from Battle.`);
    }
    console.log(`\n\t # ${enemy} was Defeated! #`);
    console.log(`\n\t # You have ${health}% Health left #`);
    if (Math.floor(Math.random() * 100) < healthPotionsDropChance) {
        numHealthPotions++;
        console.log(`\n\t # The ${enemy} dropped a Health Healing Chance! #`);
        console.log(`\n\t # You now have ${numHealthPotions} Health Healing Chances. #\n `);
    }
    const chooseagain = await inquirer.prompt({
        name: "choiceagain",
        type: "list",
        message: " What would you like to do",
        choices: ["Continue", "Exit"]
    });
    if (chooseagain.choiceagain == "Continue") {
        console.log(`\n\t You continue on your Adventure Game`);
    }
    else if (chooseagain.choiceagain == "Exit") {
        console.log(`\n\t You exit from the Game Successfully`);
        break;
    }
    else {
        console.log(`\n\t Invalid Command!`);
    }
}
console.log(`\n\t\t *********************`);
console.log(`\n\t\t Thank You for Playing`);
console.log(`\n\t\t ********************* `);
