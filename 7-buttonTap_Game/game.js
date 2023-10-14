var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var isStarted = 0;
var level = 0;


function checkAnswer(currentLevel){
    
    if(gamePattern[currentLevel] == userClickedPattern[currentLevel]){
        console.log("success");

        if (userClickedPattern.length === gamePattern.length){

            //5. Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function () {
              nextSequence();
            }, 1000);
    
          }
    }
    else{
        console.log("wrong");
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

$(document).on("keydown", function(){
    if(isStarted == 0){
        $("h1").text("Level "+level);
        nextSequence();
        isStarted = 1;
    }
    
})


$(".btn").on("click",function(){
    
    animatePress(this.id);
    userClickedPattern.push(this.id);

    playSound(this.id);
    checkAnswer(userClickedPattern.length-1);
    
});

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


// //////////////////////////////////////////////////////////////////////


