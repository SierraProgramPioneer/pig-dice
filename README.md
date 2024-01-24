Describe: function newGame()
Test: "It should take the names entered by user and create player objects and add them to Game Object."
Code: Player 1 Name: Melissa Player 2 Name: Joe
Expected Output: Game {players: {...}}
                 players:
                 player1: Player
                 name: "Melissa"
                 player2: Player
                 name: "Joe"

Describe: function rollDice()
Test: "It should generate a random number in the DevTools console."
Code: rollDiceButton.addEventListener("click", rollDice);
Expected Output: A random number between 1 & 6.


Describe: function switchPlayers()
Test: "If the activePlayer is 1 it will switch the activePlayer to 2, if the activePlayer is 2 it will switch the activePlayer to 1."
Code: activePlayer === 1
Expected Output: activePlayer 2