var randomNumber1 = Math.floor(Math.random() * 6) + 1;
if(randomNumber1 === 1){
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice1.png");
    // document.querySelectorAll("tag")[index].setAttribute("attribute", "data_to_store_in_it");
}
else if(randomNumber1 === 2){
  document.querySelectorAll("img")[0].setAttribute("src", "images/dice2.png");
}
else if(randomNumber1 === 3){
  document.querySelectorAll("img")[0].setAttribute("src", "images/dice3.png");
}
else if(randomNumber1 === 4){
  document.querySelectorAll("img")[0].setAttribute("src", "images/dice4.png");
}
else if(randomNumber1 === 5){
  document.querySelectorAll("img")[0].setAttribute("src", "images/dice5.png");
}
else if(randomNumber1 === 6){
  document.querySelectorAll("img")[0].setAttribute("src", "images/dice6.png");
}



var randomNumber2 = Math.floor(Math.random() * 6) + 1;
if(randomNumber2 === 1){
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice1.png");
}
else if(randomNumber2 === 2){
  document.querySelectorAll("img")[1].setAttribute("src", "images/dice2.png");
}
else if(randomNumber2 === 3){
  document.querySelectorAll("img")[1].setAttribute("src", "images/dice3.png");
}
else if(randomNumber2 === 4){
  document.querySelectorAll("img")[1].setAttribute("src", "images/dice4.png");
}
else if(randomNumber2 === 5){
  document.querySelectorAll("img")[1].setAttribute("src", "images/dice5.png");
}
else if(randomNumber2 === 6){
  document.querySelectorAll("img")[1].setAttribute("src", "images/dice6.png");
}



if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins!🚩";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}
