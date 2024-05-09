"use strict";

let firstNames = ["Chris", "John", "Alec", "Juan", "Mikasa"]

console.log(firstNames[0]);
console.log(firstNames[4]);
console.log(firstNames[2]);

console.log("My name is " + firstNames[0] + "." + " And my first names are... " + firstNames[3], firstNames[2], firstNames[1] + " and " + firstNames[4] + "!");

firstNames.push("John")
console.log(firstNames[5]);

let numOfNames = firstNames.length
console.log(numOfNames);

let index = firstNames.indexOf("John");
console.log(index);