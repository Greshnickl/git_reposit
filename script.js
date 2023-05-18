let resursesDiv = document.getElementsByClassName("resurses");
let upgrades_div = document.getElementsByClassName("upgrades");
let upgradescost = document.getElementsByClassName("upgradescost");
let upgradeButtons = document.getElementsByClassName("upgradeButton");
let upgradenames = document.getElementsByClassName("upgradename");
let scales = document.getElementsByClassName("scales");
let upgradedescription = document.getElementsByClassName("upgradedescription");
let craftscales = document.getElementsByClassName("craftscales");
let craftButtons = document.getElementsByClassName("craftButton");
let craftlabels = document.getElementsByClassName("craftlabel");
let upgradetable = document.getElementById("upgradetable");
//let goldore = 110;
let resurses = [[], []];
resurses[0] = ["Gold ore", 0, 0, 1, 1000, false];
resurses[1] = ["Gold nugget", 100, 15, 110, 0, false];
resurses[2] = ["Gold ignot", 1000, 30, 1100, 0, false];	
let upgrades = [[], []];
upgrades[0] = ["Pickaxe", 1, 10, 0, 1, 1.1, "Pickaxe", 100];
upgrades[1] = ["Miner", 5, 25, 0, 1, 1.3, "Miner", 300];
upgrades[2] = ["Excavator", 7, 50, 0, 1, 1.5, "Excavator", 500];
upgrades[3] = ["Drill", 11, 100, 0, 1, 1.7, "Drill", 700];
upgrades[4] = ["Quarry", 13, 150, 0, 1, 1.9, "Quarry", 900];
let modups = [[[], []], [[], []], [[], []]];
modups[0][0] = [100, 1.5, 25, 0]; //price, mod, pricemod, resurse type need
modups[0][1] = [1000, 2, 50, 0];
modups[0][2] = [5000, 2.5, 25, 0];
modups[1][0] = [2500, 1.5, 20, 0];
modups[1][1] = [5000, 2, 25, 0];
modups[1][2] = [10000, 2.5, 50, 0];
modups[2][0] = [5000, 1.5, 25, 0];
modups[2][1] = [10000, 2, 50, 0];
modups[2][2] = [25000, 2.5, 100, 0];
//console.log(upgrades);
function start(){
	for (var i = 0; i < craftlabels.length; i++){
		craftlabels[i].innerText = "Craft " + resurses[i+1][0];
	}
	for (var i = 0; i < resursesDiv.length; i++){
		resursesDiv[i].innerText = resurses[i][4];
	}
	for (var i = 0; i< upgradenames.length; i++){
		upgradenames[i].innerText = upgrades[i][0] + " Cost: " + upgrades[i][2] + " gold ore";
		if (upgrades[i][3] == 0) {
			scales[i].style.display = "none";
			upgradedescription[i].innerText = "+ " + upgrades[i][1]*upgrades[i][4] + " gold ore per cycle";
		} else {
			upgradedescription[i].innerText = "+ " + upgrades[i][1]*upgrades[i][3]*upgrades[i][4] + " gold ore per cycle";
			scales[i].style.display = "flex";
		}
	}
	for (var i = 0; i < upgradetable.children.length; i++){
		for (var o = 0; o < upgradetable.children[i].children.length; o++){
			for (var k = 0; k < resurses.length; k++){
				if (modups[i][o][3] === k){
					upgradetable.children[i].children[o].children[0].innerText = "Upgrade " + upgrades[i][0] + " (gold ore mod " + modups[i][o][1] + ")";
					upgradetable.children[i].children[o].children[1].innerText = modups[i][o][0] + " " + resurses[k][0].toLowerCase();
				}
			}
		}

	}
}
function Auto() {

}
function scaleup(i){
	if (resurses[0][4] >= upgrades[i][2]){
		resurses[0][4] -= upgrades[i][2];
		upgrades[i][3]++;
		upgrades[i][2] = Math.ceil(upgrades[i][2]*upgrades[i][5]);
		start();
	}
}
function scale() {
	for (var i = 1; i < resurses.length; i++) {
		if (resurses[i][5] == true) {
			if (craftscales[i-1].value != craftscales[i-1].max){
				craftscales[i-1].value++;
			} else {
				resurses[i][5] = false;
				resurses[i][4]++;
				craftscales[i-1].value = 0;
				start();
			}
		}
	}
	for (var i = 0; i<scales.length; i++){
		if (upgrades[i][3] !== 0){
			scales[i].value += 1;
			if (scales[i].value == scales[i].max) {
				scales[i].value = 0;
				resurses[0][4] += upgrades[i][1]*upgrades[i][3]*upgrades[i][4];
				start();
			}
		}
	}
}
function craft(id) {
	if (resurses[id][5] != true) {
		if (resurses[0][4] >= resurses[id][1]){
			resurses[id][5] = true;
			resurses[0][4] -= resurses[id][1];
			start();
		}
	}
}
function table() {
	for (let i = 0; i < modups.length; i++) {
		let tr = document.createElement('tr');
		for (let o = 0; o < modups[i].length; o++) {
			let td = document.createElement('td');
			let p = document.createElement('p');
			let button = document.createElement('button');
			td.appendChild(p);
			td.appendChild(button);
			tr.appendChild(td);
		}
	
		upgradetable.appendChild(tr);
	}
	for (var i = 0; i < upgradetable.children.length; i++){
		//console.log(upgradetable.children[i].innerHTML.substr(3, upgradetable.children[i].innerHTML.length - 1));
		//upgradetable.children[i].innerHTML = upgradetable.children[i].innerHTML.substr(0, 3) + 'onclick="modups_func('+i+','+o+')"' + upgradetable.children[i].innerHTML.substr(3, upgradetable.children[i].innerHTML.length - 1);
		//console.log(upgradetable.children[i].innerHTML.substr(0, 3) + ' onclick="modups_func('+i+','+o+')"' + upgradetable.children[i].innerHTML.substr(3, upgradetable.children[i].innerHTML.length - 1));
		for (var o = 0; o < upgradetable.children[i].children.length; o++){
			for (var k = 0; k < resurses.length; k++){
				if (modups[i][o][3] === k){
					upgradetable.children[i].children[o].children[0].innerText = "Upgrade " + upgrades[i][0] + " (gold ore mod " + modups[i][o][1] + ")";
					upgradetable.children[i].children[o].children[1].innerText = modups[i][o][0] + " " + resurses[k][0].toLowerCase();
				}
			}
			//upgradetable.children[i].children[o].children[0].innerText = "Upgrade " + upgrades[i][0] + " (gold ore mod "+ modups[i][o][1]+")";
			//upgradetable.children[i].children[o].children[1].innerText = modups[i][o][0];
			for (var j = 0; j < upgradetable.children[i].children[o].innerHTML.length; j++){
				if (upgradetable.children[i].children[o].innerHTML[j] == 'n' && upgradetable.children[i].children[o].innerHTML[j+1] == '>') {
					upgradetable.children[i].children[o].innerHTML = upgradetable.children[i].children[o].innerHTML.substr(0, j+1) + " onclick=\" modups_func("+i+","+ o+")\"" + upgradetable.children[i].children[o].innerHTML.substr(j+1, upgradetable.children[i].children[o].innerHTML.length);
					break;
				}
			}
			//upgradetable.children[i].children[o].children[1].onclick = "modups_func("+i+","+o")";
			//console.log(upgradetable.children[i].children[o].children[1].onclick);
		}
	}
}
function modups_func(i, o){
	if (resurses[modups[i][o][3]][4] >= modups[i][o][0]){
		
	}
}
setInterval(scale, 10);