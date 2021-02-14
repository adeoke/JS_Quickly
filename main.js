// For variables no longer use ****"var"*****, this is because it has global scope and can cause conflict

//instead use "let" and "const", which have block level scope, which came from es6.

//always use const unless you know you are goign to reassign the variable. It's more secure. 
//const must be assigned on creation.
//NB, CONST ALLOWS MANIPULATION BUT NOT REASSIGNMENT!!!!! VERY IMPORTANT


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


// Arrays.
// the old, very uncommon way to define an array is below:

const strArray = new Array('tom', 'harry', 'ricahrd');
console.log(strArray);

//the more common way to write an array:
const anotherStrArray = ['dan', 'stan', 'steve'];
console.log(anotherStrArray);

//OBJECT LITERALS


const person = {
    firstName: 'Sam',
    lastName: 'Smith',
    age: 30,
    hobbies: ['painting', 'reading', 'football'],
    address: {
        doorNumber: 7,
        city: 'London',
        street: 'casor street',
        postCode: 'E1 4NS'
    }
}

console.log(person);
console.log(person.hobbies[0]);
console.log(person.address.city);


//Destructuring:

const {firstName, lastName, address: {city}} = person;

console.log(`using destructuring this is the persons firstname: ${firstName} and lastname: ${lastName}`);
console.log(`here is the city from the embedded object '${city}'`);

//also add new properties to the person

person.email = 'example@example.com';

console.log(`the person's email is: ${person.email}`);


//list of object literals to json object:

const cars = [
    {
        name: 'honda',
        engineType: 'hybrid',
        yearMade: 2016
    },
    {
        name: 'tesla',
        engineType: 'electric',
        yearMade: 2020
    },
    {
        name: 'Audi',
        engineType: 'diesel',
        yearMade: 2014
    }
]

const carsJSON = JSON.stringify(cars);
console.log(carsJSON);

console.log(`NOTE THAT THIS IS NOW A STRING SO NO CAPABILITY TO PLUCK VALUES OUT BY INDEX ETC: ${carsJSON}`);


//FOR LOOP

for (i=0; i<10; i++) {
    console.log(`this is the value of i: ${i}`);
}

// wHILE LOOP

while(i<10){
    console.log(`this is the vsalue of i ${i}`);
    i++;
}

//FOR OF LOOP

for(let item of cars){
    console.log(item.name);
}
