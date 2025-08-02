//
console.log("hello javascript");


//let const and var
let a = 10;
const b = 20;
var c = 30;

console.table([a, b, c]);


a= 15; // This is allowed
b= 25; // This will throw an error because b is a constant
c = 35; // This is allowed

console.table([a, c]);

// Output will show the updated values of a and c, but b will remain unchanged