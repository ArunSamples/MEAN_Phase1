
let arr = [1,2,3];
for (let index = 0; index < arr.length; index++) {
   console.log(arr[index])
    
}
arr.pop()
console.log(arr);
console.log(typeof(arr))


function sum(num1, num2){
    num1();
    num1();
    num2();
}

function show(){
    console.log('show function called')
}

function print(){
    console.log('print function called')
}

sum(show, print);