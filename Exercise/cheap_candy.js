"use strict";

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    // TODO: fill the array with 10 candies of various
    // price ranges
   ];
   
//PT. 1

//   let cheapCandy = []
// for (let index = 0; index < products.length; index++) {
//     const candy = products[index];
    
//     if (candy.price <= 4) {
//         cheapCandy.push(candy)
        
//     }
// }
// console.log(cheapCandy);
// console.log();

//PT. 2
// Which candies has "M&M" its name?

let candyNamedMMs = [];
for (let index = 0; index < products.length; index++) {
    const candy = products[index];
    if (candy.product.includes("M&Ms")) {
        candyNamedMMs.push(candy);
    }
}

console.log(candyNamedMMs);