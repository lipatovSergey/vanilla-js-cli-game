class Character {
	// constructor used when called new Character
	constructor(name, health, attack, defense) {
		this.name = name;
		this.health = health;
		this.attack = attack;
		this.defense = defense;
	}

	// positive effects will be positive number, negative effect negative number
	getTotalDefense(effect = 0) {
		const totalDefense = this.defense + effect;
		return totalDefense > 0 ? totalDefense : 0;
	}

	getTotalAttack(effect = 0) {
		const totalAttack = this.attack + effect;
		return totalAttack > 0 ? totalAttack : 0;
	}

	attackTarget(target) {
		const damage = this.attack - target.defense;
		// make sure damage can't be less then zero
		const actualDamage = damage > 0 ? damage : 0;
		// make sure target health can't be less then zero
		target.health = Math.max(0, target.health - actualDamage);
		return {
			attacker: this.name,
			target: target.name,
			damage: actualDamage,
			targetHealth: target.health,
		};
	}
}
