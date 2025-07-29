class Character {
	// constructor used when called new Character
	constructor(name, health, attack, defense) {
		this.name = name;
		this.health = health;
		this.attack = attack;
		this.defense = defense;
	}

	attackTarget(target) {
		const damage = this.attack - target.defense;
		// make sure damage can't be less then zero
		const actualDamage = damage > 0 ? damage : 0;
		target.health -= actualDamage;
		console.log(
			`${this.name} attacks ${target.name} and deals ${actualDamage} damage`
		);
	}
}
