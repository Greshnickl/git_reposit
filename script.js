let scoreDiv = document.getElementById("score");
let clickButton = document.getElementById("clickButton");
let upgrades_div = document.getElementsByClassName("upgrades");
let upgradescost = document.getElementsByClassName("upgradescost");
let upgradeButtons = document.getElementsByClassName("upgradeButton");
console.log(upgradeButtons[0].tabIndex)
let score = parseFloat(scoreDiv.innerText);
let scorePerClick = 1;
let scorePerSec = 1;
clickButton.innerText = "+" + scorePerClick;
let TPS = 5;
let upgrades = [[], []];
upgrades[0] = [0, "Pickaxe", 1, 10, 0, 1, 1.7, (upgrades[0][2]*upgrades[0][4]*upgrades[0][5]), "Pickaxe"];
upgrades[1] = [1, "Miner", 1, 25, 0, 1, 1.3, (upgrades[0][2]*upgrades[0][4]*upgrades[0][5]), "Miner"];
upgrades[2] = [1, "Excavator", 1, 100, 0, 1, 1.5, (upgrades[0][2]*upgrades[0][4]*upgrades[0][5]), "Excavator"];

//console.log(upgrades);
function start(){

}
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
			scorePerClick += parseInt(upgrades_div[id].innerText);
			score = (score - parseInt(upgradescost[id].innerText)).toFixed(2);
			upgradescost[id].innerText = Math.ceil(parseFloat(upgradescost[id].innerText) * 1.7);
			scoreDiv.innerText = score;
			clickButton.innerText = "+" + scorePerClick;
		}
	} else if (type === 1) {
		if (score >= parseInt(upgradescost[id].innerText)){
			scorePerSec += parseInt(upgrades_div[id].innerText);
			score = (score - parseInt(upgradescost[id].innerText)).toFixed(2);
			upgradescost[id].innerText = Math.ceil(parseFloat(upgradescost[id].innerText) * 1.7)
			scoreDiv.innerText = score;
		}
	}
	console.log("Click", scorePerClick);
	console.log("Per Sec", scorePerSec);
}
setInterval(Auto, 1000/TPS);