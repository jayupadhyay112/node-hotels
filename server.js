// function callback(){
//     console.log("hii its me JAY");
// }

// const add = function(a , b, callback){
//     let result = a + b;
//     console.log("result :" +result);
//     callback()    
// }
// add(46 , 5 , callback)


const add = function(a , b , Jay){
    let result = a + b
    console.log("result :" +result);
    Jay()
}
    // add(2 , 5 , function(){
    //     console.log("complete the task");
        
    // })

    add(3 , 4, () => {
         console.log("task");
        
    })