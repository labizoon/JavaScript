//Strings in js (PART-1)
//🔤 What is a String?

//A string is a sequence of characters enclosed in quotes:
//```js
let name = "Zara";
let greeting = 'Hello';
let message = `Welcome, ${name}!`; // Template literal
console.log(greeting); // Output: Hello
console.log(message);// Output: Welcome, Zara!


//🔤 String methods
// Strings have many built-in methods for manipulation:
let text = "Hello, World!";
console.log(text.length); // Output: 13
console.log(text.toUpperCase()); // Output: HELLO, WORLD!
console.log(text.toLowerCase()); // Output: hello, world!
console.log(text.indexOf("World")); // Output: 7
console.log(text.slice(0, 5)); // Output: Hello