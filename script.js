const container = document.querySelector(".container");
const first = document.getElementById("first");
const second = document.getElementById("second");


const button = document.createElement("button");
button.innerText = "Generate Programming Joke";

container.appendChild(button);

button.addEventListener("click", function(){

first.textContent = "Loading joke...";
second.textContent = "";

fetch("https://v2.jokeapi.dev/joke/Programming")

.then(function(res){
return res.json();
})

.then(function(data){

first.textContent = "";
second.textContent = "";

if(data.type === "single"){
first.textContent = data.joke;
}else{
first.textContent = data.setup;
second.textContent = data.delivery;
}

});

});
