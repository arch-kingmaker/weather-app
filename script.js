const btn= document.querySelectorAll("button")
let inp=document.getElementById("display")
let exp=""
//let value=false;
let justevaluated=false;
btn.forEach(button=>{
    button.addEventListener("click",()=>{
     const val=button.innerText;
    if(val==="="){
        exp=eval(exp);
        if(exp===Infinity){
            inp.value="chal chal chal";
            exp="";
        }
        else{
            inp.value=exp;
            justevaluated=true;
        }   
     }
    else if(val==="C"){
     exp="";
     inp.value=exp;
     justevaluated=false;
      }
    else if(val==="⌫"){
        if(justevaluated){
            exp="";}
        else{    
      exp=exp.slice(0,-1);
    }
inp.value=exp;
}
    else if(val==="+"||val==="-"||val==="/"||val==="*"){
        if(exp===""){
            alert("invalid format used");
        }
        else if(justevaluated){
            exp=inp.value+val;
            inp.value=exp;
            justevaluated=false;
        }
        else {
            exp+=val;
            inp.value=exp;
        }
        }
    else{  // for numbers
        if(justevaluated){
            exp=val;
        }else{
            exp+=val;
        }
        inp.value=exp;
        justevaluated=false;
        } 
    });
 });
    

