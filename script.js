let goldoreDiv = document.getElementById("goldore");
let upgrades_div = document.getElementsByClassName("upgrades");
let upgradescost = document.getElementsByClassName("upgradescost");
let upgradeButtons = document.getElementsByClassName("upgradeButton");
let upgradenames = document.getElementsByClassName("upgradename");
let scales = document.getElementsByClassName("scales");
let upgradedescription = document.getElementsByClassName("upgradedescription");
let craftscales = document.getElementsByClassName("craftscales");
let craftButtons = document.getElementsByClassName("craftButton");
let goldore = 110;
let resurses = [[], []];
resurses[0] = ["Gold nugget", 100, 15, 110, 0, false];
resurses[1] = ["Gold ingot", 1000, 30, 1100, 0, false];
goldoreDiv.innerText = goldore;
let upgrades = [[], []];
upgrades[0] = ["Pickaxe", 1, 10, 0, 1, 1.1, "Pickaxe", 100];
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
			scales[i].style.display = "none";
			upgradedescription[i].innerText = "+ " + upgrades[i][1]*upgrades[i][4] + " gold ore per cycle";
		} else {
			upgradedescription[i].innerText = "+ " + upgrades[i][1]*upgrades[i][3]*upgrades[i][4] + " gold ore per cycle";
			scales[i].style.display = "flex";
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
function craftscale(id){
	setInterval(craftscales[id].value++, 10);
}
function craft(){
	for (var i = 0; i<=craftscales.length; i++){
		if (resurses[i][5] != false){
			craftscales[i].value++;
		}
		if (craftscales[i].value == craftscales[i].max) {
			resurses[i][4]++;
			resurses[i][5]=false;
			craftscales[i].value = 0;
		}
	}
}
//setInterval(scale, 10);
setInterval(craft, 10);