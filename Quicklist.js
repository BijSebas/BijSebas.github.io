/*Recipes*/
let pastaPesto = [
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

let pastaRedPesto = [
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

/*functions*/

dishadd.addEventListener("click", function addDish(dish) {
	
	dish = eval(dishInput.value);

	for (let i = 0; i < dish.length; i++) {
		if (dish[i].type === "Vegetables") {
			Vegetables.push(dish[i]);
			let li = document.createElement("li");
			li.appendChild(document.createTextNode(dish[i].name + " " + dish[i].quantity + " " + dish[i].unit));
			veglist.appendChild(li);
		}

		else if (dish[i].type === "Condiments") {
			Condiments.push(dish[i]);
			let li = document.createElement("li");
			li.appendChild(document.createTextNode(dish[i].name + " " + dish[i].quantity + " " + dish[i].unit));
			conlist.appendChild(li);
		}

		else if (dish[i].type === "Dairy") {
			Dairy.push(dish[i]);
			let li = document.createElement("li");
			li.appendChild(document.createTextNode(dish[i].name + " " + dish[i].quantity + " " + dish[i].unit));
			dailist.appendChild(li);
		}

		else if (dish[i].type === "Meat") {
			Meat.push(dish[i]);
			let li = document.createElement("li");
			li.appendChild(document.createTextNode(dish[i].name + " " + dish[i].quantity + " " + dish[i].unit));
			mealist.appendChild(li);
		}

		else if (dish[i].type === "Pastry") {
			Pastry.push(dish[i]);
			let li = document.createElement("li");
			li.appendChild(document.createTextNode(dish[i].name + " " + dish[i].quantity + " " + dish[i].unit));
			paslist.appendChild(li);
		}
	};
});