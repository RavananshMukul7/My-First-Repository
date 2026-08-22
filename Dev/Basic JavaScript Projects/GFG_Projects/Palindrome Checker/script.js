const text = document.getElementById("input");
const btn = document.getElementById("check");
const result = document.getElementById("result");

btn.addEventListener("click",()=>{
    let str = text.value;
    str = str.trim();
    const n = str.length;
    let ispalin = true;
    for(let i = 0; i < n/2;i++){
        if(str[i] !== str[n - i - 1]){
            ispalin = false;
            break;
        }
    }

    if(ispalin){
        console.log(10);
        result.textContent = "The String is a Palindrome.";
    }
    else{
        console.log(10);
        result.textContent = "The String is not a Palindrome.";
    }
});