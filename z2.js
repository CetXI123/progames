const input10 = document.getElementById("input10");
const button10 = document.getElementById("button10");
const text10 = document.getElementById("text10");
const text101 = document.getElementById("text101");
let ans;
let attempts = 5;

button10.onclick = function(){

    ans = input10.value;
    ans = String(ans);

    if(ans!=="Hello, nice to meet you, you look like a nerd."){
        document.getElementById("text10").textContent = input10.value + " is wrong answer";
        attempts--
        if(attempts==4){
            document.getElementById("text101").textContent = "Attempts:4";
        }
        else if(attempts==3){
            document.getElementById("text101").textContent = "Attempts:3";
        }
        else if(attempts==2){
            document.getElementById("text101").textContent = "Attempts:2";
        }
        else if(attempts==1){
            document.getElementById("text101").textContent = "Attempts:1";
        }
        else if(attempts==0){
            location.replace("1nd.html");
        }
    }
    else if(ans=="Hello, nice to meet you, you look like a nerd."){
        document.getElementById("text10").textContent = "Correct";
        document.getElementById("text101").textContent = "Loading... Please wait.";
        setTimeout(function(){
            location.replace("levelcom.html");
        }, 5000);
    }
}

