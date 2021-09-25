const inputText = document.querySelector("#input");
const add = document.querySelector("#add");
const sub = document.querySelector("#sub");

function adjustFontSize(factor) {
  var style = window.getComputedStyle(inputText).getPropertyValue("font-size");
  var currentSize = parseFloat(style);
  currentSize += factor;
  inputText.style.fontSize = currentSize.toString() + "px";
  console.log(inputText.style.fontSize);
}
function increase() {
  adjustFontSize(200);
}
function decrease() {
  adjustFontSize(-10);
}
add.addEventListener("click", increase);
sub.addEventListener("click", decrease);