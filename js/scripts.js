// UI Logic

function updatePlayerNames(player1Name, player2Name) {
    document.querySelector("#player1NameDisplay").innerText = player1Name;
    document.querySelector("#player2NameDisplay").innerText = player2Name;
}

function displayWinner(winnerName) {
    document.querySelector("#winner span").innerText = winnerName + " " + "Wins!!";
}

// Business Logic for Players

function Player(playerNumber, name, currentTurnScore, totalScore) {
    this.playerNumber = playerNumber;
    this.name = name;
    this.currentTurnScore = currentTurnScore;
    this.totalScore = totalScore;
}

function evaluateScore(currentTurnScore, activePlayer) {
    const currenttotalScore = sessionGame.players[activePlayer].totalScore;
    const newTotalScore = currentTurnScore + currenttotalScore;
    if (newTotalScore >= sessionGame.pointGoal) {
        displayWinner(sessionGame.players[activePlayer].name)
    }
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
    // Set Active Player Index
    let activePlayer = "player" + sessionGame.activePlayer;

    // Add player's currentTurnScore to player's Total Score
    sessionGame.players[activePlayer].totalScore = sessionGame.players[activePlayer].totalScore + sessionGame.players[activePlayer].currentTurnScore;

    // Set player's currentTurnScore to 0
    sessionGame.players[activePlayer].currentTurnScore = 0;

    console.log("New Total Score:" + " " + sessionGame.players[activePlayer].totalScore);
    // Switch Players
    switchPlayers();
}


function rollDice() {
    // Set Active Player Index
    let activePlayer = "player" + sessionGame.activePlayer;

    // Get Dice Roll
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    console.log("Dice Roll" + " " + diceRoll);

    // If roll is 1 set player's currentTurnScore to 0 and switch players
    if (diceRoll === 1) {
        sessionGame.players[activePlayer].currentTurnScore = 0;
        switchPlayers();
    }
    // If roll is 2-6 add roll to currentTurnScore
    else {
        sessionGame.players[activePlayer].currentTurnScore = sessionGame.players[activePlayer].currentTurnScore + diceRoll;
        evaluateScore(sessionGame.players[activePlayer].currentTurnScore, activePlayer)
    }
}

// Business Logic for Game

function Game(player1, player2, pointGoal) {
    this.players = { player1, player2 };
    // Set Active Player
    this.activePlayer = 1;
    this.pointGoal = pointGoal;
}

function newGame(event) {
    // Prevent Event Default
    event.preventDefault();
    // Create Players
    const player1Name = document.getElementById("player1Name").value;
    const player2Name = document.getElementById("player2Name").value;
    updatePlayerNames(player1Name, player2Name);
    const pointGoal = parseInt(document.getElementById("pointGoal").value);
    let player1 = new Player(1, player1Name, 0, 0);
    let player2 = new Player(2, player2Name, 0, 0);
    // Create New Game
    sessionGame = new Game(player1, player2, pointGoal);
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
