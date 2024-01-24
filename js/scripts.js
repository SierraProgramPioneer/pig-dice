
function Player(playerNumber, name, currentScore, totalScore) {
    this.playerNumber = playerNumber;
    this.name = name;
    this.currentScore = currentScore;
    this.totalScore = totalScore;
}

function switchPlayers() {
    console.log("switch players")
}

function holdScore() {
    console.log("hold score");
    switchPlayers();
}

Player.prototype.currentScore = (function (diceRoll) {

});


function rollDice() {
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    console.log(diceRoll);
    if (diceRoll === 1) {
        sessionGame.players.player1.currentScore = 0;
    }
    else {
        sessionGame.players.player1.currentScore = + sessionGame.players.player1.currentScore + diceRoll;
    }
    console.log(sessionGame.players.player1.currentScore);
}

// Business Logic for Game
function Game(player1, player2) {
    this.players = { player1, player2 };
}

function handleFormSubmission(event) {
    // Prevent Event Default
    event.preventDefault();
    // Create Players
    const player1Name = document.getElementById("player1Name").value;
    const player2Name = document.getElementById("player2Name").value;
    let player1 = new Player(1, player1Name, 0, 0);
    let player2 = new Player(2, player2Name, 0, 0);
    // Create New Game
    sessionGame = new Game(player1, player2);
    console.log(sessionGame);
};


window.addEventListener("load", function () {
    // Add Event Listener to New Game Button
    const newGameButton = document.querySelector("button#newGame");
    newGameButton.addEventListener("click", handleFormSubmission);

    // Add Event Listener to Roll Dice Buttons
    const rollDiceButton = document.querySelector("button#rollDice");
    rollDiceButton.addEventListener("click", rollDice);

    // Add Event Listener to Hold Score Buttons
    const holdScoreButton = document.querySelector("button#holdScore");
    holdScoreButton.addEventListener("click", holdScore);
});
