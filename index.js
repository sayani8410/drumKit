/* 
document.querySelectorAll("button")[0].addEventListener("click",handClick);
    
function handClick(){
    alert(" I got clicked ");
} 
      OR
      
document.querySelectorAll("button")[0].addEventListener("click",function(){
    alert(" I got clicked ");   // Gives the alert on pressing the first button
});

// For All the buttons
var numberOfButtons = document.querySelectorAll(".drum").length;
for( var i=0;i<numberOfButtons;i++){
	document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
	});
}

var numberOfButtons = document.querySelectorAll(".drum").length;
for(var i=0; i<numberOfButtons;i++){
	document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        // this.style.color="white";  // Changes the color of the pressed button
        // console.log(this.innerHTML); // Prints the text of the pressed button in the console
        // console.log(this); // Prints the button code line of the pressed button in the console
	});
} */

// DETECTING BUTTON PRESS
var numberOfButtons = document.querySelectorAll(".drum").length;

for(var i = 0;i<numberOfButtons;i++){
	document.querySelectorAll(".drum")[i].addEventListener("click",function(){

		var buttonHTML = this.innerHTML;

        makeSound(buttonHTML);

        buttonAnimation(buttonHTML);
	});
}

// DETECTING KEYBOARD PRESS
document.addEventListener("keypress",function(event){

   // alert(" Pressed a key ");  // gives an alert when a key is pressed from the keyboard
   // console.log(event);  // Prints the key pressed from the keyboard into the console
   makeSound(event.key);

   buttonAnimation(event.key);

});


// DETECTING SOUNDS
function makeSound(key){
   switch(key){

        	case 'w':
        	  var tom1 = new Audio('sounds/tom-1.mp3');
        	  tom1.play();
        	  break;

        	case 'a':
        	  var tom2 = new Audio('sounds/tom-2.mp3');
        	  tom2.play();
        	  break;

        	case 's':
        	  var tom3 = new Audio('sounds/tom-3.mp3');
        	  tom3.play();
        	  break;

        	case 'd':
        	  var tom4 = new Audio('sounds/tom-4.mp3');
        	  tom4.play();
        	  break;

        	case "j":
        	  var snare = new Audio("sounds/snare.mp3");
        	  snare.play();
        	  break;

        	case 'k':
        	  var crash = new Audio('sounds/crash.mp3');
        	  crash.play();
        	  break;

        	case 'l':
        	  var kick = new Audio('sounds/kick-bass.mp3');
        	  kick.play();
        	  break;

        	default:
        	  console.log(buttonHTML);
        }
}

// PERFORMING ANIMATION
function buttonAnimation(currentKey){
    
    var activeButton = document.querySelector("."+currentKey+"_tone");

    activeButton.classList.add("pressed");

    setTimeout(function(){
    	activeButton.classList.remove("pressed");
    },100);
}