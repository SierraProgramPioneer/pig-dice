function holdScore() {
    console.log("hold score");
}


function rollDice() {
    console.log("roll dice");
}


function newGame() {
    console.log("new game");
}


window.addEventListener("load", function () {
    // Add Event Listener to New Game Button
    newGameButton = document.querySelector("button#newGame");
    newGameButton.addEventListener("click", newGame);

    // Add Event Listener to Roll Dice Buttons
    let rollDiceButtons = document.querySelectorAll(".rollDice");
    rollDiceButtons.forEach(function (button) {
        button.addEventListener("click", rollDice);
    });

    // Add Event Listener to Hold Score Buttons
    let holdScoreButtons = document.querySelectorAll(".holdScore");
    holdScoreButtons.forEach(function (button) {
        button.addEventListener("click", holdScore);
    });
})