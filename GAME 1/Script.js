var character = document.getElementById("character");
var block = document.getElementById("block");
var playerName = document.getElementById("playerName");
var debugText = document.getElementById("debugText");
var x = 0;
var boing = new Audio("Boing-sound-effect.mp3");

boing.volume = 0.25;

playerName.innerHTML = "Block Jumper";

function jump(){

	if(character.classList.contains("animate")){

		return;
	}
	else{
		boing.play();
		character.classList.add("animate");

		x++;
	}	
	
	setTimeout(function(){
		character.classList.remove("animate");

	},700);
}



var checkDead = setInterval(function(){
	var charTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
	var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
	
	if (blockLeft < 50 && blockLeft > 0 && charTop >=130){
		block.style.animation = "none";
		block.style.display = "block";
		alert("You dead.");
	}
			
},10);
