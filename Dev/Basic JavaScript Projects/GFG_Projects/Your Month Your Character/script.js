const arr = ["Optimus Prime", "Captain America", "Darth Wader", "Soldier Boy", "Superman","Billy Butcher", "Batman","Homelander","JohnWick","Megatron","Walter White","Dexrter Morgan"];
const name = document.getElementById("name").value;
const month = document.getElementById("BMonth").value;
const btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
    let len = name.length + month.length;
    len = Math.floor(len  * 145682967) % 12;
    document.getElementById('result').textContent = arr[len];
});
