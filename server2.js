// Convert String to Object
const jsonString = `{"name" : "Jay", "age" : 24, "city" : "Lucknow"}`;
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name);
// console.log(typeof jsonString);

// Convert Object to String

const objectToS = {
    name : "Karan",
    age : 25,
    city : "Mumbai",
}
// console.log(typeof objectToS);

const stringToobject = JSON.stringify(objectToS)
console.log(stringToobject);
