function startGame(){
	var value = selectDiff.value;
	switch (value) {
		case "Новичок":
			finalScore = 20;
			break;
		case "Любитель":
			finalScore = 50;
			break;
		case "Профи":
			finalScore = 90;
			break;
		default:
			break;
	}
	startMenu.className = "hide";
	canvasDiv.className = "canvasClass";
	infoSpan.className = "showInfoBlock";
}

function generateItem(max){
	return Math.floor(Math.random() * max);
}

function drawBall(){
	ctx.beginPath();
	ctx.drawImage(img1, x1, y1, ballDiam, ballDiam);
	ctx.closePath();
}

function draw(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBall();
	checkCollision();
	x1 += dx1;
	y1 += dy1;
}

function checkCollision(){
	if(x1 + dx1 > canvas.width-ballDiam || x1 + dx1 < 0) { dx1 = -dx1; }
	if(y1 + dy1 > canvas.height-ballDiam || y1 + dy1 < 0) { dy1 = -dy1; }
}

function checkClick(){
	document.querySelector('#canvasDiv').onmousedown = function(event){
		event = event || window.event;
		var clickX = event.offsetX;
			clickY = event.offsetY;
		if((clickX < x1 + ballDiam && clickX > x1 - ballDiam) &&
			(clickY < y1 + ballDiam && clickY > y1 - ballDiam)){
			Score++;
			document.getElementById("score").innerHTML = Score;
			x1 = randomSpawnPos(ballDiam, 1120 - ballDiam);
			y1 = randomSpawnPos(ballDiam, 630 - ballDiam);
			changeDifficulty();
			checkWin();
		}
		else{
			lifes--;
			document.getElementById("lifes").innerHTML = lifes;
			if(lifes == 0){
				$(this).hide(1000);
				document.getElementById("gameOver").className = "gameOver";
				lost.className = "gameOver";				
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
		ballDiam -= 2;
	}
}

function checkWin(){
	if(Score == finalScore){
		$("#canvasDiv").hide(1000);
		document.getElementById("gameOver").className = "gameOver";
		won.className = "gameWon";
	}
}

function changeSkin(imgSrc){
	img1.src = imgSrc;
}
