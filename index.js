var randomNumber1=Math.floor(Math.random()*6)+1;

var randomImage="images/dice"+randomNumber1+".png";

image1=document.querySelectorAll("img")[0].setAttribute("src",randomImage);

var randomNumber2=Math.floor(Math.random()*6)+1;

var randomImage1="images/dice"+randomNumber2+".png";

image1=document.querySelectorAll("img")[1].setAttribute("src",randomImage1);

if(randomNumber1>randomNumber2)
{
  document.querySelector("h2").innerHTML="🎉player 1 wins!";
}
else if(randomNumber2>randomNumber1)
{
  document.querySelector("h2").innerHTML="🎉player 2 wins!";
}
else
{
  document.querySelector("h2").innerHTML="Draw!";
}
