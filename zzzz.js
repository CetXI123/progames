const input9 = document.getElementById("input9");
const button9 = document.getElementById("button9");
const text9 = document.getElementById("text9");
const text91 = document.getElementById("text91");
const min = 1;
const max = 100;
const ans = Math.floor(Math.random() * (max - min + 1)) + min;

let tries = 0;
let guess;
let run = true;

button9.onclick = function(){

    guess = input9.value;
    guess = Number(guess);

    if(isNaN(guess)){
        document.getElementById("text9").textContent="Enter a valid number";
    }
    else if(guess<min||guess>max){
        document.getElementById("text9").textContent="Enter a number between 1-100";
    }
    else{
        tries++;
        if(guess<ans){
            document.getElementById("text9").textContent="Too low, try again";
        }
        else if(guess>ans){
            document.getElementById("text9").textContent="Too high, try again";
        }
        else if(guess == ans){
            document.getElementById("text9").textContent="Correct";
            document.getElementById("text91").textContent="Attempts: " + tries;
            document.getElementById("text92").textContent="Loading next level...";
            run = false;
            setTimeout(function(){
                location.replace("ind10.html");
            }, 5000);
        }
    }
    if(tries==6){
        location.replace("1nd.html");
    }
}