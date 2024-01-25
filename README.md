# Pig Dice

#### By Melissa Parker

## Table of Contents
1. Technologies Used
2. Description
3. Setup Requirements
4. Link
5. Tests
6. Known Bugs
7. License

## Technologies Used 

* HTML5
*  CSS5
*  JavaScript
*  Bootstrap
*  Test Driven Development

## Description

* This is an independent project assigned from Epicodus to demonstrate knowledge learned under Learn How to Program.
* This project is was part of the Object Oriented Programming Section.
* Users are prompted to input their names and a scoring goal.  Players then take turns rolling dice and either risking their score or holidng socre to add to total.
* TDD included in this file.

## Setup Requirements
1. Clone this repository to your desktop.
2. Navigate to the top level of the directory.
3. Open index.html in your browser.

## Link

[Pig Dice](https://sierraprogrampioneer.github.io/pig-dice/)

## Tests
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

## Known Bugs

* No known bugs, program runs as expected.  Please contact the creator if bug is discovered.
* Last updated: January 24, 2024.

## License

[MIT](https://choosealicense.com/licenses/mit/) Copyright © 2024 Melissa Parker

Pig Image from [pinclipart](https://www.pinclipart.com/maxpin/bibbi/)
