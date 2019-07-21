/*Recipes*/

const sitskoornSalad = [
	{type: "Vegetables", name: "Rucola mix", quantity: 400, unit: "Gr"},
	{type: "Vegetables", name: "Pistachio Mix", quantity: 250, unit: "Gr"},
	{type: "Vegetables", name: "Cherry Tomatoes", quantity: 250, unit: "Gr"},
	{type: "Vegetables", name: "Potatoes", quantity: 300, unit: "Gr"},
	{type: "Vegetables", name: "Avocado", quantity: 2, unit: "Pcs"},
	{type: "Condiments", name: "Truffle Mayo", quantity: 150, unit: "Gr"},
	{type: "Meat", name: "Chicken Schnitzel", quantity: 2, unit: "Pcs"},
];

let ss = document.getElementById("ss");
ss.addEventListener("click", function () {
	dishName = ss.innerHTML;
	bdish = sitskoornSalad;
	addDish();
});

const boerenKool = [
	{type: "Vegetables", name: "Boeren kool", quantity: 500, unit: "Gr"},
	{type: "Vegetables", name: "Potatoes", quantity: 300, unit: "Gr"},
	{type: "Condiments", name: "Picalilly", quantity: 50, unit: "Gr"},
	{type: "Condiments", name: "Gravy", quantity: 150, unit: "Ml"},
	{type: "Meat", name: "Rookworst", quantity: 1, unit: "Pcs"},
];

let bk = document.getElementById("bk");
bk.addEventListener("click", function () {
	dishName = bk.innerHTML;
	bdish = boerenKool;
	addDish();
});

const pastaSpinach = [
	{type: "Vegetables", name: "Spinach", quantity: 1000, unit: "Gr"},
	{type: "Vegetables", name: "Walnuts", quantity: 250, unit: "Gr"},
	{type: "Condiments", name: "Dry white wine", quantity: 100, unit: "Ml"},
	{type: "Dairy", name: "Gorgonzola", quantity: 200, unit: "Gr"},
	{type: "Dairy", name: "Creme Fraiche", quantity: 150, unit: "Gr"},
	{type: "Meat", name: "Bacon", quantity: 300, unit: "Gr"},
	{type: "Pastry", name: "Tagliatelle", quantity: 400, unit: "Gr"},
];

let ps = document.getElementById("ps");
ps.addEventListener("click", function () {
	dishName = ps.innerHTML;
	bdish = pastaSpinach;
	addDish();
});

const pastaPesto = [
	{type: "Vegetables", name: "Rucola", quantity: 400,	unit: "Gr"},
	{type: "Vegetables", name: "Tomatoes", quantity: 300, unit: "Gr"},
	{type: "Vegetables", name: "Avocado", quantity: 2, unit: "Pcs"},
	{type: "Condiments", name: "Pesto", quantity: 200, unit: "Gr"},
	{type: "Dairy", name: "Mozarella", quantity: 300, unit: "Gr"},
	{type: "Meat", name: "Bacon", quantity: 400, unit: "Gr"},
	{type: "Pastry", name: "Farfalle", quantity: 400, unit: "Gr"},
];

let pp = document.getElementById("pp");
pp.addEventListener("click", function () {
	dishName = pp.innerHTML;
	bdish = pastaPesto;
	addDish();
});

const pastaRedPesto = [
	{type: "Vegetables", name: "Rucola", quantity: 400, unit: "Gr"},
	{type: "Vegetables", name: "Sun Dried Tomatoes", quantity: 200, unit: "Gr"},
	{type: "Vegetables", name: "Grilled Paprika", quantity: 200, unit: "Gr"},
	{type: "Vegetables", name: "Pine nuts", quantity: 200, unit: "Gr"},
	{type: "Condiments", name: "Red Pesto", quantity: 200, unit: "Gr"},
	{type: "Dairy", name: "Yoghurt", quantity: 300, unit: "Gr"},
	{type: "Meat", name: "Chicken Breast", quantity: 300, unit: "Gr"},
	{type: "Pastry", name: "Farfalle", quantity: 400, unit: "Gr"},
];

let prp = document.getElementById("prp");
prp.addEventListener("click", function () {
	dishName = prp.innerHTML;
	bdish = pastaRedPesto;
	addDish();
});

/*DOM manipulators*/

let bdish = "";

let dishInput = document.getElementById("dishinput");
let dishadd = document.getElementById("adddish");

let dishlist = document.getElementById("dishlist");

let veglist =  document.getElementById("Veg");
let conlist =  document.getElementById("Con");
let dailist =  document.getElementById("Dai");
let mealist =  document.getElementById("Mea");
let paslist =  document.getElementById("Pas");

/*List Sections*/

let Dishes = [];

let Vegetables = [];
let Condiments = [];
let Dairy = [];
let Meat = [];
let Pastry = [];

/*Functions*/

function addDish(dish) {
	
	dish = eval(bdish);

	Dishes.push(dish);
	dishDisplay();

	for (let i = 0; i < dish.length; i++) {

		let ingredient = dish[i];
		let nam = dish[i].name;
		let qua = dish[i].quantity;
		let uni = dish[i].unit;
		let typ = eval(dish[i].type);

		function inList() {
			for (let z = 0; z < typ.length; z++) {
				if (typ[z].name === nam) {
					return true;
				}
			}
		};

		function valueAdd() {
			for (let y = 0; y < typ.length; y++) {

				quan = typ[y].quantity;

				if (typ[y].name === nam) {
					typ[y].quantity = quan + qua;
				}
			}
		};

		if (dish[i].type === dish[i].type) {

			if (inList()!== true){
				typ.push(ingredient);
			}
			else if (inList()===true){
				valueAdd();
			}
		}
	};
	vegDisplay();
	conDisplay();
	daiDisplay();
	meaDisplay();
	pasDisplay();
};

function dishDisplay() {
		
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(dishName));
	dishlists.appendChild(li);
};

function vegDisplay() {

	vegRemove();

	for (let z = 0; z < Vegetables.length; z++) {
		
		let li = document.createElement("li");
		li.appendChild(document.createTextNode(Vegetables[z].name + " " + Vegetables[z].quantity + " " + Vegetables[z].unit));
		veglist.appendChild(li);
	}
};

function conDisplay() {

	conRemove();

	for (let z = 0; z < Condiments.length; z++) {
		
		let li = document.createElement("li");
		li.appendChild(document.createTextNode(Condiments[z].name + " " + Condiments[z].quantity + " " + Condiments[z].unit));
		conlist.appendChild(li);
	}
};

function daiDisplay() {

	daiRemove();

	for (let z = 0; z < Dairy.length; z++) {
		
		let li = document.createElement("li");
		li.appendChild(document.createTextNode(Dairy[z].name + " " + Dairy[z].quantity + " " + Dairy[z].unit));
		dailist.appendChild(li);
	}
};

function meaDisplay() {

	meaRemove();

	for (let z = 0; z < Meat.length; z++) {
		
		let li = document.createElement("li");
		li.appendChild(document.createTextNode(Meat[z].name + " " + Meat[z].quantity + " " + Meat[z].unit));
		mealist.appendChild(li);
	}
};

function pasDisplay() {

	pasRemove();

	for (let z = 0; z < Pastry.length; z++) {
		
		let li = document.createElement("li");
		li.appendChild(document.createTextNode(Pastry[z].name + " " + Pastry[z].quantity + " " + Pastry[z].unit));
		paslist.appendChild(li);
	}
};

function vegRemove() {
	while (veglist.hasChildNodes()) {
      veglist.removeChild(veglist.firstChild);
    }
};

function conRemove() {
	while (conlist.hasChildNodes()) {
      conlist.removeChild(conlist.firstChild);
    }
};

function daiRemove() {
	while (dailist.hasChildNodes()) {
      dailist.removeChild(dailist.firstChild);
    }
};

function meaRemove() {
	while (mealist.hasChildNodes()) {
      mealist.removeChild(mealist.firstChild);
    }
};

function pasRemove() {
	while (paslist.hasChildNodes()) {
      paslist.removeChild(paslist.firstChild);
    }
};

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("menutab").click();