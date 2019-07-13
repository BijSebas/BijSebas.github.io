/*Recipes*/

const sitskoornSalad = [
	{
		type: "Vegetables",
		name: "Rucola mix",
		quantity: 400,
		unit: "Gr"
	},
	{
		type: "Vegetables",
		name: "Pistachio Mix",
		quantity: 250,
		unit: "Gr"
	},
	{
		type: "Condiments",
		name: "Truffle Mayo",
		quantity: 150,
		unit: "Gr"
	},
	{
		type: "Vegetables",
		name: "Cherry Tomatoes",
		quantity: 250,
		unit: "Gr"
	},
	{
		type: "Vegetables",
		name: "Potatoes",
		quantity: 300,
		unit: "Gr"
	},
	{
		type: "Vegetables",
		name: "Avocado",
		quantity: 2,
		unit: "Pcs"
	},
	{
		type: "Meat",
		name: "Chicken Schnitzel",
		quantity: 2,
		unit: "Pcs"
	},
]

const pastaSpinach = [
	{
		type: "Vegetables",
		name: "Spinach",
		quantity: 1000,
		unit: "Gr"
	},
	{
		type: "Dairy",
		name: "Gorgonzola",
		quantity: 200,
		unit: "Gr"
	},
	{
		type: "Dairy",
		name: "Creme Fraiche",
		quantity: 150,
		unit: "Gr"
	},
	{
		type: "Condiments",
		name: "Dry white wine",
		quantity: 100,
		unit: "Ml"
	},
	{
		type: "Vegetables",
		name: "Wallnuts",
		quantity: 250,
		unit: "Gr"
	},
	{
		type: "Meat",
		name: "Bacon",
		quantity: 300,
		unit: "Gr"
	},
	{
		type: "Pastry",
		name: "Tagliatelle",
		quantity: 400,
		unit: "Gr"
	},
]

const pastaPesto = [
	{
		type: "Vegetables",
		name: "Rucola",
		quantity: 400,
		unit: "Gr"
	},
	{
		type: "Meat",
		name: "Bacon",
		quantity: 400,
		unit: "Gr"
	},
	{
		type: "Vegetables",
		name: "Avocado",
		quantity: 2,
		unit: "Pcs"
	},
	{
		type: "Condiments",
		name: "Pesto",
		quantity: 200,
		unit: "Gr"
	},
	{
		type: "Vegetables",
		name: "Tomatoes",
		quantity: 300,
		unit: "Gr"
	},
	{
		type: "Dairy",
		name: "Mozarella",
		quantity: 300,
		unit: "Gr"
	},
	{
		type: "Pastry",
		name: "Farfelle",
		quantity: 400,
		unit: "Gr"
	},
];

const pastaRedPesto = [
	{
		type: "Pastry",
		name: "Farfelle",
		quantity: 400,
		unit: "Gr"
	},
	{
		type: "Condiments",
		name: "Red Pesto",
		quantity: 200,
		unit: "Gr"
	},
	{
		type: "Meat",
		name: "Chicken Breast",
		quantity: 300,
		unit: "Gr"
	},
	{
		type: "Vegetables",
		name: "Rucola",
		quantity: 400,
		unit: "Gr"
	},
	{
		type: "Vegetables",
		name: "Sun Dried Tomatoes",
		quantity: 200,
		unit: "Gr"
	},
	{
		type: "Vegetables",
		name: "Grilled Paprika",
		quantity: 200,
		unit: "Gr"
	},
	{
		type: "Dairy",
		name: "Yoghurt",
		quantity: 300,
		unit: "Gr"
	},
];

/*DOM manipulators*/

let dishInput = document.getElementById("dishinput");
let dishadd = document.getElementById("adddish");

let veglist =  document.getElementById("Veg");
let conlist =  document.getElementById("Con");
let dailist =  document.getElementById("Dai");
let mealist =  document.getElementById("Mea");
let paslist =  document.getElementById("Pas");

/*List Sections*/

let Vegetables = [];
let Condiments = [];
let Dairy = [];
let Meat = [];
let Pastry = [];

/*Functions*/

dishadd.addEventListener("click", function addDish(dish) {
	
	dish = eval(dishInput.value);

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

	dishInput.value = "";
});


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