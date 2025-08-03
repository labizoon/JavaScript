//Dataypes in JavaScript
let a;
console.log(typeof a); // "undefined"


let b = null;
console.log(typeof b); // "object" (quirk of JavaScript)


let isReady = true;
console.log(typeof isReady); // "boolean"


let name = "Copilot";
console.log(typeof name); // "string"


let id = Symbol("uniqueId");
console.log(typeof id); // "symbol"


let age = 25;
console.log(typeof age); // "number"


let bigNumber = 123456789012345678901234567890n;
console.log(typeof bigNumber); // "bigint"



let user = {
  name: "Copilot",
  age: 25,
  isAI: true
};
console.log(typeof user); // "object"