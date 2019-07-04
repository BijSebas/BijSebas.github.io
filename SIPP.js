/*Arrays*/

const car_class_l = ["M","E","C","I","S","F","L","P","X"];
const car_class_w = ["Mini","Economy","Compact","Intermediate","Standard","Fullsize","Luxury","Premium","Special"];

const car_door_l = ["B","C","D","W","F","M","V","K","G","T","P","Q"];
const car_door_w = ["2 Door","2/4 Door","5 Door","Wagon / Estate","SUV","Mono Space","Passenger Van","Commercial Van","Cross Over","Convertible","Pickup Regular Cab","Pickup Extended Cab"];

const car_trans_l = ["M","A"];
const car_trans_w = ["Manual drive","Auto drive"];

const car_fuel_l = ["R","D","V","N","H","E","M"];
const car_fuel_w = ["Unspecified fuel, A/C","Diesel, A/C","Petrol, A/C","Unspecified fuel, no A/C","Hybrid, A/C","Electric, A/C","Multi fuel, A/C"];

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

/*Functions*/

button.addEventListener("click", function sippCodeCreator() {
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
	answer = "This is a " + carClassWord + " car of the " + carDoorWord + " type with " + carTransWord + " and " + carFuelWord + ".";

	console.log(sippCode);
	sipp.innerHTML = sippCode;

	console.log(answer)
});

check.addEventListener("click", function answerChecker() {
	let answerClass = document.getElementById("CC").value;
	let answerDoor = document.getElementById("CD").value;
	let answerTrans = document.getElementById("CT").value;
	let answerFuel = document.getElementById("CF").value;

	let userAnswer = "This is a " + answerClass + " car of the " + answerDoor + " type with " + answerTrans + " and " + answerFuel + ".";

	if (userAnswer === answer) {
		answerCheck.innerHTML = "You are correct!";
		correctAnswer.innerHTML = answer;

		CA = CA+1;
		TA = TA+1;

		let FS = ((CA/TA)*100);

		score.innerHTML = "Based on " + TA + " attempts, your score is: " + FS + "%";
	}
	else if (userAnswer !== answer) {
		answerCheck.innerHTML = "Unfortunately this was not the correct answer. But no worries, you'll get there!";
		correctAnswer.innerHTML = answer;

		WA = WA+1;
		TA = TA+1;

		let FS = ((CA/TA)*100);

		score.innerHTML = "Based on " + TA + " attempts, your score is: " + FS + "%";
	}
});