let scoreDiv = document.getElementById("score");
let upgrades = document.getElementsByClassName("upgrades");
let upgradescost = document.getElementsByClassName("upgradescost");
let score = parseFloat(scoreDiv.innerText);
let scorePerClick = 1;
let scorePerSec = 0;
let TPS = 5;

function Auto() {
	scoreDiv.innerText = (parseFloat(scoreDiv.innerText) + (scorePerSec / TPS)).toFixed(2);
}
function Click() {
	scoreDiv.innerText = parseFloat(scoreDiv.innerText) + scorePerClick;
}
function scorePlusMod(id, type){
	if (type === 0) {
		if (parseInt(scoreDiv.innerText) >= parseInt(upgradescost[id].innerText)){
			scorePerClick += parseInt(upgrades[id].innerText);
			scoreDiv.innerText = parseInt(scoreDiv.innerText) - parseInt(upgradescost[id].innerText);
		}
	} else if (type === 1) {
		if (parseInt(scoreDiv.innerText) >= parseInt(upgradescost[id].innerText)){
			scorePerSec += parseInt(upgrades[id].innerText);
			scoreDiv.innerText = parseInt(scoreDiv.innerText) - parseInt(upgradescost[id].innerText);
		}
	}
	console.log("Click", scorePerClick);
	console.log("Per Sec", scorePerSec);
}
setInterval(Auto, 1000/TPS);