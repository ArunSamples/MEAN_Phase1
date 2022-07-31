// var newVal = "new value";
function greeting(){
    var newVal = "modiefied"

    function print(){
        console.log('print called ' + newVal)
    }
    return print;
}
console.log(newVal);
var result = greeting();
(result());