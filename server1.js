// const fs = require('fs');
// const os = require('os');

// let user = os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile('greting.txt', 'Hi ' + user.username + '!\n', ()=>{
//     console.log('file is created');
// })


// let server = require('./note.js')
console.log("server 1 is available");
const _ = require('lodash');


// let age = server.age
// console.log(age);
// let addtwonumber = server.addtwonumber
// console.log(addtwonumber(age+70 , 29));

let data = ["person" , 1 ,2 ,3 , 2 ,1,3 ,"person","person2", 'name',"age"]
let filter = _.uniq(data)

console.log(filter);

console.log(_.isString(12));

