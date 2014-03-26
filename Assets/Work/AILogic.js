var distance;
var target : Transform;
var observeDistance = 10;
var attackRange = 5;
var entitySpeed = 2;
var damping = 6.0;

function Update (){
	distance = Vector3.Distance(target.position, transform.position);
	if (distance < observeDistance){
		renderer.material.color = Color.yellow;
		lookAt();
	}
	if (distance > observeDistance){
		renderer.material.color = Color.green;
	}
	if (distance < attackRange){
		renderer.material.color = Color.red;
		attack();
	}
}

function lookAt (){
	var rotation = Quaternion.LookRotation(target.position - transform.position);
	transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * damping);
}

function attack (){
	transform.Translate(Vector3.forward * entitySpeed * Time.deltaTime);
}