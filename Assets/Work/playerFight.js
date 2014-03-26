#pragma strict

var damageToEntity : int = 5;
var distance : float;
var maxDistance : float = 2;
var weapon : Transform;

function Update () {
	if (Input.GetButtonDown("Fire1")){
		weapon.animation.Play("swordSwing");
		audio.Play();
		var hit : RaycastHit;
	if (Physics.Raycast (transform.position, transform.TransformDirection(Vector3.forward), hit)){
			distance = hit.distance;
			if (distance < maxDistance){	
			}
			hit.transform.SendMessage ("reciveDamageToEntity", damageToEntity, SendMessageOptions.DontRequireReceiver);
			}
	}
}