var entityHealth = 5;

function Update(){
	if (entityHealth <= 0){
		entityDeath();
	}
}

function reciveDamageToEntity (damageToEntity : int){
	entityHealth -= damageToEntity;
}

function entityDeath(){
	Destroy (gameObject);
}