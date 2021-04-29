var randomNumber1=Math.floor((Math.random() * 6) + 1);
var randomNumber2=Math.floor((Math.random() * 6) + 1);
var randimg1="images/dice"+randomNumber1+".png";
var randimg2="images/dice"+randomNumber2+".png";
var imag1=document.getElementsByClassName("img1")[0];
var imag2=document.getElementsByClassName("img2")[0];
imag1.setAttribute("src",randimg1);
imag2.setAttribute("src",randimg2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🎊 Player 1 wins!";

}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 wins! 🎊";

}else{
    document.querySelector("h1").innerHTML="Draw! 😮🙄";
}