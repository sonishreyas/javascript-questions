const input1 = document.querySelector("#input-1");
const input2 = document.querySelector("#input-2");
const add = document.querySelector("#add");
const sub = document.querySelector("#sub");
const mul = document.querySelector("#mul");
const div = document.querySelector("#div");
const output = document.querySelector("#output");

function addition()  {
    var a = Number(input1.value);
    var b = Number(input1.value);
    output.innerText = a+b;
}

function subtraction()   {
    var a = Number(input1.value);
    var b = Number(input1.value);
    output.innerText = a-b;
}

function multiplication()    {
    var a = Number(input1.value);
    var b = Number(input1.value);
    output.innerText = a*b;
}

function division()  {
    var a = Number(input1.value);
    var b = Number(input1.value);
    output.innerText = a/b;
}


add.addEventListener("click",addition);
sub.addEventListener("click",subtraction);
mul.addEventListener("click",multiplication);
div.addEventListener("click",division);

