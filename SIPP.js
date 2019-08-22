/*Arrays*/

const car_class_l = ["M","E","C","I","S","F","L","P","X"];
const car_class_w = ["mini","economy","compact","intermediate","standard","fullsize","luxury","premium","special"];

const car_door_l = ["B","C","D","W","F","M","V","K","G","T","P","Q"];
const car_door_w = ["2 door","2/4 door","5 door","wagon / estate","suv","monospace","passenger van","commercial van / truck","crossover","convertible","pickup regular cab","pickup extended cab"];

const car_trans_l = ["M","A"];
const car_trans_w = ["manual","automatic"];

const car_fuel_l = ["R","D","V","N","H","E","M"];
const car_fuel_w = ["unspecified fuel, a/c","diesel, a/c","petrol, a/c","unspecified fuel, no a/c","hybrid, a/c","electric, a/c","multi fuel, a/c"];

let answer = "";

let CA = 0;
let WA = 0;
let TA = 0;

/*DOM selectors*/

let sipp = document.getElementById("sippcode");

let answerCheck = document.getElementById("answercheck");

let correctAnswer = document.getElementById("correctanswer");

let button = document.getElementsByTagName("button")[0];

let check = document.getElementsByTagName("Button")[1];

let score = document.getElementById("score");

let content = document.getElementsByClassName("IC")

/*Functions*/

button.addEventListener("click", function sippCodeCreator() {

	if (TA === 0)	{

		TA = TA + 1;

		let carClass = Math.floor(Math.random()*car_class_l.length);
		let carClassLetter = car_class_l[carClass];
		let carClassWord = car_class_w[carClass];

		let carDoor = Math.floor(Math.random()*car_door_l.length);
		let carDoorLetter = car_door_l[carDoor];
		let carDoorWord = car_door_w[carDoor];

		let carTrans = Math.floor(Math.random()*car_trans_l.length);
		let carTransLetter = car_trans_l[carTrans];
		let carTransWord = car_trans_w[carTrans];

		let carFuel = Math.floor(Math.random()*car_fuel_l.length);
		let carFuelLetter = car_fuel_l[carFuel];
		let carFuelWord = car_fuel_w[carFuel];

		let sippCode = carClassLetter + carDoorLetter + carTransLetter + carFuelLetter;
		answer = "This is a <strong>" + carClassWord + "</strong> car of the <strong>" + carDoorWord + "</strong> type with <strong>" + carTransWord + "</strong> and <strong>" + carFuelWord + "</strong>.";

		sipp.innerHTML = sippCode;

		CC.value = null;
		CD.value = null;
		CT.value = null;
		CF.value = null;

		button.innerHTML = "Check answer and continue";
	}
	else if (TA > 0) {
		let answerClass = document.getElementById("CC").value.toLowerCase();
		let answerDoor = document.getElementById("CD").value.toLowerCase();
		let answerTrans = document.getElementById("CT").value.toLowerCase();
		let answerFuel = document.getElementById("CF").value.toLowerCase();

		let userAnswer = "This is a <strong>" + answerClass + "</strong> car of the <strong>" + answerDoor + "</strong> type with <strong>" + answerTrans + "</strong> and <strong>" + answerFuel + "</strong>.";

		if (userAnswer === answer) {
			answerCheck.innerHTML = "Well done!";
			correctAnswer.innerHTML = answer;

			CA = CA+1;
			TA = TA+1;

			let FS = ((CA/(TA-1))*100);

			score.innerHTML = "Based on " + (TA-1) + " attempts, your score is: " + FS + "%";
		}
		else if (userAnswer !== answer) {
			answerCheck.innerHTML = "Unfortunately this was not the correct answer. But no worries, you'll get there!";
			correctAnswer.innerHTML = answer;

			WA = WA+1;
			TA = TA+1;

			let FS = ((CA/(TA-1))*100);

			score.innerHTML = "Based on " + (TA-1) + " attempts, your score is: " + FS + "%";
		}
		let carClass = Math.floor(Math.random()*car_class_l.length);
		let carClassLetter = car_class_l[carClass];
		let carClassWord = car_class_w[carClass];

		let carDoor = Math.floor(Math.random()*car_door_l.length);
		let carDoorLetter = car_door_l[carDoor];
		let carDoorWord = car_door_w[carDoor];

		let carTrans = Math.floor(Math.random()*car_trans_l.length);
		let carTransLetter = car_trans_l[carTrans];
		let carTransWord = car_trans_w[carTrans];

		let carFuel = Math.floor(Math.random()*car_fuel_l.length);
		let carFuelLetter = car_fuel_l[carFuel];
		let carFuelWord = car_fuel_w[carFuel];

		let sippCode = carClassLetter + carDoorLetter + carTransLetter + carFuelLetter;
		answer = "This is a <strong>" + carClassWord + "</strong> car of the <strong>" + carDoorWord + "</strong> type with <strong>" + carTransWord + "</strong> and <strong>" + carFuelWord + "</strong>.";

		sipp.innerHTML = sippCode;

		CC.value = null;
		CD.value = null;
		CT.value = null;
		CF.value = null;
	}
});