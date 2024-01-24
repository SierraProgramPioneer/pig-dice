Describe: function rollDice()
Test: "It should generate a random number in the DevTools console."
Code: rollDiceButton.addEventListener("click", rollDice);
Expected Output: A random number between 1 & 6.


Describe: function newGame()
Test: "It should take names entered by user and out put in console log"
Code: Player 1 input: Melissa Player 2 input: Joe
Expected Output: Melissa
                 Joe

Describe: function newGame()
Test: "It should take the names entered by user and create player objects and add them to Game Object"
Code: Player 1 input: Melissa Player 2 input: Joe
Expected Output: Game {players: {...}}
                 players:
                 player1: Player
                 name: "Melissa"
                 player2: Player
                 name: "Joe"