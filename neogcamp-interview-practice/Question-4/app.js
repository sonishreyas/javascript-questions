const input = document.querySelector("#input");
const heading1 = document.querySelector("#h1");
const heading2 = document.querySelector("#h2");
const heading3 = document.querySelector("#h3");

const h1button = document.querySelector("#h1-button");
const h2button = document.querySelector("#h2-button");
const h3button = document.querySelector("#h3-button");

function seth1() {
  heading1.innerText = input.value;
}
function seth2() {
  heading2.innerText = input.value;
}
function seth3() {
  heading3.innerText = input.value;
}

h1button.addEventListener("click", seth1);
h2button.addEventListener("click", seth2);
h3button.addEventListener("click", seth3);
