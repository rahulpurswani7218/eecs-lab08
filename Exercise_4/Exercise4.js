document.addEventListener("DOMContentLoaded", ()=>{
   document.querySelector("#hit").addEventListener("click", () =>{
    let bor= document.getElementById("Bo-red").value;
    let bog=document.getElementById("Bo-green").value;
    let bob=document.getElementById("Bo-blue").value;
    let bow=document.getElementById("Bo-width").value;

    let bar= document.getElementById("Ba-red").value;
    let bag=document.getElementById("Ba-green").value;
    let bab=document.getElementById("Ba-blue").value;

    document.getElementById("check").style.borderColor = 'rgb(' + bor+','+ bog+ ','+bob+')';
    document.getElementById("check").style.borderWidth = bow;
    document.getElementById("check").style.backgroundColor = 'rgb(' + bar+','+ bag+ ','+bab+')';

    })
})