
function Player(playerNumber, name, currentScore, totalScore) {
    this.playerNumber = playerNumber;
    this.name = name;
    this.currentScore = currentScore;
    this.totalScore = totalScore;
}


function switchPlayers() {
    if (sessionGame.activePlayer === 1) {
        sessionGame.activePlayer = 2;
        console.log("Active Player" + " " + sessionGame.activePlayer);
    }
    else {
        sessionGame.activePlayer = 1;
        console.log("Active Player" + " " + sessionGame.activePlayer);
    }
}


function holdScore() {
    let activePlayer = "player" + sessionGame.activePlayer;
    sessionGame.players[activePlayer].totalScore = sessionGame.players[activePlayer].totalScore + sessionGame.players[activePlayer].currentScore;
    sessionGame.players[activePlayer].currentScore = 0;
    console.log("New Total Score:" + " " + sessionGame.players[activePlayer].totalScore);
    switchPlayers();
}


function rollDice() {
    // Get Dice Roll
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    console.log("Dice Roll" + " " + diceRoll);
    let activePlayer = "player" + sessionGame.activePlayer;
    if (diceRoll === 1) {
        sessionGame.players[activePlayer].currentScore = 0;
        console.log("Total Score:" + " " + sessionGame.players[activePlayer].totalScore);
        switchPlayers();
    }
    else {
        sessionGame.players[activePlayer].currentScore = sessionGame.players[activePlayer].currentScore + diceRoll;
    }
}

// Business Logic for Game

function Game(player1, player2) {
    this.players = { player1, player2 };
    // Set Active Player
    this.activePlayer = 1;
}

function newGame(event) {
    // Prevent Event Default
    event.preventDefault();
    // Create Players
    const player1Name = document.getElementById("player1Name").value;
    const player2Name = document.getElementById("player2Name").value;
    let player1 = new Player(1, player1Name, 0, 0);
    let player2 = new Player(2, player2Name, 0, 0);
    // Create New Game
    sessionGame = new Game(player1, player2);
};


window.addEventListener("load", function () {
    // Add Event Listener to New Game Button
    const newGameButton = document.querySelector("button#newGame");
    newGameButton.addEventListener("click", newGame);

    // Add Event Listener to Roll Dice Buttons
    const rollDiceButton = document.querySelector("button#rollDice");
    rollDiceButton.addEventListener("click", rollDice);

    // Add Event Listener to Hold Score Buttons
    const holdScoreButton = document.querySelector("button#holdScore");
    holdScoreButton.addEventListener("click", holdScore);
});
