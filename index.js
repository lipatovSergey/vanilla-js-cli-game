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

const classes = ["Warrior", "Mage", "Rogue"];
let player;
function askForClass() {
  console.log("Choose your class:");
  Object.entries(classMap).forEach(([key, cls], index) => {
    const tempChar = new cls("temp");
    const { health, attack, defense } = tempChar.getStats();
    console.log(
      `${index + 1}. ${key} - HP: ${health}, ATK: ${attack}, DEF: ${defense}`,
    );
  });

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

askForClass();
