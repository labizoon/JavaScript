//Datatype conversion

let str = "100";
let num = Number(str);
console.log(num); // Output: 100


let age = 25;
let ageStr = String(age);
console.log(ageStr); // Output: "25"


let isEmpty = Boolean("");
console.log(isEmpty); // Output: false



let sum = "5" + 2;
console.log(sum); // Output: "52"


let difference = "5" - 2;
console.log(difference); // Output: 3


let total = true + 1;
console.log(total); // Output: 2


let value = "123.45";

// Convert string to integer
let intValue = parseInt(value); // Output: 123

// Convert string to float
let floatValue = parseFloat(value); // Output: 123.45

// Check type
console.log(typeof intValue);     // "number"
console.log(typeof floatValue);   // "number"