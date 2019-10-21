function startGame(){
	var buttonToHide = document.getElementById("startButton");
	var canvasDiv = document.getElementById("canvasDiv");
	var infoSpan = document.getElementById("info");
	buttonToHide.className = "hide";
	canvasDiv.className = "";
	infoSpan.className = "";

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
			document.getElementById("info").innerHTML = Score;
		}
	}

}



