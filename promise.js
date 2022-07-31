function myAsyncFunction(name){
    return new Promise(function(resolve, reject){
        if(name === "arun"){
            resolve("Promise resolved");
        } else {
            reject("Promise rejected");
        }
    })
}

myAsyncFunction("arun").then(function(resolve){
    console.log(resolve);
}).catch(function(val){
    console.log(val);
});