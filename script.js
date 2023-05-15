let goldoreDiv = document.getElementById("goldore");
let upgrades_div = document.getElementsByClassName("upgrades");
let upgradescost = document.getElementsByClassName("upgradescost");
let upgradeButtons = document.getElementsByClassName("upgradeButton");
let upgradenames = document.getElementsByClassName("upgradename");
let scales = document.getElementsByClassName("scales");
let upgradedescription = document.getElementsByClassName("upgradedescription");
let goldore = 10;
goldoreDiv.innerText = goldore;
let TPS = 5;
let upgrades = [[], []];
upgrades[0] = ["Pickaxe", 1, 10, 1, 1, 1.1, "Pickaxe", 100];
upgrades[1] = ["Miner", 5, 25, 0, 1, 1.3, "Miner", 300];
upgrades[2] = ["Excavator", 7, 50, 0, 1, 1.5, "Excavator", 500];
upgrades[3] = ["Drill", 11, 100, 0, 1, 1.7, "Drill", 700];
upgrades[4] = ["Quarry", 13, 150, 0, 1, 1.9, "Quarry", 900];
//console.log(upgrades);
function start(){
	goldoreDiv.innerText = goldore;
	for (var i = 0; i<=upgradenames.length; i++){
		upgradenames[i].innerText = upgrades[i][0] + " Cost: " + upgrades[i][2] + " gold ore";
		if (upgrades[i][3] == 0) {
			upgradedescription[i].innerText = "+ " + upgrades[i][1]*upgrades[i][4] + " gold ore per cycle";
		} else {
			upgradedescription[i].innerText = "+ " + upgrades[i][1]*upgrades[i][3]*upgrades[i][4] + " gold ore per cycle";
		}
	}
}
function Auto() {

}
function scaleup(i){
	if (goldore >= upgrades[i][2]){
		goldore -= upgrades[i][2];
		upgrades[i][3]++;
		upgrades[i][2] = Math.ceil(upgrades[i][2]*upgrades[i][5]);

		start();
	}
}
function scale() {
	for (var i = 0; i<=scales.length; i++){
		if (upgrades[i][3] !== 0){
			scales[i].value += 1;
			if (scales[i].value == scales[i].max) {
				scales[i].value = 0;
				goldore += upgrades[i][1]*upgrades[i][3]*upgrades[i][4];
				goldoreDiv.innerText = goldore;	
			}
		}
	}
}
setInterval(scale, 10);
//setInterval(Auto, 1000/TPS);