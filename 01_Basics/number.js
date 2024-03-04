// const score = 400

// const balance = new Number(100)  //defining explicitly
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);

// console.log(balance.toFixed(2));

// const otherNumber = 123.3532
// console.log(otherNumber.toPrecision(4)); //returns presice values

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));  //converts in english formates


// //____________M A T H S_______________
// console.log(Math);

// console.log(Math.abs(-5));     //converts value to +ve from -ve or if +ve then give as it is
// console.log(Math.round(3.7));  //make values round figers
// console.log(Math.ceil(3.1));   //gives upper numvalue if detect any extension like .1 or .3 or .9
// console.log(Math.abs(4.7));    //gives lower numvalue
// console.log(Math.min(3,5,2,7,9)); //returns minvalue
// console.log(Math.max(3,5,2,7,9)); //returns maxvalue

console.log(Math.random()); 

console.log(Math.floor((Math.random()*10)+1));
console.log(Math.floor((Math.random()*10)+1));

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1)) + min);
