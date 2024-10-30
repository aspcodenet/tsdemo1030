// // PROBLEM MED JAVASCRIPT

// // fel i runtime!!!! PRODUKTION Kunden blir lidande
// //När man kör

// // SYNTAXFEL : fånga upp i utvecklingsfasen?

// // ändra datatyp = sannolikt fel?
// // javascript är typat! Men det är DYNAMISKT TYPAT
let cost = 12;
// ... 1000 rader senare
//let costPeople = "kalle"
cost = "Kalle";

//cost = 12
let isOk;
isOk = false;
let namnen = ["Stefan", "Kalle"];

// // //funktionsheader är inte självdokumenterande! Inga datatyper på parametrar, inget return
// function canIBuyBeer(age,location,promille)   {
//  //... 
//  return "2341342"
// }
const freight = document.getElementById("freight");
const price = document.getElementById("price");
const totalPrice = document.getElementById("totalPrice");

function calculateTotalPrice(frakt, pris) {
    totalPrice.innerText = frakt + pris
}

function onRecalculate() {
    calculateTotalPrice(freight.value, price.value);
}
price.addEventListener("input", onRecalculate);
freight.addEventListener("input", onRecalculate);
