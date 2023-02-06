let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];

function newSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);
}

// Game starts when any key is pressed
$(document).keypress(function () {
    newSequence();
    console.log(gamePattern);
});

// Select the button
$(".btn").click(function () {
    let userChosenColour = $(this).attr("id");
    console.log(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
});

// Flash the button
function animatePress(currentColour) {
    $("#" + currentColour).fadeIn(100).fadeOut(100).fadeIn(100);
}

// Play the sound
function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

