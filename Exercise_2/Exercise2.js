let pics=["A","B","C","D","E","F"];
let a=0;
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#previous").addEventListener("click",()=>{
        if(a==0){
            a=5;
            document.querySelector("#show").src=pics[a] + ".jpg";

        }
        else{
            a=a-1;
            document.querySelector("#show").src=pics[a] + ".jpg";
        }
 
    })
    document.querySelector("#next").addEventListener("click",()=>{
        if(a==pics.length-1){
            a=0;
            document.querySelector("#show").src=pics[a] + ".jpg";
        }
        else{
            a=a+1; 
            document.querySelector("#show").src=pics[a] + ".jpg";
        }
    })
})
