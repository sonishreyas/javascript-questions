const input = document.querySelector("#input");
const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");

function changeColor(name) {
  input.style.color = name;
}

function makeRed() {
  changeColor("red");
}

function makeGreen() {
  changeColor("green");
}

function makeBlue() {
  changeColor("blue");
}

red.addEventListener("click", makeRed);
green.addEventListener("click", makeGreen);
blue.addEventListener("click", makeBlue);
