// UI Logic

function clearValues() {
    // Clear Input Field Values
    document.getElementById("player1Name").value = null;
    document.getElementById("player2Name").value = null;
    document.getElementById("pointGoal").value = null;
}


function displayTotalScore(totalScore, activePlayerNumber) {
    if (activePlayerNumber === 1) {
        document.querySelector("#player1totalScore").innerText = totalScore;
    }
    else {
        document.querySelector("#player2totalScore").innerText = totalScore;
    }
}


function displayCurrentTurnScore(currentTurnScore, activePlayerNumber, action) {
    if (action === "roll") {
        if (activePlayerNumber === 1) {
            document.querySelector("#player1CurrentRollScore").innerText = currentTurnScore;
        }
        else {
            document.querySelector("#player2CurrentRollScore").innerText = currentTurnScore;
        }
    }
    else if (action === "hold" || action === "lost") {
        if (activePlayerNumber === 1) {
            document.querySelector("#player1CurrentRollScore").innerText = currentTurnScore;
        }
        else {
            document.querySelector("#player2CurrentRollScore").innerText = currentTurnScore;
        }
    }
}


function displayRoll(diceRoll, activePlayerNumber, action) {
    if (action === "roll") {
        if (activePlayerNumber === 1) {
            document.querySelector("#player1DiceRoll").innerText = diceRoll;
        }
        else {
            document.querySelector("#player2DiceRoll").innerText = diceRoll;
        }
    }
    else if (action === "hold" || action === "lost") {
        if (activePlayerNumber === 1) {
            document.querySelector("#player1DiceRoll").innerText = diceRoll;
        }
        else {
            document.querySelector("#player2DiceRoll").innerText = diceRoll;
        }
    }
}


function displayCurrentPlayer(activePlayerNumber) {
    if (activePlayerNumber === 1) {
        let activePlayer = document.querySelector("#player1NameDisplay");
        activePlayer.setAttribute("class", "restingPlayer");
        let restingPlayer = document.querySelector("#player2NameDisplay");
        restingPlayer.setAttribute("class", "currentPlayer");
    }
    else {
        let activePlayer = document.querySelector("#player2NameDisplay");
        activePlayer.setAttribute("class", "restingPlayer");
        let restingPlayer = document.querySelector("#player1NameDisplay");
        restingPlayer.setAttribute("class", "currentPlayer");
    }
}


function displayPlayerNames(player1Name, player2Name) {
    document.querySelector("#player1NameDisplay").innerText = player1Name;
    document.querySelector("#player2NameDisplay").innerText = player2Name;
}


function displayWinner(winnerName, winningPoints) {
    document.querySelector("#winner span").innerText = winnerName + " " + "Wins!!" + " " + "Points:" + " " + winningPoints;
}


// Business Logic for Rolling & Holding

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

        displayWinner(sessionGame.players[activePlayer].name, newTotalScore);
        clearGame();
    }
}


function switchPlayers() {
    if (sessionGame.activePlayer === 1) {

        displayCurrentPlayer(sessionGame.activePlayer)
        sessionGame.activePlayer = 2;
    }
    else {

        displayCurrentPlayer(sessionGame.activePlayer)
        sessionGame.activePlayer = 1;
    }
}


function holdScore() {
    // Set Active Player Index
    let activePlayer = "player" + sessionGame.activePlayer;

    // Clear Display of Current Player's Roll
    displayRoll(0, sessionGame.activePlayer, "hold");
    displayCurrentTurnScore(0, sessionGame.activePlayer, "hold");

    // Add player's currentTurnScore to player's Total Score
    sessionGame.players[activePlayer].totalScore = sessionGame.players[activePlayer].totalScore + sessionGame.players[activePlayer].currentTurnScore;

    // Set player's currentTurnScore to 0
    sessionGame.players[activePlayer].currentTurnScore = 0;

    // Display Total Score
    displayTotalScore(sessionGame.players[activePlayer].totalScore, sessionGame.activePlayer);

    // Switch Players
    switchPlayers();
}


function rollDice() {
    // Set Active Player Index
    let activePlayer = "player" + sessionGame.activePlayer;

    // Get Dice Roll
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    displayRoll(diceRoll, sessionGame.activePlayer, "roll");
    // If roll is 1 set & display player's currentTurnScore to 0 and switch players
    if (diceRoll === 1) {
        sessionGame.players[activePlayer].currentTurnScore = 0;
        displayRoll("(1) lost", sessionGame.activePlayer, "lost");
        displayCurrentTurnScore("lost", sessionGame.activePlayer, "lost");
        switchPlayers();
    }
    // If roll is 2-6 add roll to currentTurnScore
    else {
        sessionGame.players[activePlayer].currentTurnScore = sessionGame.players[activePlayer].currentTurnScore + diceRoll;
        displayCurrentTurnScore(sessionGame.players[activePlayer].currentTurnScore, sessionGame.activePlayer, "roll");
        evaluateScore(sessionGame.players[activePlayer].currentTurnScore, activePlayer);
    }
}


// Business Logic for Game

function Game(player1, player2, pointGoal) {
    this.players = { player1, player2 };
    // Set Active Player
    this.activePlayer = 1;
    this.pointGoal = pointGoal;
}

function clearGame() {
    document.querySelector("#player1NameDisplay").innerText = null;
    document.querySelector("#player2NameDisplay").innerText = null;
    document.querySelector("#player1DiceRoll").innerText = null;
    document.querySelector("#player2DiceRoll").innerText = null;
    document.querySelector("#player1CurrentRollScore").innerText = null;
    document.querySelector("#player2CurrentRollScore").innerText = null;
    document.querySelector("#player1totalScore").innerText = null;
    document.querySelector("#player2totalScore").innerText = null;
    document.getElementById("player1Name").value = "Oinkers";
    document.getElementById("player2Name").value = "Squeaky";
    document.getElementById("pointGoal").value = 50;
}



function newGame(event) {
    // Prevent Event Default
    event.preventDefault();

    // Create Players
    const player1Name = document.getElementById("player1Name").value;
    const player2Name = document.getElementById("player2Name").value;
    displayPlayerNames(player1Name, player2Name);
    const pointGoal = parseInt(document.getElementById("pointGoal").value);
    let player1 = new Player(1, player1Name, 0, 0);
    let player2 = new Player(2, player2Name, 0, 0);

    // Create New Game
    sessionGame = new Game(player1, player2, pointGoal);

    // Clear Values
    clearValues();
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
