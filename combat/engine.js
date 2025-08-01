// computing damage, returns number
function computePlannedDamage(attacker, defender) {
	const damage = Math.max(0, attacker.attack - defender.defense);
	return damage;
}

// applying damage by using setHealth returns dealt and newHealth
function applyDamage(defender, damage) {
	const dealt = Math.min(damage, defender.health);
	const newHealth = defender.health - dealt;

	defender.setHealth(newHealth); // update defender's health

	return { dealt, newHealth };
}

function resolveAttack(attacker, defender) {
	const plannedDamage = computePlannedDamage(attacker, defender);
	const actualDamage = applyDamage(defender, plannedDamage);

	return {
		attacker: attacker.name,
		target: defender,
		planned: plannedDamage,
		dealt: actualDamage.dealt,
		targetHealth: actualDamage.newHealth,
		isTargetAlive: newHealth > 0,
	};
}
