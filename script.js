
var x = 0;

document.getElementById("odd").addEventListener("click" , function(){
    if(x%2==0 || x==0){
        x = x+1;
    }else{
      x=x+2;
    }
    document.getElementById("show").innerText= x;


})

document.getElementById("even").addEventListener("click" , function(){
    if(x%2==0 || x==0){
        x = x+2;
    }else{
      x=x+1;
    }
    document.getElementById("show").innerText= x;


})