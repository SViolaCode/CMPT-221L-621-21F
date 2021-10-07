var h1 = document.querySelector(".title");
var p = document.querySelector("#description");
var h3 = document.querySelector("#bossy");
var ul = document.querySelectorAll("li");
var body = document.querySelector("body");


h1.textContent = "Changed title";
p.textContent = "Sam Viola";
h3.textContent = "Please do these things for me."
ul[0].style.color = "blue";
ul[1].style.backgroundColor = "pink";
body.style.backgroundColor = "gray";
ul[3].style.textTransform = "uppercase";
ul[4].classList.add("title");
