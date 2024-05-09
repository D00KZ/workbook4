"use strict";

let lunch = [
    { item: "Steak Fajitas", price: 9.95},
    { item: "Chips and Guacamole", price: 5.25},
    { item: "Sweet Tea", price: 2.79},
];
   
let subtotal = 0;
for (let index = 0; index < lunch.length; index++) {
    const elementMenu = lunch[index];
    console.log(elementMenu);

    subtotal += elementMenu.price
}
console.log(subtotal);
