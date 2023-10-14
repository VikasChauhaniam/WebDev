var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var isStarted = 0;
var level = 0;

$(document).on("keydown", function(){
    if(isStarted == 0){
        $("h1").text("Level "+level);
        nextSequence();
        isStarted = 1;
    }
    
});

$(".btn").on("click",function(){
    
    
    userClickedPattern.push(this.id);

    playSound(this.id);
    animatePress(this.id);

    checkAnswer(userClickedPattern.length-1);
    
});

function checkAnswer(currentLevel){
    
    if(gamePattern[currentLevel] == userClickedPattern[currentLevel]){
        console.log("success");

        if (userClickedPattern.length === gamePattern.length){

            //Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function () {
              nextSequence();
            }, 1000);
    
          }
    }
    else{
        playSound("wrong");
        console.log("wrong");

        
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
          }, 200);
          
        $("h1").text("Game Over, Press Any Key to Restart");  
        startOver();
    }
}

function nextSequence(){

    userClickedPattern = [];

    level++;
    $("h1").text("Level "+level);
    
    
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    playSound(randomChosenColour);
    $(".btn#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
     
}

function playSound(randomChosenColour){
    var audio = new Audio('sounds/'+randomChosenColour+'.mp3');
    audio.play();
}

function animatePress(currentColour){
    // console.log("currentColour");
    $("#"+currentColour).addClass("pressed");
    // console.log(currentColour);
    setTimeout(function () {
        $("#"+currentColour).removeClass("pressed");
      }, 100);
    
}

function startOver(){
    level = 0;
    gamePattern = [];
    isStarted = 0;
}











// //////////////////////////////////////////////////////////////////////


