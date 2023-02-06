let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];

function newSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);
}