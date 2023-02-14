const name = 'Jenally';
const age = '37';

// Use batticks to create template strings, with const or let value or var inside curly brackets like this ---> ${}
const hello = `I am ${name} and I am ${age} years old.`;   // Declaration depracated, meaning it could still be used but not recommended to use.

console.log(name);
console.log(age);
console.log(hello.toUpperCase()); //Method - has parentheses
console.log(hello.length);  //Property - no parentheses

//  Arrays - variables that hold multiple value; use "Array" constructor
const numbers = new Array(1,2,3,4,5);
console.log(numbers);

// Or use brackets
const fruits = ['apples', 'oranges', 'pears'];
fruits[3] = 'grapes';  //Adds to the array; number in brackets denotes what position to add 

fruits.push('mangos');  // .push adds to the end

fruits.unshift('strawberries'); // .unshift adds to the front of the array

console.log(fruits);
console.log(fruits[1]);  //Arrays are 0 based in all languages

console.log(Array.isArray(fruits)); //True or false whether an array or not
console.log(Array.isArray(hello));

console.log(fruits.indexOf('oranges')); // Gives index of value in an array, but only helpful of values are known


const person = {
    firstName: 'Jenally',
    lastName: 'Cast',
    age: 37,
    hobbies: ['eating', 'Netflix', 'sleeping'],
    address: {
        street: '23 John St',
        city: 'Elizabeth',
        state: 'NJ'
    }
}

console.log(person.hobbies[1]);


// Destructuring  - creates variables/pulls out from embedded values using curly brackets
const { firstName, lastName, address: {city}} = person;
console.log(city);

//  Can add properties 
person.email = 'jenally@gmail.com';
console.log(person);
