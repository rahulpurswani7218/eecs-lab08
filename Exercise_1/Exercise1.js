document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#Validate").addEventListener("click",() =>{
        let x= document.querySelector("#text1").value;
        let y= document.querySelector("#text2").value;
        if(x==y){
            if(x.length>=8){
                document.querySelector("#result").innerText="Password is Valid";
            }
            else{
                document.querySelector("#result").innerText="The passswords are not atleast 8 characters long";
            }
        }
        else{
            document.querySelector("#result").innerText="Passwords entered don't match";
        }
    })    

})