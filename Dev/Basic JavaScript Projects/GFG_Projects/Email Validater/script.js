const text = document.getElementById("email");
const errMsg = document.getElementById("error-message");
const btn = document.getElementById("submit");
let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    const val = text.value;
    if(regex.test(val)){
        errMsg.style.display = "block";
        errMsg.textContent = "";
        alert("Email is Valid, Form Submitted.");
        document.getElementById("emailForm").reset();
    }
    else{
        errMsg.style.display = "block";
        errMsg.textContent = "Please Enter Valid Email Address.";
    }
    
});
