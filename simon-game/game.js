let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];
let gameIsOn = false;
let level = 0;

function nextSequence() {
    // Pick a random number between 0 and 3
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];

    // Add the random colour to the game pattern
    gamePattern.push(randomChosenColour);

    // Flash the button
    flashButton(randomChosenColour);

    // Play the sound
    playSound(randomChosenColour);

    // Increase the level
    level++;
    $("#level-title").text("Level " + level);
}

// Game starts when any key is pressed
$(document).keypress(function () {
    if (!gameIsOn) {
        $("#level-title").text("Level " + level);
        nextSequence();
        gameIsOn = true;
    }

    console.log("attempt to restart a game")
});

// Select the button
$(".btn").click(function () {
    let userChosenColour = $(this).attr("id");
    console.log(userChosenColour);
    playSound(userChosenColour);
    flashButton(userChosenColour);

    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
});

// Flash the button
function flashButton(currentColour) {
    // Add the pressed class
    $("#" + currentColour).addClass("pressed");

    // Remove the pressed class after 100ms
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

// Play the sound
function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

