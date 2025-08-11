import { resolve } from "dns";
import resolveAttack from "./combat/engine.js";
import { Warrior, Mage, Rogue } from "./models/Character.js";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const classMap = {
  Warrior,
  Mage,
  Rogue,
};

let player1;
let player2;
function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer));
  });
}
async function askForClass(player) {
  console.log("Choose your class:");
  Object.entries(classMap).forEach(([key, cls], index) => {
    const tempChar = new cls("temp");
    const { health, attack, defense } = tempChar.getStats();
    console.log(
      `${index + 1}. ${key} - HP: ${health}, ATK: ${attack}, DEF: ${defense}`,
    );
  });

  let selectedClass;
  while (!selectedClass) {
    const classChoice = await ask("Enter the number of your class");
    const i = Number(classChoice) - 1;
  }
  rl.question("Enter the number of your class: ", (classChoice) => {
    const choiceIndex = parseInt(classChoice) - 1;
    if (choiceIndex < 0 || choiceIndex > classes.length - 1) {
      console.log("Invalid choice");
      askForClass();
      return;
    }
    const selectedClass = classes[choiceIndex];
    rl.question("Enter your character's name: ", (characterName) => {
      console.log(`You created a ${selectedClass} named ${characterName}`);
      player = new classMap[selectedClass](characterName);
      console.log(player);
      rl.close();
    });
  });
}

askForClass(player1);
askForClass(player2);
