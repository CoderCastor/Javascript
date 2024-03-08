//singletone object
// const boj1 = new Object()

//non-singleton object
const obj = {};

obj.name = "codercastor";
obj.class = "master";
obj.mode = "agressive";

console.log(obj);


const info = {
    ratnagiri: {
        taluka : {
            taluka : "lanja",
            village : {
                vil : "javade"
            }
        }
    }
}

console.log(info.ratnagiri.taluka.village.vil);