const ipt1 = document.getElementById("ipt1");
const ipt1o = document.getElementById("ipt1.1");
const ipt2 = document.getElementById("ipt2");
const ipt3 = document.getElementById("ipt3");
const ipt4 = document.getElementById("ipt4");
const ipt4o = document.getElementById("ipt4.1");
const btn1 = document.getElementById("btn1");
const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const btn2 = document.getElementById("btn2");
let ans1;
let ans2;
let ans3;
let ans4;
let ans5;
let ans6;

btn2.onclick = function(){
    location.replace("1nd.html");
}

btn1.onclick = function(){

    ans1 = ipt1.value;
    ans2 = ipt1o.value;
    ans3 = ipt2.value;
    ans4 = ipt3.value;
    ans5 = ipt4.value;
    ans6 = ipt4o.value;
    ans1 = Number(ans1);
    ans2 = Number(ans2);
    ans3 = String(ans3);
    ans4 = Number(ans4);
    ans5 = Number(ans5);
    ans6 = Number(ans6);

    if(ans1 == 1654 &&
        ans2 == 1024 &&
        ans3 == "24x+636"&&
        ans4 == 518.5 &&
        ans5 == 5 &&
        ans6 == 3){
            text1.textContent = "Correct";
            text2.textContent = "Loading..."
            setTimeout(function(){
                location.replace("ind9.html");
            },5000)
        }
        else if(ans1 == 1654 &&
            ans2 == 1024 &&
            ans3 == "24x+636" &&
            ans4 == 518.5 &&
            ans5 == 3 &&
            ans6 == 5){
                text1.textContent = "Correct";
            text2.textContent = "Loading..."
            setTimeout(function(){
                location.replace("ind9.html");
            },5000)
            }
        else{
            text1.textContent = "Wrong answer, try again";
        }
}