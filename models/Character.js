export class Character {
  constructor(name, health, attack, defense, classType = "Adventurer") {
    this.name = name;
    this.classType = classType;

    // Health clamp
    this.health = health > 0 ? health : 1;
    this.attack = attack;
    this.defense = defense;
  }

  setHealth(newHealth) {
    this.health = newHealth > 0 ? newHealth : 0;
    return this.health;
  }

  get isAlive() {
    return this.health > 0;
  }

  getStats() {
    return {
      name: this.name,
      classType: this.classType,
      health: this.health,
      attack: this.attack,
      defense: this.defense,
    };
  }
}

export class Warrior extends Character {
  constructor(name) {
    super(name, 120, 6, 4, "Warrior");
  }
}

export class Mage extends Character {
  constructor(name) {
    super(name, 80, 12, 0, "Mage");
  }
}

export class Rogue extends Character {
  constructor(name) {
    super(name, 100, 8, 2, "Rogue");
  }
}
