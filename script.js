let scoreDiv = document.getElementById("score");
let clickButton = document.getElementById("clickButton");
let upgrades = document.getElementsByClassName("upgrades");
let upgradescost = document.getElementsByClassName("upgradescost");
let score = parseFloat(scoreDiv.innerText);
let scorePerClick = 1;
let scorePerSec = 1;
let TPS = 5;
clickButton.innerText = "+" + scorePerClick;
function Auto() {
	score = (parseFloat(score) + (scorePerSec / TPS)).toFixed(2);
	
	if (score*1000 % 100 == 0) {
		score = parseFloat(score).toFixed(1);
	}
	if (score*1000 % 1000 == 0) {
		score = parseFloat(score).toFixed(0);
	}
	scoreDiv.innerText = score;
}
function Click() {
	score = parseFloat(score) + scorePerClick;
	scoreDiv.innerText = score;
}
function scorePlusMod(id, type){
	if (type === 0) {
		if (score >= parseInt(upgradescost[id].innerText)){
			scorePerClick += parseInt(upgrades[id].innerText);
			score = (score - parseInt(upgradescost[id].innerText)).toFixed(2);
			upgradescost[id].innerText = Math.ceil(parseFloat(upgradescost[id].innerText) * 1.7);
			scoreDiv.innerText = score;
			clickButton.innerText = "+" + scorePerClick;
		}
	} else if (type === 1) {
		if (score >= parseInt(upgradescost[id].innerText)){
			scorePerSec += parseInt(upgrades[id].innerText);
			score = score - parseInt(upgradescost[id].innerText);
			scoreDiv.innerText = score;
		}
	}
	console.log("Click", scorePerClick);
	console.log("Per Sec", scorePerSec);
}
setInterval(Auto, 1000/TPS);