function getPromise(URL){
    let promise = new Promise(function(resolve, reject){
        let req = new XMLHttpRequest();

        req.open("GET", URL, true);

        req.onload = function(){
            if(req.status == 200){
                resolve(req.response);
            }
            else{
                reject("There is an error");
            }
        }
        req.send();
    })

    return promise;

}

const URL = "https://pokeapi.co/api/v2/pokemon-bad";

let promise = getPromise(URL);

const consumer = () =>{
    alert("consumer");
    promise.then(result => document.getElementById("p1").innerHTML = result)
    .catch(function(error){
        document.getElementById("p1").innerHTML = error;

    })
}

consumer();

//fetch api
fetch(URL).then(response => response.json())
.then(result => console.log(result));