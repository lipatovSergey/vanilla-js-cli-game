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

/*
Теперь можно написать resolveAttack, который будет использовать обе функции:
Посчитать planned = computePlannedDamage(attacker, defender).
Применить урон через applyDamage, получить { dealt, newHealth }.
Вернуть объект:
{
  attacker: attacker.name,
  target: defender.name,
  planned,
  dealt,
  targetHealth: newHealth,
  isTargetAlive: newHealth > 0
}
*/
