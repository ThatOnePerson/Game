﻿var distance;
var target : Transform;
var observeDistance = 10;
var followPlayerRange = 5;
var attackRange = 1.5;
var entitySpeed = 2;
var damping = 6.0;
var controller : CharacterController;
var gravity : float = 20;
private var moveEntityDirection : Vector3 = Vector3.zero;

function Update (){
	distance = Vector3.Distance(target.position, transform.position);
	if (distance < observeDistance){
		renderer.material.color = Color.yellow;
		lookAt();
	}
	if (distance > observeDistance){
		renderer.material.color = Color.green;
	}
	if (distance < followPlayerRange){
		renderer.material.color = Color.red;
		followPlayer();
	}
}

function lookAt (){
	var rotation = Quaternion.LookRotation(target.position - transform.position);
}

function followPlayer (){
	moveEntityDirection = transform.forward;
	moveEntityDirection *= entitySpeed;
	moveEntityDirection.y -= gravity * Time.deltaTime;
	controller.Move (moveDirection * Time.deltaTime;
}

function attack (){
	
}