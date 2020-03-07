const userName = prompt("Enter your name:");
const product1Name = prompt("Enter the name of your first product:");
let product1Price = prompt("Enter the price of your first product: $");

if ( product1Price <= 0 ) {
    alert ("Enter a valid price greater than $0.00 for your first product.")
    product1Price = prompt ("Enter the price of your first product: $");
}

let product2Name = prompt("Enter the name of your second product:");
let product2Price = prompt("Enter the price of your second product: $");

if ( product2Price <= 0 ) {
    alert ("Enter a valid price greater than $0.00 for your second product.");
    product2Price = prompt ("Enter the price of your second product: $");
}

let product3Name = prompt("Enter the name of your third product:");
let product3Price = prompt("Enter the price of your third product: $");

if ( product3Price <= 0 ) {
    alert ("Enter a valid price greater than $0.00 for your third product.");
    product3Price = prompt("Enter the price of your third product: $");
}

let subtotal = ( Number(product1Price) + Number(product2Price) + Number(product3Price) );
console.log("Subtotal: $" + subtotal.toFixed(2) );

let grandTotal = (Number(subtotal) * 1.0625);
alert (userName + ", your grand total is: $" + grandTotal.toFixed(2) );