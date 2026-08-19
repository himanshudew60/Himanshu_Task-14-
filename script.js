let greetName = document.getElementById("greetName");
let inputName = document.getElementById("inputname");
let button = document.getElementById("button");
let redbox = document.getElementById("red");
let bluebox = document.getElementById("blue");
let greenbox = document.getElementById("green");
let yellowbox = document.getElementById("yellow");


button.addEventListener("click", ()=>{
    let name = inputName.value;
    greetName.innerText = name;
});

redbox.addEventListener("click", ()=>{
    redbox.style.backgroundColor = "red";
});
bluebox.addEventListener("click", ()=>{
    bluebox.style.backgroundColor = "blue";
});
greenbox.addEventListener("click", ()=>{
    greenbox.style.backgroundColor = "green";
});
yellowbox.addEventListener("click", ()=>{
    yellowbox.style.backgroundColor = "yellow";
}); 