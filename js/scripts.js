
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
})