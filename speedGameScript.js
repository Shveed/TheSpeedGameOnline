function startGame(){
	var buttonToHide = document.getElementById("startButton");
	var gameArea = document.getElementById("gameArea");
	buttonToHide.className = "hide";
	gameArea.className = "playingArea";

}

function generateItem(max){
	return Math.floor(Math.random() * max);
}