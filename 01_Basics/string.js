let name = "Tejas"
let city = "Pune"
let school = "     primary_School     "

console.log(`Hello, My name is ${name} and I'm Living in ${city}`);

console.log(city.toUpperCase());

console.log(name.substring(0,4));

console.log(school);
console.log(school.trim());

const url = "https://tejas.com/tejas%20shinde"
console.log(url.replace('%20',' '));

console.log(url.includes('shinde')); //if prevent then return true else false

let fruits = "mango banana apple guava grapes";
console.log(fruits.split(' ')); //seapates & takes in a array
