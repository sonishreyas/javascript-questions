const inputText = document.querySelector("#input");
const outputText = document.querySelector("#output");
const buttonSub = document.querySelector("#submitbtn");


function errorhandler(error)    {
    console.log("error occured", error);
    alert("There is something wrong with the server...")
}
function callAPI()  {
    var url = "https://reqres.in/api/users/2";
    fetch(url)
    .then(response => response.json())
    .then(json => {
        var outputtext = json.data.first_name;
        outputText.innerText = outputtext;
    })
}

buttonSub.addEventListener("click",callAPI);

