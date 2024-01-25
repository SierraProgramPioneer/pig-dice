Describe: function newGame()
Test: "It should take the points to score & names entered by user and create Game Object with active player equaling 1, the pointGoal to the number inputted and create player objects with the names of the players entered."
Code: Player 1 Name: Melissa Player 2 Name: Joe Point Goal: 50 
Expected Output: Game {players: {...}....}
                 activePlayer: 1
                 players:
                 player1: Player
                 name: "Melissa"
                 player2: Player
                 name: "Joe"
                 pointGoal: 50


Describe: function rollDice()
Test: "It should generate a random number between 1 & 6 and add it to current player's current roll.  If the roll is 1 reset player's current roll and switch players.  If roll is not 1, add roll to player's current roll."
Code: diceRoll = 1  Current Roll Score = 5
Expected Output: Current Players Current Roll Score = 0 | switchPlayer()

Code 2: diceRoll = 5    currentTurnScore = 5
Expected Output: Current Players currentTurnScore = 10 


Describe: function holdScore()
Test: "It should add currentTurnScore to player's totalScore, set currentTurnScore to 0 and switchPlayers."
Code: activePlayer = 1  player1 totalScore = 10 player1 currentTurnScore = 10
Expected Output: activePlayer = 2   player1 totalScore = 20     player1 currentTurnScore = 0


Describe: function switchPlayers()
Test: "If the activePlayer is 1 it will switch the activePlayer to 2, if the activePlayer is 2 it will switch the activePlayer to 1."
Code: activePlayer: 1
Expected Output: activePlayer: 2


Describe: function evaluateScore(currentTurnScore, activePlayer)
Test: "It will evaluate the active player's currentTurnScore + totalScore against goalPoints to determine if player has won"
Code: activePlayer1.name: Melissa   goalPoints: 20  totalPoints: 10     currentTurnScore: 10
Expected Output: Melissa