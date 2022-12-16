let randomnumber1=Math.floor(6*Math.random() + 1);
let randomnumber2=Math.floor(6*Math.random() + 1);
let but1=document.querySelector("btn");
let but2=document.querySelector("btn2");
function changeValue()
{
    
    
    
        
        document.querySelector("text2").innerHTML=randomnumber1;
        document.querySelector("text1").innerHTML=randomnumber2;
    
        if(randomnumber1>randomnumber2)
        {
            document.querySelector("h1").innerHTML="🚩 PLAYER 1 WINS";

        }
        else if(randomnumber1<randomnumber2)
        {
            document.querySelector("h1").innerHTML="PLAYER 2 WINS 🚩";

        }
        else{
            document.querySelector("h1").innerHTML="GAME IS A DRAW 🟰";
        }   
        document.querySelector("text4").innerHTML="🔄️"
            
    
}
function playagain()
{
    window.location.reload();
}
function play()
{
    changeValue();
}