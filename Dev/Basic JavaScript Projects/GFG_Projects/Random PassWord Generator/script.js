const lower = "qwertyuiopasdfghjklzxcvbnm";
const upper = lower.toUpperCase();
const number = "0123456789";
const special = "!@#$%^&*()_+{}|:<>";

function generate(len, up, num, spe){
    let chars = lower;
    if(up) chars += upper;
    if(num) chars += number;
    if(spe) chars += special;
    let res = "";
    for(let i = 0; i <= len; i++){
        let idx = Math.floor(Math.random() * chars.length);
        res += chars[idx];
    }
    console.log(1);
    return res;
}

document.getElementById("gbtn").addEventListener("click",()=>{
    console.log(0);
    const len = parseInt(document.getElementById("len").value);
    const upper = document.getElementById("upper").checked;
    const nums = document.getElementById("nums").checked;
    const special = document.getElementById("special").checked;
    const res = generate(len,upper,nums,special);
    document.getElementById("passOut").textContent = res;
});

document.getElementById("rbtn").addEventListener("click",()=>{
    document.getElementById("len").value = 10;
    document.getElementById("upper").checked = true;
    document.getElementById("nums").checked = true;
    document.getElementById("special").checked = true;
    document.getElementById("passOut").textContent = "Your password will appear here";
});