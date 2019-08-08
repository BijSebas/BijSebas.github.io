/*DOM Manipulators*/

let thuis = document.getElementById("thuis");
let visie = document.getElementById("visie");
let diensten = document.getElementById("diensten");
let overmij = document.getElementById("overmij");
let contact = document.getElementById("contact");
let kop = document.getElementById("kop");

thuis.addEventListener("click", function(){kop.innerHTML = "Welkom bij Michelle"});
visie.addEventListener("click", function(){kop.innerHTML = "Visie"});
diensten.addEventListener("click", function(){kop.innerHTML = "Diensten"});
overmij.addEventListener("click", function(){kop.innerHTML = "Over mij"});
contact.addEventListener("click", function(){kop.innerHTML = "Contact"});