window.setTimeout(function(){

var numSquares = 6;
var colors = [];
var squares = document. querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easybtn");
var hardBtn = document.querySelector("#hardbtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//mode buttons event listeners
	setUpModeButtons();
    setUpSquares();
	reset();
}

function setUpModeButtons(){
	for(var i = 0; i<modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[0].classList.remove("selected");
		this.classList.add("selected");
        
        this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;

		reset();

		//figure out how many squares to show
		//pick new colors
		//pick a new picked color
		//update the page to reflect changes
	});
}
}

function setUpSquares(){
	for(var i = 0; i<squares.length; i++){
	// add initial colours to squares
	//squares[i].style.backgroundColor = colors[i];

	// add click listeners to sqaures
	squares[i].addEventListener("click", function(){

    // grab colour of clicked square
        var clickedColor = this.style.backgroundColor;

    //compare  colour to pickedColor   
         if(clickedColor === pickedColor){
             messageDisplay.textContent = "Correct !";
             resetButton.textContent = "Play Again ?";
             changeColors(clickedColor);
             h1.style.backgroundColor = clickedColor;
         }
         else{
         	this.style.backgroundColor = "#232323";
         	messageDisplay.textContent = "Try Again !";
         }
	});
}
}

for(var i = 0; i<modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
        
        this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;

		reset();

		//figure out how many squares to show
		//pick new colors
		//pick a new picked color
		//update the page to reflect changes
	});
}

function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color
	pickedColor = pickColor();
	//chnage color display to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change the color of squares
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
		    squares[i].style.backgroundColor = colors[i];     
		}else{
          squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

/*
easyBtn.addEventListener("click", function(){
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  for(var i = 0; i<squares.length; i++){
    if(colors[i]){
    	squares[i].style.backgroundColor = colors[i];
    } else{
    	squares[i].style.display = "none";
    }
  } 

});

hardBtn.addEventListener("click", function(){
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numSquares = 6
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  for(var i = 0; i<squares.length; i++){
      	squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";    
  } 
});
*/


resetButton.addEventListener("click", function() {
	reset();
})

//colorDisplay.textContent = pickedColor;


for(var i = 0; i<squares.length; i++){
	// add initial colours to squares
	//squares[i].style.backgroundColor = colors[i];

	// add click listeners to sqaures
	squares[i].addEventListener("click", function(){

    // grab colour of clicked square
        var clickedColor = this.style.backgroundColor;

    //compare  colour to pickedColor   
         if(clickedColor === pickedColor){
             messageDisplay.textContent = "Correct !";
             resetButton.textContent = "Play Again ?";
             changeColors(clickedColor);
             h1.style.backgroundColor = clickedColor;
         }
         else{
         	this.style.backgroundColor = "#232323";
         	messageDisplay.textContent = "Try Again !";
         }
	});
}


function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to arr
	for(var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}


},500);