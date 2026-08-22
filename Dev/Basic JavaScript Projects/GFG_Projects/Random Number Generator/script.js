const btn = document.getElementById("generate");
let Min = parseInt(document.getElementById("min").value);
let Max = parseInt(document.getElementById("max").value);
let output = document.getElementById("randomNumber");
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let res = Math.floor(Math.random() * (Max - Min + 1)) + Min;
    output.textContent = `The Random Number is ${res}`;
});

document.getElementById("reset").addEventListener("click",()=>{
    document.getElementById("min").value = 1;
    document.getElementById("max").value = 100;
    output.textContent = "Click the button to  generate";
});