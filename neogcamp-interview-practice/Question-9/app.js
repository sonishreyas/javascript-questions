const submitbtn = document.querySelector("#submit");
const outputText = document.querySelector("#output");

function errorhandler(error)    {
    console.log(error);
    outputText.innerText = error;
}
function callAPI()  {
    var url = "https://reqres.in/api/unknown/23";
    fetch(url)
    .then(response => response.json())
    .then(json => {
        var outertext = json;
        outputText.innerText = outertext;
    })
    .catch(errorhandler)
}

submitbtn.addEventListener("click",callAPI);