/*DOM selectors*/

let coun = document.getElementById("country");
let supp = document.getElementById("supplier");
let layout = document.getElementById("layout");

let supincou = document.getElementById("supincou")
let por = document.getElementById("portal");
let fir = document.getElementById("1st");
let sec = document.getElementById("2nd");
let thi = document.getElementById("3rd");

let button = document.getElementById("button");


/*Variables*/

let country = "";
let supplier = "";

button.addEventListener("click", function cont() {
	supplier = supp.value;
	country = coun.value;

	for (let i = 0; i < contacts.length; i++) { 
	  	if (country === contacts[i].count && supplier === contacts[i].suppl) {
	  		supincou.innerHTML = "<img id='logo' src='"+supp.value+".jpg'>" + coun.value;
	  		por.innerHTML = ""+contacts[i].portal;
	  		fir.innerHTML = ""+contacts[i].first;
	  		sec.innerHTML = ""+contacts[i].second;
	  		thi.innerHTML = ""+contacts[i].third;
	  		supp.value = "";
	  		coun.value = "";
	  	};
	};
});

const contacts = [
	{suppl:"Avis",count:"Cyprus (CY)",portal:"www.avis_portal.com",first:"cs@avis.cy",second:"N/A",third:"N/A"},
	{suppl:"Avis",count:"France (FR)",portal:"www.avis_portal.com",first:"cs@avis.fr",second:"N/A",third:"N/A"},
	{suppl:"Avis",count:"Germany (DE)",portal:"www.avis_portal.com",first:"cs@avis.de",second:"N/A",third:"N/A"},
	{suppl:"Avis",count:"Greece (GR)",portal:"www.avis_portal.com",first:"cs@avis.gr",second:"N/A",third:"N/A"},
	{suppl:"Avis",count:"Ireland (IE)",portal:"www.avis_portal.com",first:"cs@avis.ie",second:"N/A",third:"N/A"},
	{suppl:"Avis",count:"Italy (IT)",portal:"www.avis_portal.com",first:"cs@avis.it",second:"N/A",third:"N/A"},
	{suppl:"Avis",count:"Spain (ES)",portal:"www.avis_portal.com",first:"cs@avis.es",second:"N/A",third:"N/A"},

	{suppl:"Budget",count:"Cyprus (CY)",portal:"www.budget_portal.com",first:"cs@budget.cy",second:"N/A",third:"N/A"},
	{suppl:"Budget",count:"France (FR)",portal:"www.budget_portal.com",first:"cs@budget.fr",second:"N/A",third:"N/A"},
	{suppl:"Budget",count:"Germany (DE)",portal:"www.budget_portal.com",first:"cs@budget.de",second:"N/A",third:"N/A"},
	{suppl:"Budget",count:"Greece (GR)",portal:"www.budget_portal.com",first:"cs@budget.gr",second:"N/A",third:"N/A"},
	{suppl:"Budget",count:"Ireland (IE)",portal:"www.budget_portal.com",first:"cs@budget.ie",second:"N/A",third:"N/A"},
	{suppl:"Budget",count:"Italy (IT)",portal:"www.budget_portal.com",first:"cs@budget.it",second:"N/A",third:"N/A"},
	{suppl:"Budget",count:"Spain (ES)",portal:"www.budget_portal.com",first:"cs@budget.es",second:"N/A",third:"N/A"},

	{suppl:"Dollar",count:"Cyprus (CY)",portal:"N/A",first:"cs@dollar.cy",second:"N/A",third:"N/A"},
	{suppl:"Dollar",count:"France (FR)",portal:"N/A",first:"cs@dollar.fr",second:"N/A",third:"N/A"},
	{suppl:"Dollar",count:"Germany (DE)",portal:"N/A",first:"cs@dollar.de",second:"N/A",third:"N/A"},
	{suppl:"Dollar",count:"Greece (GR)",portal:"N/A",first:"cs@dollar.gr",second:"N/A",third:"N/A"},
	{suppl:"Dollar",count:"Ireland (IE)",portal:"N/A",first:"cs@dollar.ie",second:"N/A",third:"N/A"},
	{suppl:"Dollar",count:"Italy (IT)",portal:"N/A",first:"cs@dollar.it",second:"N/A",third:"N/A"},
	{suppl:"Dollar",count:"Spain (ES)",portal:"N/A",first:"cs@dollar.es",second:"N/A",third:"N/A"},

	{suppl:"Easirent",count:"Cyprus (CY)",portal:"www.easirent_portal.com",first:"cs@easirent.cy",second:"N/A",third:"N/A"},
	{suppl:"Easirent",count:"France (FR)",portal:"www.easirent_portal.com",first:"cs@easirent.fr",second:"N/A",third:"N/A"},
	{suppl:"Easirent",count:"Germany (DE)",portal:"www.easirent_portal.com",first:"cs@easirent.de",second:"N/A",third:"N/A"},
	{suppl:"Easirent",count:"Greece (GR)",portal:"www.easirent_portal.com",first:"cs@easirent.gr",second:"N/A",third:"N/A"},
	{suppl:"Easirent",count:"Ireland (IE)",portal:"www.easirent_portal.com",first:"cs@easirent.ie",second:"N/A",third:"N/A"},
	{suppl:"Easirent",count:"Italy (IT)",portal:"www.easirent_portal.com",first:"cs@easirent.it",second:"N/A",third:"N/A"},
	{suppl:"Easirent",count:"Spain (ES)",portal:"www.easirent_portal.com",first:"cs@easirent.es",second:"N/A",third:"N/A"},

	{suppl:"Goldcar",count:"Cyprus (CY)",portal:"www.goldcar_portal.com",first:"cs@goldcar.cy",second:"N/A",third:"N/A"},
	{suppl:"Goldcar",count:"France (FR)",portal:"www.goldcar_portal.com",first:"cs@goldcar.fr",second:"N/A",third:"N/A"},
	{suppl:"Goldcar",count:"Germany (DE)",portal:"www.goldcar_portal.com",first:"cs@goldcar.de",second:"N/A",third:"N/A"},
	{suppl:"Goldcar",count:"Greece (GR)",portal:"www.goldcar_portal.com",first:"cs@goldcar.gr",second:"N/A",third:"N/A"},
	{suppl:"Goldcar",count:"Ireland (IE)",portal:"www.goldcar_portal.com",first:"cs@goldcar.ie",second:"N/A",third:"N/A"},
	{suppl:"Goldcar",count:"Italy (IT)",portal:"www.goldcar_portal.com",first:"cs@goldcar.it",second:"N/A",third:"N/A"},
	{suppl:"Goldcar",count:"Spain (ES)",portal:"www.goldcar_portal.com",first:"cs@goldcar.es",second:"N/A",third:"N/A"},

	{suppl:"SIXT",count:"Cyprus (CY)",portal:"N/A",first:"cs@sixt.cy",second:"N/A",third:"N/A"},
	{suppl:"SIXT",count:"France (FR)",portal:"N/A",first:"cs@sixt.fr",second:"N/A",third:"N/A"},
	{suppl:"SIXT",count:"Germany (DE)",portal:"N/A",first:"cs@sixt.de",second:"N/A",third:"N/A"},
	{suppl:"SIXT",count:"Greece (GR)",portal:"N/A",first:"cs@sixt.gr",second:"N/A",third:"N/A"},
	{suppl:"SIXT",count:"Ireland (IE)",portal:"N/A",first:"cs@sixt.ie",second:"N/A",third:"N/A"},
	{suppl:"SIXT",count:"Italy (IT)",portal:"N/A",first:"cs@sixt.it",second:"N/A",third:"N/A"},
	{suppl:"SIXT",count:"Spain (ES)",portal:"N/A",first:"cs@sixt.es",second:"N/A",third:"N/A"},

	{suppl:"Thrifty",count:"Cyprus (CY)",portal:"N/A",first:"cs@thrifty.cy",second:"N/A",third:"N/A"},
	{suppl:"Thrifty",count:"France (FR)",portal:"N/A",first:"cs@thrifty.fr",second:"N/A",third:"N/A"},
	{suppl:"Thrifty",count:"Germany (DE)",portal:"N/A",first:"cs@thrifty.de",second:"N/A",third:"N/A"},
	{suppl:"Thrifty",count:"Greece (GR)",portal:"N/A",first:"cs@thrifty.gr",second:"N/A",third:"N/A"},
	{suppl:"Thrifty",count:"Ireland (IE)",portal:"N/A",first:"cs@thrifty.ie",second:"N/A",third:"N/A"},
	{suppl:"Thrifty",count:"Italy (IT)",portal:"N/A",first:"cs@thrifty.it",second:"N/A",third:"N/A"},
	{suppl:"Thrifty",count:"Spain (ES)",portal:"N/A",first:"cs@thrifty.es",second:"N/A",third:"N/A"},
];



