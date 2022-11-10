let randomNumber1 = Math.floor(Math.random() * 6) + 1;
//Generating a random number between 0 and .9999.Then mulitiply it by 6 to make it between 0 and 5.999 and then round it into a whole number.
let randomDiceImage = "dice" + randomNumber1 + ".png";

let randomImageSource = "/images/"+ randomDiceImage;

let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomImageSource);


let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImageSource2 = "/images/dice" + randomNumber2 + ".png";

let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" , randomImageSource2);

if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🤩Player1 Wins!";
}
else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "🤩Player2 Wins!";
}

else {
  document.querySelector("h1").innerHTML = "Match Tied🤓"
}
