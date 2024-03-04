//Objects

const mySym = Symbol("key1");

const info = {
  name: "coderCastor",
  age: 28,
  mob_num: 789891310,
  gender: "male",
  [mySym]: "mykey1",
  live: true,
  last_login_days: ["Sunday", "Monday"],
  Country: "India",
};

//ways of accessing the data
console.log(info.name);
console.log(info["age"]); //passed value should be string i.e "age" not age.

//accessing country there is only one way i.e use string method for accessing data.
console.log(info["Country"]);

//accessing symbol
console.log(info[mySym]);

//for freezing the object
// Object.freeze(info);
// info.name = "ram";
console.log(info.name);


//creating a function
info.welcome = function(){
    console.log("Hello I'm Programmer");
}
console.log(info.welcome);
console.log(info.welcome());

info.welcomeback = function(){
    console.log(`Hi I'm Developer ${this.name}`);
}

console.log(info.welcomeback());