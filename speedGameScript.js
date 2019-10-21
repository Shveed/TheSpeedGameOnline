function startGame(){
	buttonToHide.className = "hide";
	canvasDiv.className = "";
	infoSpan.className = "showInfoBlock";

}

function generateItem(max){
	return Math.floor(Math.random() * max);
}

function drawBall(){
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI*2);
	ctx.fillStyle = "#FFF";
	ctx.fill();
	ctx.closePath();
}

function draw(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBall();
	checkCollision();
	x += dx;
	y += dy;
}

function checkCollision(){
	if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) { dx = -dx; }
	if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) { dy = -dy; }
}

function checkClick(){
	document.querySelector('#canvasDiv').onmousedown = function(event){
		event = event || window.event;
		var clickX = event.offsetX;
		var clickY = event.offsetY;
		if((clickX < x + ballRadius && clickX > x - ballRadius) &&
			(clickY < y + ballRadius && clickY > y - ballRadius)){
			Score++;
			document.getElementById("score").innerHTML = Score;
			x = randomSpawnPos(ballRadius, 1120 - ballRadius);
			y = randomSpawnPos(ballRadius, 630 - ballRadius);
			changeDifficulty();
			checkWin();
		}
		else{
			lifes--;
			document.getElementById("lifes").innerHTML = lifes;
			if(lifes == 0){
				hideCanvasBlock();
				gameOverMessage.innerHTML = "YOU LOST!";				
			}
		}
	}
}

function randomSpawnPos(min, max){
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function changeDifficulty(){
	if(Score % 5 == 0 && Score != 0){
 		difficulty++;
		document.getElementById("diff").innerHTML = difficulty;
		startLevel -= 1;
		ballRadius -= 1;
	}
}
function checkWin(){
	if(Score == 99){
		hideCanvasBlock();
		gameOverMessage.innerHTML = "YOU WON!";
	}
}
function hideCanvasBlock(){
	canvasDiv.className = "hide";
	infoSpan.className = "hide";
	gameOverMessage.className = "gameOver";
}


