// For variables no longer use ****"var"*****, this is because it has global scope and can cause conflict

//instead use "let" and "const", which have block level scope, which came from es6.

//always use const unless you know you are goign to reassign the variable. It's more secure. 
//const must be assigned on creation.


let age = 30;
console.log(age);

//some primitive data types
//String, boolean, Number, null, undefined

const str = 'a string single or double quotes';
const isBool = true;
const aNumber = 14;
const anotherNumber = 9.79;
const aNull = null;
const anUndefined = undefined;
let alsoUndefined;

console.log(typeof alsoUndefined);
console.log(typeof isBool);
console.log(typeof aNull);

//template literals
const message = `my age is ${aNumber} some other junk is ${anUndefined}`;

console.log(message);

// String functions

console.log(message.split(' '));
//e.g., ["my", "age", "is", "14", "some", "other", "junk", "is", "undefined"]


