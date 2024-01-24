
function newGame() {
    console.log("new game")
}


window.addEventListener("load", function () {
    newGameButton = document.querySelector("button#newGame");
    newGameButton.addEventListener("click", newGame);
})