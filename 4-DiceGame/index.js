var randomNumber1 = Math.floor((Math.random() * 6)) + 1;
img1 = "images/dice"+randomNumber1+".png";

var randomNumber2 = Math.floor((Math.random() * 6)) + 1;
img2 = "images/dice"+randomNumber2+".png"

document.querySelector(".img1").setAttribute("src", img1)
document.querySelector(".img2").setAttribute("src", img2)

if(randomNumber1 == randomNumber2){
    document.querySelector("h1").textContent = "Match draw!";
}
else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player 1 Win!";
}
else{
    document.querySelector("h1").textContent = "Player 2 Win!";
}

