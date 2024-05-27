const check1 = document.getElementById("check1");
const check2 = document.getElementById("check2");
const check3 = document.getElementById("check3");
const check4 = document.getElementById("check4");
const button2 = document.getElementById("button2");
const head2 = document.getElementById("head2");
const head3 = document.getElementById("head3");

button2.onclick = function(){

    if(check1.checked){
        location.replace("1nd.html");
    }
    else if(check2.checked){
        location.replace("1nd.html");
    }
    else if(check4.checked){
        location.replace("1nd.html");
    }
    else if(check3.checked){
        head2.textContent = "Correct"
        head3.textContent = "Loading next level..."
        setTimeout(function(){
            location.replace("ind3.html");
        }, 5000);
    }
}