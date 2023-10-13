var numOfButton = document.querySelectorAll(".drum").length;

for(var i=0; i<numOfButton; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
      
        var buttonInnerHTMl = this.innerHTML;

        switch (buttonInnerHTMl) {
            case "w":
                var instument = new Audio("sounds/tom-1.mp3");
                instument.play();
                break;
            case "a":
                var instument = new Audio("sounds/tom-2.mp3");
                instument.play();
                break;
            case "s":
                var instument = new Audio("sounds/tom-3.mp3");
                instument.play();
                break; 
            case "d":
                var instument = new Audio("sounds/tom-4.mp3");
                instument.play();
                break;
            case "j":
                var instument = new Audio("sounds/snare.mp3");
                instument.play();
                break;
            case "k":
                var instument = new Audio("sounds/crash.mp3");
                instument.play();
                break;
            case "l":
                var instument = new Audio("sounds/kick-bass.mp3");
                instument.play();
                break;                     
            default:
                break;
        }
        
    });    
        document.addEventListener("keydown", function(event){
            switch (event.key) {
                case "w":
                    var instument = new Audio("sounds/tom-1.mp3");
                    instument.play();
                    break;
                case "a":
                    var instument = new Audio("sounds/tom-2.mp3");
                    instument.play();
                    break;
                case "s":
                    var instument = new Audio("sounds/tom-3.mp3");
                    instument.play();
                    break; 
                case "d":
                    var instument = new Audio("sounds/tom-4.mp3");
                    instument.play();
                    break;
                case "j":
                    var instument = new Audio("sounds/snare.mp3");
                    instument.play();
                    break;
                case "k":
                    var instument = new Audio("sounds/crash.mp3");
                    instument.play();
                    break;
                case "l":
                    var instument = new Audio("sounds/kick-bass.mp3");
                    instument.play();
                    break;                     
                default:
                    break;
            }
        });
    
}



