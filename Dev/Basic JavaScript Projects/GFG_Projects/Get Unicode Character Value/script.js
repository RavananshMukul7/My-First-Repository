const btn = document.getElementById("getUnicode");
const res = document.getElementById("output");
btn.addEventListener("click",(e)=>{
   e.preventDefault();
   console.log(10);
   const char = document.getElementById("charInput").value;
   if(char.length === 0){
       res.textContent = "Please enter a character.";
   }
   else{
       res.textContent = `The unicode Value of ${char} is ${char.codePointAt(0)}`;
   }

})