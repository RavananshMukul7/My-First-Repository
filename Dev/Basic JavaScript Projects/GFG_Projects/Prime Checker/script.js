const text = document.getElementById("input");
const res = document.getElementById("result");
function cPrime(){
    let num = parseInt(text.value);
    if(isNaN(num) || num < 0){
        res.textContent = "Please Enter a valid Number.";
    }
    else{
        let isPrime = true;
        for(let i = 2; i * i <= num; i++ ){
            if(num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if(isPrime){
            res.textContent = "The Number is Prime.";
        }
        else{
            res.textContent = "The Number is Composite.";
        }
    }
}