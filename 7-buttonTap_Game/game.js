var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence(){
    return Math.floor(Math.random()*4);
}
var randomNumber = nextSequence();


var randomChosenColour = buttonColours[randomNumber];

gamePattern.push(randomChosenColour);

$(".btn#"+randomChosenColour).fadeOut(20).fadeIn(20);

$(".btn#"+randomChosenColour).

$(".btn#"+randomChosenColour).on("click",function(){
    var audio = new Audio('sounds/'+randomChosenColour+'.mp3');
    audio.play()
});
