
const loadingButton = document.querySelector("#loading");
const heading = document.querySelector("#message");

function clickHandler() {
  heading.innerText = "";
}

loadingButton.addEventListener("click", clickHandler);
