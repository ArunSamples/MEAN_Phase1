// function first(second){
//     setTimeout(function(){
//         console.log(1);
//         second();
//     },
//     1000)
//     console.log('after settimeout')
    
// }

// function second(){
//     console.log(2);
// }

// first(second);
// second();

// const getTodo = function(callback){
//     setTimeout(function(){

//         // server code
//         callback({text: "data from server"})
//     }, 2000);
// }

// function print(data){
//     console.log(data.text);
// }
// getTodo(print);
// //console.log(data.text);

// getTodo(function (data){
//     console.log(data.text);
// });
let arr = [1,2,3];

arr.forEach(myFunction);

function myFunction(value, index, array){
    // console.log(value);
    // console.log(index);
    // console.log(array);
}

arr.map(value => value*2).forEach(value => console.log(value));

// callbacks, anonymous, asynchronous, arrow functions, method chaining

const addTwoNums = (num1, num2) => num1 + num2

console.log(addTwoNums(1,2));

const sqr = num => num * 2;

console.log(sqr(4));

arr.map(function(value){return value*2}).forEach(function(value){console.log(value)});
