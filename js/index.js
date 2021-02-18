var randomNumber1 = Math.random();
randomNumber1=randomNumber1*6+1;
var randomNumber2 = Math.random();
randomNumber2=randomNumber2*6+1;
randomNumber1=Math.round(randomNumber1);
randomNumber2=Math.round(randomNumber2);
if(randomNumber1==1)
   document.querySelector(".image-1").setAttribute("src","images/dice1.png");
else if(randomNumber1==2)
   document.querySelector(".image-1").setAttribute("src","images/dice2.png");
else if(randomNumber1==3)
   document.querySelector(".image-1").setAttribute("src","images/dice3.png");
else if(randomNumber1==4)
   document.querySelector(".image-1").setAttribute("src","images/dice4.png");
else if(randomNumber1==5)
   document.querySelector(".image-1").setAttribute("src","images/dice5.png");
else
   document.querySelector(".image-1").setAttribute("src","images/dice6.png");
if(randomNumber2==1)
  document.querySelector(".image-2").setAttribute("src","images/dice1.png");
else if(randomNumber2==2)
  document.querySelector(".image-2").setAttribute("src","images/dice2.png");
else if(randomNumber2==3)
  document.querySelector(".image-2").setAttribute("src","images/dice3.png");
else if(randomNumber2==4)
  document.querySelector(".image-2").setAttribute("src","images/dice4.png");
else if(randomNumber2==5)
  document.querySelector(".image-2").setAttribute("src","images/dice5.png");
else
  document.querySelector(".image-2").setAttribute("src","images/dice6.png");
if(randomNumber1>randomNumber2)
   document.querySelector(".heading").innerHTML="Player 1 Wins!🚩";
else if(randomNumber1<randomNumber2)
   document.querySelector(".heading").innerHTML="Player 2 Wins!🚩";
else
   document.querySelector(".heading").innerHTML="Draw!";
