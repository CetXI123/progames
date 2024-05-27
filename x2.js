const btn1 = document.getElementById("butinind31");
const btn2 = document.getElementById("butinind32");
const btn3 = document.getElementById("butinind33");
const btn4 = document.getElementById("butinind34");
const head1 = document.getElementById("head1");
const head2 = document.getElementById("head2");

function replace(){
    location.replace("1nd.html")
}

btn1.onclick = function(){
    replace();
}
btn2.onclick = function(){
    head1.textContent = "Correct";
    head2.textContent = "Loading next stage..."
    setTimeout(function(){
        location.replace("ind4.html");
    }, 5000);
}
btn3.onclick = function(){
    replace();
}
btn4.onclick = function(){
    replace();
}