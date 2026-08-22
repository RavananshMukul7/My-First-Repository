const text = document.getElementById("passes");
let flag = true;
const eye_icon = document.getElementById("eye-icon");

eye_icon.addEventListener(('click'),()=>{
   if(flag){
      text["type"] = "text";
      flag = false;
      eye_icon.textContent = "🙉"
   }
   else{
      text["type"] = "password";
      flag = true;
      eye_icon.textContent = "👁️"
   }
});