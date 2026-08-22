let incCount = 0;
let decCount = 0;
let count = 0;
function inc(){
    count++; incCount++;
    const count1 = document.getElementById("count");
    count1.textContent = `${count}`;
    const incC = document.getElementById("incCount");
    incC.textContent = `${incCount}`;
}
function dec(){
    count--; decCount++;
    const count1 = document.getElementById("count");
    count1.textContent = `${count}`;
    const decC = document.getElementById("decCount");
    decC.textContent = `${decCount}`;
}