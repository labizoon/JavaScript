//comparison of datatypes

typeof "hello" // "string"
typeof 42      // "number"
typeof null    // "object" ❗ (quirk!)
typeof []      // "object"
typeof {}      // "object"


Array.isArray([]); // true
Array.isArray({}); // false


"5" == 5     // true
"5" === 5    // false
null == undefined // true
null === undefined // false



//Data types Summary

typeof "hello";     // "string"
typeof 42;          // "number"
typeof true;        // "boolean"
typeof undefined;   // "undefined"
typeof null;        // "object" (quirk in JS)
typeof Symbol();    // "symbol"
typeof BigInt(10);  // "bigint"
typeof {};          // "object"
typeof [];          // "object"
typeof function(){} // "function"

// Primitive types 
let name = "Zara";      // string - 
let age = 22;           // number - 
let isStudent = true;   // boolean 
let x;                  // undefined - 
let y = null;           // null - 
let id = Symbol("id");  // symbol -  
let big = 123n;         // bigint -

// Non-primitive types 
let person = { name: "Zara", age: 22 }; // object - 
let list = [1, 2, 3];                   // array - 
function greet() { console.log("Hi"); } // function - 

