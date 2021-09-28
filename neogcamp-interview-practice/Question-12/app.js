const password = document.querySelector("#password");
const buttonsub = document.querySelector("#button");
const output = document.querySelector("#output");

function checkPassword()    {
    var pass = password.value;
    console.log(pass,password);
    if (pass.length<10)    {
        output.style.color = "red";
        output.innerText = "Error!! Password should be atleast 10 characters"
    }   else{
        output.style.color = "green";
        buttonsub.style.display = "none";
        output.innerText = "Success!!";
    }
}

buttonsub.addEventListener("click",checkPassword);