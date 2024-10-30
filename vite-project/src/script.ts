

const freight = document.getElementById("freight") as HTMLInputElement;
const price = document.getElementById("price") as HTMLInputElement;
const totalPrice = document.getElementById("totalPrice") as HTMLElement;

function calculateTotalPrice(frakt:number, pris:number) {
    totalPrice.innerText = (frakt+pris).toString()
}

function onRecalculate(){
    calculateTotalPrice(parseInt(freight.value), parseInt(price.value));
}

price.addEventListener("input", onRecalculate);
freight.addEventListener("input", onRecalculate);