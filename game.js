var buttonColors=["red","blue","green","yellow"];
var randomNumber;
var randomChosencolor;
var gamePattern=[];
var userClickedPattern=[];
var userChosenButton;
var level=0;
var blueSound=new Audio("./sounds/blue.mp3");
var yellowSound=new Audio("./sounds/yellow.mp3");
var greenSound=new Audio("./sounds/green.mp3");
var redSound=new Audio("./sounds/red.mp3");
var started=false;
var i=1;
var over=new Audio("./sounds/wrong.mp3");
var high=0;
function restart(){
    gamePattern=[];
    level=0;
    started=false;
    userClickedPattern=[];
}
$(document).keydown(function(){
    if(started==false){
        nextSequence();
        started=true;
    }
});
function nextSequence(){
    level++;
    $("h1").text("level "+level);
    randomNumber=Math.floor(Math.random()*4);
    randomChosencolor=buttonColors[randomNumber];
    gamePattern.push(randomChosencolor);
    $("#"+randomChosencolor).fadeOut(100).fadeIn(100);
    var audio=new Audio("./sounds/"+randomChosencolor+".mp3");
    audio.play();
}
$("#blue").click(function(){
    blueSound.play();
    $("#blue").fadeOut(100).fadeIn(100);
    userChosenButton=$("#blue").attr("id");
    userClickedPattern.push(userChosenButton);
    $("#blue").addClass("pressed");
    setTimeout(function(){
        $("#blue").removeClass("pressed");
    },100);
    checkAnswer(userClickedPattern.length-1);

})
$("#red").click(function(){
    redSound.play();
    $("#red").fadeOut(100).fadeIn(100);
    userChosenButton=$("#red").attr("id");
    userClickedPattern.push(userChosenButton);
    $("#red").addClass("pressed");
    setTimeout(function(){
        $("#red").removeClass("pressed");
    },100);
    checkAnswer(userClickedPattern.length-1);

})
$("#green").click(function(){
    greenSound.play();
    $("#green").fadeOut(100).fadeIn(100);
    userChosenButton=$("#green").attr("id");
    userClickedPattern.push(userChosenButton);
    $("#green").addClass("pressed");
    setTimeout(function(){
        $("#green").removeClass("pressed");
    },100);
    checkAnswer(userClickedPattern.length-1);
})
$("#yellow").click(function(){
    yellowSound.play();
    $("#yellow").fadeOut(100).fadeIn(100);
    userChosenButton=$("#yellow").attr("id");
    userClickedPattern.push(userChosenButton);
    $("#yellow").addClass("pressed");
    setTimeout(function(){
        $("#yellow").removeClass("pressed");
    },100);
    checkAnswer(userClickedPattern.length-1);
})
function checkAnswer(currentLevel){

    if(userClickedPattern[currentLevel]==gamePattern[currentLevel]){
        console.log("s1");
        if(userClickedPattern.length==gamePattern.length){
            setTimeout(function(){
                nextSequence();
                userClickedPattern=[];
            },1000);
        }
    }
    else{
        $("body").addClass("game-over");
        // var temp=level;
        setTimeout(function(){
            $("body").removeClass("game-over");
        },2000);
        over.play();
        $("h1").text("Game Over, Press Any Key to Restart");
        // if(temp>=high){
        //     high=temp;
        // }
        // setTimeout(function(){
        //     alert("Your score is "+temp+"\nThe highest score is "+high);
        // },2000);
        restart();
        
    }
}
